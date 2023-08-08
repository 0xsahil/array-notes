// Array is collection of multiple data


//  let name1 ="harsh";
//  let name2 ="kunal";
//  let name3 = "sunil";


// Creating an array => var_type arrayName = []
// const names = ["sunil", "kunal", "harsh"];

// Printing array
// console.log(names);


// Accessing particular element in array using index
// Index : position number of any element in array
//Syntax :  arrayName[INDEX_NUMBER]

// console.log(names[0])


// Changing element using index

// let num = 2;
// console.log(num);
// num = 3
// console.log(num);


// console.log(names[2]);

// names[2] = "Harsh sharma";

// console.log(names[2]);




// arrayname[index_no] => Only takes positive(0- last index of array) value

/* At Method */
// .at(index_no) method => Can access any element of array

// console.log(names.at(-1));


/* Length method */
// Syntax: .length
// length() method returns the total no of elements present inside that array
// console.log("Length is ", names.length);

// names.at(-1)
// names[1]
// Accessing last element of array using .length method
// console.log(names[names.length - 1])  //names[3-1];


// const arr = [];
// console.log(arr.length);



// Array of guest list =>  [] : print => no one in guest list ; [...] : print => guest list


// const guestList = ["fufa"];


// (guestList[1] === "fufa") ? (console.log("fufa ji is in guestList")) : (console.log("No one is in guest list"))



// Looping through array using for loop

// console.log("name at 0 ",names[0])
// console.log("name at 1 ",names[1])
// console.log("name at 2 ",names[2])

// for (let i = 0; i < names.length; i++) {
//     console.log("name at", i, names[i]);
// }





         /* Practice Question */


// Make a array named 'guestList', if guestList have any guestname then print 'guest {guestNo} is {guestName}' else print 'No one is in giestlist';

// guest 1 is name[0]


// const guestList = ["kunal", "harsh", "sunil", "fufa", "chacha", "mama"];

// if (guestList.length > 0) {
//     for (let i = 0; i < guestList.length; i++){
//         num = i + 1;
//         console.log("guest",num,"is",guestList[i]);
//     }
// }
// else {
//     console.log("No one is in guest list");
// }



/* MAP method */

// map is used to iterate(print) complete array
// const mapArray = [1,2,3,4,5]

// for (let i = 0; i < map.length; i++){
//     console.log(map[i]);
// }

// mapArray.map((item) => {
//     return console.log(item)
// })



        /* PUSH method */
// const guestList = [];
// guestList[0]="name"
// guestList.push('pushed name');
// guestList.push('pushed 2 name');
// console.log(guestList);

        /* POP method */
// guestList.pop();
// console.log(guestList);


/* Concat method */
// concat() will add two arrays and create a new array
// concat() doesn't change in existing array
// concat() return a new array
// syntax : arrayName.concat(arr1,.......,arrX)
// example:
// const arr1 =['a','b']
// const arr2 =['c','d']

// const newArr = arr1.concat(arr2);

// Spread operator :
// const subArr = ['c','d']
// const mainArr = ['a','b',...subArr]
// ['a','b','c','d']


                /* Practice Question */

// Create an array with name allGuests which contains name of all guests coming to party , there are two parties and you have to saperate  guests equally to both party
// const allGuests = ['guest1','guest2','guest3','guest4']

// const list1 = []
// for (let i = 0; i < (allGuests.length/2); i++){
//         list1.push(allGuests[i]);
// }
// console.log("list one",list1);
// const list2 = []
// for (let i = (allGuests.length / 2); i < allGuests.length; i++){
//         list2.push(allGuests[i]);
// }
// console.log("list Two ",list2);