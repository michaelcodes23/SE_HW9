const express = require('express');
const app = express();
const port = 3000;
//localhost:3000/


// console.log(drinks);

const items =  require('./models/drinks.js')
const drinks = items.drinks;
const food = items.food;
console.log(food, drinks);

app.get('/',(req,res)=>{
    res.send('Welcome to the Gitpub App!')
    
})

app.get('/drinks',(req,res)=>{

    res.render('index.ejs',{
        drink: drinks,
        foods: food
    })
})

app.get('/drinks/:indexDrinks',(req,res)=>{

    res.render('show.ejs',{
        //second param must be an object
        //the key property is the name of the variable we will a
        drinks: drinks[req.params.indexDrinks] //there will be a variable inside the ejs file
  
    })
  })
app.get('/drinks/food/:indexFoods',(req,res)=>{

    res.render('showFood.ejs',{
        //second param must be an object
        //the key property is the name of the variable we will a
        foods: food[req.params.indexFoods] //there will be a variable inside the ejs file
  
    })
  })
  
app.listen(port,()=>{
    console.log('listening on port',port);
})