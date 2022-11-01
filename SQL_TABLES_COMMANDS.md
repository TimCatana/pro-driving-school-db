# In Class Instructors

CREATE TABLE `pdsdb`.`in_class_inst` (
  `inst_drivers_licence_id` VARCHAR(100) PRIMARY KEY NOT NULL UNIQUE,
  `inst_drivers_licence_exp_date` DATE NOT NULL,
  `first_name` VARCHAR(75) NOT NULL,
  `last_name` VARCHAR(75) NOT NULL
  );


# In Car Instructors

CREATE TABLE `pdsdb`.`in_car_inst` (
  `inst_drivers_licence_id` VARCHAR(100) PRIMARY KEY NOT NULL UNIQUE,
  `inst_drivers_licence_exp_date` DATE NOT NULL,
  `first_name` VARCHAR(75) NOT NULL,
  `last_name` VARCHAR(75) NOT NULL,
  `g_drivers_licence_id` VARCHAR(100) NOT NULL UNIQUE,
  `g_drivers_licence_exp_date` DATE NOT NULL
  );

# Products

CREATE TABLE `pdsdb`.`products` (
  `id` INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
  `name` VARCHAR(250) NOT NULL UNIQUE,
  `price` DECIMAL(6,2) NOT NULL
);

# Courses

CREATE TABLE `pdsdb`.`courses` (
  `id` INT PRIMARY KEY NOT NULL UNIQUE,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `is_digital` BIT NOT NULL,
  `capacity` INT NOT NULL,
  `in_class_instructor_id` VARCHAR(100) NOT NULL,
  FOREIGN KEY(in_class_instructor_id) REFERENCES in_class_inst(inst_drivers_licence_id)
);

# Students

CREATE TABLE `pdsdb`.`students` (
  `id` INT PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
  `first_name` VARCHAR(75) NOT NULL,
  `middle_name` VARCHAR(75) NULL,
  `last_name` VARCHAR(75) NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `gender` BIT NULL,
  `address` VARCHAR(150) NOT NULL,
  `cell_phone_number` VARCHAR(20) NOT NULL,
  `home_phone_number` VARCHAR(20) NOT NULL,
  `drivers_licence_id` VARCHAR(100) NULL UNIQUE,
  `drivers_licence_date_issued` DATE NULL,
  `drivers_licence_exp_date` DATE NULL,
  `registered_course` INT NOT NULL,
  `purchased_product` INT NOT NULL,
  FOREIGN KEY(address) REFERENCES addresses(address),
  FOREIGN KEY(registered_course) REFERENCES courses(id),
  FOREIGN KEY(purchased_product) REFERENCES products(id)
);

# Addresses

CREATE TABLE `pdsdb`.`addresses` (
  `address` VARCHAR(150) PRIMARY KEY NOT NULL UNIQUE,
  `city` VARCHAR(150) NOT NULL,
  `postal code` VARCHAR(20) NOT NULL
);



