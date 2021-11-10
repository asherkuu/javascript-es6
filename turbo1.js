(() => {
  const han = { firstname: "Han", lastname: "Solo" };
  const luke = { firstname: "Luke", lastname: "Skywalker" };
  const leia = { firstname: "Leia", lastname: "Organa" };
  const obi = { firstname: "Obi", lastname: "Wan" };
  const yoda = { firstname: "", lastname: "Yoda" };
  const people = [han, luke, leia, obi, yoda, luke, leia, obi];
  const getName = (person) => person.lastname;
  console.time("engine");
  for (var i = 0; i < 1000 * 1000 * 1000; i++) {
    getName(people[i & 7]);
  }
  console.timeEnd("engine");
})();
