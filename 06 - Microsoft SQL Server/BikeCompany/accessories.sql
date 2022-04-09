USE BikeCompany

/* Table for Accessories */
CREATE TABLE Accessories(
ID int PRIMARY KEY,
AccessorName varchar(255),
AccessorPrice int NOT NULL
)

INSERT INTO Accessories(ID, AccessorName, AccessorPrice)
VALUES
(1, 'Accessor A', 300),
(2, 'Accessor B', 400),
(3, 'Accessor C', 200)

SELECT * FROM Accessories