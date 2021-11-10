// ES6 string에 새로운 매서드들

let str = "hello world ! ^^ ~~";

// 시작 또는 끝나는 단어를 찾는 메서드 : startsWith, endsWith
console.log("startsWith: ", str.startsWith("hello")); // matchStr 로 시작하는 단어
console.log("endsWith: ", str.endsWith("~~")); // matchStr 로 끝나는 단어

// 해당 단어를 포함하는 단어를 찾는 매서드 : includes
console.log("includes: ", str.includes("^"));
