const numbers = [3, 4];

// ADDING ELEMENTS ~ MUTATES ORIGINAL ARRAY
console.log("<------ ADDING ELEMENTS ------>")

// end ~ PUSH
numbers.push(5,6); // adding 5 and 6 to the end


// beginning ~ UNSHIFT
numbers.unshift(1, 2); // adding 1 and 2 to the front and UNSHIFTING elements to the right

// middle ~ SPLICE
// -----> arr.splice(startIndex (where elements will be placed), numElementsDelete, elementAdded "a", "b" )

numbers.splice(2, 0, 'a', 'b'); // --> 1, 2, 'a', 'b', 3, 4, 5, 6

console.log(numbers);

// FINDING ELEMENTS ~ PRIMITIVE TYPES
// what is a primitive type? 
// ----> numbers, booleans, null and undefined

console.log("<------ FINDING ELEMENTS ------> ")

const arr = [1, 2, 3, 1, 4];
console.log(arr)

// indexOf() ~ will give element's index, will show -1 if not present in the array
console.log("index of 1:", arr.indexOf(1));
// indexOf has second parameter to indicate where the search should start
console.log("index of 1 starting search at 2:", arr.indexOf(1, 2));
// lastIndexOf ~ will give the last seen element's index of the array
console.log("last seen index of 1:", arr.lastIndexOf(1));
// does element exist in array?
console.log("is 1 in the array?", arr.indexOf(1) !== -1); //boolean if index of 1 exists in the array
console.log("is 2 in the array?", arr.includes(2));

// finding reference types 

const courses = [
    { id: 1, name: "Calculus"},
    { id: 2, name: "C++"},
    { id: 3, name: "React"}
];

// find() will return first object that matches criteria

const course = courses.find(function(course) { // call-back function or predecate
    return course.name === "Calculus";
});
console.log(course);

// findIndex() will return index of given element
const colleges = [
    { id: 1, name: 'University of Washington'},
    { id: 2, name: 'Washington State University'},
    { id: 3, name: 'Central Washington University'}
];

const college = colleges.findIndex(function(college) { // call-back function or predecate
    return college.name === "Central Washington University";
});

console.log(college);

// arrow functions -- used for callback functions
// --> take the above colleges example

const college2 = colleges.find(college => { //single parameters don't need parenthesis
    return college.name === "University of Washington" // with only one return you can remove the return and the curly braces
});

console.log(college2);

const college3 = colleges.find(college => college.name === "Central Washington University"); // more simplified, curly braces, additional parenthesis were dropped as well as the return, reduces noise in the code

// REMOVING ELEMENTS ~ MUTATES ORIGNAL ARRAY
console.log("<------ REMOVING ELEMENTS ------> ");

const arr2 = [1, 2, 3, 4];

// End ~ POP
console.log("before mutation(pop)", arr2);
const last = arr2.pop();
console.log("after mutation", arr2);
console.log("popped num stored in variable:", last);
console.log("FINAL ARRAY2:", arr2);



// Beginning ~ SHIFT
console.log("before mutation(shift)", arr2);
const start = arr2.shift();
console.log("after mutation", arr2);
console.log("shifted element stored in variable:", end);
console.log("FINAL ARRAY2:", arr2);

// Remove in the middle

const nums = [1, 2, 3, 4];

const spliced = nums.splice(1, 2);
console.log("new nums array after splice", nums);
console.log("elements spliced out of nums array", spliced);
