const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('Thsi always run!');
    next();
});

app.use('/add-product', (req, res, next) =>{
    console.log("Add product middleware");
    res.send('<h1>Thhe add product page</h1>');
});

// MIDDLEWARE
app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
});



app.listen(3000);