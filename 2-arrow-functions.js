// const square = function (x) {
//   return x * x
// }

// const square = (x) => {
//   return x * x
// }

// const square = x => x * x


// console.log(square(3));

// const event = {
//   name: 'Birthday Party',
//   printGuestList: function () {
//     console.log('Guest list for ' + this.name);
//   }
// }

//! arrow function don't bind their own 'this' values. therefor 'this' is undefined
// const event = {
//   name: 'Birthday Party',
//   printGuestList: () => {
//     console.log('Guest list for ' + this.name);
//   }
// }

const event = {
  name: 'Birthday Party',
  guestList: ['Nick', 'Jen', 'Mike'],
  printGuestList() {
    //?NOTE this is the es6 method definition syntax 
    console.log('Guest list for ' + this.name);
    
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending the ${this.name}`);
    })
  }
}

event.printGuestList();

