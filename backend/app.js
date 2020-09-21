const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GrapqQLType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
} = require("graphql");
const fs = require("fs");
const fastcsv = require("fast-csv");
const mongoose = require("mongoose");
var cors = require("cors");
var mongoDB =
  "mongodb+srv://andreihrs:db12345@cluster0.vx7el.mongodb.net/Mycos?retryWrites=true&w=majority";
const Employee = require("./models/employee");

let stream = fs.createReadStream("AngelList.csv");
let csvData = [];
var app = express();
app.use(cors());

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database.."))
  .catch((err) => console.error(err));

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

const PersonModel = mongoose.model("employee", {
  firstName: String,
  lastName: String,
});

// Access a specific collection -> mongoose.model('<model name>', schema, '<collection name here>'))

// let csvStream = fastcsv
//     .parse()
//     .on("data", function(data) {
//         csvData.push({
//             name: data[0],
//             title: data[1],
//             description: data[2],
//             company: data[3]
//         });
//     })
//     .on("end", function(){
//         //remove the first line: header
//         csvData.shift();

//         console.log(csvData.length);

//         Employee.collection.insertMany(csvData, onInsert);

//         function onInsert(err, docs) {
//             if (err) {
//                 throw error;
//             } else {
//                 console.info(`%d potatoes were successfully stored.`, docs.length)
//             }
//         }
//         // database
//         //         .db
//         //         .collection("Employees")
//         //         .insertMany(csvData, (err, res) => {
//         //             if (err)
//         //                 throw eror;

//         //             console.log(`Inserted: ${res.insertedCount} rows`);
//         //         })
//         // database.close();
//         //save the MongoDB database to collection
//     });

// stream.pipe(csvStream);

var duplicates = [];

// Employee.aggregate([
//     { $match: {
//       name: { "$ne":'' }  // discard selection criteria
//    }},
//    { $group: {
//      _id: { name: "$name"}, // can be grouped on multiple properties
//      dups: { "$addToSet": "$_id" },
//      count: { "$sum": 1 }
//     }},
//    { $match: {
//      count: { "$gt": 1 }    // Duplicates considered as count greater than one
//    }}
// ]
// // {allowDiskUse: true}       // For faster processing if set is larger
// )               // You can display result until this and check duplicates
// .exec(function(doc) {
//      doc.dups.shift();      // First element skipped for deleting
//      doc.dups.forEach( function(dupId){
//          duplicates.push(dupId);   // Getting all duplicate ids
//          }
//      )
// })

// // If you want to Check all "_id" which you are deleting else print statement not needed
//printjson(duplicates);

// // Remove all duplicates in one go
Employee.remove({ _id: { $in: duplicates } }) /
  app.get("/", (req, res) => res.send("hello world"));
// app.use("/employee", graphqlHTTP({schema: schema, graphql: true}));

app.listen(3001, () => {
  console.log("server running at 3001");
});
