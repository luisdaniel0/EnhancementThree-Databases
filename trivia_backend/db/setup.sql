-- create database
CREATE DATABASE quiz_app;

-- use database
USE quiz_app;


-- questions table
CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(255),
    img VARCHAR(255),
    a VARCHAR(255),
    b VARCHAR(255),
    c VARCHAR(255),
    d VARCHAR(255),
    answer CHAR(1)
);

--all questions
INSERT INTO questions (question, img, a, b, c, d, answer) VALUES
("Illmatic (1994)", "img/IllmaticNas.jpeg", "Biggie", "Jay Z", "Drake", "Nas", "D"),
("My Beautiful Dark Twisted Fantasy (2010)", "img/MBDTF.jpeg", "Drake", "Frank Ocean", "Andre 3000", "Kanye West", "D"),
("Get Rich or Die Tryin (2003)", "img/Get-rich-or-die-tryin.jpeg", "50 cent", "Jadakiss", "DMX", "Lloyd Banks", "A"),
("Come Home with Me (2002)", "img/come-home-with-me.jpeg", "Juelz Santana", "Lil wayne", "Cam'ron", "Eminem", "C"),
("Tha Carter III (2008)", "img/Carter3.jpeg", "50 Cent", "Eminem", "Lil Wayne", "Drake", "C"),
("Blond (2016)", "img/blond.jpeg", "The Weeknd", "Frank Ocean", "Steve Lacy", "Tyler, The Creator", "B"),
("Trilogy (2012)", "img/trilogy.png", "Frank Ocean", "Chris Brown", "The Weeknd", "Drake", "C"),
("17 (2017)", "img/17_xxxtentacion.png", "XXXTENTACION", "Kendrick lamar", "J.Cole", "Future", "A"),
("The Life of Pablo (2016)", "img/The_life_of_pablo_alternate.jpeg", "Kid Cudi", "Travis Scott", "Kanye West", "Pablo Escobar", "C"),
("Ready to Die (1994)", "img/Ready_To_Die.jpeg", "2pac", "The Notorious B.I.G.", "Big L", "Mase", "B");

