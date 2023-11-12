CREATE DATABASE [roi_database]
GO

USE [roi_database]


-- Drop the People and Departments tables if they exist
IF OBJECT_ID('People', 'U') IS NOT NULL
BEGIN
    DROP TABLE People;
END

IF OBJECT_ID('Departments', 'U') IS NOT NULL
BEGIN
    DROP TABLE Departments;
END

-- Create Departments table
CREATE TABLE Departments (
    Id INT PRIMARY KEY,
    Name NVARCHAR(255) NOT NULL
);

-- Insert data into the Departments table
INSERT INTO Departments (Id, Name)
VALUES
    (0, 'General'),
    (1, 'Information Communications Technology'),
    (2, 'Finance'),
    (3, 'Marketing'),
    (4, 'Human Resources');


-- Create People table
CREATE TABLE People (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(255) NOT NULL,
    Phone NVARCHAR(20) NOT NULL,
    DepartmentId INT,
    Street NVARCHAR(255) NOT NULL,
    City NVARCHAR(255) NOT NULL,
    State NVARCHAR(255) NOT NULL,
    ZIP NVARCHAR(10) NOT NULL,
    Country NVARCHAR(255) NOT NULL,
    FOREIGN KEY (DepartmentId) REFERENCES Departments(Id)
);

-- Enable IDENTITY_INSERT for the People table
SET IDENTITY_INSERT People ON;

-- Insert data into the People table
INSERT INTO People (Id, Name, Phone, DepartmentId, Street, City, State, ZIP, Country)
VALUES
    (1, 'John Smith', '02 9988 2211', 1, '1 Code Lane', 'Javaville', 'NSW', '0100', 'Australia'),
    (2, 'Sue White', '03 8899 2255', 2, '16 Bit way', 'Byte Cove', 'QLD', '1101', 'Australia'),
    (3, 'Bob O'' Bits', '05 7788 2255', 3, '8 Silicon Road', 'Cloud Hills', 'VIC', '1001', 'Australia'),
    (4, 'Mary Blue', '06 4455 9988', 2, '4 Processor Boulevard', 'Appletson', 'NT', '1010', 'Australia'),
    (5, 'Mick Green', '02 9988 1122', 3, '700 Bandwidth Street', 'Bufferland', 'NSW', '0110', 'Australia');

-- Disable IDENTITY_INSERT for the People table
SET IDENTITY_INSERT People OFF;