// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (error, db) => {
  if (error) {
    console.log('Unable to connect to Mongodb server');
  } else {
    console.log('Connected to MongoDB server');
    const col = db.db(dbName).collection('Todos');
    // col.find({completed: false}).toArray().then((docs)=>{
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //   console.log('Unable to fetch todos', err);
    // });
    col.find().count().then((count)=>{
      console.log(`Todos count: ${count}`);
    }, (err)=>{
      console.log('Unable to fetch todos', err);
    });

    db.close();
  }
});
