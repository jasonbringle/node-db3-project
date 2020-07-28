-- Multi-Table Query Practice
SELECT p.ProductName,
       s.companyname
  FROM Product AS p
       JOIN
       Supplier AS s ON p.supplierid = s.id;

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT productname,
       categoryname
  FROM product AS p
       JOIN
       supplier AS s ON p.SupplierId = s.id
       JOIN
       category AS c ON p.CategoryId = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT [order].id,
       s.companyname,
       [order].OrderDate
  FROM [order]
       JOIN
       shipper AS s ON [order].shipvia = s.id
 WHERE [order].OrderDate < '2012-08-09'
 ORDER BY [order].OrderDate DESC;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.productname,
       OD.quantity
  FROM [order]
       JOIN
       OrderDetail AS OD ON [order].id = OD.OrderId
       JOIN
       product AS p ON OD.ProductId = p.id
 WHERE OD.OrderId = 10251
 ORDER BY p.ProductName;


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT [order].id AS OrderNumber,
       c.CompanyName,
       e.LastName AS [Employees Last Name]
  FROM [order]
       JOIN
       customer AS c ON [order].CustomerId = c.id
       JOIN
       employee AS e ON [order].EmployeeId = e.id;

