/*
** Author: Seokgyun Kang
*/

-- Query Data in four Tables
SELECT * from SalesLT.Address;
SELECT * from SalesLT.Customer;
SELECT * from SalesLT.Product;
SELECT * from SalesLT.SalesOrderDetail;

-- Customer list SQL SELECT Statement used in the application. 
SELECT TOP(20) 
    CustomerID, Title, FirstName, LastName, 
    CompanyName, EmailAddress, Phone
    FROM salesLT.customer

-- Joining two tables
SELECT oh.CustomerID, cu.FirstName, cu.LastName, 
    oh.SalesOrderID, oh.OrderDate, oh.TotalDue
FROM salesLT.SalesOrderHeader as oh
JOIN SalesLT.Customer as cu
on oh.CustomerID = cu.CustomerID;