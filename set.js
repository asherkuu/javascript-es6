const { inspect } = require("util");
/*
  ==============
  Set
  ==============
*/
// set : 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할 때 유용
let mySet = new Set();
console.log(typeof mySet);
console.log(toString.call(mySet)); // 애매 모호한 object의 type을 자세히 알고자 할때 toString.call을 사용

mySet.add("a");
mySet.add("b");
mySet.add("a"); // 유일한 값만을 저장하기 때문에 저장이 되지 않음

console.log(mySet.has("a"));

mySet.delete("b");
mySet.forEach((v) => console.log(v));

/*
  ==============
  Weak Set - 가비지 컬랙션 대상
  ==============
*/
// 참조를 가지고 있는 객체만 저장이 가능하다
// 객체 형태를 중복없이 저장하려고 할대 유용하다
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = { arr, arr2 };

let ws = new WeakSet();

ws.add(arr);
ws.add(() => {});
ws.add(obj);
// ws.add(111); // Invalid type
// ws.add("222"); // Invalid type

console.log(inspect(ws, { showHidden: true }));
