USE BikeCompany

/* Table for Cities */
CREATE TABLE Cities(
ID int PRIMARY KEY,
CityName varchar(255) NOT NULL
)

INSERT INTO Cities(ID, CityName)
VALUES
(1, 'City A'),
(2, 'City B'),
(3, 'City C')

SELECT * FROM Cities