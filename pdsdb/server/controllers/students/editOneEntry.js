const { studentTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

const editOneEntry = async (req, res) => {
  const sql = `
  UPDATE 
    ${studentTableHeadings.tableName} 
  SET 
    ${studentTableHeadings.firstName} = ?,
    ${studentTableHeadings.middleName} = ?, 
    ${studentTableHeadings.lastName} = ?, 
    ${studentTableHeadings.dateOfBirth} = ?, 
    ${studentTableHeadings.gender} = ?, 
    ${studentTableHeadings.height} = ?, 
    ${studentTableHeadings.address} = ?, 
    ${studentTableHeadings.addressAptNum} = ?, 
    ${studentTableHeadings.addressCity} = ?, 
    ${studentTableHeadings.addressState} = ?, 
    ${studentTableHeadings.addressPostalCode} = ?, 
    ${studentTableHeadings.cellPhoneNumber} = ?, 
    ${studentTableHeadings.homePhoneNumber} = ?, 
    ${studentTableHeadings.driversLicenseId} = ?, 
    ${studentTableHeadings.driversLicenseClass} = ?, 
    ${studentTableHeadings.driversLicenseIssuedDate} = ?, 
    ${studentTableHeadings.driversLicenseExpDate} = ?, 
    ${studentTableHeadings.registeredCourse} = ?, 
    ${studentTableHeadings.purchasedProduct} = ?
  WHERE 
    ${studentTableHeadings.id} = ?;`;

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
      req.params.primary_key,
    ]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to edit student with id of ${req.params.primary_key} -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = editOneEntry;
