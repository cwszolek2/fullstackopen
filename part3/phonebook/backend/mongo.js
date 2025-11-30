const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as an argument')
    process.exit(1)
} else if (process.argv.length > 5) {
    console.log('too many arguments given')
    process.exit(1)
} else if (process.argv.length === 4) {
    console.log('please provide phone number')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://cwszolek2:${password}@cluster0.hdk1dyl.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery', false)
mongoose.connect(url)

const entrySchema = new mongoose.Schema({
    Name: String,
    Number: String,
})
const Entry = mongoose.model('Entry', entrySchema)

if(process.argv.length === 5) {
    const nameValue = process.argv[3]
    const numberValue = process.argv[4]

    const entry = new Entry({
        Name: nameValue,
        Number: numberValue,
    })

    entry.save().then(result => {
        console.log(`Added ${nameValue} number ${numberValue} to phonebook`)
        mongoose.connection.close()
    })
} else if (process.argv.length === 3) {
    Entry.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(entry => {
            console.log(`${entry.Name} ${entry.Number}`)
        })
        mongoose.connection.close()
    })
}
