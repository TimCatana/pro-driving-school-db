const addOneEntry = require("./addOneEntry");
const deleteOneEntry = require("./deleteOneEntry");
const editOneEntry = require("./editOneEntry");
const getAllEntries = require("./getAllEntries");
const getOneEntry = require("./getOneEntry");
const getFilledPdf = require("./getFilledPdf");

module.exports = {
  getAllEntries,
  getOneEntry,
  addOneEntry,
  editOneEntry,
  deleteOneEntry,
  getFilledPdf,
};
