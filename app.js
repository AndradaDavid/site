var express = require('express')
    , routes = require('./routes')
    , http = require('http')
    , path = require('path')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , device = require('express-device')
    , nodemailer = require("nodemailer")
    , smtpTransport = require('nodemailer-smtp-transport')
    , session = require('express-session')
    , cookieParser = require('cookie-parser')
    , i18n = require('i18n');



var app = express();

i18n.configure({

//define how many languages we would support in our application
    locales:['en', 'ro'],

//define the path to language json files, default is /locales
    directory: __dirname + '/locales',

//define the default language
    defaultLocale: 'en',

// define a custom cookie name to parse locale settings from
    cookie: 'i18n'
});

app.use(cookieParser("i18n_demo"));
app.use(session({
    secret: "i18n_demo",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(i18n.init);


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
app.get('/inscriere', routes.inscriere);
app.get('/inscriere/:name', routes.inscriere);

app.get('/romania', routes.romania);
app.get('/expeditii', routes.expeditii);
app.get('/tabara-family-survival', function (req,res) {
    res.redirect('/family-survival');
});
app.get('/family-survival', routes.family);
app.get('/politica-cookie', routes.cookie);
app.get('/termeni-si-conditii', routes.terms);
app.get('/politica-de-confidentialitate', routes.conf);



//languages
app.get('/en', function (req, res) {
    res.cookie('i18n', 'en');
    res.redirect('/')
});

app.get('/ro', function (req, res) {
    res.cookie('i18n', 'ro');
    res.redirect('/')
});
app.get('/4x4-3-zile/en', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/4x4-3-zile/')
});

app.get('/4x4-3-zile/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/4x4-3-zile/')
});
app.get('/4x4-5-zile/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/4x4-5-zile/')
});

app.get('/4x4-5-zile/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/4x4-5-zile/')
});

app.get('/apuseni-3-zile/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/apuseni-3-zile/')
});

app.get('/apuseni-3-zile/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/apuseni-3-zile/')
});
app.get('/apuseni-5-zile/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/apuseni-5-zile/')
});

app.get('/apuseni-5-zile/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/apuseni-5-zile/')
});
app.get('/montblanc/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/montblanc/')
});

app.get('/montblanc/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/montblanc/')
});
app.get('/grossglockner/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/grossglockner/')
});

app.get('/grossglockner/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/grossglockner/')
});
app.get('/elbrus/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/elbrus/')
});

app.get('/elbrus/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/elbrus/')
});
app.get('/kilimanjaro/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/kilimanjaro/')
});

app.get('/kilimanjaro/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/kilimanjaro/')
});
app.get('/maroc/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/maroc/')
});

app.get('/maroc/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/maroc/')
});
app.get('/everest-basecamp/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/everest-basecamp/')
});

app.get('/everest-basecamp/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/everest-basecamp/')
});
app.get('/everest-intoarcerea-cu-elicopter/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/everest-intoarcerea-cu-elicopter/')
});

app.get('/everest-intoarcerea-cu-elicopter/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/everest-intoarcerea-cu-elicopter/')
});
app.get('/island-peak-basecamp/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/island-peak-basecamp/')
});

app.get('/island-peak-basecamp/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/island-peak-basecamp/')
});
app.get('/k2-basecamp/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/k2-basecamp/')
});

app.get('/k2-basecamp/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/k2-basecamp/')
});
app.get('/contact/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/contact/')
});

app.get('/contact/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/contact/')
});
app.get('/inscriere-en', function (req, res)
{
    //console.log(':name:', req.params);
    res.cookie('i18n', 'en');
    //res.redirect('/inscriere/')
});

app.get('/inscriere-ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    //res.redirect('/inscriere/')
});
app.get('/inscriere/:name/en', function (req, res)
{
    console.log(':name:', req.params);
    res.cookie('i18n', 'en');
    res.redirect('/inscriere/'+req.params.name);
});

app.get('/inscriere/:name/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/inscriere/'+req.params.name);
});
app.get('/romania/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/romania/')
});

app.get('/romania/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/romania/')
});
app.get('/expeditii/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/expeditii/')
});

app.get('/expeditii/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/expeditii/')
});
app.get('/family-survival/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/family-survival/')
});

app.get('/family-survival/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/family-survival/')
});

app.get('/politica-cookie/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/politica-cookie/')
});
app.get('/politica-cookie/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/politica-cookie/')
});
app.get('/termeni-si-conditii/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/termeni-si-conditii/')
});
app.get('/termeni-si-conditii/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/termeni-si-conditii/')
});
app.get('/politica-de-confidentialitate/ro', function (req, res)
{
    res.cookie('i18n', 'ro');
    res.redirect('/politica-de-confidentialitate/')
});
app.get('/politica-de-confidentialitate/en', function (req, res)
{
    res.cookie('i18n', 'en');
    res.redirect('/politica-de-confidentialitate/')
});





