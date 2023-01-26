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
      }
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

// FILTER

// Exercise 1: Use the filter method to get all the friends of John Doe
const johnDoeFriends = data.filter(person => {
    return person.friends.some(friend => friend.id === 1);
});
console.log(johnDoeFriends);

// Exercise 2: Use the filter method to get all the people who live in New York
const peopleInNewYork = data.filter(person => {
    return person.address.city === "New York";
});
console.log(peopleInNewYork);

// Exercise 3: Use the filter method to get all the people who are older than 30
const peopleOver30 = data.filter(person => {
    return person.age > 30;
});
console.log(peopleOver30);


// MAP

// Exercise 1: Use the map method to put the names of all the friends of John Doe in an array (use also the flat method)
const johnDoeFriendNames = data.map(person => {
    return person.friends.filter(friend => friend.id === 1).map(friend => friend.name);
}).flat();
console.log(johnDoeFriendNames);

// Exercise 2: Use the map method to get the full addresses (street, city, state, and zip) of all the people in the data array
const fullAddresses = data.map(person => {
return `${person.address.street}, ${person.address.city}, ${person.address.state}, ${person.address.zip}`;
});
console.log(fullAddresses);

// Exercise 3: Use the map method to get the hobbies of all the people in the data array in a single array
const allHobbies = data.map(person => person.hobbies).flat();
console.log(allHobbies);


// FIND

// Exercise 1: Use the find method to find the first person who lives in Chicago
const firstChicagoan = data.find(person => {
    return person.address.city === "Chicago";
});
console.log(firstChicagoan);

// Exercise 2: Use the find method to find the first person who is older than 30
const firstSenior = data.find(person => {
    return person.age > 30;
});
console.log(firstSenior);

// Exercise 3: Use the find method to find the first person who has "reading" as a hobby
const firstReader = data.find(person => {
    return person.hobbies.includes("reading");
});
console.log(firstReader);


// FOREACH

// Exercise 1: Use the forEach method to print out the names of all the people in the data array
data.forEach(person => {
    console.log(person.name);
});


// Exercise 2: Use the forEach method to add a new property "isAdult" to each person object and set it to true if the person is over 18 and false if not
data.forEach(person => {
    person.isAdult = person.age >= 18;
});
console.log(data);

// Exercise 3: Use the forEach method to print out the names of all the friends of each person
data.forEach(person => {
    person.friends.forEach(friend => {
        console.log(friend.name);
    });
});


// SOME

// Exercise 1: Use the some method to check if any of the people in the data array have "cooking" as a hobby
const anyCooks = data.some(person => {
    return person.hobbies.includes("cooking");
});
console.log(anyCooks);


// Exercise 2: Use the some method to check if any of the people in the data array live in California
const anyCalifornians = data.some(person => {
    return person.address.state === "CA";
});
console.log(anyCalifornians);


// Exercise 3: Use the some method to check if any of the friends of each person in the data array are older than 30
const anyOldFriends = data.some(person => {
    return person.friends.some(friend => {
        return friend.age > 30;
    });
});
console.log(anyOldFriends);


// EVERY

// Exercise 1: Use the every method to check if all the people in the data array have "reading" as a hobby
const allReaders = data.every(person => {
    return person.hobbies.includes("reading");
});
console.log(allReaders);


// Exercise 2: Use the every method to check if all the people in the data array live in the same state
const allInSameState = data.every(person => {
    return person.address.state === data[0].address.state;
});
console.log(allInSameState);


// Exercise 3: Use the every method to check if all the friends of each person in the data array are older than 25
const allFriendsOver25 = data.every(person => {
    return person.friends.every(friend => {
        return friend.age > 25;
    });
});
console.log(allFriendsOver25);


// REDUCE

// Exercise 1: Use the reduce method to get the total age of all the people in the data array
const totalAge = data.reduce((acc, person) => {
    return acc + person.age;
}, 0);
console.log(totalAge);


// Exercise 2: Use the reduce method to get the number of people who live in each state
const peopleByState = data.reduce((acc, person) => {
    acc[person.address.state] = (acc[person.address.state] || 0) + 1;
    return acc;
}, {});
console.log(peopleByState);


// Exercise 3: Use the reduce method to get the average age of all the people in the data array
const averageAge = data.reduce((acc, person) => {
    return acc + person.age;
}, 0) / data.length;
console.log(averageAge);


// INCLUDES

// Exercise 1: Use the includes method to check if the hobbies of John Doe include "gaming"
const hasGamingHobby = data.find(person => person.id === 1).hobbies.includes("gaming");
console.log(hasGamingHobby);


// Exercise 2: Use the includes method to check if the friends of Jane Smith include someone with the id of 4
const hasFriendWithId4 = data.find(person => person.id === 2).friends.some(friend => friend.id === 4);
console.log(hasFriendWithId4);


// Exercise 3: Use the includes method to check if the data array includes a person with the name "Emily Davis"
const hasEmily = data.some(person => person.name === "Emily Davis");
console.log(hasEmily);
