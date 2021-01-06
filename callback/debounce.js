function debounce(fn, ms) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(context, args);
    }, ms);
  };
}

function hello(name) {
  console.log(`Hello ${name}!`);
}

const debounceHello = debounce(hello, 3000);

debounceHello('world 1'); // Ignored
debounceHello('world 2'); // Ignored
debounceHello('world 3');
console.log("I'm console");
