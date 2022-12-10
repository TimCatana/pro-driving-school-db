const addOneEntry = require("./addOneEntry");
const deleteOneEntry = require("./deleteOneEntry");
const editOneEntry = require("./editOneEntry");
const getAllEntries = require("./getAllEntries");
const getMostRecentEntry = require("./getMostRecentEntry");
const getOneEntry = require("./getOneEntry");

module.exports = {
  getAllEntries,
  getOneEntry,
  getMostRecentEntry,
  addOneEntry,
  editOneEntry,
  deleteOneEntry,
};
