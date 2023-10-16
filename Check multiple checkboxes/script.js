const checkboxes = document.querySelectorAll(' .inbox input[type="checkbox]');
let lastChecked; //we dont make it const bcz it will be reassigned later

function handleCheck(e) {
  // console.log(e);
  let inBetween = false;
  if (e.shiftKey == true && this.checked == true) {
    //if the box was checked and shift key was pressed
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked)
        //check if the checkedbox lies within the range of 1st checked & last checked
        inBetween = !inBetween; //if yes, check all these inBetween checkboxes

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// let lastChecked;

// function handleCheck(e) {
//   // Check if they had the shift key down
//   // AND check that they are checking it
//   let inBetween = false;
//   if (e.shiftKey && this.checked) {
//     // go ahead and do what we please
//     // loop over every single checkbox
//     checkboxes.forEach(checkbox => {
//       console.log(checkbox);
//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//         console.log('Starting to check them in between!');
//       }

//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }

//   lastChecked = this;
// }

// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
