'use strict';

var IndexModel = require('../models/index');

module.exports = function (app) {
    
    app.get('/', function (req, res) {
	    var model = new IndexModel();
	    res.render('mantenimiento.dust', model);
	})
	
	/*
	app.get('/', function (req, res) {
	    var model = new IndexModel();
	    res.render('index.dust', model);
	}),

    app.get('/setLocale/:locale', function (req, res) {
	    res.cookie('locale', req.params.locale);
	    res.redirect('/');
	})*/
};