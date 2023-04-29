const db = require('./db.js');

module.exports = {

  insert: function (values, callback) {
    let queryStr = `INSERT INTO responses values (null, ${values});`

    // console.log(queryStr);
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err, console.log('Error querying database', err))
      } else {
        callback(null, results)
      }
    })
  }
}

// (session_id, name, email, password, address1, address2, city, state, zipcode, phone, creditcard, cvv, expiration, billzip)