CREATE DATABASE bank_loans

USE bank_loans
GO

-- loan table
CREATE TABLE loan (
loan_id int PRIMARY KEY,
loan_amout decimal(19, 2) NOT NULL,
status_id int NOT NULL,
loan_ref_no varchar(50) NOT NULL,
is_active bit NOT NULL
)