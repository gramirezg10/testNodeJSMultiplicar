const { crearArchivo, listar } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const colors = require('colors/safe');

let comando = argv._[0]

switch(comando.toLocaleUpperCase()){
  case 'CREAR':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(colors.gray(`Archivo creado: ${archivo}`)))
      .catch(e => console.log(e))
    break
  case 'LISTAR':
    console.log('listar')
    listar(argv.base, argv.limite)
    break
  default:
    console.log('comando no reconocido')
    break
}


// let parameter = argv[2]

// if (!parameter) {
//   console.log('no hay parametros, ademas, mi novia esta loca!!!!')
//   return;
// }
// let base
// if (parameter.split('=')[0].toUpperCase() == 'BASE'){
//   base = parameter.split('=')[1]
//   console.log(base, 'base introducida')
// } else {
//   console.log('como el primer parametro no es la base, voy a multiplicar por 5')
//   base = 5
// }
