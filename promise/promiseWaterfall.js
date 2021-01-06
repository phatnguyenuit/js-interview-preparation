// ===== SAMPLE FUNCTIONS =====

const getSession = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 300));

const getUserFromSession = (sid) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ sid, id: 2, name: 'Peter' }), 300),
  );

const persistStorage = (data) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ data, persisted: true }), 300),
  );

// ============================

/*
 * promiseWaterfall is a function, which accepts an array of promises and return a promise, that will perform all the async steps
 */
const promiseWaterfall = (promiseFuncs) => {
  return () => {
    const composedFunc = promiseFuncs.reduce((prev, promiseFunc) => () =>
      prev().then((result) => promiseFunc(result)),
    );
    return new Promise((resolve) => composedFunc().then(resolve));
  };
};

// SAMPLE USAGE
const composedFunction = promiseWaterfall([
  getSession,
  getUserFromSession,
  persistStorage,
]);

composedFunction().then(console.log); // => should log { data: { sid: 1, id: 2, name: "Peter" }, persisted: true } after 900ms
