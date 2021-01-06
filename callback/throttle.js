function throttle(fn, ms) {
  let waiting = false;
  return function () {
    const context = this;
    const args = arguments;

    if (!waiting) {
      waiting = true;
      fn.apply(context, args);

      setTimeout(function () {
        waiting = false;
      }, ms);
    }
  };
}

function hello(name) {
  console.log(`Hello ${name}!`);
}

// Run hello after 3s
const throttleHello = throttle(hello, 3000);

throttleHello('world => default');
setTimeout(() => throttleHello('world => 2000'), 2000); // Ignored
setTimeout(() => throttleHello('world => 6000'), 6000);
console.log("I'm console");
