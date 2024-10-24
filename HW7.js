
let mySet = new Set([1,2,3,4,5]);


mySet.add(1);
mySet.add(5);
mySet.add(1);  
mySet.add('Hello');


console.log(mySet);  



console.log(mySet.size); 

console.log(mySet.has(1));  
console.log(mySet.has(10)); 


mySet.delete(5);
console.log(mySet); 


mySet.forEach(value => {
  console.log(value);
});


mySet.clear();
console.log(mySet); 




let myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('occupation', 'Developer');


console.log(myMap.get('name'));
console.log(myMap.get('age'));   


console.log(myMap.size);


console.log(myMap.has('occupation'));  
console.log(myMap.has('salary'));      


myMap.delete('age');
console.log(myMap.size);  


myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

myMap.clear();
console.log(myMap.size);  
