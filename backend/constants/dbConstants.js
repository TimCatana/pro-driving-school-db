const courseTableHeadings = {
  tableName: "courses",
  id: "id",
  courseId: "course_id",
  capacity: "capacity",
  isDigital: "is_digital",
  startDate: "start_date",
  endDate: "end_date",
  inClassInstructorId: "in_class_instructor_id",
};

const productTableHeadings = {
  tableName: "products",
  id: "id",
  productId: "product_id",
  name: "name",
  price: "price",
};

const inClassInstTableHeadings = {
  tableName: "in_class_inst",
  id: "id",
  firstName: "first_name",
  lastName: "last_name",
  driversLicenseId: "inst_drivers_license_id",
  driversLicenseExpDate: "inst_drivers_license_exp_date",
};

const inCarInstTableHeadings = {
  tableName: "in_car_inst",
  id: "id",
  firstName: "first_name",
  lastName: "last_name",
  driversLicenseId: "inst_drivers_license_id",
  driversLicenseExpDate: "inst_drivers_license_exp_date",
  gDriversLicenseId: "g_drivers_license_id",
  gDriversLicenseExpDate: "g_drivers_license_exp_date",
};

const studentTableHeadings = {
  tableName: "students",
  id: "id",
  firstName: "first_name",
  middleName: "middle_name",
  lastName: "last_name",
  dateOfBirth: "date_of_birth",
  gender: "gender",
  height: "height",
  address: "address",
  addressAptNum: "address_apt_num",
  addressCity: "address_city",
  addressPostalCode: "address_postal_code",
  cellPhoneNumber: "cell_phone_number",
  homePhoneNumber: "home_phone_number",
  driversLicenseId: "drivers_license_id",
  driversLicenseClass: "drivers_license_class",
  driversLicenseIssuedDate: "drivers_license_issued_date",
  driversLicenseExpDate: "drivers_license_exp_date",
  registeredCourse: "registered_course",
  purchasedProduct: "purchased_product",
};

module.exports = {
  courseTableHeadings,
  productTableHeadings,
  inClassInstTableHeadings,
  inCarInstTableHeadings,
  studentTableHeadings,
};
