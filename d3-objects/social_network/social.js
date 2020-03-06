const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// returns the name of the individual who follows the most people
const biggestFollower = function (){
  let nameOfBiggestFollower = "";
  let numFollowed = 0;
  for (person in data) { 
    const followsList = data[person].follows;
    if (followsList.length > numFollowed) {
      numFollowed = followsList.length;
      nameOfBiggestFollower = data[person].name;
    }
  }
  return nameOfBiggestFollower;
}
console.log(biggestFollower());

// returns the name of the most followed individual

// outputs a list of everyone and for each of htem, the names of who they follows and who follows them

//returns list of names for those who follow someone that doesn't follow them back

//returns name of person who has most followers over 30

//returns name of person who follows most people over 30

//lists everyone and their reach (sum of number of followers and number of follower's followers)