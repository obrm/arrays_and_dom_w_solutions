const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001
    },
    hobbies: ["reading", "running", "gaming"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 35
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: 90001
    },
    hobbies: ["hiking", "cooking", "traveling"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 4,
        name: "Samantha Brown",
        age: 28
      },
      {
        id: 6,
        name: "Sam Brown",
        age: 32
      },
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: 60001
    },
    hobbies: ["fishing", "golfing", "watching TV"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 5,
        name: "Emily Davis",
        age: 32
      }
    ]
  }
];


// ARRAY DESTRUCTURING

// Exercise 1: Use array destructuring to get the first two hobbies of the first person in the data array
var [firstPerson] = data;
const [firstHobby, secondHobby] = firstPerson.hobbies;
console.log(firstHobby);
console.log(secondHobby);


// Exercise 2: Use array destructuring to get the first and third friend of the second person in the data array
const [, secondPerson] = data;
var [firstFriend, , thirdFriend] = secondPerson.friends;
console.log(firstFriend);
console.log(thirdFriend);


// OBJECT DESTRUCTURING

// Exercise 1: Use object destructuring to get the name, age, and city of the third person in the data array
let [, , {name, age, address: {city}}] = data;
console.log(name);
console.log(age);
console.log(city);


// Exercise 2: Use object destructuring to get the name and age of the first friend of the third person in the data array
[, , {friends: [{name, age}]}] = data;
console.log(name);
console.log(age);


// THE REST OPERATOR

//Exercise 1: Put the last two objects from the data array in a new array
const [, ...restOfData] = data;
console.log(restOfData);

/*Explanation:
The rest operator allows us to get all elements of an array except the first one.
In this case, the restOfData variable will contain the values of the last two objects in the data array.
*/


//Exercise 2: Put the last friend of the first person in a new array
var [firstPerson] = data;
const { friends: [, ...restOfFriends] } = firstPerson;
console.log(restOfFriends);

/*Explanation:
The rest operator allows us to get all elements of a nested array except the first few.
In this case, the restOfFriends variable will contain the values of all elements in the friends array from the firstPersonWithFriends3 object except the first two.
*/
