/*
  ==============
  Destructuring Array
  ==============
*/
let data = ["a", "b", "c", "d"];
// let he = data[0];
// let she = data[1];

let [he, , she] = data; // 0번재와 2번재의 값을 각 key 값을 가지고 사용하겠다

console.log(he, she);

/*
  ==============
  Destructuring Object
  ==============
*/
const obj = {
  name: "a",
  address: "b",
  age: 1,
};

const { name, age } = obj;
const { name: myname, age: myage } = obj; // key값 변경도 가능
console.log(name, age);
console.log(myname, myage);

/*
  ==============
  Destructuring JSON 파싱
  ==============
*/
const news = [
  { title: "sbs", views: "123123", list: ["1", "2", "3"] },
  { title: "mbc", views: "6432", list: ["4", "5", "6"] },
];
const [, m] = news;

const { title, views } = m;
console.log(title, views);

// 한번에 파싱도 가능하다
const [, { title: t, views: v }] = news;
console.log(t, v);

/*
  ==============
  Destructuring 함수 
  ==============
*/
// event 자리에서도 destructuring이 가능하다
const getNews = ([, { list }]) => {
  console.log(list);
};

getNews(news);
