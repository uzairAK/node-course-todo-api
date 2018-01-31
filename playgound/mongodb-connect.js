// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Mongodb auto generates this so we dont need to include this
// var obj = new ObjectID();
// console.log(obj);

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';


// Destructing in ES6
// var user = {name:'Uzair', age:21};
// // var name = user.name;
// var {name} = user;
// console.log(name);


MongoClient.connect(url, (error, db) => {
  if (error) {
    console.log('Unable to connect to Mongodb server');
  } else {
    console.log('Connected to MongoDB server');
    const col = db.db(dbName).collection('Todos');
    // col.insertOne({
    //   text: 'Something text here',
    //   completed: false
    // }, (error, result) => {
    //   if (error) {
    //     return console.log('Unable to insert', error);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // // col.drop(undefined, (err, res) =>{
    // //
    // // });
    // var colUser = db.db(dbName).collection('Users');
    // colUser.insertOne({
    //   name: 'Uzair',
    //   age: 21,
    //   location: 'Islamabad'
    // }, (error, result) => {
    //   if (error) {
    //     return console.log('Unable to insert', error);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
  }
});
