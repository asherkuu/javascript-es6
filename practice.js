const { inspect } = require("util");

const arr = ["apple", "orange", "banana", "strawberry"];

// filter, includes, from 을 이용하여 문자열 'e'가 포함된 배열을 만들어서 반환

const print = (arr) => {
  const newData = arr.filter((item) => item.includes("e"));
  console.log("newData: ", newData);
};

print(arr);

/*
    from 을 이용한경우
    <ul>
      <li>apple/li>
      <li>orange</li>
      <li>banana</li>
      <li>strawberry</li>
    </ul>

    const print = () => {
      const list = document.querySelectorAll("li"); >> node list 임으로 가짜 배열이다
  
      const newArr = Array.from(list)
      const data = newArr.filter((item) => item.innerText.includes("e"));
      console.log(data);
    }

    print();
*/

/*
  ==============
  로또 번호
  ==============
*/
const lotto = {
  name: "lotto",
  count: 6,
  max: 45,
};

const getRandomNumber = () => {
  const st = new Set();
  const { count: c, max: m } = lotto;

  for (let i = 0; i < c; i++) {
    const num = Math.random() * (m - 1) + 1;
    if (st.has(num)) {
      continue;
    }
    st.add(num.toFixed(0));
  }

  console.log(inspect(st, { showHidden: true }));
};

getRandomNumber();
