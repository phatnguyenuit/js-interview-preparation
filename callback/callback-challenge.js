// Your goal is to use the following function to log 8 to the console

function foo(a, b) {
  b(function () {
    return a + a;
  });
}

foo(4, (cb) => {
  console.log(cb());
});
