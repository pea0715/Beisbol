CREATE TABLE equipos (
    idEquipo INT PRIMARY KEY,
    nombreEquipo VARCHAR(255),
    ciudad VARCHAR(100),
    liga VARCHAR(50),
    fecha DATE
);
CREATE TABLE jugadores (
    idNombre INT PRIMARY KEY,
    NombreJugador VARCHAR(255),
    posicion VARCHAR(50),
    equipo VARCHAR(100),
    numeroCamisa INT
);
INSERT INTO jugadores (idNombre, NombreJugador, posicion, equipo, numeroCamisa)
VALUES
    (1, 'Juan Martinez', 'Pitcher', 'Aguilas', 34),
    (2, 'Maria Gonzalez', 'Catcher', 'Tigres', 12),
    (3, 'Carlos Rodriguez', 'Shortstop', 'Leones', 6),
    (4, 'Ana Perez', 'Outfielder', 'Caimanes', 21),
    (5, 'Luis Hernandez', 'First Base', 'Estrellas', 9);


INSERT INTO equipos (idEquipo, nombreEquipo, ciudad, liga, fecha)
VALUES
    (1, 'Aguilas', 'Ciudad Aguilera', 'Liga Nacional', '2023-08-14'),
    (2, 'Tigres', 'Ciudad Felina', 'Liga Nacional', '2023-08-14'),
    (3, 'Leones', 'Ciudad León', 'Liga Nacional', '2023-08-14'),
    (4, 'Caimanes', 'Ciudad Pantano', 'Liga Americana', '2023-08-14'),
    (5, 'Estrellas', 'Ciudad Brillante', 'Liga Americana', '2023-08-14');