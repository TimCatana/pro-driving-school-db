const { studentTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

/**
 *
 * @param {
 * } req
 * @param {*} res
 */
const addOneEntry = async (req, res) => {
  const sql = `
  INSERT INTO 
    ${studentTableHeadings.tableName} 
  (
    ${studentTableHeadings.firstName}, 
    ${studentTableHeadings.middleName}, 
    ${studentTableHeadings.lastName}, 
    ${studentTableHeadings.dateOfBirth}, 
    ${studentTableHeadings.gender}, 
    ${studentTableHeadings.height}, 
    ${studentTableHeadings.address}, 
    ${studentTableHeadings.addressAptNum}, 
    ${studentTableHeadings.addressCity}, 
    ${studentTableHeadings.addressState}, 
    ${studentTableHeadings.addressPostalCode}, 
    ${studentTableHeadings.cellPhoneNumber}, 
    ${studentTableHeadings.homePhoneNumber}, 
    ${studentTableHeadings.driversLicenseId}, 
    ${studentTableHeadings.driversLicenseClass}, 
    ${studentTableHeadings.driversLicenseIssuedDate}, 
    ${studentTableHeadings.driversLicenseExpDate}, 
    ${studentTableHeadings.registeredCourse}, 
    ${studentTableHeadings.purchasedProduct}
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  const db = makeDb();
  try {
    await db.query(sql, [
      req.body.studentFirstName,
      req.body.studentMiddleName,
      req.body.studentLastName,
      req.body.studentDateOfBirth,
      req.body.studentGender,
      req.body.studentHeight,
      req.body.studentAddress,
      req.body.studentAddressAptNumber,
      req.body.studentAddressCity,
      req.body.studentAddressState,
      req.body.studentAddressPostalCode,
      req.body.studentCellPhoneNumber,
      req.body.studentHomePhoneNumber,
      req.body.studentDriversLicenseNumber,
      req.body.studentDriversLicenseClass,
      req.body.studentDriversLicenseNumberIssuedDate,
      req.body.studentDriversLicenseNumberExpDate,
      parseInt(req.body.studentRegisteredCourseId),
      parseInt(req.body.studentRegisteredProductId),
    ]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to add student to database -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = addOneEntry;
