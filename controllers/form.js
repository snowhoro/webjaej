const subcategories = require('../models/subcategory.model'),
    categories = require('../models/category.model');

module.exports.controller = function (app) {
    app.get('/form', (req, res) => {
        const lang = req.acceptsLanguages(['es','en']);

        subcategories.find({}).sort({ 'name.es' : "asc" }).exec((err, subcat) => {
            if(err) throw err;
            res.render('plain_page', { lang: lang, subcategories: subcat});
        });
    });

    app.post('/form', (req, res) => {
        let newCat = {
            name: {
                es: req.body.nameSpanish,
                en: req.body.nameEnglish
            },
            subcategories: req.body.subcategories,
            order: req.body.order,
            created_on: Date.now,
            created_by: "user", //CAMBIAR!!!!
            active: true
        };


        console.log(req.body);
        //res.redirect(307, req.path);
        categories(newCat).save((err, subcat) => {
            if(err){
                res.send({ title: "Error", text: "", success: false });
             }
            res.send({ title: "Guardado correctamente.", text: subcat.name.es, success: true });

         });
    });
};