-- Exercise 1
-- Find the longest time that an employee has been at the studio
SELECT MAX(years_employed) as Max_years_employed
FROM employees;
-- For each role, find the average number of years employed by employees in that role
SELECT role, AVG(years_employed) as Average_years_employed
FROM employees
GROUP BY role;
-- Find the total number of employee years worked in each building
SELECT role, AVG(years_employed) as Average_years_employed
FROM employees
GROUP BY role;

-- Exercise 2
-- Find the number of Artists in the studio (without a HAVING clause)
SELECT role, COUNT(*) as Number_of_artists
FROM employees
WHERE role = "Artist";
-- Find the number of Employees of each role in the studio
SELECT role, COUNT(*)
FROM employees
GROUP BY role;
-- Find the total number of years employed by all Engineers
SELECT role, SUM(years_employed)
FROM employees
GROUP BY role
HAVING role = "Engineer";

-- Exercise 3
-- Write a query to list the number of jobs available in the employees table.
SELECT COUNT(DISTINCT job_id) 
FROM employees;
-- Write a query to get the total salaries payable to employees.
SELECT SUM(salary) 
FROM employees;
-- Write a query to get the maximum salary of an employee working as a Programmer. 
SELECT MAX(salary) 
FROM employees 
WHERE job_id = 'IT_PROG';


