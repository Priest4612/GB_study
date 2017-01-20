/*
  Треугольник в цикле
  Напишите цикл, который за 7 вызовов console.log
  выводит такой треугольник:
  #
  ##
  ###
  ####
  #####
  ######
  #######
  */

// Мое решение
var a = '';
var i;
for (i = 0; i < 8; i++){
  a += '#'
  console.log(a);
}

// Решение автора книги
for (var line = '#'; line.length < 8; line += '#') {
  console.log(line);
}

/* 
  FizzBuzz
  Напишите программу, которая выводит через console.log
  все числа от 1 до 100, с двумя исключениями. Для чисел,
  нацело делящихся на 3, она должна выводить ‘Fizz’, а
  для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
  Когда сумеете – исправьте её так, чтобы она выводила
  «FizzBuzz» для всех чисел, которые делятся и на 3, и на
  5.
  (На самом деле, этот вопрос подходит для
  собеседований, и, говорят, он позволяет отсеивать
  довольно большое число кандидатов. Поэтому, когда вы
  решите эту задачу, можете себя похвалить.)
*/

for (var i = 0; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if ( i % 3 === 0) {
    console.log('Fizz');
  } else if ( i % 3 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

/*
  Шахматная доска
  Напишите программу, создающую строку, содержащую
  решётку 8х8, в которой линии разделяются символами
  новой строки. На каждой позиции либо пробел, либо #. В
  результате должна получиться шахматная доска.

  Когда справитесь, сделайте размер доски переменным,
  чтобы можно было создавать доски любого размера.
*/

// Решение автора
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);


// Мое решение для любого размера доски
var sizeX = 8;
var sizeY = 8;

function printMessage(message) {
  console.log (message);
}

function validData(sizeX, sizeY) {
  function checkNaN(argument){
    return isNaN(argument);
  }

  if (checkNaN(sizeX)) {
    printMessage('Ошибка ввода данных sizeX не число, введите положительное целое число');
    return; 
  }

  if (sizeX <= 0 || sizeY < 0) {
    printMessage('Ошибка ввода данных sizeX <= 0 или sizeY < 0,  введите положительное целое число');
    return;
  }
}

function makeChessBoard (sizeX, sizeY) {
  if (validData(sizeX, sizeY)) {
    return printMessage('Насяника, все пропало');
  }

  for (var i = 0, a = ''; i < sizeX; i++) {
    if (i % 2 === 0) {
      for (var j = 0, a = ''; j < sizeY; j++) {
        if (j % 2 === 0) {
          a += ' ';
        } else {
          a += '#';
        }
      }
      printMessage(a);
    } else {
      for (var j = 0, a = ''; j < sizeY; j++) {
        if (j % 2 === 0) {
          a += '#';
        } else {
          a += ' ';
        }
      }
    printMessage(a);
    }
  }
}