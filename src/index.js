
const messages = [
    'Juan',
    'Karla',
    'Jazmin',
    'Oscar',
    'Jonathan',
    'Jose',
    'Yessica'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

 module.exports = { randomMsg };