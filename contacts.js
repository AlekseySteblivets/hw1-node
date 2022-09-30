const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4, v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const products = JSON.parse(data);

  return products;
}

async function getContactById(contactId) {
  const products = await listContacts();

  const result = products.find((contact) => contact.id === `${contactId}`);

  if (!result) {
    return null;
  }

  return result;
}

async function removeContact(contactId) {
  const products = await listContacts();

  const newListContacts = products.filter(
    (contact) => contact.id !== `${contactId}`
  );
  await fs.writeFile(contactsPath, JSON.stringify(newListContacts));

  return newListContacts;
}

async function addContact(name, email, phone) {
  const products = await listContacts();

  const newPoduct = { id: v4(), name, email, phone };
  products.push(newPoduct);

  await fs.writeFile(contactsPath, JSON.stringify(products));

  return newPoduct;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
