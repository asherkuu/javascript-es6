/*
  ==============
  Arrow Function의 this context
  ==============
*/
// 기존의 함수에서는 this를 window 객체를 가리키는 반면
// arrow 함수는 기본적으로 this context는 자기자신을 가리킨다.
// 기존의 함수도 bind를 하면 this context가 자기 자신을 가리킨다.

const obj = {
  normal() {
    // this === window
    setTimeout(function () {
      console.log("normal: ", this);
    }, 200);
  },
  normalBind() {
    // this === obj
    setTimeout(
      function () {
        console.log("normalBind: ", this.data());
      }.bind(this),
      200
    );
  },
  arrow() {
    // this === obj
    setTimeout(() => {
      console.log("arrow: ", this.data());
    }, 200);
  },
  data() {
    return "func data";
  },
};

// obj.normal();
// obj.normalBind();
// obj.arrow();

/*
  ==============
  Arrow Function의 default parameters
  ==============
*/

// function sum(val, size) {
const sum = (val, size = 1) => {
  return val + size;
};

console.log("sum: ", sum(3));

/*
  ==============
  rest parameters
  ==============
*/

// 함수의 매개변수로 어떠한 데이터가 올지 모르기 때문에 arguments라는 예약어로 매개변수를 불러올 수 있다.
// arrow 함수에서는 arguments가 없다 !

// 1번
function checkNum() {
  const argArray = Array.prototype.slice.call(arguments); // 진짜 배열로 바꾸기
  if (argArray.every((v) => typeof v === "number")) return argArray;
}

// 2번
function checkNum2(...args) {
  // spread 연산자를 통해 Array.prototype.slice.call(arguments) 문법 생략
  return args;
}

// 테스트
function test(...args) {
  return args;
}

const result = checkNum(1, 2, 5, 22, 5, 12);
const result2 = checkNum2(2, 8, 51, 20, 15, 12);
const result3 = test({ name: 1, age: 2 });
const result4 = test(2, 8, 51, 20, 15, 12);

console.log("result1: ", result);
console.log("result2: ", result2);
console.log("result3: ", result3);
console.log("result3[0]: ", result3[0]);

/*
  ==============
  불변의 함수 만들기
  ==============
*/
function fn1(person) {
  person.name = "kim";
}
const o1 = { name: "asher" };
fn1(o1);

console.log(o1); // fn1 함수를 통해 받은 데이터의 name 을 kim 으로 바꾸었다
// 그렇다면 받은 데이터의 name 만 바뀌는 것일까 o1 자체의 데이터가 바뀌는 것일까 ?
// 결과는 o1의 name이 바뀌게 되는것이다

// 이역시 o1을 복제해서 새로운 데이터를 리턴하는 함수로 정의 되어야 한다

function fn2(person) {
  person = Object.assign({}, person);
  person.name = "lee";
  return person;
}

const o2 = { name: "asher" };
const o3 = fn2(o2);

console.log(o2);
console.log(o3);

// 또는 복제된 객체를 파라미터로 넘겨줌으로서 o4에게 불변성을 유지시켜준다
const o4 = { name: "four" };
const o5 = Object.assign({}, o4);
fn1(o5);
console.log(o4);
console.log(o5);
