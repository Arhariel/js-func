function shallowEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for (let prop in obj1) {
      if (obj1[prop] !== obj2[prop]) {
        return false;
      }
    }
    return true;
  }
  const obj1 = { a: 33, b: 33, c: 33 };
  const obj2 = { a: 11, b: 23, c: 13 };
  const obj3 = { a: 33, b: 33, c: 33 };
  
  console.log(shallowEqual(obj1, obj2)); 
  console.log(shallowEqual(obj1, obj3)); 
  