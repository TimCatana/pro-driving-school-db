# In Class Instructors

CREATE TABLE `pdsdb`.`in_class_inst` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `inst_drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `inst_drivers_license_exp_date` DATE NOT NULL,
  `first_name` VARCHAR(75) NOT NULL,
  `last_name` VARCHAR(75) NOT NULL
);


# In Car Instructors

CREATE TABLE `pdsdb`.`in_car_inst` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `inst_drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `inst_drivers_license_exp_date` DATE NOT NULL,
  `first_name` VARCHAR(75) NOT NULL,
  `last_name` VARCHAR(75) NOT NULL,
  `g_drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `g_drivers_license_exp_date` DATE NOT NULL
  );

# Products

CREATE TABLE `pdsdb`.`products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `productId` INT NOT NULL UNIQUE,
  `name` VARCHAR(250) NOT NULL UNIQUE,
  `price` DECIMAL(6,2) NOT NULL
);

# Courses

CREATE TABLE `pdsdb`.`courses` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `courseId` INT NOT NULL UNIQUE,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `is_digital` BIT NOT NULL,
  `capacity` INT NOT NULL,
  `in_class_instructor_id` INT NOT NULL,
  FOREIGN KEY(in_class_instructor_id) REFERENCES in_class_inst(id)
);


# Students

CREATE TABLE `pdsdb`.`students` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `first_name` VARCHAR(75) NOT NULL,
  `middle_name` VARCHAR(75) NULL,
  `last_name` VARCHAR(75) NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `gender` BIT NULL,
  `address` VARCHAR(150) NOT NULL,
  `address_city` VARCHAR(150) NOT NULL,
  `address_postal_code` VARCHAR(20) NOT NULL,
  `cell_phone_number` VARCHAR(20) NOT NULL,
  `home_phone_number` VARCHAR(20) NOT NULL,
  `drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `drivers_license_date_issued` DATE NULL,
  `drivers_license_exp_date` DATE NULL,
  `registered_course` INT NOT NULL,
  `purchased_product` INT NOT NULL,
  FOREIGN KEY(registered_course) REFERENCES courses(id),
  FOREIGN KEY(purchased_product) REFERENCES products(id)
);

# Drop order 

```
DROP TABLE students;
DROP TABLE products;
DROP TABLE courses;
DROP TABLE in_car_inst;
DROP TABLE in_class_inst;
```


# create order 

```
CREATE TABLE `pdsdb`.`in_class_inst` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `inst_drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `inst_drivers_license_exp_date` DATE NOT NULL,
  `first_name` VARCHAR(75) NOT NULL,
  `last_name` VARCHAR(75) NOT NULL
);

CREATE TABLE `pdsdb`.`products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `productId` INT NOT NULL UNIQUE,
  `name` VARCHAR(250) NOT NULL UNIQUE,
  `price` DECIMAL(6,2) NOT NULL
);

CREATE TABLE `pdsdb`.`in_car_inst` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `inst_drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `inst_drivers_license_exp_date` DATE NOT NULL,
  `first_name` VARCHAR(75) NOT NULL,
  `last_name` VARCHAR(75) NOT NULL,
  `g_drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `g_drivers_license_exp_date` DATE NOT NULL
  );

CREATE TABLE `pdsdb`.`courses` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
  `courseId` INT NOT NULL UNIQUE,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `is_digital` BIT NOT NULL,
  `capacity` INT NOT NULL,
  `in_class_instructor_id` INT NOT NULL,
  FOREIGN KEY(in_class_instructor_id) REFERENCES in_class_inst(id)
);

CREATE TABLE `pdsdb`.`students` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  `first_name` VARCHAR(75) NOT NULL,
  `middle_name` VARCHAR(75) NULL,
  `last_name` VARCHAR(75) NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `gender` BIT NULL,
  `address` VARCHAR(150) NOT NULL,
  `address_city` VARCHAR(150) NOT NULL,
  `address_postal_code` VARCHAR(20) NOT NULL,
  `cell_phone_number` VARCHAR(20) NOT NULL,
  `home_phone_number` VARCHAR(20) NOT NULL,
  `drivers_license_id` VARCHAR(100) NOT NULL UNIQUE,
  `drivers_license_date_issued` DATE NULL,
  `drivers_license_exp_date` DATE NULL,
  `registered_course` INT NOT NULL,
  `purchased_product` INT NOT NULL,
  FOREIGN KEY(registered_course) REFERENCES courses(id),
  FOREIGN KEY(purchased_product) REFERENCES products(id)
);



```