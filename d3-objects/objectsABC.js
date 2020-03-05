
const person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};
person["phoneNumbers"] = 613;

console.log(typeof person["phoneNumbers"]);

console.log(person["phoneNumbers"] instanceof Object);

console.log(person["phoneNumbers"] instanceof Array);

console.log(person["phoneNumbers"] instanceof String);

