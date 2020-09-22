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
// Employee.remove({ _id: { $in: duplicates } }) /
