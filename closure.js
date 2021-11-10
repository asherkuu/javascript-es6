/*
  ==============
  내부함수, 외부함수
  ==============
*/
// 외부 함수 (내부를 감싸거나 포함하는 함수)
function outter() {
  const variable = "variable";

  // 내부 함수 (함수 안에 선언된 함수)
  function inner() {
    const title = "coding everybody";
    console.log(variable); // * inner에서 outter의 전역 변수에 접근이 가능하다
    console.log(title);
  }

  // inner 와 inner2 는 같은 형태의 inner function 이다
  const inner2 = function () {
    const title2 = "coding everytime";
    console.log(title2);
  };

  // inner함수는 outter 함수 안에서만 쓰인다는 의미를 가지며 응집성이 좋고 보기에도 좋다

  inner();
}
outter();

/*
  ==============
  내부함수와 외부함수의 밀접관계
  ==============
*/
function outter2() {
  var title = "coding everybody";

  // return 을 했다라는건 그 함수는 호출 후 소멸된다는 뜻이다
  return function () {
    console.log(2, title); // 외부함수의 변수
  };
}
const inner2 = outter2(); // 외부함수 실행 후 소멸
inner2(); // 외부함수가 소멸되었지만 여전이 외부함수의 title 변수에 접근이 가능하며 console.log가 잘 출력되는 것을 확인할 수 있었다
// 이러한 매커니즘이 바로 클로저의 중요한 특징이다

function factory_movie(title) {
  // 객체 안의 함수가 정의 되어있다
  // 객체 안의 메소드 들을 내부함수라고 생각하자
  return {
    // factory_movie 의 내부함수이 면서 객체의 소속이다
    get_title: function () {
      return title; // outter의 매개변수(매개변수는 해당 함수의 전역변수로서 사용이 된다)
      // 따라서 내부함수에서 title에 접근이 가능하다
    },
    // factory_movie 의 내부함수이 면서 객체의 소속이다
    set_title: function (_title) {
      title = _title; // 앞의 title은 outter의 매개변수인 title을 의미하고 그 값을 변경하게 되는 것이다
    },
  };
}
// factory_movie 두번 호출 하기
let ghost = factory_movie("Ghost in the shell");
let matrix = factory_movie("Matrix");

console.log(3, ghost); // { get_title: [Function: get_title], set_title: [Function: set_title] }
console.log(3, matrix); // { get_title: [Function: get_title], set_title: [Function: set_title] }

console.log(3, ghost === matrix); // false

// * ghost와 matrix는 같은 객체를 반환해 오고 실행된 컨텍스트들은 동일한 것을 보여주지만 두 객체의 맥락은 서로 다르다
// 리턴받은 객체는 같으나 내부적으로 바라보고있는 title의 데이터가 다르다

console.log(3.1, ghost.get_title()); // 3 Ghost in the shell
console.log(3.1, matrix.get_title()); // 3 Matrix

ghost.set_title("공각기동대"); // 내부적으로 바라보는 외부함수의 title을 변경이 가능하다
// 또한 factory_movie 라는 함수의 title을 바꾸고 있지만 함수가 리턴받은 변수에 한에서만 데이터가 바뀌기 때문에
// factory_movie의 데이터를 바꾸더라도 다른 변수에서 선언한 factory_movie의 데이터에는 영향이 가지 않는다

console.log(3.2, ghost.get_title());
console.log(3.2, matrix.get_title());

// * 장점 : 비밀번수를 만들 수 있다

// outter의 내부함수는 모두나 접근이 가능한 public한 특성을 가지고 있다
// 하지만
// 그렇기 때문에 비밀변수가 가능한데 비밀변수란
// 비밀변수를 왜 만들어야 하는지
// sw가 커질수록 많은 사람이 코드를 작성할텐데
// 그럴경우에 많은 데이터가 sw에 존재하게 되는데 그 데이터가 누구나 수정할 수 있는 데이터가 된다는 것은 그 sw는 망가질 가능성이 커진다는 것을 의미하게 된다

// title에 접근하려면 객체의 메소드를 통해서 접근이 가능하기 때문에 title이라는 변수를 외부에서 아무리 변경을 해도 함수에 대한 사용에 영향을 전혀 주지 않는다 라는 것이다
// ** 클로저는 비밀변수에 접근할 수 있게 해주는 좋은 매커니즘이다

/*
  ==============
  클로저의 응용
  ==============
*/
// 변경 전
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}
for (var index in arr) {
  console.log(3.3, arr[index]());
  // 예상 0 1 2 3 4 출력
  // 실제 5 5 5 5 5 출력

  // 위의 함수의 i의 값은 inner함수의 외부 변수가 아니다
}

// 변경 후
var arr = [];
for (var i = 0; i < 5; i++) {
  // 외부함수 선언
  arr[i] = (function (id) {
    // 내부함수 선언
    return function () {
      return id;
    };
  })(i); // (i) 선언과 동시에 호출(IIFE: 즉시 실행 함수)

  // 내부함수의 return 값이 arr에 담기게 된다
  // for문이 돌때마다 외부함수이 실행되고 실행될 때마다 i에 대한 값을 매개변수의 값을 넣어 매개변수 id로 받아서 함수 내부로 전달한다
  // 전달과 동시에 외부함수의 지역변수인 id를 반환하는 내부함수를 리턴한다
  // 또한 함수가 생성되는 시점에서의 i값을 넘겨주고 외부함수가 가지고 있었기 때문에 그 시점에 맞는 id 값을 반환할 수 있었던 것이다
}
for (var index in arr) {
  console.log(3.4, arr[index]());
}

// arrow 함수와 IIFE 대신 따로 함수를 만들어서 실행한 예제
var arr = [];
const funcId = (id) => {
  return () => {
    return id;
  };
};

for (var i = 0; i < 5; i++) {
  arr[i] = funcId(i);
}

for (var index in arr) {
  console.log(3.5, arr[index]());
}
