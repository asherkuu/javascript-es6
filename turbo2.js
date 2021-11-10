(() => {
  const han = {
    firstname: "Han",
    lastname: "Solo",
    spacecraft: "Falcon",
  };
  const luke = {
    firstname: "Luke",
    lastname: "Skywalker",
    job: "Jedi",
  };
  const leia = {
    firstname: "Leia",
    lastname: "Organa",
    gender: "female",
  };
  const obi = {
    firstname: "Obi",
    lastname: "Wan",
    retired: true,
  };
  const yoda = { lastname: "Yoda" };

  const people = [han, luke, leia, obi, yoda, luke, leia, obi];

  const getName = (person) => person.lastname;

  console.time("engine");

  let ab = [];
  for (var i = 0; i < 1000 * 1000 * 1000; i++) {
    getName(people[i & 7]);
  }

  console.timeEnd("engine");
})();
