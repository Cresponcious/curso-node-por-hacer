'use strict'

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca la tarea como completada o no'
}

const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}
const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const optBorrar = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Elimina una actividad de la BD', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}