module.exports.controller = function (app) {
    app.get('/product', function (req, res) {

        let filters = [
            { name: "Quirófano",            datafilter: ".quirofano" ,   subfilters: ["Estación de Anestesia", "Mesa de Cirugía", "Lámpara Scialitica", "Quirófano Inteligente", "Columna de gas"]},
            { name: "Cardiología" ,         datafilter: ".cardiologia",  subfilters: [""]},
            { name: "Cuidados Críticos",    datafilter: ".cuidados",     subfilters: [""]},
            { name: "Internación",          datafilter: ".internacion",  subfilters: [""]},
            { name: "Materno Infantil" ,    datafilter: ".materno",      subfilters: [""]},
            { name: "Emergencias",          datafilter: ".emergencias",  subfilters: [""]},
            { name: "RMN",                  datafilter: ".rmn",          subfilters: [""]},
            { name: "VNI",                  datafilter: ".vni",          subfilters: [""]}
        ];
        res.render('product', { filters: filters});
    });
};