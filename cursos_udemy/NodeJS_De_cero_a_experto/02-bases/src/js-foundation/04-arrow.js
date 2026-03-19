const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];

const getUserById = (id, callback) =>{
    const user = users.find((user) => user.id === id);

    if(!user){
        return callback(`User not found with id: ${id}`);
    }
    ( user ) ? callback(null, user) : callback(`User not found with id: ${id}`);
}


// function getUserById(id, callback){
//     const user = users.find((user) =>{
//         return user.id === id;
//     });

//     if(!user){
//         return callback(`User not found with id: ${id}`);
//     }

//     return callback(null, user);
// }

module.exports = {
    getUserById,
}