CREATE DATABASE car_rental;
​
GO
USE car_rental;
​
CREATE TABLE cars
(
    car_id INT PRIMARY KEY IDENTITY,
    producer VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    year INT NOT NULL,
    horse_power INT NOT NULL,
    price_per_day INT NOT NULL
);
​
CREATE TABLE clients
(
    client_id INT PRIMARY KEY IDENTITY,
    name VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(30) NOT NULL
);
​
CREATE TABLE bookings
(
    booking_id INT PRIMARY KEY IDENTITY,
    client_id INT NOT NULL,
    car_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    total_amount INT NOT NULL
);
​
​
ALTER TABLE bookings 
ADD CONSTRAINT client_id_fk FOREIGN KEY (client_id) REFERENCES clients (client_id);
ALTER TABLE bookings 
ADD CONSTRAINT car_id_fk FOREIGN KEY (car_id) REFERENCES cars (car_id);
​
 
 INSERT INTO clients (name, surname, address, city) VALUES
 	('John', 'Smith', 'Wall Street 12', 'New York'), 
	('Andrew', 'Scott', 'Queen Victoria Street 1', 'London' ),
    ('Michal', 'Taki', 'os. Srodkowe 12', 'Poznan'),
    ('Pawel', 'Ktory', 'ul. Stara 11', 'Gdynia'),
    ('Anna', 'Inna', 'os. Srednie 1', 'Gniezno'),
    ('Alicja', 'Panna', 'os. Duze 33', 'Torun'),
    ('Damian', 'Papa', 'ul. Skosna 66', 'Warszawa'),
    ('Marek', 'Troska', 'os. Male 90', 'Radom'),
    ('Jakub', 'Klos', 'os. Polskie 19', 'Wadowice'),
    ('Lukasz', 'Lis', 'os. Podlaskie 90', 'Bialystok');    
​
INSERT INTO cars (producer, model, year, horse_power, price_per_day) VALUES
	('Seat', 'Leon', 2016, 80, 200),
	('Toyota', 'Avensis', 2014, 72, 100),
    ('Mercedes', 'CLK', 2018, 190, 400),
    ('Hyundai', 'Coupe', 2014, 165, 300),
    ('Dacia', 'Logan', 2015, 103, 150),
    ('Saab', '95', 2012, 140, 140),
    ('BMW', 'E36', 2007, 110, 80),
    ('Fiat', 'Panda', 2016, 77, 190),
    ('Honda', 'Civic', 2019, 130, 360),
    ('Volvo', 'XC70', 2013, 180, 280);
​
INSERT INTO bookings (client_id, car_id, start_date, end_date, total_amount) VALUES
	(1, 2, '2020-07-05', '2020-07-06', 100),
	(2, 2, '2020-07-10', '2020-07-12', 200),
    (3, 3, '2020-07-06', '2020-07-08', 400),
    (6, 10, '2020-07-10', '2020-07-16', 1680),
    (4, 5, '2020-07-11', '2020-07-14', 450),
    (5, 4, '2020-07-11', '2020-07-13', 600),
    (7, 3, '2020-07-12', '2020-07-14', 800),
    (5, 7, '2020-07-14', '2020-07-17', 240),
    (3, 8, '2020-07-14', '2020-07-16', 380),
    (5, 9, '2020-07-15', '2020-07-18', 1080),
    (6, 10, '2020-07-16', '2020-07-20', 1120),
    (8, 1, '2020-07-16', '2020-07-19', 600),
    (9, 2, '2020-07-16', '2020-07-21', 500),
    (10, 6, '2020-07-17', '2020-07-19', 280),
    (1, 9, '2020-07-17', '2020-07-19', 720),
    (3, 7, '2020-07-18', '2020-07-21', 240),
    (5, 4, '2020-07-18', '2020-07-22', 1200);



select city from bookings inner join clients on bookings.client_id = clients.client_id
inner join cars on bookings.car_id = cars.car_id
where start_date >= '2020-07-12' and end_date <='2020-07-20' and horse_power <=120
order by total_amount desc

-- te ndertohet nje raport(te behet select) i cili shfaq fuqine motorrike, modelin e makines dhe nr e hereve qe makina eshte rezervuar.te dhenat duhet te gruphoen sipas fuqise motorrike per gjithe makinat qe kane cmimin >= 300
SELECT horse_power, COUNT(*) 'Nr Rez' FROM bookings INNER JOIN cars
ON bookings.car_id=cars.car_id
WHERE cars.price_per_day>300
GROUP BY  (horse_power) -- LISTA AGREGIMEVE


-- te gjendet lista e klienteve(id jo emri) qe kane rezervuar me shume sesa 2 makina dhe mesastarja e lekeve te shpenzuar nga keta kliente
SELECT c.client_id, AVG(total_amount) 'mesatarja' FROM bookings INNER JOIN clients c
ON bookings.client_id=c.client_id
GROUP BY c.client_id
HAVING COUNT(*) > 2