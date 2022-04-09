USE BikeCompany

/* Table that connects Accessories and Bikes*/
CREATE TABLE Accessories_Bikes_Rel(
ID int PRIMARY KEY,
ID_Bike int FOREIGN KEY REFERENCES Bikes(ID),
ID_Accessor int FOREIGN KEY REFERENCES Accessories(ID)
)

INSERT INTO Accessories_Bikes_Rel(ID, ID_Bike, ID_Accessor)
VALUES
(1, 1, 2),
(2, 3, 3),
(3, 1, 3)

SELECT * FROM Accessories_Bikes_Rel