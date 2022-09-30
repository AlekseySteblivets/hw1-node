const fs = require("fs/promises");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const arr = hideBin(process.argv);
const { argv } = yargs(arr);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const products = await listContacts();
      console.log("products:", products);
      break;

    case "get":
      const product = await getContactById(id);
      if (!product) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log("product:", product);
      break;

    case "add":
      const newProduct = await addContact(name, email, phone);
      console.log("newProduct:", newProduct);
      break;

    case "remove":
      const removeProduct = await removeContact(id);
      console.log("removeProduct:", removeProduct);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// invokeAction({ action: "get", id: "1" });

invokeAction(argv);
