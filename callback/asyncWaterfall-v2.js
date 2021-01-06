// ===== SAMPLE FUNCTIONS =====
// you can freely change function signature

const getSession = (cb) => {
  setTimeout(() => cb(1), 1000);
};

const getUserFromSession = (sid, cb) => {
  setTimeout(() => cb({ sid, id: 2, name: 'Toan' }), 1000);
};

const persistStorage = (data, cb) => {
  setTimeout(() => cb({ data, persisted: true }), 1000);
};

// ============================

/*
 * asyncWaterfall is a function, which accepts an array of async functions (used callback) and a callback,
 * and then return a new function that will perform all of the async steps
 */
const asyncWaterfall = (funcs, cb) => {
  let funcIndex = 0;
  const runWaterfall = (fns, callback, result) => {
    const func = fns[funcIndex];
    if (!func) {
      return process.nextTick(() => callback(result));
    }

    funcIndex += 1;
    const doneCallback = (data) => runWaterfall(fns, callback, data);
    if (result !== undefined) {
      func(result, doneCallback);
    } else {
      func(doneCallback);
    }
  };
  return () => runWaterfall(funcs, cb);
};

// SAMPLE USAGE
const composedFunction = asyncWaterfall(
  [getSession, getUserFromSession, persistStorage],
  (result) => console.log(result),
);

composedFunction(); // => should log { data: { sid: 1, id: 2, name: "Toan" }, persisted: true } after 3s
