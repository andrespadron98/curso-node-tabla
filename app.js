const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

// const multiplicador = 6;

// const [, , arg3 = 'base=5'] = process.argv;
// const [, multiplicador = 5] = arg3.split('=')

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);

crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(archivo))
    .catch(error => console.log(error));