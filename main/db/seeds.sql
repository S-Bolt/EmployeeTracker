INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Manager', 125,000, 1),
       ('Sales Associate', 75,000, 1),
       ('Lead Engineer', 200,000, 2),
       ('Software Engineer', 125,000, 2),
       ('Account Manager', 145,000. 3),
       ('Accountant', 100,000. 3),
       ('Legal Team Lead', 150,000, 4),
       ('Lawyer', 100,000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Bobby', 'Clark', 1,Null)
        ('Nelly', 'Smith', 2, 1)
        ('Jackie', 'Miller', 3, Null)
        ('Rah', 'Dahm', 4, 3)
        ('Tyson', 'Roglin', 5, Null)
        ('Tiffany', 'Boston', 6, 5)
        ('Jordan', 'Mendez', 7, Null)
        ('Sophia', 'Ramirez', 8, 7)
