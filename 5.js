function swapKeysAndValues(obj) {
    let result = {};
    for (let key in obj) {
      result[obj[key]] = key;
    }
    return result;
  }
  
  let input = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};
  let output = swapKeysAndValues(input);
  console.log(output); 
  