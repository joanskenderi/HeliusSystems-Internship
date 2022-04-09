USE BikeCompany

/* Table for Bikes */
CREATE TABLE Bikes(
ID int PRIMARY KEY,
BikeName varchar(255) NOT NULL,
BikeSize int NOT NULL,
ID_Brand int FOREIGN KEY REFERENCES Brands(ID)
)

INSERT INTO Bikes(ID, BikeName, BikeSize)
VALUES
(1, 'Bike A', 24),
(2, 'Bike B', 25),
(3, 'Bike C', 26),
(4, 'Bike D', 24)

SELECT * FROM Bikes