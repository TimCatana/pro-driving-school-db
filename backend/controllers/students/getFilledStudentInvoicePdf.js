const { studentTableHeadings, productTableHeadings, invoiceTableHeadings } = require("../../constants/dbConstants");
const fillStudentInvoicePdf = require("./utils/pdf/fillStudentInvoicePdf");
const makeDb = require("../../util/makeDb");
const open = require("open");
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentInvoicePdf = async (req, res) => {
  const studentSql = `
    SELECT 
      * 
    FROM 
      ${studentTableHeadings.tableName}  
    WHERE 
      ${studentTableHeadings.id} = ?;`;

  const productSql = `
    SELECT 
      * 
    FROM 
      ${productTableHeadings.tableName}  
    WHERE 
      ${productTableHeadings.productId} = ?;`;

  const invoiceIdSql = `
    SELECT 
      * 
    FROM 
      ${invoiceTableHeadings.tableName}  
    WHERE 
    ${invoiceTableHeadings.id} = ?;`;

  const incrementInvoiceIdSql = `
    UPDATE 
      ${invoiceTableHeadings.tableName} 
    SET 
      ${invoiceTableHeadings.invoiceId} = ?
    WHERE 
      ${invoiceTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    const studentResult = await db.query(studentSql, [req.params.primary_key]);
    const productResult = await db.query(productSql, [studentResult[0][studentTableHeadings.purchasedProduct]]);
    const invoiceResult = await db.query(invoiceIdSql, [1]);

    await fillStudentInvoicePdf(studentResult[0], productResult[0], invoiceResult[0][invoiceTableHeadings.invoiceId]);

    await db.query(incrementInvoiceIdSql, [parseInt(invoiceResult[0][invoiceTableHeadings.invoiceId]) + 1, 1]);

    await open(`./data/pdf/outputs/student_invoice_output.pdf`);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to get student invoice form pdf -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = getFilledStudentInvoicePdf;
