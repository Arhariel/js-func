function filterWordsByLength(str, num) {
    const words = str.split(' '); 
    const filteredWords = words.filter(word => word.length > num); 
    return filteredWords;
  }

  const result = filterWordsByLength('Prishel iz lesa zayac s yagodami', 3);
  console.log(result); 

