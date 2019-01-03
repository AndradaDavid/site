var  express = require('express')
    , routes = require('./routes')
    , http = require('http')
    , path = require('path')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , device = require('express-device')
    , nodemailer = require("nodemailer")
    , smtpTransport = require('nodemailer-smtp-transport');


var app = express();


var smtpTransport = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        user: 'cristina.k.david@gmail.com',
        pass: 'jvMM4paMCristina'
    }
}));



app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options',{layout:false});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(methodOverride('_method'));

app.use(device.capture());
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);

app.get('/romania', routes.romania);
app.get('/everest', routes.everest);
app.get('/alpi', routes.alpi);
app.get('/expeditii', routes.expeditii);


app.get('/apuseni-3-zile', routes.apuseni3);
app.get('/apuseni-5-zile', routes.apuseni5);
app.get('/circuitul-castelelor', routes.circuit);
app.get('/4x4-1-zi', routes.patru1);
app.get('/4x4-3-zile', routes.patru3);
app.get('/4x4-5-zile', routes.patru5);
app.get('/weekend-in-maramures', routes.weekend);
app.get('/montblanc', routes.montblanc);
app.get('/grossglockner', routes.grossglockner);
app.get('/elbrus', routes.elbrus);
app.get('/kilimanjaro', routes.kilimanjaro);
app.get('/maroc', routes.maroc);
app.get('/everest-basecamp', routes.everestbc);
app.get('/everest-intoarcerea-cu-elicopter', routes.everesteli);
app.get('/island-peak-basecamp', routes.island);
app.get('/k2-basecamp', routes.k2);
app.get('/contact', routes.contact);

//sending mails
app.post('/send-email', function(req, res) {
    console.log(req.body);
    var mailOptions = {
        from: req.body.address, // sender address
        to: "cristina.k.david@gmail.com", // list of receivers
        subject: 'Vrem sa ne inscriem pe Grossglockner', // Subject line
        text: "Sa zicem ca e un test----------------: " + req.body.body// plaintext body

    };
    smtpTransport.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    res.redirect("/romania");
});



http.createServer(app).listen(app.get('port'), function(){


    console.log("Server listening on " + app.get('port'));
});

