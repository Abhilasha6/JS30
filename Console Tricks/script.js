const dogs = [
{name: 'snickers', age: 2},
{name: 'hugo', age: 8}
];

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color = 'green';
    p.style.fontSize = '50px';
}

//regular printing
console.log('im a general print statement from log');

//interpolated printing
console.log('i interpolated this emoji %s','😎');
const val='variable';
console.log(`hello im a '${val}' using backticks`);

//styled print statements
console.log('%ci am a styled statement', 'color:pink; text-shadow: blue');

//warning print statements
console.warn('im a warning statement');

//printing error statement
console.error('im a error statement');

//printing info statement
console.info('im a info statement');

//testing statement
console.assert(1==2,'oops');

const p= document.querySelector('p');
console.assert(p.classList.contains('hey'),'it doesnt have hey!'); // we dont have to specify any error if the condition is true, so we don't have to print anything

//clearing statements
console.clear();

//viewing DOM elements
console.log(p);
console.dir(p);

//print without grouping elements together
console.log('without grouping elements');
dogs.forEach(dog => {
    console.log(`dogs name is ${dog.name}`);
    console.log(`his age is ${dog.age}`);
});

//print after grouping
console.log('after grouping elements');
dogs.forEach(dog => {
    console.group(`${dog.name}`); // group a dogs details as per his name
    console.log(`dogs name is ${dog.name}`);
    console.log(`his age is ${dog.age}`);
    console.groupEnd(`${dog.name}`);
});

//counts the number of tims we used an object
console.count('hi');
console.count('hello');
console.count('hello');
console.count('hi');
console.count('hi');

//time taken to fetch data
console.time('fetching data');
fetch('https://api.github.com/users/Abhilasha6')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});

//table to print array of objects assuming all elements have simliar data attribiutes: name, age etc
console.table(dogs);