const { text } = require("express");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const customers = [
    {id : 1, name : 'John'},
    {id : 2, name : 'Alkan'},
    {id : 3, name : 'Steve'}
]
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/api/create', (req, res) => {
    const id = req.body.id;
    if(!id){
        res.status(400).send('ID is required');
    }
    const name = req.body.name;
    if(!name && name === ''){
        res.status(400).send('Alkan is required');
    }
    const hasCustomer = customers.find(c => c.id === id);
    if(hasCustomer){
        return res.status(422).send('Customer with such name already exists');
    }
    const newCustomer = { 
                        id, 
                        name
                    }
    customers.push(newCustomer);
    return res.status(200).send('Created successfuly');
})

app.get('/api/customers', (req, res) => {
    res.json(customers);
})

app.listen(port, () => {
    console.log("Hello from Alkan's Server");
});