function mul(...params) {
    let product = params
      .filter(param => typeof param === 'number')
      .reduce((acc, curr) => acc * curr, 1);
    
    return product || 0;
  }
  
  console.log(mul(1, "str", 2, 3, true)); // 6
  console.log(mul(null, "str", false, true)); // 0