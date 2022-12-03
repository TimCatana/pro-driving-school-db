const makeDb = require("../../util/makeDb");

const editOneEntry = async (req, res) => {
  const sql = `UPDATE students SET first_name=?, middle_name=?, last_name=?, date_of_birth=?, gender=?, address=?, address_city=?, address_postal_code=?, cell_phone_number=?, home_phone_number=?, drivers_license_id=?, drivers_license_date_issued=?, drivers_license_exp_date=?, registered_course=?, purchased_product=? WHERE id = ?`;
  let returnVal;

  const db = makeDb();

  try {
    const rows = await db.query(sql, [
      req.body.studentFirstName,
      req.body.studentMiddleName,
      req.body.studentLastName,
      req.body.studentDateOfBirth,
      req.body.studentGender,
      req.body.studentAddress,
      req.body.studentAddressCity,
      req.body.studentAddressPostalCode,
      req.body.studentCellPhoneNumber,
      req.body.studentHomePhoneNumber,
      req.body.studentDriversLicenseNumber,
      req.body.studentDriversLicenseNumberIssuedDate,
      req.body.studentDriversLicenseNumberExpDate,
      parseInt(req.body.studentRegisteredCourseId),
      parseInt(req.body.studentRegisteredProductId),
      req.params.primary_key,
    ]);

    returnVal = { status: 200, query: rows };
  } catch (e) {
    console.log(
      `ERROR - Failed to edit student with id of ${req.params.primary_key} -- ${e}`
    );
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = editOneEntry;
