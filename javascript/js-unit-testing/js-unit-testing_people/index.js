export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  const peopleWithCertainAge = people.filter((person) => person.age === age);
  const firstNames = peopleWithCertainAge.map((person) => person.firstName);
  return firstNames;
  //return people.filter((person) => person.age === age); => for whole object
}

export function getPeopleNamesOlderThan(people, age) {
  const oldPeople = people.filter((person) => person.age > age);
  return getFullNames(oldPeople);
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName);
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getFullNamesSortedByAge(people) {
  const sortedPeople = people.sort((a, b) => b.age - a.age);
  return getFullNames(sortedPeople);
}
