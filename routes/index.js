var device = {};

function getDevice(req) {
    device.mobile = req.device.type == 'phone' ? true : false;
    device.desktop = req.device.type == 'desktop' ? true : false;
    device.tablet = req.device.type == 'tablet' ? true : false;
    return device;
}

function getDeviceType(req) {
    return req.device.type;
}


exports.getDevice = function(req) {
    device.mobile = req.device.type == 'phone' ? true : false;
    device.desktop = req.device.type == 'desktop' ? true : false;
    device.tablet = req.device.type == 'tablet' ? true : false;
    return device;

};

exports.getDeviceType= function(req) {
    return req.device.type;
};

function setLocale(req,res) {
    if (req.cookies.i18n) {
        res.setLocale(req.cookies.i18n);
    } else {
        res.setLocale('ro');
    }
}



//home route
exports.index = function(req, res){
    setLocale(req,res);
    res.render('home',
        {
            i18n: res,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'home',
            'lang': req.cookies.i18n
        });
};

exports.everest = function(req, res){
    setLocale(req,res);
    res.render('everest',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

//subcategories routes
exports.apuseni3 = function(req, res){
    setLocale(req,res);
    res.render('apuseni3',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};

exports.apuseni5 = function(req, res){
    setLocale(req,res);
    res.render('apuseni5',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};
exports.patru3 = function(req, res){
    setLocale(req,res);
    res.render('patru3',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};
exports.patru5 = function(req, res){
    setLocale(req,res);
    res.render('patru5',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};

exports.grossglockner = function(req, res){
    setLocale(req,res);
    res.render('grossglockner',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.elbrus = function(req, res){
    setLocale(req,res);
    res.render('elbrus',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.everestbc = function(req, res){
    setLocale(req,res);
    res.render('everestbc',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.everesteli = function(req, res){
    setLocale(req,res);
    res.render('everesteli',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.maroc = function(req, res){
    setLocale(req,res);
    res.render('maroc',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.kilimanjaro = function(req, res){
    setLocale(req,res);
    res.render('kilimanjaro',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.island = function(req, res){
    setLocale(req,res);
    res.render('island',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.k2 = function(req, res){
    setLocale(req,res);
    res.render('k2',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.montblanc = function(req, res){
    setLocale(req,res);
    res.render('montblanc',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};
exports.contact = function(req, res){
    setLocale(req,res);
    res.render('contact',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'sent': 'no',
            'bla': 'no',
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'contact'
        });
};

exports.inscriere = function(req, res){

    setLocale(req,res);
    res.render('inscriere',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'sent': 'no',
            'bla': 'no',
            'device': getDevice(req),
            'type': getDeviceType(req),
            'name': req.params.name,
            'navigation':'inscriere'
        });
};

exports.romania = function(req, res){
    setLocale(req,res);
    res.render('romania',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};

exports.expeditii = function(req, res){
    setLocale(req,res);
    res.render('expeditii',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.family = function(req, res){
    setLocale(req,res);
    res.render('family',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'cursuri'
        });
};

exports.cookie = function(req, res){
    setLocale(req,res);
    res.render('cookie',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':''
        });
};

exports.terms = function(req, res){
    setLocale(req,res);
    res.render('terms',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':''
        });
};
exports.conf = function(req, res){
    setLocale(req,res);
    res.render('conf',
        {
            i18n: res,
            'lang': req.cookies.i18n,
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':''
        });
};
