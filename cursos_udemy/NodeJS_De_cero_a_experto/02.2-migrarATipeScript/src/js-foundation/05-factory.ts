// const { getAge, getUuid } = require('../plugins');

export interface BuildMakerPersonOptions{
    getUuid: () => string;
    getAge: (birthdate: string) => number; 
}

export interface PersonOptions{
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUuid, getAge }: BuildMakerPersonOptions) =>{
    return ({ name, birthdate }: PersonOptions) => {
        return {
            id: getUuid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
} 
