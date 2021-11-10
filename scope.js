/*
  ==============
  let scope
  ==============
*/

// var 펑션 단위 스코프
const homeVar = () => {
  for (var i = 0; i < 100; i++) {}
  console.log(i); // for 문 밖에서 접근 가능
};

homeVar();

// let  블럭 단위 스코프
const homeLet = () => {
  for (let i = 0; i < 100; i++) {}
  // console.log(i); // for 문 밖에서 접근 불가
};

homeLet();

const thisIf = () => {
  if (true) {
    var ifVar = "if var";
    let ifLet = "if let";
  }

  console.log(ifVar); // if문 밖에서 접근 가능
  // console.log(ifLet); // if문 밖에서 접근 불가
};

thisIf();

/*
  ==============
  let closure 스코프
  ==============
*/
var list = [];
/*
  var list = document.querySelectorAll("li");

  <li>JS</li>
  <li>React</li>
  <li>Java</li>
  <li>Django</li>
*/

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트");
  });
  /*
    실행 결과 > 
    4번째 리스트
    4번째 리스트
    4번째 리스트
    4번째 리스트

    >> callback의 function이 가지고 있지 않은 i(closure 변수) 값을 
       계속 참조를 유지하고 기억하면서 그 값을 공유하게 되면서 발생하는 문제 
  */
}
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트");
  });
  /*
  실행 결과 > 
    0번째 리스트
    1번째 리스트
    2번째 리스트
    3번째 리스트

    >> let의 블럭스코프 특성을 이용해 i를 지역변수화 시켜서 i를 기억하고 참조함으로서 
       위와같은 참조에러 문제 해결이 가능
  */
}

/*
  ==============
  const
  ==============
*/
const fooVar = () => {
  var nameVar = "foo var";
  const nameConst = "foo const";

  nameVar = "bar var";
  // nameConst = "bar const"; // 에러 발생

  console.log(nameVar); // 정상 출력
  // console.log(nameConst); // 에러 발생
  // const 변수는 재선언이 불가능 하다
  // const 를 기본으로 사용을 한다
  // 데이터 변경이 필요한 경우 let을 사용하도록 한다
  // var는 사용하지 않도록 한다
};

fooVar();

/*
  ==============
  const 특성과 immutable array
  ==============
*/
const home1 = () => {
  const list = ["a", "b", "c"];
  // list = "abc"; // 에러 발생
  list.push("d"); // 정상 작동
  console.log("list: ", list);

  // const 를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
  // const 가 불변의 의미를 가지는 것이 아니라 재할당 불가의 의미를 가지는 것이다.
};

home1();

// immutable array(불변의 배열) 는 ?
const list1 = ["a", "b", "c"];
list2 = [].concat(list1, "e");

console.log("list1: ", list1);
console.log("list2: ", list2);
console.log(list1 === list2);
// 리스트를 새로 concat해서 만들게 되면 기존 데이터는 유지되면서 새로운 데이터를 추가해서 사용이 가능하다
