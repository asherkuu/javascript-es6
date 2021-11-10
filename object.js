/*
  ==============
  class를 통한 객체 생성
  ==============
*/
// 1번
function Health(name) {
  this.name = name;
}

Health.prototype.showHeath = function () {
  console.log(this.name);
};

const h = new Health("you");
h.showHeath();
console.log(toString.call(Health)); // [object Function]

// 2번
class Healthy {
  constructor(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
  }

  showHeath() {
    console.log(this.name, this.lastTime);
  }
}

const newH = new Healthy("me", "2020");
newH.showHeath();
console.log(toString.call(Healthy)); // [object Function]

// class로 선언하였더라도 type을 보면 Function 으로 나온다
// 선언만 class고 사실 Function 이라는 뜻이다
// Function으로 선언해도 되나 class로 선언하는 것이 구조적으로 좋으니 class 사용

/*
  ==============
  Object assign으로 JS객체 만들기
  ==============
*/
const healthObj = {
  showHeath: function () {
    console.log(this.healthTime);
  },
};

const myHealth = Object.create(healthObj);

// 객체 속성 정의
myHealth.healthTime = "11:20";
myHealth.name = "ywow";

console.log(myHealth); // prototype object
// healthTime: '11:20' name: 'ywow' __proto__ { showHeath: function() }

// new 해서 객체를 생성하고 그 안에 prototype으로서 정의를 하지않아도
// Object.create 로 생성하게 되면 프로토타입 객체가 자연스럽게 생성된다.

// create로 객체를 생성하게 되면 프로토객체를 만들 수 있다는 장점이 있지만 객체의 속성 정의를 따로 일일히 해주어야 한다는 단점이 있다.

// assign으로 객체 만들기
const myHealthAsn = Object.assign(Object.create(healthObj), {
  name: "myoy",
  healthTime: "15:10",
}); // Object.assign(객체, 속성)

console.log(myHealthAsn); // healthTime: '15:10' name: 'myoy' __proto__ { showHeath: function() }

/*
  ==============
  Object assign으로 immutable 객체 만들기
  ==============
*/
const prevObj = {
  name: "myoy",
  healthTime: "15:10",
};

const asObj = Object.assign({}, prevObj, { lastTime: "19: 30", name: "muuoo" });
// Object.assign(obj, 객체 속성, 새로 추가할 속성);
// 우선 객체의 기본 속성을 가져온 후 새로 추가할 속성을 서로 비교하여 중복이 되는 값은 덮어씌우고 새로운 값이면 추가가 된다
const asObj2 = Object.assign({}, prevObj, {});

console.log(prevObj); // healthTime: '15:10' name: 'myoy'
console.log(asObj2); // healthTime: '15:10' name: 'myoy'

console.log(prevObj === asObj2); // false
console.log(prevObj.name === asObj2.name); // true

// 같은 데이터를 가지는 객체이지만 참조하는 메모리가 서로 다르기 때문에 두 객체는 서로 다른 데이터 임을 나타내지만
// 객체 안의 속성은 메모리를 참조하는 값이 아니기 때문에 서로 같은 데이터임을 나타낸다.

/*
  ==============
  Object setPrototypeOf 로 객체 만들기
  * polyfill이 필요할 수 있음
  ==============
*/
const hthObject = {
  showTime() {
    console.log("show time", this.hthTime);
  },
  setHth(newTime) {
    this.hthTime = newTime;
  },
};

const myHth = {
  name: "asher",
  lastTime: "12:20",
};

const newObj = Object.setPrototypeOf(myHth, hthObject);

/*
  ==============
  Object setPrototypeOf 로 프로토 타입 체인 생성하기
  ==============
*/
const healthChildObj = {
  getAge() {
    return this.age;
  },
};
Object.setPrototypeOf(healthChildObj, hthObject);

const childObj = Object.setPrototypeOf({ age: 22 }, healthChildObj);
console.log(childObj);

childObj.setHth("10:10");
childObj.showTime();
// prototype chain을 이용해 heathChildObj에 hthObj를 넣고 또
// childObj 에 heathChildObj를 넣음으로서
// childObj 에선 hthObj에 접근할 수 있는 chain이 생기게 되었고 접근도 가능하게 되었다

/*
  ==============
  객체의 복사
  ==============
*/
const ob1 = { name: "asher" };
const ob2 = ob1;
ob2.name = "kim";

console.log(ob1); // name: 'kim'
console.log(ob2); // name: 'kim'
// 위와같이 ob2는 ob1를 잘 복사해서 name 값을 잘 바꿀 수 있다는 것을 확인하였다
// 하지만 객체를 복사하는 과정에서 ob2는 ob1의 같은 메모리값을 참조하고 있기 때문에 ob1의 name도 'kim'으로 변경이 된다
// 이를 방지하기 위해 객체를 복사할 시엔 각자 다른 메모리를 참조할 수 있도록 Object.assign을 이용하여 복사하도록 하자

const ob3 = Object.assign({}, ob1);
ob3.name = "yoon";

console.log(ob1); // name: 'kim'
console.log(ob3); // name: 'yoon'

/*
  ==============
  중첩된 객체의 복사
  ==============
*/
const o1 = { name: "kim", score: [1, 2] }; // 객체에 대한 메모리, 배열에 대한 메모리 총 2가지를 참조
const o2 = Object.assign({}, o1);

// 객체가 잘 복제 되었다. 이는 각자의 메모리를 가진 복제가 잘 된 객체라고 생각할 수 있다
// 하지만 객체는 복제가 잘 되었으나 배열은 같은 배열 메모리를 참조하게 되고 만다
// 이를 해결하기 위해선 배열 또한 한번더 복제를 해주어야한다
o2.score = o2.score.concat(); // 배열의 복제

/*
  ==============
  Object.freeze
  ==============
*/
const of1 = { name: "jerga", score: [2, 3] };
of1.name = "filip";
console.log(of1); // name: filip, score: [2,3]

Object.freeze(of1); // 객체 얼리기 - 불변성 지키기
of1.name = "asher";
console.log(of1); // name: filip, score: [2,3]

// 한번 얼리면 풀 수 없음. 풀 방법은 온리 복제

of1.score.push(4);
console.log(of1); // name: filip, score: [2,3,4]

// 하지만 score같은 경우 다른 메모리를 참조하는 객체(배열) 임으로 freeze를 통해서 불변성을 유지시킬 수 가 없다
Object.freeze(of1.score); // 그렇기 때문에 새로운 메모리를 참조하는 프로퍼티 또한 freeze를 주어야한다

/*
  ==============
  const 와 Object.freeze의 차이
  ==============
*/
/*
  const 는 데이터 값 자체를 바꾸는 것이 불가능한 것이고
  freeze 는 데이터의 프로퍼티 값을 바꾸는 것을 불가능하게 하는 것이다
*/
const obj1 = { name: "yosi" };
Object.freeze(obj1);
const obj2 = { name: "lee" };
obj1 = obj2; // Assignment to constant variable. 이미 obj1가 constant 변수로 선언되어있기 때문에 데이터 변경이 불가능 함을 나타낸다
obj1.name = "park"; // name: "kim" > freeze를 사용했기 때문에 해당 객체의 프로퍼티값을 변경시킬 수가 없게 되었기 때문에 값이 변하지 않는다
