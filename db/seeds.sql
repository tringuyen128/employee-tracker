INSERT INTO department(department_name)
VALUES("Engineering"), ("Sales"), ("Finance"), ("Legal"), ("Marketing");

INSERT INTO role(title, salary, department_id)
VALUES("Engineer", 120000, 1), ("Senior Engineer", 180000, 1), ("CFO", 390000, 3), ("Chief Counsel", 320000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Danny', 'Smith', 1, 2), ('Jenny', 'Sand', 1, null), ('Ron', 'Goodman', 1, 2), ('James', 'Doe', 2, 2), ('Larry', 'Tran', 4, null);