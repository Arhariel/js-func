function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowercaseStr = str.toLowerCase();
    const vowelCount = lowercaseStr.split('').reduce((acc, curr) => {
      if (vowels.includes(curr)) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return vowelCount;
  }
  const vowelCount1 = countVowels("Misha"); 
  console.log(vowelCount1);
  
  const vowelCount2 = countVowels("Gryozi"); 
  console.log(vowelCount2);
  