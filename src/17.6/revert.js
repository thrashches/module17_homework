function revert(str) {
  let output = "";
  for (let i = str.length; i > 0; i--) {
    output += str[i - 1];
  }
  return output;
}

module.exports = revert;
