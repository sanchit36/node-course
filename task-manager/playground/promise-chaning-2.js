require("../src/db/mongoose");
const Task = require("../src/models/Task");

// 611d40494003ff1f10445886

// Task.findOneAndDelete("611d4da2b878a23f16a105c9", { age: 1 })
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  const user = await Task.findOneAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("611d470168b33b2ef9cab8df")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
