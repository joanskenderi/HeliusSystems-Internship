USE BikeCompany

/* Table for Shops */
CREATE TABLE Shops(
ID int PRIMARY KEY,
ShopName varchar(255) NOT NULL,
ShopAdress varchar(255) NOT NULL,
ID_City int FOREIGN KEY REFERENCES Cities(ID)
)

INSERT INTO Shops(ID, ShopName, ShopAdress)
VALUES
(1, 'Shop A', 'Adress D'),
(2, 'Shop B', 'Adress C'),
(3, 'Shop C', 'Adress B'),
(4, 'Shop D', 'Adress A')

SELECT * FROM Shops