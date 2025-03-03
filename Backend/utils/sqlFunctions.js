const mysql = require("mysql");
const config = require("../db/config");
const pool = mysql.createPool(config);

const createTable = (schema) => {
  return new Promise((resolve, reject) => {
    pool.query(schema, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
