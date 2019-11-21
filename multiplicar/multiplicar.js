const fs = require('fs');
const colors = require('colors');

listar = (base, limite = 5) => {        
    for (let i = 0; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`.green)
    }
}

crearArchivo = (base, limite = 5) => {
    
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`La base '${base}' introducida, no es un numero`)
            return;
        }
        let datos = ''
        
        for (let i = 0; i <= limite; i++) {
            datos += `${base}*${i}=${base*i}\n`
        }
        
        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/table-${base}-to-${limite}.txt`, data, (err) => {
            if (err) return reject(err)
            else resolve(`table-${base}-to-${limite}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listar
}