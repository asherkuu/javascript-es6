const { inspect } = require("util");
/*
  ==============
  Map (key/value)
  ==============
*/
let wm = new WeakMap();
let func = () => {};
// 이 함수가 얼마나 실행됬는지 알려고 할때

wm.set(func, 0);
console.log(inspect(wm, { showHidden: true }));

let cnt = 0;
for (let i = 0; i < 10; i++) {
  count = wm.get(func);
  cnt++;
  wm.set(func, cnt);
}

console.log(inspect(wm, { showHidden: true }));
console.log(wm.has(func)); // true
func = null;
console.log(wm.has(func)); // false

/*
  ==============
  WeakMap - 가비지 컬랙션 대상
  ==============
*/
const wmp = new WeakMap();

function Area(height, width) {
  // 외부에서 private 함수를 생성시 weakmap을 이용해 선언할 수 있다.
  wmp.set(this, { height, width });
}

Area.prototype.getArea = function () {
  const { height, width } = wmp.get(this);
  return height * width;
};

let area = new Area(10, 20);
console.log(area.getArea());
console.log(area.height);

console.log(wmp.has(area)); // true
area = null; // 메모리 초기화
console.log(wmp.has(area)); // false
