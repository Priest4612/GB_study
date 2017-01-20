var phonebook = [
  ["Абалаев Иван", "111-11-11"],        // элемент списка №0 
  ["Баранов Сергей", "222-11-11"],      // элемент списка №1
  ["Волкова Ольга", "333-11-11"],       // элемент списка №2
  ["Громов Пётр", "444-11-11"],         // элемент списка №3
  ["Добрая Анна", "555-11-11"],         // элемент списка №4
  ["Ежова Елизавета", "666-11-11"]      // элемент списка №5
];

var lookupPerson = "Добрая Анна";

function getMiddleIndex(phonebook) {
  return Math.floor(phonebook.length / 2);
}

function getMiddleRecord(phonebook) {
  middleIndex = getMiddleIndex(phonebook);
  return phonebook[middleIndex];
}

function getFirstHalf(phonebook) {
  middleIndex = getMiddleIndex(phonebook);
  return phonebook.slice(0, middleIndex);
}

function getSecondHalf(phonebook) {
  middleIndex = getMiddleIndex(phonebook);
  return phonebook.slice(middleIndex, phonebook.length);
}

function searchBinary(phonebook, lookupPerson) {
  middlePair = getMiddleRecord(phonebook);
  var middlePerson = middlePair[0];
  if (middlePerson == lookupPerson) {
    return middlePair;
  }

  var halfOfTheTask;

  if (middlePerson < lookupPerson) {
    halfOfTheTask = getSecondHalf(phonebook);
    return searchBinary(halfOfTheTask, lookupPerson);
  }

  if (middlePerson > lookupPerson) {
    halfOfTheTask = getFirstHalf(phonebook);
    return searchBinary(halfOfTheTask, lookupPerson);
  }
}