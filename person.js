const persons = [
  {
    firstname: "Ivan ",
    lastname: "Petrovic",
    age: 40,
    phone: 0735467676,
  },
  {
    firstname: "Danny ",
    lastname: "Jinberg",
    age: 8,
    phone: 0765674577,
  },
  {
    firstname: "Johan ",
    lastname: "Baray",
    age: 33,
    phone: 0657657744,
  },
  {
    firstname: "John ",
    lastname: "Morberg",
    age: 23,
    phone: 0989879887,
  },
  {
    firstname: "Klas ",
    lastname: "Andersson",
    age: 18,
    phone: 0879878787,
  },
  {
    firstname: "Sabina ",
    lastname: "Civgin",
    age: 39,
    phone: 0763839111,
  },
];

function displayFullName(persons) {
  console.log("--------FULL NAME--AND PHONE------"); // Only once
  for (person of persons) {
    console.log(person.firstname + person.lastname + " " + person.phone); // Repetition
  }
}

function displayPhone(persons) {
  console.log("--------PHONE--------");
  for (person of persons) {
    console.log(person.phone); // Repetition
  }
}

function displayAges(persons) {
  console.log("--------age--------");
  for (person of persons) {
    console.log(person.age);
  }
}
function displayOlderThen20(persons) {
  console.log("--------ageOlderThen20--------");
  for (person of persons) {
    if (person.age > 20) {
      console.log(person.firstname + person.lastname + "old: " + person.age);
    }
  }
}

displayFullName(persons);
displayPhone(persons);
displayAges(persons);
displayOlderThen20(persons);
