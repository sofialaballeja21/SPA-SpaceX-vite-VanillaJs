// src/utils/getHash.js
const getHash = () => {
    return window.location.hash.slice(2).toLowerCase(); // Obtiene el ID del hash, removiendo el símbolo #/
};

export default getHash;
