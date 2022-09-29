const fs = require("fs/promises");
const { listContacts, getContactById } = require("./contacts");
console.log("listContacts", listContacts());

// const fileOperation = async (filePath, action = "read", data = "") => {
//   switch (action) {
//     case "read":
//       const text = await fs.readFile(filePath, "utf-8");
//       console.log("text:", text);
//       break;

//     case "add":
//       await fs.appendFile(filePath, data);
//       break;

//     case "replace":
//       await fs.writeFile(filePath, data);
//       break;

//     default:
//       console.log("Unknown acti");
//   }
// };
// fileOperation("db/testText.txt", "read", "\nfore, five.");

// fs.readFile("./contacts.js", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err.message));

// console.log("process.argv[1]:", process.argv[1]);

// console.log("__dirname - index.js:", __dirname);
