USE BikeCompany

/* Table for Quantities */
CREATE TABLE Quantities(
ID int PRIMARY KEY,
ID_Bike int FOREIGN KEY REFERENCES Bikes(ID),
ID_Shop int FOREIGN KEY REFERENCES Shops(ID)
)

INSERT INTO Quantities(ID, ID_Bike, ID_Shop)
VALUES
(1, 1, 1),
(2, 2, 1),
(3, 2, 2),
(4, 3, 2)

SELECT * FROM Quantities