const path = require('path');

exports.getContactPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact-us.html'));
  }

exports.postContact = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  }