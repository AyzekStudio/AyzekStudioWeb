'use strict';

var IndexModel = require('../models/index');

// exports.index = function (req, res) {
//     var model = new IndexModel();
//     res.render('index', model);
// };

// exports.setLocale = function (req, res) {
//     res.cookie('locale', req.params.locale);
//     res.redirect('/');
// };

module.exports = function (app) {
    
    app.get('/', function (req, res) {
	    var model = new IndexModel();
	    res.render('index.dust', model);
	}),

    app.get('/setLocale/:locale', function (req, res) {
	    res.cookie('locale', req.params.locale);
	    res.redirect('/');
	})
};