const people = [
  { name: "wes", year: 2011 },
  { name: "kait", year: 2012 },
  { name: "irv", year: 1970 },
  { name: "lux", year: 1988 },
];
const comments = [
  { text: "love this", id: 123456 },
  { text: "superb", id: 123789 },
  { text: "best", id: 234567 },
  { text: "fav food", id: 345678 },
  { text: "nice", id: 567890 },
];

//find atleast 1 matching persons
const isAdult = people.some(function (person) {
  const curryr = new Date().getFullYear();
  if (curryr - person.year > 18) {
    console.log("1st adult=", person.name);
    return true;
  }
});
console.log("is some adult ?", isAdult);

// const alladult = people.every(function(person){
//     const curryr = (new Date()).getFullYear;
//     if(curryr - person.year > 18)
//     return true;
// });
// console.log(alladult);

// find all matching persons
const allAdult = people.every((person) => {
  const curryr = new Date().getFullYear();
  return curryr - person.year > 18;
});
console.log("is all adult ?", { allAdult }); // putiing it in braces will give us the object list which satisfy the given conditions

//find a specific person and specific year
const match = people.find((person) => {
  if (person.name === "irv") {
    console.log("yes found irv and his birth year is", person.year);
  } else return false;
});

//find index of comment with its id and then delete that comment
const idx = comments.findIndex( comment => comment.id === 345678);
console.log("the matched id's index in comments table is", idx);

const newarray = [
    ...comments.slice(0,idx),
    ...comments.slice(idx + 1)
];
console.log('the new array after deleting this index element',newarray);