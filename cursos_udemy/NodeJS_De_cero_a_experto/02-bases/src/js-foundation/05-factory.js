// const { getAge, getUuid } = require('../plugins');

const buildMakePerson = ({ getUuid, getAge }) =>{
    return ({ name, birthdate }) => {
        return {
            id: getUuid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
} 

module.exports ={
    buildMakePerson,
};