const express = require('express')
const app = express();
var hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 9090


app.use(express.static(__dirname + '/public'));

//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

 
app.get('/',  (req, res) => {  
    
    res.render('home.hbs', {
        nombre:'rene brAvo'        
    });
});

app.get('/about',  (req, res) => {  
    
    res.render('about');
});
 
app.listen(port, ()=>{
    console.log('Sevidor inicializado en puerto 9090');
});

