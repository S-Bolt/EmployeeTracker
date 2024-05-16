\c employees_db;

INSERT INTO departments
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, departments_id)
VALUES
    ('Sales Lead', 200000, 1),
    ('Salesperson', 75000, 1),
    ('Lead Engineer', 225000, 2),
    ('Software Engineer', 100000, 2),
    ('Account Manager', 200000, 3),
    ('Accountant', 115000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 150000, 4);