
const users = [
    {
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    {
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    {
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
];

// for(let {name, address, age} of users)
// {
//     console.log(name, address, age);
// }

// for(x in users)
// {
//     console.log(users[x]);
// }

for(let {name, address, age} of users)
    {
        const user = document.getElementById("demo");
        user.innerHTML += `
            <div class ="card">
                <p>Name: ${name}</p>
                <p>Address: ${address}</p>
                <p>Age: ${age}</p>
            </div>
        `;
    }

const clone = {...users}
console.log(clone)