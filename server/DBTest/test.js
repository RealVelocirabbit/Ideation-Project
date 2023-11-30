// const fs = require('fs');
// const mockDB = {};

// let writeLocation;
// let noteList;

// if (process.env.NODE_ENV === 'test') {
//   writeLocation = `${__dirname}/notes.test.json`;
//   noteList = JSON.parse(fs.readFileSync(writeLocation));
// }

// mockDB.sync = (notes) => {
//   mockDB.write(notes);
//   mockDB.reset();
//   return noteList;
// }

// mockDB.drop = () => {
//   noteList = [];
//   mockDB.write(noteList);
// }

// mockDB.find = () => {
//   mockDB.reset();
//   return noteList;
// }

// mockDB.write = (data) => {
//   fs.writeFileSync(writeLocation, JSON.stringify(data));
// }

// mockDB.reset = () => {
//   noteList = JSON.parse(fs.readFileSync(writeLocation));
// }

// export default mockDB;