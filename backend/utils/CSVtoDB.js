// Access a specific collection -> mongoose.model('<model name>', schema, '<collection name here>'))
const fs = require("fs");
const fastcsv = require("fast-csv");

const Employee = require("../models/Employee");

const csvToDB = () => {
  let stream = fs.createReadStream("AngelList.csv");
  let csvData = [];

  let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
      csvData.push({
        name: data[0],
        title: data[1],
        description: data[2],
        company: data[3],
      });
    })
    .on("end", function () {
      //remove the first line: header
      csvData.shift();

      console.log(csvData.length);

      // Employee.insertMany(csvData, onInsert); TODO: make sure you don't include duplicates

      function onInsert(err, docs) {
        if (err) {
          throw error;
        } else {
          console.info(`%d potatoes were successfully stored.`, docs.length);
        }
      }
    });

  stream.pipe(csvStream);
};

module.exports = { csvToDB };
