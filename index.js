const e = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dburl = "mongodb+srv://siddharth:FOrYp6GZmOTZWgh9@cluster0.bpjvihj.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0";

const products = [
  {id: 1, name: "Apple"},
  {id: 2, name: "Orange"},
  {id: 3, name: "Mango"},
]

const users = [
  {id: 1, name: "Rahul"},
  {id: 2, name: "Sid"},
  {id: 3, name: "Ankush"},
]

// schema - structure of collection in the MONGODB it says you can connect with the database
// and you fetch and store the data in the format presented in the schema
// model - pass the scheme to me and get a object which could be used to get the data 
// add the data in a collection 

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const productModel = mongoose.model('products', productSchema);

mongoose.connect(dburl).then((function () {
  console.log("connected to db");
})).catch(err => console.log(err));

app.get('/api/products', async (req, res) => {
  let products = await productModel.find();
  res.json(products);
})

// app.get('/api/users', (req, res) => {
//   res.json(users);
// })

// create a server which would listen to the request and respond to the request
app.listen(3000, () => {
  console.log("server is connected");
})


// 1 machine can handle 16 concurent connections 

// 1000 users 

// 1000/16 

// would be run on 62 machines

// in order to maintain these machines 
// you have one server in front of them which is known as loadbalancer


// data can be kept in two types of databases
// Relational 
// Nosql, Non relation 


// SQL, postgress SQL, MYSQL


// Mongodb, Dynamo ,Reddis

// Collections 

// IN order to get data from the databases
// Connect to this database

// Mongoose which helps us structure the data better 
// connect to the mongodb easily 
// Get the data and save the data better

// Mongoose is a wrapper over mongodb 



