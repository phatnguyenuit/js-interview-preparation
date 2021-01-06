function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  const result = fibonacci(num - 1) + fibonacci(num - 2);
  return result;
}

function fibonacci_v2(num) {
  const memorizedResults = {};
  const calculateMemorizedFibonacci = (number) => {
    if (memorizedResults.hasOwnProperty(number)) {
      return memorizedResults[number];
    }

    if (number < 2) {
      memorizedResults[number] = number;
      return number;
    }

    const result =
      calculateMemorizedFibonacci(number - 1) +
      calculateMemorizedFibonacci(number - 2);
    memorizedResults[number] = result;

    return result;
  };

  return calculateMemorizedFibonacci(num);
}

/**
 * Perform a function with executed time in milliseconds
 * @param {Function} fn
 */
function perform(fn) {
  const fnName = fn.name;
  const args = [...arguments].slice(1);
  const label = `${fnName}(${JSON.stringify(...args)})`;

  console.time(label);
  const result = fn.apply(this, args);
  console.timeEnd(label);

  return result;
}

function formatThousand(input) {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function logThousandNumber(number) {
  console.log(formatThousand(number));
}

logThousandNumber(perform(fibonacci, 5));
logThousandNumber(perform(fibonacci_v2, 5));

logThousandNumber(perform(fibonacci, 10));
logThousandNumber(perform(fibonacci_v2, 10));

logThousandNumber(perform(fibonacci, 15));
logThousandNumber(perform(fibonacci_v2, 15));

logThousandNumber(perform(fibonacci, 30));
logThousandNumber(perform(fibonacci_v2, 30));

logThousandNumber(perform(fibonacci, 35));
logThousandNumber(perform(fibonacci_v2, 35));
