USE employee_management_db;
INSERT INTO department (name)
 VALUES ("IT"),
		("Production"),
		("Engineering"),
		("Accounting"),
		("Sales");
-- SELECT * FROM department;

INSERT INTO role (title, salary, department_ID) 
VALUES ("Manager", 90000, 1),
("IT Tech", 70000, 1),
("Manager", 80000, 2),
("Team Lead", 45000, 2),
("Operator", 35000, 2),
("Manager", 110000 , 3),
 ("Software Engineer", 105000, 3),
 ("Lead Engineer", 120000, 3),
("Manager", 95000, 4),
("Accountant", 75000, 4),
("Manager", 110000, 5),
("Sales Lead", 105000, 5),
("Salesperson", 85000, 5);
-- SELECT * FROM role;

USE employee_management_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES  ("Joel", "Ale", 1, NULL ),
		("Larry", "Louise", 2, 1),
		("Danny", "Young", 3, NULL),
		("Jenny", "Johnson", 4, 3),
		("Joe", "Johnson", 5, 3),
		("Jose", "Knope", 6, NULL),
		("Ambaye", "Swanson", 7, 6),
		("Michael", "Ludgate",8, 6),
        ("Rose", "Awesome", 9, NULL),
        ("Lia", "Haverford", 10, 9);
-- SELECT * FROM employee;