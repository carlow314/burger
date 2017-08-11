CREATE DATABASE burgers;
USE burgers;

CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  devoured boolean not null default 0,
  date timestamp NOT NULL,
  PRIMARY KEY(id)
);
