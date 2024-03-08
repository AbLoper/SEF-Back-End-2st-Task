const fs = require("fs")

const loadData = () => {

    try {
        const loadFile = fs.readFileSync("./data/dataFile.json").toString()
        return JSON.parse(loadFile)
    }

    catch {
        return []
    }

}

const saveData = (data) => {

    try {
        const saveFile = JSON.stringify(data)
        fs.writeFileSync("./data/dataFile.json", saveFile)
    }

    catch {
        console.log("Saving Data Failed");
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const addContact = (id, fname, lname, age, city) => {

    const dFile = loadData()

    const checkDuplicatedId = dFile.filter((obj) => {
        return obj.id === id
    })

    if (checkDuplicatedId.length == 0) {

        dFile.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })

        saveData(dFile)
    }
    else {
        console.log("ID Existing");
    }
}

////////////////////////////////////////////////

const delContact = (id) => {

    const dFile = loadData()

    const arrLength = dFile.length

    const itemsKeeped = dFile.filter((obj) => {
        return obj.id !== id
    })

    if (arrLength == itemsKeeped.length) {
        console.log("No Such Id")
    }
    else {
        console.log(itemsKeeped)
        saveData(itemsKeeped)
    }
}

////////////////////////////////////////////////

const readContact = (id) => {

    const dFile = loadData()

    const itemsKeeped = dFile.find((obj) => {
        return obj.id == id
    })

    if (itemsKeeped) {

        console.log(itemsKeeped);
    }
    else {
        console.log("No Such Id");
    }

    // console.log(itemsKeeped);

}



////////////////////////////////////////////////

const listContacts = (id) => {

    const dFile = loadData()

    const contactsFullName = dFile.find((item) => {

        return item.id == id

    })

    const fullName = contactsFullName.fname + " " + contactsFullName.lname

    console.log(fullName);

}

////////////////////////////////////////////////

module.exports = {
    addContact,
    delContact,
    readContact,
    listContacts
}
