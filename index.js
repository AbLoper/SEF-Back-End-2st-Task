// const x = require("./fileData.js")
const functions = require("./functions/functions.js")
const yargs = require("yargs")

///////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command: "add",
    describe: "add new contact",
    builder: {
        id: {
            describe: "identifier of contact",
            demandOption: "true",
            typeof: "number",
        },
        fname: {
            describe: "first name of contact",
            demandOption: "true",
            typeof: "string",
        },
        lname: {
            describe: "last name of contact",
            demandOption: "true",
            typeof: "string",
        },
        age: {
            describe: "age of contact",
            demandOption: "true",
            typeof: "number",
        },
        city: {
            describe: "city of contact",
            demandOption: "false",
            typeof: "string",
        },
    },
    handler: (hndlr) => {
        functions.addContact(hndlr.id, hndlr.fname, hndlr.lnama, hndlr.age, hndlr.city)
    }
})

yargs.command({
    command: "del",
    describe: "delete a contact",
    builder: {},
    handler: (hndlr) => {
        functions.delContact(hndlr.id)
    }
})

yargs.command({
    command: "read",
    describe: "read a contact",
    builder: {},
    handler: (hndlr) => {
        functions.readContact(hndlr.id)
    }
})

yargs.command({
    command: "list",
    describe: "list contact full name",
    builder: {},
    handler: (hndlr) => {
        functions.listContacts(hndlr.id)
    }
})


// console.log(yargs.argv);
// console.log(process.argv);
yargs.parse()