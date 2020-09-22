// Access a specific collection -> mongoose.model('<model name>', schema, '<collection name here>'))
const fs = require("fs");
const fastcsv = require("fast-csv");
let stream = fs.createReadStream("AngelList.csv");
let csvData = [];

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
