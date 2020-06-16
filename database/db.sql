
CREATE DATABASE appAmbiental;

use appAmbiental;

CREATE TABLE reportes(
    problem_id INT(15) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Problema VARCHAR(200) NOT NULL,
    Departamento VARCHAR(100) NOT NULL,
    Municipio VARCHAR(100) NOT NULL,
    Localidad VARCHAR(100) NOT NULL,
    Fecha VARCHAR(200) NOT NULL,
    Descripcion VARCHAR(200) NOT NULL,
    EscalaPeligro VARCHAR(10) NOT NULL
);


SHOW TABLES;

describe reportes;