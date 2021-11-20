/*
  ==============
  map vs forEach
  ==============
*/

const price =['1000','2000','3000']

const suffixWon = price => price+'원';

const newPriceForEach = price.forEach(suffixWon)
const newPriceMap = price.map(suffixWon)

console.log('newPriceForEach',newPriceForEach); // undefined
console.log('newPriceMap', newPriceMap); // [ '1000원', '2000원', '3000원' ]
// 1. return이 있으냐 없느냐
// map은 return 을 해주나 forEach는 return 값이 undefiend이다.
// forEach는 단순히 매개변수로 들어오는 함수만을 실행시켜주는 배열 메소드이다.