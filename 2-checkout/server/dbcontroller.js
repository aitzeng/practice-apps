const models = require('./models.js');

module.exports = {

  create: function (req, res) {
    let newData = req.body;
    newData.session_id = req.session_id;
    console.log('This is newData:', newData);
    let params = `"${newData.session_id}", "${newData.name}", "${newData.email}", "${newData.password}", "${newData.address1}", "${newData.address2}", "${newData.city}", "${newData.state}", ${newData.zipCode}, "${newData.phone}", "${newData.credit_card}", ${newData.cvv}, "${newData.expiration}", ${newData.bzip}`
    console.log('This is params:', params)

    models.insert(params, (err, result) => {
      if (err) {
        res.send('Error inserting into Database', err)
      } else {
        res.send('Successful inserted into Database', result)
      }
    })

  }
}