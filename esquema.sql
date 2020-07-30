CREATE DATABASE IF NOT EXISTS pruebas;
USE pruebas;

CREATE TABLE datos_usuarios (
  nombre varchar(250) NOT NULL,
  apellido varchar(250) NOT NULL,
  curp varchar(250) NOT NULL,
  email varchar(250) NOT NULL
);
