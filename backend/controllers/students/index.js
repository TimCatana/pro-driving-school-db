const addOneEntry = require("./addOneEntry");
const deleteOneEntry = require("./deleteOneEntry");
const editOneEntry = require("./editOneEntry");
const getAllEntries = require("./getAllEntries");
const getOneEntry = require("./getOneEntry");
const getFilledStudentApplicationFormPdf = require("./getFilledStudentApplicationFormPdf");
const getFilledStudentInCarEvaluationPdf = require("./getFilledStudentInCarEvaluationPdf");
const getFilledStudentInCarRecordPdf = require("./getFilledStudentInCarRecordPdf");
const getFilledStudentInvoicePdf = require("./getFilledStudentInvoicePdf");
const getFilledStudentRecordPdf = require("./getFilledStudentRecordPdf");

module.exports = {
  getAllEntries,
  getOneEntry,
  addOneEntry,
  editOneEntry,
  deleteOneEntry,
  getFilledStudentApplicationFormPdf,
  getFilledStudentInCarEvaluationPdf,
  getFilledStudentInCarRecordPdf,
  getFilledStudentInvoicePdf,
  getFilledStudentRecordPdf,
};
