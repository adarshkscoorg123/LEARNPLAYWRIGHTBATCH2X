
const user = { name1: "John", age: 30, city: "NYC" };

//Basic destructuring
const { name1, age } = user;
console.log(name1);
console.log(age);


// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName); // John
console.log(userAge); // 30



// destructuring
const { city } = user;
console.log(city);

// Default values
const { country = "USA" } = user;
console.log(country);
console.log(user);

const data = {
    user:
    {
        name: "John",
        address:
        {
            city1: "NYC"
        }
    }
};

console.log(data.user.address.city1);

const {
    user:
    {
        address:
        {
            city2

        }
    }
} = data;

