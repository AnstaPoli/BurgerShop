const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/SVBurger")
const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'))
db.once('open', ()=>{console.log('DB connected')});

const clientSchema = mongoose.Schema({firstName: String , lastName: String, email: String , password: String})
const registerClientModel = mongoose.model("registeredClient" ,clientSchema) 

app.listen(PORT, console.log(`Serveris listening to port ${PORT}`))

app.use(express.static('public'));

app.get('/', (req, res) => { res.sendFile(__dirname + '/views/home.html') })

app.get('/signIn', (req, res) => { res.sendFile(__dirname + '/views/signIn.html') })

app.get('/signUp', (req, res) => { res.sendFile(__dirname + '/views/signUp.html') })

app.get('/menu', (req, res) => { res.sendFile(__dirname + '/views/menu.html') })


//
app.post("/clientDetails",(req,res)=>{
    let data = req.body
console.log(data);
    var client1 = new registerClientModel({
        firstName: data.inpFirstName,
        lastName: data.inpLastName,
        email: data.inpMail,
        password: data.inpPass,
    })
    client1.save()

    res.sendFile(__dirname + '/views/signIn.html')
})


app.post('/client',(req,res)=>{
    let data = req.body;
    registerClientModel.find((err,clients)=>{
        if(err) throw err;
        else {
            let chosenClient = clients.filter((client)=> data.clientMail == client.email);
            if (data.clientPassword == chosenClient[0].password){
                res.sendFile(__dirname + '/views/menu.html')
                // document.getElementById('welcome').innerHTML = `welcome + ${chosenClient[0].firstName}`
            }
            else res.send('error input')
            
        }
    })
})
    

        