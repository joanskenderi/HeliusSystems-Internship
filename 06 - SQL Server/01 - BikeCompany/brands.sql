USE BikeCompany

/* Table for Brands */
CREATE TABLE Brands(
ID int PRIMARY KEY,
BrandName varchar(255) NOT NULL
)

INSERT INTO Brands(ID, BrandName)
VALUES
(1, 'Brand A'),
(2, 'Brand B'),
(3, 'Brand C')

SELECT * FROM Brands