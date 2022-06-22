GO 
USE BikeCompany

CREATE VIEW gjona_amerikonsh AS
SELECT * FROM Cities
WHERE CityName = 'Tirane'


--PROCEDURAT

CREATE PROCEDURE usp_Bicikleta_Delete
@id AS int
AS
DELETE FROM Bikes
WHERE ID = @id
GO

CREATE PROCEDURE usp_Bicikleta_Insert
@Name AS varchar(50),
@Size AS int
AS
INSERT INTO Bikes(BikeName,BikeSize)
VALUES(@Name, @Size)
GO

CREATE PROCEDURE usp_Bicikleta_Update
@id AS int,
@Name AS varchar(50),
@Size AS int
AS
UPDATE Bikes
SET BikeName = @Name, BikeSize = @Size
WHERE ID = @id
GO

CREATE PROCEDURE usp_Bicikleta_Select
@id AS int = NULL,
@Name AS varchar(50),
@Size AS int
AS
SELECT * FROM Bikes
WHERE (ID = @id OR @id IS NULL)
AND (BikeName = @Name OR @Name IS NULL)
AND (BikeSize = @Size OR @Name IS NULL)
GO


-- DB car rental
--te krijohet nje funxion i cili kontrollon nqs klienti perfiton discount
--qe klienti te perfitoje discount duhet te kete bere me sh se 2 rezervime dhe te kete shpenzuar me sh se 500
--ne rastin kur e perfiton prgj do jet accepted dhe nqs nk e perfiton prgj do jet denied

CREATE FUNCTION check_for_discount(@client_id as INT) RETURNS VARCHAR(30)
as
BEGIN

    DECLARE @Pergjigja as VARCHAR(30);
    DECLARE @numer_rez as INT;
    DECLARE @spend_money as numeric(10,2);

    SET @numer_rez = (SELECT COUNT(*) FROM bookings WHERE client_id=@client_id);    
    SET @spend_money = (SELECT SUM(total_amount) FROM bookings WHERE client_id=@client_id);
    
    IF (@numer_rez > 2 AND @spend_money > 500)
	begin
		SET @Pergjigja = 'Accepted';
	end
    ELSE 
	begin
		SET @Pergjigja = 'Denied';
		end

	RETURN @Pergjigja;
END


SELECT check_for_discount(1)