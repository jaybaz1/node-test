const express = require('express');

let app = express();

app.get('/', (req, res) => {
    //res.status(200).send('Hello world!');
    res.status(404).send({
        erorr: 'Page not found',
        name: 'Todo App v1.0'
    })
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Baz',
            age: 34
        },
        {
            name: 'Shama',
            age: 33
        }
    ])
})

app.listen(3000);

module.exports.app = app;
