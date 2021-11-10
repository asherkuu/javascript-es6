/*
  ==============
  for of - 순회하기
  ==============
*/
var data = [1, 2, undefined, NaN, null, ""];

// 기존의 for 방식

for (let i = 0; i < data.length; i++) {
  console.log("for: ", data[i]);
}
Array.prototype.getIndex = function () {};
// for in에서 자신의 값 이외의 최상위 값까지 나타냄
// 위와같은 문법이 없으면 가능하지만 없다라는 가정은 없기 때문에 사용을 지향하기도 한다.

for (let i in data) {
  // for in 은 자신이 가지고 있지 않은 상위의 추가된 값까지 추가로 값을 나타낼 수 있으니 사용에 주의
  console.log("forIn: ", data[i]);
}
data.forEach((val) => {
  console.log("forEach: ", val);
});

// 새로운 for of > for in의 에러를 해결하고 for of가 새로 나오게 되었다.
for (const val of data) {
  console.log("forOf: ", val);
}

// string 도 순회가 가능하다
for (const val of "hi java") {
  console.log("forOf with str: ", val);
}

/*
  ==============
  spread operator(...) 펼침 연산자
  ==============
*/
let pre = ["a", "b", 100];
let newData = [...pre];
console.log("newData: ", newData);
console.log(pre === newData); // false > 두개의 데이터는 엄연히 다른 데이터이다
// 기존의 참조를 제거하고 새로운 메모리에 복사를 한것이다.

// 데이터가 있는 새로운 배열에 기존의 값을 추가할 때
let newData2 = [1, 2, ...pre, "abc"];
console.log("newData2: ", newData2);

const sum = (a, b, c) => a + b + c;
let pre2 = [100, 200, 300];

console.log("not apply: ", sum(pre2[0], pre2[1], pre2[2])); // 정삭 작동 되나 비효율적인 코드
console.log("apply: ", sum.apply(null, pre2)); // apply를 이용한 배열 펼치기
console.log("spread: ", sum(...pre2)); // spread operator 를 이용한 배열 펼치기

/*
  ==============
  from 메서드
  ==============
*/
const addMark = () => {
  let newData = arguments.map((val) => val + "!");
  // arguments는 배열이 아니라는 에러 발생
  // 실제로 생긴건 배열이지만 배열이 아닌 데이터들이 존재함 (nodelist 등..)
  // 이러한 가짜 배열을 진짜 배열로 변경해주는것이 from

  let newArr = Array.from(arguments);
  let newData2 = newArr.map((val) => val + "!");

  console.log("newData2: ", newData2);
};

addMark(1, 2, 3, 4, 5, 6);
