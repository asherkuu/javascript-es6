const obj = { name: "asher" };

const proxy = new Proxy(obj, {
  get(target, property, receiver) {
    console.log("get value");
    return target[property];
  },
  set(target, property, value) {
    console.log("set value");
    // proxy의 데이터를 변경하려면 target의 value를 지정해주어어야 한다.
    target[property] = value;
  },
});

proxy.name = "kim"; // 데이터가 변경될때 proxy.set 실행됨
console.log(proxy.name); // 데이터 호출할때 proxy.get 실행됨
