const makeDb = require("../../util/makeDb");

const editOneEntry = async (req, res) => {
  const sql = `UPDATE in_car_inst SET inst_drivers_license_id=?, inst_drivers_license_exp_date=?, first_name=?, last_name=?, g_drivers_license_id=?, g_drivers_license_exp_date=? WHERE id = ?`;
  let returnVal;

  const db = makeDb();

  try {
    const rows = await db.query(sql, [
      req.body.iciDriversLicenseNum,
      req.body.iciDriversLicenseExpDate,
      req.body.iciFirstName,
      req.body.iciLastName,
      req.body.iciGLicenseNum,
      req.body.iciGLicenseExpDate,
      req.params.primary_key,
    ]);

    returnVal = { status: 200, query: rows };
  } catch (e) {
    console.log(
      `ERROR - Failed to edit in car instructor with id of ${req.params.primary_key} -- ${e}`
    );
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = editOneEntry;
