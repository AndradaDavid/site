var express = require('express')
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
        user: 'notificare.officefloadventure@gmail.com',
        pass: '8stelute'
    }
}));

app.set('port', process.env.PORT || 8001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: false});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use(device.capture());
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.get('/everest', routes.everest);
app.get('/apuseni-3-zile', routes.apuseni3);
app.get('/apuseni-5-zile', routes.apuseni5);

app.get('/4x4-3-zile', routes.patru3);
app.get('/4x4-5-zile', routes.patru5);
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
app.get('/inscriere/:name', routes.inscriere);
app.get('/inscriere', routes.inscriere);


app.get('/romania', routes.romania);



app.post('/abonare', function (req, res) {

    var messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname + "<br>" + "<b>EMAIL: </b>" + req.body.address + "<br>" + "<b>TELEFON: </b>" + req.body.phone + "<br>" + "<b>MESAJ: </b>" + req.body.body;

    var mailOptions = {
        from: req.body.address,
        to: "officefloadventure@gmail.com",
        subject: '[Abonare] ' + req.body.email
    };
    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("error");
        } else {
            res.redirect(req.headers.referer);
        }

    });
});

app.post('/contact', function (req, res) {

    var messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname + "<br>" + "<b>EMAIL: </b>" + req.body.address + "<br>" + "<b>TELEFON: </b>" + req.body.phone + "<br>" + "<b>MESAJ: </b>" + req.body.body;

    var mailOptions = {
        from: req.body.address,
        to: "officefloadventure@gmail.com",
        subject: '[Contact] ' + req.body.subject,
        html: messageBody
    };
    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.render('contact',
                {
                    'sent': 'no',
                    'bla': 'yes',
                    'device': routes.getDevice(req),
                    'type': routes.getDeviceType(req),
                    'navigation': 'contact'
                });
        } else {
            console.log('Message sent: ' + info.response);
            res.render('contact',
                {
                    'sent': 'yes',
                    'bla': 'no',
                    'device': routes.getDevice(req),
                    'type': routes.getDeviceType(req),
                    'navigation': 'contact'
                });
        }

    });
});


app.post('/inscriere/:id', function (req, res) {

    var messageBody = '';

    if (req.params.id == 'apuseni3' || req.params.id == 'apuseni5' || req.params.id == 'patru3' || req.params.id == 'patru5') {
        messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname + "<br>" + "<b>EMAIL: </b>" + req.body.email + "<br>" + "<b>TELEFON: </b>" + req.body.phone + "<br>" + "<b>ADRESA COMPLETA: </b>" + req.body.p_address + "<br>" + "<b>VARSTA: </b>" + req.body.age + "<br>" + "<b>OCUPATIA: </b>" + req.body.occupation + "<br>" + "<b>STAREA DE SANATATE: </b>" + req.body.health + "<br>" + "<b>MASINA: </b>" + req.body.car + "<br>" + "<b>EXPERIENTA: </b>" + req.body.experience + "<br>" + "<b>CORT: </b>" + req.body.tent + "<br>" + "<b>FAMILIE: </b>" + req.body.family;
    }


    if (req.params.id == 'montblanc' || req.params.id == 'grossglockner' || req.params.id == 'elbrus' || req.params.id == "everestbc" || req.params.id == "everesteli" || req.params.id == "island") {

        messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname + "<br>" + "<b>EMAIL: </b>" + req.body.email + "<br>" + "<b>TELEFON: </b>" + req.body.phone + "<br>" + "<b>ADRESA COMPLETA: </b>" + req.body.p_address + "<br>" + "<b>VARSTA: </b>" + req.body.age + "<br>" + "<b>OCUPATIA: </b>" + req.body.occupation + "<br>" + "<b>STAREA DE SANATATE: </b>" + req.body.health + "<br>" + "<b>Piolet: </b>" + req.body.piolet + "<br>" + "<b>CASCA: </b>" + req.body.casca + "<br>" + "<b>COLTARI: </b>" + req.body.coltari + "<br>" + "<b>HAM: </b>" + req.body.ham + "<br>" + "<b>EXPERIENTA: </b>" + req.body.experience;
    }

    if (req.params.id == 'maroc') {
        messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname + "<br>" + "<b>EMAIL: </b>" + req.body.email + "<br>" + "<b>TELEFON: </b>" + req.body.phone + "<br>" + "<b>ADRESA COMPLETA: </b>" + req.body.p_address + "<br>" + "<b>VARSTA: </b>" + req.body.age + "<br>" + "<b>OCUPATIA: </b>" + req.body.occupation + "<br>" + "<b>STAREA DE SANATATE: </b>" + req.body.health + "<br>" + "<b>EXPERIENTA: </b>" + req.body.experience;

    }


    var mailOptions = {
        from: req.body.email,
        to: "officefloadventure@gmail.com",
        subject: '[Inscriere] ' + req.body.formular,
        html: messageBody
    };

    smtpTransport.sendMail(mailOptions, function (error, info) {

        if (error) {
            res.render('inscriere',
                {
                    'sent': 'no',
                    'bla': 'yes',
                    'device': routes.getDevice(req),
                    'type': routes.getDeviceType(req),
                    'name': req.params.id,
                    'navigation': 'contact'
                });
        } else {
            res.render('inscriere',
                {
                    'sent': 'yes',
                    'bla': 'no',
                    'device': routes.getDevice(req),
                    'type': routes.getDeviceType(req),
                    'name': req.params.id,
                    'navigation': 'contact'
                });
        }
    });
});


http.createServer(app).listen(app.get('port'), function () {

    console.log("Server listening on " + app.get('port'));
});

