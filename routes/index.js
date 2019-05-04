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



//home route
exports.index = function(req, res){
    res.render('home',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'home'
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
            'sent': 'no',
            'bla': 'no',
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'contact'
        });
};

exports.inscriere = function(req, res){

    res.render('inscriere',
        {
            'sent': 'no',
            'bla': 'no',
            'device': getDevice(req),
            'type': getDeviceType(req),
            'name': req.params.name,
            'navigation':'inscriere'
        });
};

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

exports.family = function(req, res){

    res.render('family',
        {
            'device': getDevice(req),
            'type': getDeviceType(req),
            'navigation':'cursuri'
        });
};
