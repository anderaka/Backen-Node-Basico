'use strict';

const connect = require('./lib/connectMongo');
const anuncios = require('./models/anuncios')

connect.once('open', async () => {
    try {

        await initAnuncios();
        console.log("La importacion se realiza correctamente.")
        connect.close();

    } catch (err) {

        console.error('Hubo un error: ', err)
        process.exit(1);

    }

});

/*Inicializamos los anuncios*/ 

async function initAnuncios() {

    await anuncios.deleteMany();
    await anuncios.insertMany([
        { name: 'PS5', sell: true, price: 499, photo: 'ps5.JPG', tags: ['lifestyle'] },
        { name: 'Cadillac', sell: false, price: 48000, photo: 'Cadillac.JPG', tags: ['motor'] },
        { name: 'Pesas', sell: true, price: 150, photo: 'pesas.JPG', tags: ['lifestyle'] },
        { name: 'Bicicleta', sell: false, price: 99, photo: 'bicicleta.JPG', tags: ['lifestyle'] },
        { name: 'Rolls Royce', sell: false, price: 450500, photo: 'rols.JPG', tags: ['motor'] },
        { name: 'Lenovo Legion', sell: false, price: 1399, photo: 'lenovo.JPG', tags: ['work'] },
    ]);

}