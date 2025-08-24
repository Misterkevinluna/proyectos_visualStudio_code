import { IContacto } from '../models/contacto.interface';

// Exportamos una lista simulada de contactos
export const CONTACTOS: IContacto[] = [
    {
        id: 0,
        nombre: 'Martín',
        apellidos: 'San José',
        email: 'martin@imaginagroup.com',
        edad: 30
    },
    {
        id: 1,
        nombre: 'Juan',
        apellidos: 'García Lopez',
        email: 'juan@imaginagroup.com',
        edad: 35
    },
    {
        id: 2,
        nombre: 'Natalia',
        apellidos: 'Giménez Lopez',
        email: 'natalia@imaginagroup.com',
        edad: 20
    }
]