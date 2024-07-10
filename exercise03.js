const user = {
  id: 1,
  name: "AiLy",
  address: {
    street: "1986 Sen Sok",
    city: "Phnom Penh",
  },
};

const {
  address: { street, city },
} = user;

console.log(street);
console.log(city);
