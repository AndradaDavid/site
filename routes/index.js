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




//home route
exports.index = function(req, res){
    res.render('home',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'home'
        });
};

//main categories routes
exports.romania = function(req, res){
    res.render('romania',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};

exports.expeditii = function(req, res){
    res.render('expeditii',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.alpi = function(req, res){
    res.render('alpi',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};
exports.everest = function(req, res){
    res.render('everest',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

//subcategories routes
exports.apuseni3 = function(req, res){
    res.render('apuseni3',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};

exports.apuseni5 = function(req, res){
    res.render('apuseni5',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};

exports.circuit = function(req, res){
    res.render('circuit',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};

exports.patru1 = function(req, res){
    res.render('patru1',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};

exports.patru3 = function(req, res){
    res.render('patru3',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};
exports.patru5 = function(req, res){
    res.render('patru5',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};

exports.weekend = function(req, res){
    res.render('weekend',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'romania'
        });
};

exports.montblanc = function(req, res){
    res.render('montblanc',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.grossglockner = function(req, res){
    res.render('grossglockner',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.elbrus = function(req, res){
    res.render('elbrus',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.everestbc = function(req, res){
    res.render('everestbc',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.everesteli = function(req, res){
    res.render('everesteli',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.maroc = function(req, res){
    res.render('maroc',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.kilimanjaro = function(req, res){
    res.render('kilimanjaro',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.island = function(req, res){
    res.render('island',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.k2 = function(req, res){
    res.render('k2',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};

exports.montblanc = function(req, res){
    res.render('montblanc',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'expeditii'
        });
};
exports.contact = function(req, res){
    res.render('contact',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'contact'
        });
};
