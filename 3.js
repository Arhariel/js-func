function averages(arr) {
    const result = arr.map((num, index, array) => {
      const next = array[index + 1];
      const sum = num + (next || 0);
      return sum / 2;
    }).slice(0, -1);
    return result;
  }
  const result = averages([2, -2, 2, -2, 2]);
  console.log(result); 
  