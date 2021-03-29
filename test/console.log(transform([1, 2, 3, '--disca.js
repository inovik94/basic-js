console.log(transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5, "--discard-prev"]));
// [1, 2, 3, 4, 5]

function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) throw new Error("Error");

  arr.forEach(function (e, i, arr) {
    if (arr[i] == "--discard-next") {
      return i+1;
    } else if (arr[i] == "--discard-prev") {
      if (result.length !== 0 && arr[i - 2] !== "--discard-next") {
        result.pop();
      }
    } else if (arr[i] == "--double-next") {
      result.push(arr[i + 1]);
    } else if (arr[i] == "--double-prev") {
      if (i !== 0 && arr[i - 2] !== "--discard-next") {
        result.push(arr[i - 1]);
      }
    } else {
      result.push(arr[i]);
    }
  });
  result = result.filter((elem) => elem !== (undefined || false));
  return result;
}
