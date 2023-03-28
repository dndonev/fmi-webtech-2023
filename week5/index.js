const express = require('express'); // import express module
const app = express(); // create express app instance
const port = 3000; // define port number to run the server on it

const customers = [
    { id: 1, name: 'John Doe', age: 25, address: 'Berlin' }, // ..phone, email, ...
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' }
];

app.use(express.json()); // middleware to parse json body

app.get('/', (req, res) => { // create an endpoint which returns 'Hello World!' as response
    res.send('Hello World!') // send response to the client
});

app.get('/api/customers', (req, res) => { // create an endpoint which returns all customers as json object
    res.json(customers);
});

// exported ednpoint handler function to get a customer by id
const customerId = (req, res) => {
    
    const id = +req.params.id; // === Number(req.params.id);
    const customer = customers.find(c => c.id === id);

    if (!customer) {
        return res.sendStatus(404);
    }

    return res.json(customer);
};

// create an endpoint which gets a customer by id and returns it as json object
app.get('/api/customers/:id', customerId);

app.post('/api/customers/create', (req, res) => {
    const id = req.body.id; 
    const name = req.body.name;

    if (!id) {
        return res.status(400).send('Id is required');
    }
    if (name && name !== '')    {
        return res.status(400).send('Name is required');
    }

    const hasCustomer = customers.find(c => c.id === id);
    if (hasCustomer) {
        return res.status(422).send('Customer already exists');
    }

    const customer = {
        id, // same as { id: id },
        name // same as { name: name }
    };

    customers.push(customer);

    return res.sendStatus(202);
})

app.post('/api', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});

// start the server on the defined port number
app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`);
});