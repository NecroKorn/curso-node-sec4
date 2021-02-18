const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de latbla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla de los cambios'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Es hasta donde se calcula la tabla'
                })
                .check( ( argv, options ) => {
                    if( isNaN( argv.base )) {
                        throw 'La base tiene que ser un número'
                    }
                    if( isNaN( argv.hasta )) {
                        throw 'El tope para calcular tiene que ser un número'
                    }
                    if(argv.hasta < 1) {
                        throw 'El tope para calcular tiene que ser maroy a 0'
                    }
                    return true;
                })
                .argv;

module.exports = argv;