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