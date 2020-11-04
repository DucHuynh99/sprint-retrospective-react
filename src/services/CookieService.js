import Cookies from 'universal-cookie';


const cookies = new Cookies();


function write(key, value) {
    return cookies.set(key, value);
};


function read(key) {
    return cookies.get(key);
};


function clear(key) {
    return cookies.remove(key);
};

const func = { write, read, clear };

export default func;