const fs = require("fs");
const colors = require("colors");

const crearArchivo = async(multiplicador = 5, listar, hasta) => {
    try {
        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            consola += `${colors.magenta(multiplicador)} x ${colors.magenta(i)} = ${colors.blue(multiplicador * i)}\n`;
            salida += `${multiplicador} x ${i} = ${multiplicador * i}\n`;
        }

        if (listar) {
            console.log('========================================'.green);
            console.log('               TABLA DEL'.rainbow, colors.red(multiplicador));
            console.log('========================================'.green);
            console.log(consola);
        }


        // fs.writeFile(`tabla-${multiplicador}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log('Archivo creado');
        // })

        const nombreArchivo = `tabla-${multiplicador}.txt`;

        fs.writeFileSync(`./salida/${nombreArchivo}`, salida)

        return nombreArchivo;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}