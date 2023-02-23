--Creando Base de datos portfolio
create database portfolio;
use portfolio;
--1
--Tabla de proximas tecnologias
CREATE TABLE proxim_Technology (
    id int auto_increment not null,
    name varchar(255) not null,
    image varchar(255) not null,
    primary key(id)
);
--2
--Tabla Tecnologias aprendidas
CREATE TABLE technology (
    id int auto_increment not null,
    name varchar(255) not null,
    image varchar(255) not null,
    primary key(id)
);
--3
--State of project
CREATE TABLE state_project (
    id int auto_increment not null primary key,
    name varchar(50) not null,
    border_color varchar(55) not null,
    background_color varchar(55) not null
);
--4
--TABLE role
CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    role varchar(50) not null,
    description TEXT NOT NULL
);
INSERT INTO role (role, description)
VALUES ("admin", "todos los permisos");
INSERT INTO role (role, description)
VALUES ("invitado", "Solo lectura");
--5
--Creando tabla de proyecto
create table project (
    id int auto_increment not null,
    title varchar(255) not null,
    description TEXT,
    uriProject varchar(255) not null,
    uriRepository varchar(255) not null,
    image varchar(255) not null,
    state int not null,
    foreign key(state) references state_project(id),
    primary key(id),
);
--6
--TABLE user
CREATE TABLE user (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name varchar(50),
    email varchar(50),
    password varchar(50),
    role int,
    foreign key (role) references role(id)
);
INSERT INTO user (name, email, password, role)
VALUES (
        "admin",
        "admin@gmail.com",
        "prueba1234",
        1
    );
INSERT INTO user (name, email, password, role)
VALUES (
        "Invitado",
        "invitado@invitado.com",
        "invitado",
        2
    );
--
--PARA LA SIGUIENTE VERSION AGREGAR ESTA TABLA
--Tabla proyect_detail
CREATE table project_technology (
    project_id int not null,
    technology_id int not null,
    foreign key(project_id) references project(id),
    foreign key(technology_id) references technology(id),
    primary key(project_id, technology_id)
);