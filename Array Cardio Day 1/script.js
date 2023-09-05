const inventors = [
  { first: "albert", last: "einstein", year: 1879, passed: 1955 },
  { first: "issac", last: "newton", year: 1643, passed: 1727 },
  { first: "galileo", last: "gallilei", year: 1564, passed: 1642 },
  { first: "marie", last: "curie", year: 1867, passed: 1934 },
  { first: "johannes", last: "kepler", year: 1571, passed: 1630 },
  { first: "nicolaus", last: "copernicus", year: 1473, passed: 1543 },
  { first: "max", last: "plank", year: 1858, passed: 1947 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

//other ways to define the const
//   const fifteen = inventors.filter(function(inventor){
// const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <1600)
const fifteen = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});
console.table(fifteen); //display the invetors satisfying the above condition in a table

//map function
// give an array of the inventory first & last names
const fullname = inventors.map(
  (inventor) => inventors.first + " " + inventors.last
);
console.table(fullname);

//sort function by year
const ordered = inventors.sort(function (a, b) {
  if (a.year > b.year) return 1;
  else return -1;
});
console.table(ordered);

//reduce function
//how many years did all inventors live
const total = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(total);

//sort by years lived by inventors
const oldest = inventors.sort(function (a, b) {
  const last = a.passed - a.year;
  const last2 = b.passed - b.year;
  return last > last2 ? -1 : 1;
  // if(last > last2) return -1;
  // else return 1;
});
console.table(oldest);

//create a list of boulevards in paris that contain 'de' in the name
// link:  https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// to get the dom elements from the site go to inspect element & then find where the links are: .mw-category in this case

// const category = document.querySelector('.mw-category');
// const links = category.querySelectorAll('a');
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes('de'));

//sort by people last name
const alpha = people.sort(function (lastone, nextone) {
  const [alast, afirst] = lastone.split(", ");
  const [blast, bfirst] = nextone.split(", ");
  return alast > blast ? 1 : -1;
});
console.log(alpha);

//sum up the instances of each of these using reduce
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];
const transportation = data.reduce(function (obj, item) {
  console.log(item);

  if (!obj[item]) obj[item] = 0;

  obj[item]++;
  return obj;
}, {});
