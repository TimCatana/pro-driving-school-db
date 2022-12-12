# Drop order

```
DROP TABLE students;
DROP TABLE products;
DROP TABLE courses;
DROP TABLE in_car_inst;
DROP TABLE in_class_inst;
DROP TABLE invoice_number;
```

# create order

```
CREATE DATABASE pdsdb;
USE pdsdb;

CREATE TABLE `pdsdb`.`in_class_inst` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `first_name` VARCHAR(75) NOT NULL,
  `last_name` VARCHAR(75) NOT NULL,
  `inst_drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `inst_drivers_license_exp_date` DATE NOT NULL
);

CREATE TABLE `pdsdb`.`products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `product_id` INT NOT NULL UNIQUE,
  `name` VARCHAR(250) NOT NULL UNIQUE,
  `price` DECIMAL(6,2) NOT NULL
);

CREATE TABLE `pdsdb`.`in_car_inst` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `first_name` VARCHAR(75) NOT NULL,
  `last_name` VARCHAR(75) NOT NULL,
  `inst_drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `inst_drivers_license_exp_date` DATE NOT NULL,
  `g_drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `g_drivers_license_exp_date` DATE NOT NULL
);

CREATE TABLE `pdsdb`.`courses` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `course_id` INT NOT NULL UNIQUE,
  `capacity` INT NOT NULL,
  `is_digital` VARCHAR(15) NOT NULL,
`start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `in_class_instructor_id` INT NOT NULL,
  FOREIGN KEY(in_class_instructor_id) REFERENCES in_class_inst(id)
);

CREATE TABLE `pdsdb`.`students` (
`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
`first_name` VARCHAR(75) NOT NULL,
`middle_name` VARCHAR(75) NULL,
`last_name` VARCHAR(75) NOT NULL,
`date_of_birth` DATE NOT NULL,
`gender` VARCHAR(15) NOT NULL,
`height` VARCHAR(15) NULL,
`address` VARCHAR(150) NOT NULL,
`address_apt_num` VARCHAR(20) NULL,
`address_city` VARCHAR(150) NOT NULL,
`address_state` VARCHAR(10) NOT NULL,
`address_postal_code` VARCHAR(20) NOT NULL,
`cell_phone_number` VARCHAR(20) NOT NULL,
`home_phone_number` VARCHAR(20) NOT NULL,
`drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
`drivers_license_class` VARCHAR(20) NOT NULL,
`drivers_license_issued_date` DATE NULL,
`drivers_license_exp_date` DATE NULL,
`registered_course` INT NOT NULL,
`purchased_product` INT NOT NULL,
FOREIGN KEY(registered_course) REFERENCES courses(course_id),
FOREIGN KEY(purchased_product) REFERENCES products(product_id)
);

CREATE TABLE `pdsdb`.`invoice_number` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `invoice_id` VARCHAR(20) NOT NULL
);

INSERT INTO invoice_number (invoice_id) VALUES (1);
```





...

BELOW FOR PDF
FIELDS PDF-LIB

```

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

```
