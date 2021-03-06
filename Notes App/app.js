const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk')
const { argv } = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// create add comand 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe:'remove a node',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        notes.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command:'read',
    describe:'read the note',
    handler(){
        console.log("reading the new note")
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list of all notes',
    handler(){
        notes.listNotes()
    }
})
yargs.parse()
//console.log(yargs.argv)

