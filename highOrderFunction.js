/*
  ==============
  고차함수 활용하기 1)
  ==============
*/
const price =["2000", "1000","3000","5000","4000"]

function getWonPrice(priceList) {
  let temp = [];

  for (let i = 0; i < priceList.length; i++) {
    temp.push(priceList[i] + '원')
  }

  return temp
}

console.log('getWonPrice',getWonPrice(price));

// 배열 메소드를 이용하기
const getWonPriceWithMethod = (priceList) => priceList.map(price => price+'원')
console.log('getWonPriceWithMethod',getWonPriceWithMethod(price));

// suffixWon이라는 함수를 만들어서 배열 메소드에 사용함으로서 좀더 명시적이고 공통적인 기능을 활용
const suffixWon = (price) => price + '원';

const getWonPriceWithHOF= (priceList) => priceList.map(suffixWon)
console.log('getWonPriceWithHOF',getWonPriceWithHOF(price));

/*
  ==============
  고차함수 활용하기 2)
  ==============
*/
function getWonPrice2(priceList) {
  let temp = [];

  for (let i = 0; i < priceList.length; i++) {
    if(priceList[i] > 1000 ) temp.push(priceList[i] + '원')
  }

  return temp
}

console.log('getWonPrice2',getWonPrice2(price));

// 조건이 여러개인 경우

const isOverOneThousand = price => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice3(priceList) {
  const isOverList = priceList.filter(isOverOneThousand)
  const sortList = isOverList.sort(ascendingList)
  return sortList.map(suffixWon)
}

console.log('getWonPrice3',getWonPrice3(price));
// >> 여러가지 조건을 고차함수와 배열메소드를 이용하여 깔금하게 작성은 했지만 이보다 더 많은 조건이 생길경우에
//    문제가 생기지 않을까 과연 맞는 코드일까 라는 의문이 들 것이다.

/*
  ==============
  배열 메서드 체이닝 활용하기
  ==============
*/

// 단순히 배열 메소드를 체인처럼 연결해주면 된다 
function getWonPrice4(priceList) {
  return priceList.filter(isOverOneThousand).sort(ascendingList).map(suffixWon)
}
console.log('getWonPrice4',getWonPrice4(price));