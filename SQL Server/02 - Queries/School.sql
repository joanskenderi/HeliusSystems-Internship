CREATE DATABASE School

GO
USE School

create table student(id int, name varchar(20),classID int, marks varchar(20));
Insert into student values(1,'pinky',3,2.4);
Insert into student values(2,'bob',3,1.44);
Insert into student values(3,'Jam',1,3.24);
Insert into student values(4,'lucky',2,2.67);
Insert into student values(5,'ram',2,4.56);


Create table teacher(id int, name varchar(20), subject varchar(10), classID int, salary int);
Insert into teacher values(1,'bhanu','computer',3,5000);
Insert into teacher values(2,'rekha','science',1,5000);
Insert into teacher values(3,'siri','social',NULL,4500);
Insert into teacher values(4,'kittu','maths',2,5500);

Create table class(id int, grade int, teacherID int, noofstudents int);
insert into class values(1,8,2,20);
insert into class values(2,9,3,40);
insert into class values(3,10,1,38);

-- Merr ID ku teacher = me math ose science
SELECT AVG(noofstudents) FROM class
WHERE teacherID IN(SELECT ID from teacher 
WHERE subject = 'maths' OR subject = 'science')

-- Te gjenden ata studente qe i perkasin klases qe kane nr me te madh te studenteve
SELECT * FROM student
WHERE classID = (
   SELECT id
   FROM class
   WHERE noofstudents = (
      SELECT MAX(noofstudents)
      FROM class));