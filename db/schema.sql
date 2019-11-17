CREATE DATABASE burgerDB;

USE burgerDB;

CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    eaten boolean DEFAULT flase,
    PRIMARY KEY (id)
)

INSERT INTO burgers (name) VALUES  ("Bacon Burger");
INSERT INTO burgers (name) VALUES ("Chicken Burger");
INSERT INTO burgers (name, eaten) VALUES ("Veggie Burger", true);
INSERT INTO burgers (name, eaten) VALUES ("Portobello Burger", true) ;
INSERT INTO burgers (name, eaten) VALUES ("Salmon Burger" , true);
INSERT INTO burgers (name) VALUES ("Black Bean Burger");