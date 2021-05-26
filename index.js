/* SHIFT() removes the 1st item from the Array and returns a value, which can be stored as a varible, UNSHIFT() adds a new item at the begining of the Array, it also returns a value and can be stored as a varible.  */



let myArrayShoppingList = ["milk", "bread", "chocolate", "juice"];

console.log ("before any methods are used:\n", myArrayShoppingList);

// shift removes the first item from the Array
myArrayShoppingList.shift();

console.log ("\n myArrayShoppingList has the first item, milk, removed using the shift() method:\n", myArrayShoppingList);

// unshift adds a new item at he begining of the Array
myArrayShoppingList.unshift ("flour");

console.log ("\n myArrayShoppingList has flour added using: unshift('flour') \n", myArrayShoppingList);
// the return value of the shift method, returns the item removed, which can be stored in a varible


let firstItem = myArrayShoppingList.shift();

console.log("\n myArrayShoppingList", myArrayShoppingList);
console.log("firstItem:", firstItem);
// the return value of the unshift method returns a new length of the Array, which then can be stored in a varible


let lengthOfArray = myArrayShoppingList.unshift("milk");

console.log ("\n myArrayShoppingList:", myArrayShoppingList);
console.log("lengthOfArray;", lengthOfArray);