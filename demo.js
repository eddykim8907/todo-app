// let height = 180;
// console.log(height);

// const christ = true;
// console.log(christ);

//test
const eddy = {
  firstName: `Eddy`,
  male: true,
  lastName: `Kim`,
  height: 180,
  age: 2024 - 1995,
  desc: function () {
    return `${this.firstName + ` ` + this.lastName} is a ${this.age} year-old ${
      this.male ? `male` : `female`
    } and is ${this.height}cm tall.`;
  },
};

console.log(eddy.desc());

function sum(x, y) {
  const result = x + y;
  return result;
}

console.log(sum(3, 2));

function hi(name) {
  console.log(`Hi` + ` ` + name);
}

hi(`Eddy`);

const resultOfSum = sum(100, 200);
console.log(resultOfSum);

//homework
for (let i = 1, j = 1; i < 10; j++) {
  console.log(i * j);
  if (j === 9) {
    i++, (j = 1);
  }
}

for (let i = 1, j = 1; i < 10; j === 9 ? i++ && (j = 1) : j++) {
  console.log(i * j);
}

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i * j);
  }
}
