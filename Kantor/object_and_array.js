/* 
  Первый объект
  важность: 3решение
  Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.

  Создайте пустой объект user.
  Добавьте свойство name со значением Вася.
  Добавьте свойство surname со значением Петров.
  Поменяйте значение name на Сергей.
  Удалите свойство name из объекта.
*/

var user = {};
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
delete user.name;

/*
  Задача из 5 шагов-строк:

  Создайте массив styles с элементами «Джаз», «Блюз».
  Добавьте в конец значение «Рок-н-Ролл»
  Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
  Удалите первое значение массива и выведите его alert.
  Добавьте в начало значения «Рэп» и «Регги».
*/
var style = ['Джаз', 'Блюз'];
console.log(style);
style.push('Рок-н-Ролл');
console.log(style);
console.log(style.shift());
console.log(style);
style.unshift('Рэп', 'Рэгги');
console.log(style);

/*
  Напишите код для вывода alert случайного значения из массива
*/
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = Math.floor(Math.random() * arr.length);
console.log(arr[Math.floor(Math.random() * arr.length)]);

/* 
  Создайте калькулятор для введённых значений
  важность: 4 решение
  Напишите код, который:

  Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
  Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
  При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
  Выводит сумму всех значений массива
*/

var num = []
while(true){
  var value = prompt('Введить число', 0);
  if (value === '' || value === null || isNaN(value)) {
    break;
  }
  num.push(+value);
}

var result = 0;
for(var i = 0; i < num.length; i++ ){
  result += num[i];
}
alert(result);

/*
Создайте функцию filterRange(arr, a, b), которая принимает массив 
чисел arr и возвращает новый массив, который содержит только числа 
из arr из диапазона от a до b. 
То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr
*/

function filterRange (arr, a, b) {
  var output = [];
  for ( i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      output.push(arr[i]);
    }
  }
  return output;
}

/*
  Решето Эратосфена
  Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.

  Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:

  Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
  Пусть p=2, это первое простое число.
  Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
  Поменять значение p на первое не зачеркнутое число после p.
  Повторить шаги 3-4 пока p2 < n.
  Все оставшиеся не зачеркнутыми числа – простые.
  Посмотрите также анимацию алгоритма.

  Реализуйте «Решето Эратосфена» в JavaScript, используя массив.

  Найдите все простые числа до 100 и выведите их сумму.
*/


// шаг 1
// Создаем массив с индексами от 2 до 99 и присваиваем им значение true
var arr = [];
var num = 200;

for (var i = 2; i < num; i++) {
  arr[i] = true
}
console.log(arr);

// шаг 2. объявляем первое простое число
var p = 2;
var output = [];

do {
  // шаг 3. Перебираем массив и индексам равным числу p присваиваем false
  for (i = 2 * p; i < num; i += p) {
    arr[i] = false;
  }
  console.log(arr);
  output.length = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {output.push(i);}
  }
  console.log(output);


  // шаг 4. Уведичиваем значение p на 1, если p совпало с i прерываем цикл
  for (i = p + 1; i < num; i++) {
    if (arr[i]) break;
  }

  p = i; //Присваиваем p значение i
  console.log(p)
} while (p * p < num); // шаг 5

// шаг 6 (готово)
// посчитать сумму
var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {   // Если arr[i] = true увеличиваем значение sum на i
    sum += i;
    console.log(sum);
  }
}

console.log( sum );

/*
  Добавить класс в строку
  В объекте есть свойство className, которое содержит список «классов» – слов, 
  разделенных пробелом:
  var obj = {
   className: 'open menu'
  }
  Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, 
  но только если его там еще нет.
*/
var obj = {
 className: 'open menu'
}

// Решение автора
function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }

  classes.push(cls); // добавить

  obj.className = classes.join(' '); // и обновить свойство
}

// Мое решение
function addClass(obj, cls) {
  if(obj.className) {
    var arr = obj.className.split(' ');
  } else {
  var arr = [];
  arr.push(cls);
  obj.className = arr.join(' ');
  return obj;
  }

  for (var i = 0; i < arr.length; i++) {
    if (cls === arr[i]) return; 
  }
  
  arr.push(cls);

  obj.className = arr.join(' ');
  return obj;
}

/*
  Перевести текст вида border-left-width в borderLeftWidth

  Напишите функцию camelize(str), которая преобразует строки 
  вида «my-short-string» в «myShortString». То есть, дефисы 
  удаляются, а все слова после них получают заглавную букву.
*/
function camelize(str) {
  var arr = str.split('-');
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
}

/* 
  Функция removeClass
  У объекта есть свойство className, которое хранит список 
  «классов» – слов, разделенных пробелами
*/
// Мое решение.
var obj = {
  className: 'open menu open'
};

function removeClass(obj, str) {
  var arr = obj.className ? obj.className.split(' ') : [];
  console.log('arr length =' + arr.length);

  if (arr === []) {
    return obj;
  }

  for (var i = arr.length; i >= 0; i--) {
    if (arr[i] === str) {
      console.log('arr [' + i + '] = ' + arr[i] );
      arr.splice(i, 1);
    }
  }
  console.log(arr.length);
  if(arr.length === 1) obj.className = arr.join('');
  obj.className = arr.join(' ');
}

// Решение автора
function removeClass(obj, cls) {
  var classes = obj.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1); // удалить класс  
      i--;
    }
  }
  obj.className = classes.join(' ');
}

/*
Фильтрация массива "на месте"
важность: 4решение
Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с 
числами arr и удаляет из него все числа вне диапазона a..b. То есть, 
проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего 
не возвращать.
*/

function filterRangeInPlace(arr, a, b){
  for (i = 0; i < arr.length; i++) {
    if(i >= a || i <= b) {
      arr.splice(i, 1);
    }
  }
}