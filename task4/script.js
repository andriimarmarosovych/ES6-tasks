const mapBuilder = (keysArray, valuesArray) => {
    if (keysArray.length !== valuesArray.length) {
      throw new Error('The length of the keys array must be equal to the length of the values array.');
    }
  
    const map = new Map();
  
    for (let i = 0; i < keysArray.length; i++) {
      map.set(keysArray[i], valuesArray[i]);
    }
  
    return map;
  };

  const keys = [1, 2, 3, 4];
  const values = ["div", "span", "b", "i"];
  const map = mapBuilder(keys, values);
  
  console.log(map.size); // 4
  console.log(map.get(2)); // "span"