Arr1 = [1,5,"4","hello"];
Arr2 = [true, 2, {}, ["a"], 222];
console.log(Arr1[2]);
console.log(Arr2[2]);
console.log(Arr1[2] + Arr2[2]);
Arr1[4] = 22;
for (let value of Arr1) {
    console.log(value);
}
for (let value of Arr1) {
    console.log(value + ": " + typeof value);
}