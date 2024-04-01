console.log("hola mundo desde TS, holaaa");

// interfaz
interface Usuario {
    nombre: string,
    edad: number,
    role: Roles;
}

// tipado enum (por defecto)
enum Roles {
    Administrador = "admin",
    Usuario = "user",
}

let usuarios: Usuario[] = [
    { nombre: "Naruto", edad: 13, role: Roles.Administrador },
];

