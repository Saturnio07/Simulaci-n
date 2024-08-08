const express = require('express'); 
const bodyParser = require('body-parser'); 
const path = require('path'); 

const app = express(); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/*app.get('/planeacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'planeacion.html'));
}); Ejemplo para cuando se agregue otra pag*/

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
}); 