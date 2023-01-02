# V1.1.0

#### Added new field to students table

```
ALTER TABLE students
 ADD in_car_inst_id INT NOT NULL
 DEFAULT (1),
ADD CONSTRAINT FOREIGN KEY(in_car_inst_id) REFERENCES in_car_inst(id);
```

#### made home phone number nullable

```
ALTER TABLE students MODIFY home_phone_number VARCHAR(20) NULL;
```