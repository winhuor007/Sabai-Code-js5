// function filterProps(object, ...props) {
//   const result = { ...object };
//   props.forEach((prop) => {
//     delete result[prop];
//   });
//   return result;
// }

// const object = { a: 1, b: 2, c: 3, d: 4 };
// console.log(filterProps(object, "b", "d"));
let number = [1, 2, 3, 4, 1, 2, 5, 7, 8];

let countNumer = number.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(countNumer);