app.post('/abonare', function (req, res) {

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

    var messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname + "<br>" +
        "<b>EMAIL: </b>" + req.body.address + "<br>" +
        "<b>TELEFON: </b>" + req.body.phone + "<br>" +
        "<b>MESAJ: </b>" + req.body.body + "<br>" +
        "<b>MAIL PROMOTIONAL:</b>" + ((req.body.promotional === 'da')?"da":"nu");

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
                    i18n: res,
                    'lang': req.cookies.i18n,
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
                    i18n: res,
                    'lang': req.cookies.i18n,
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

    res.cookie('i18n', req.cookies.i18n);
    var messageBody = '';

    if (req.params.id == 'apuseni3' || req.params.id == 'apuseni5' ) {
        messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname + "<br>" +
            "<b>EMAIL: </b>" + req.body.email + "<br>" + "" +
            "<b>TELEFON: </b>" + req.body.phone + "<br>" +
            "<b>ADRESA COMPLETA: </b>" + req.body.p_address + "<br>" +
            "<b>VARSTA: </b>" + req.body.age + "<br>" +
            "<b>OCUPATIA: </b>" + req.body.occupation + "<br>" +
            "<b>STAREA DE SANATATE: </b>" + req.body.health + "<br>" +
            "<b>MASINA: </b>" + req.body.car + "<br>" +
            "<b>EXPERIENTA: </b>" + req.body.experience + "<br>" +
            "<b>CORT: </b>" + req.body.tent + "<br>" +
            "<b>FAMILIE: </b>" + req.body.family + "<br>" +
            "<b>MAIL PROMOTIONAL:</b>" + ((req.body.promotional === 'da')?"da":"nu");
    }

    if (req.params.id == 'patru3' || req.params.id == 'patru5') {

        messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname + "<br>" +
            "<b>EMAIL: </b>" + req.body.email + "<br>" + "" +
            "<b>TELEFON: </b>" + req.body.phone + "<br>" +
            "<b>ADRESA COMPLETA: </b>" + req.body.p_address + "<br>" +
            "<b>VARSTA: </b>" + req.body.age + "<br>" + "" +
            "<b>OCUPATIA: </b>" + req.body.occupation + "<br>" +
            "<b>SERIA 1: </b>" + ((req.body.seria1 === 'da')?"da":"nu") + "<br>" +
            "<b>SERIA 2: </b>" + ((req.body.seria2 === 'da')?"da":"nu") + "<br>" +
            "<b>MASINA: </b>" + req.body.car + "<br>" +
            "<b>EXPERIENTA: </b>" + req.body.experience + "<br>" +
            "<b>CORT: </b>" + req.body.tent + "<br>" +
            "<b>FAMILIE: </b>" + req.body.family + "<br>" +
            "<b>MAIL PROMOTIONAL:</b>" + ((req.body.promotional === 'da')?"da":"nu");
    }

    if (req.params.id == 'family') {
        messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname +
            "<br>" + "<b>EMAIL: </b>" + req.body.email + "<br>" +
            "<b>TELEFON: </b>" + req.body.phone + "<br>" +
            "<b>ADRESA COMPLETA: </b>" + req.body.p_address + "<br>" +
            "<b>VARSTA: </b>" + req.body.age + "<br>" +
            "<b>NUMAR DE COPII: </b>" + req.body.copii + "<br>" +
            "<b>MAIL PROMOTIONAL:</b>" + ((req.body.promotional === 'da')?"da":"nu");
    }

    if (req.params.id == 'montblanc' || req.params.id == 'grossglockner' || req.params.id == 'elbrus' || req.params.id == "everestbc" || req.params.id == "everesteli" || req.params.id == "island") {

        messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname + "<br>" +
            "<b>EMAIL: </b>" + req.body.email + "<br>" +
            "<b>TELEFON: </b>" + req.body.phone + "<br>" +
            "<b>ADRESA COMPLETA: </b>" + req.body.p_address + "<br>" +
            "<b>VARSTA: </b>" + req.body.age + "<br>" +
            "<b>OCUPATIA: </b>" + req.body.occupation + "<br>" +
            "<b>STAREA DE SANATATE: </b>" + req.body.health + "<br>" + "<b>Piolet: </b>" + req.body.piolet + "<br>" +
            "<b>CASCA: </b>" + req.body.casca + "<br>" +
            "<b>COLTARI: </b>" + req.body.coltari + "<br>" +
            "<b>HAM: </b>" + req.body.ham + "<br>" +
            "<b>EXPERIENTA: </b>" + req.body.experience + "<br>" +
            "<b>MAIL PROMOTIONAL:</b>" + ((req.body.promotional === 'da')?"da":"nu");
    }

    if (req.params.id == 'maroc') {
        messageBody = "<b>NUME: </b>" + req.body.firstname + " " + req.body.secondname + "<br>" +
            "<b>EMAIL: </b>" + req.body.email + "<br>" +
            "<b>TELEFON: </b>" + req.body.phone + "<br>" +
            "<b>ADRESA COMPLETA: </b>" + req.body.p_address + "<br>" +
            "<b>VARSTA: </b>" + req.body.age + "<br>" +
            "<b>OCUPATIA: </b>" + req.body.occupation + "<br>" +
            "<b>STAREA DE SANATATE: </b>" + req.body.health + "<br>" +
            "<b>EXPERIENTA: </b>" + req.body.experience + "<br>" +
            "<b>MAIL PROMOTIONAL:</b>" + ((req.body.promotional === 'da')?"da":"nu");
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
                    i18n: res,
                    'lang': req.cookies.i18n,
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
                    i18n: res,
                    'lang': req.cookies.i18n,
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

