const inventors=[
    {first: 'albert', last:'einstein', year: 1879, passed: 1955},
    {first: 'issac', last:'newton', year: 1643, passed: 1727},
    {first: 'galileo', last:'gallilei', year: 1564, passed: 1642},
    {first: 'marie', last:'curie', year: 1867, passed: 1934},
    {first: 'johannes', last:'kepler', year: 1571, passed: 1630},
    {first: 'nicolaus', last:'copernicus', year: 1473, passed: 1543},
    {first: 'max', last:'plank', year: 1858, passed: 1947}
]

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  //other ways to define the const 
    //   const fifteen = inventors.filter(function(inventor){
    // const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <1600)
    const fifteen = inventors.filter(inventor => {
    if(inventor.year >= 1500 && inventor.year <1600)
    {
        return true;
    }
  });
  console.table(fifteen); //display the invetors satisfying the above condition in a table

//map function
// give an array of the inventory first & last names
const fullname = inventors.map( inventor => inventors.first+' '+ inventors.last);
console.table(fullname);

//sort function by year
const ordered = inventors.sort(function(a,b){
    if(a.year > b.year) return 1;
    else return -1;
});
console.table(ordered);

//reduce function
//how many years did all inventors live
const total=inventors.reduce((total, inventor)=>{
    return total +(inventor.passed - inventor.year);
},0);