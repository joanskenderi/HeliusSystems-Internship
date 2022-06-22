CREATE DATABASE bike_company

USE bike_company
GO

-- bikes table
CREATE TABLE bikes(
bike_id int PRIMARY KEY IDENTITY,
bike_name varchar(255) NOT NULL,
bike_size int NOT NULL,
brand_id int NOT NULL
)


-- shops table
CREATE TABLE shops(
shop_id int  PRIMARY KEY IDENTITY,
shop_name varchar(255) NOT NULL,
shop_adress varchar(255) NOT NULL
)