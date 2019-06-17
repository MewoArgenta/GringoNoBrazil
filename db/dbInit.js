//How to: https://mongoosejs.com/docs/index.html
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

// the schema defines the properties of the model (=object)
var themeSchema = new mongoose.Schema({
    name: String
});

var Theme = mongoose.model('Theme', themeSchema);
var comida = new Theme({ name: 'comida' });

comida.save(function (err, comida) {
    if (err) return console.error(err);
});
Theme.find(function (err, themes) {
    if (err) return console.error(err);
    console.log(themes);
})

console.log('saved comida on database');
