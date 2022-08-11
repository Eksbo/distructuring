'use script' ;
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля. 
// let arr = [2, -4, 6, -8];
// let res = arr.some( e => e > 0);
// console.log(res);

// Дан массив с числами. Проверьте то,
//  что хотя бы для одного элемента произведение его значения на порядковый номер больше 30. 

// let arr = [2, 4, 6, 11];
// let fun = ( e , index ) =>
// {
//    if ( e * index > 30 )
//    {
//     return true
//    }
//    else
//    {
//     return false
//    }
// }
// let res = arr.some(fun) ;
// console.log(res);


// Дан массив: 
// let arr = [1, 2, 3, 4, 5];

// Дана также функция:
// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }

// Найдите с помощью приведенной функции сумму элементов массива. 
// let arr = [1, 2, 3, 4, 5];
// +function func(num1, num2, num3, num4, num5) {
// 	return console.log (num1 + num2 + num3 + num4 + num5)
// }(...arr);

// Дан массив с числами. Используя Math.min и spread 
// выведите на экран минимальное значение массива. 
// let arr = [1, 2, 3, 4, 5];
// console.log(Math.min(...arr));

// Напишите функцию, которая будет принимать параметрами
//  произвольное количество чисел и возвращать их среднее арифметическое. 
// let numArr = (...nums) =>
// {
//     let sum = 0 ;
//    nums.forEach(element => {
//         sum += element
//     });
//     let k = sum / nums.length;
//     return k
// }
// let res = numArr(1,2,3,4,5);
// console.log(res);

// let arrs   = [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ];

// let result = [].concat(...arrs);
// console.log(result); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]

// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];

// Переделайте этот код через деструктуризацию согласно изученной теории. 

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [ a , b , c , d , e ] = arr ;
// console.log( `${a} ----${b} ---- ${c}----${d}----${e}`);

// В следующем коде части массива записываются в соответствующие переменные:
// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let arr = func();

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];

// Переделайте этот код через деструктуризацию согласно изученной теории. 

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let [name , surname , department , position , salary  ] = func();
// for ( let k of func()){console.log(k)} ;



// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let department = arr[2];
// let position   = arr[3];

// Переделайте этот код через деструктуризацию согласно изученной теории. 
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [ ,,department, position] = arr
// console.log(department);
// console.log(position);

// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let name    = arr[0];
// let surname = arr[1];

// let info = arr.slice(2); // все элементы со второго до конца массива

// Переделайте этот код через деструктуризацию согласно изученной теории. 
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let [ name , surname , ...arrD] = arr ;
// console.log('name : ' + name);
// console.log('surname : ' + surname);
// console.log(arrD);

//  В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer'];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'trainee';
// }

// Переделайте этот код через деструктуризацию согласно изученной теории. 

// let arr = ['John', 'Smit', 'development', 'programmer'];

// let [ name , surname , department , position = 'trainee'] = arr ;
// let k = [ name , surname , department , position ];
// for (let i of k ) { console.log(i) } ;


// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве 
// значения для месяца по умолчанию брался текущий месяц,
//  а при отсутствии значения для года - соответственно текущий год. 
// function func() {
// 	return (new Date).getDate();
// }
//  let arr = []
// let [year =(new Date).getFullYear(), month = (new Date).getMonth(), day = func()] = arr;

// console.log(year);
// console.log(month);
// console.log(day);

// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let color  = options.color;
// let width  = options.width;
// let height = options.height;

// Переделайте этот код через деструктуризацию согласно изученной теории. 

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let  { color , width , height } = options ;

// console.log(color);
// console.log(width);
// console.log(height);

// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let c = options.color;
// let w = options.width;
// let h = options.height;

// Переделайте этот код через деструктуризацию согласно изученной теории. 


// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500
// };
// let { color : c , width : w , height : h } = options ;

// console.log( c + '-' + w + "-" + h);



// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	width:  400,
// 	height: 500,
// };

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;

// Переделайте этот код через деструктуризацию согласно изученной теории. 

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let { width ,height , color = 'black'} = options ;
// console.log(color);
// console.log(width);
// console.log(height);

// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );


// function func(employee) {
//     let = [ name , surname , department , position , salary ] = employee
//     return document.write(name + '  ' + surname + ' ' + department + '  ' + position + '  ' + salary );
// }
// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(employee) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let info     = employee[2];
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func(employee) {
//     let [ name , surname , info  ] = employee

//     return document.write(name + '  ' + surname + ' ' + info );
// }

// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
	
// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else 
// 		position = 'джуниор';
// 	}
// }


// func( ['John', 'Smit', 'development'] );
// function func(employee) {

//     let [ name , surname , department ,	position = 'джуниор'] = employee

//     console.log(name);
//     console.log(surname);
//     console.log(department);
//     console.log(position);

// }

// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
	
// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }

// func( 'development', ['John', 'Smit'], [2018, 12, 31] );
// function func(department, employee, hired) {
// let [ name , surname ] = employee ;
// let [ year , month , day ] = hired ;
// console.log(name + ' ' +  surname);
// console.log(year + ' ' +  month + ' ' +  day);
// console.log(department);
// }

// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(options) {
// 	let color  = options.color;
// 	let width  = options.width;
// 	let height = options.height;
// }

// func( {color: 'red', width: 400, height: 500} );
// function func(options) {
//     let {color , width , height} = options;
//     console.log(color);
//     console.log(width);
//     console.log(height);
// }

// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;
	
// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }

// func( { width: 400, height: 500} );
// function func(options) {
//     let {color = 'black', width , height } = options ;
//     console.log(color);
//     console.log(width);
//     console.log(height);

// }

