function calculateDifference(items, policyLimit) {
    let totalValue = Object.values(items).reduce((acc, curr) => acc + curr, 0);
    let difference = totalValue - policyLimit;
    return difference > 0 ? difference : 0;
  }
  
  console.log(calculateDifference({ "baseball bat": 20 }, 5));
  console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); 
  console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); 
  