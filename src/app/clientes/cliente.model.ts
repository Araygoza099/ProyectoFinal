export interface Cliente {
    id: number;
    fecha: string;
    hora: number;
    nombre: string;
    apellido: string;
    telefono: string;
    animal: Animal;
}

export interface Animal{
    edad: number;
    color: string;
    raza: string;
    tiempo: string;
    comportamiento: string;
    img: string;
}
