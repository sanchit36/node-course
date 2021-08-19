require("../src/db/mongoose");
const User = require("../src/models/User");

// 611d4639883d182d29ade862

// User.findByIdAndUpdate("611d4da2b878a23f16a105c9", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("611d4da2b878a23f16a105c9", 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
