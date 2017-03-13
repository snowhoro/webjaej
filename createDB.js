const menulist = require('./models/menulist.model');
const subcategories = require('./models/subcategory.model');
const categories = require('./models/category.model');

function initMenulist (){
    const menus = [
        { name: { es: "Inicio", en: "Home"}, href:"home", order: 1, language: "en", active: true },
        { name: { es: "About", en: "About"}, href:"about", order: 2, language: "en", active: true },
        { name: { es: "Pilares", en: "Features"}, href:"features", order: 3, language: "en", active: true },
        { name: { es: "Productos", en: "Portfolio"}, href:"portfolio", order: 4, language: "en", active: true },
        { name: { es: "Socios", en: "Partners"}, href:"partners", order: 5, language: "en", active: true },
        { name: { es: "Blog", en: "Blog"}, href:"blog", order: 6, language: "en", active: true },
        { name: { es: "Contacto", en: "Contact"}, href:"contact", order: 7, language: "en", active: true }
    ];

    menus.forEach((menu) => {
        menulist(menu).save((err,menu,numAffected) => {
            if (err) throw err;
            console.log("Saved " + menu.name);
        });
    });
}

function initSubCategories() {
    const items = [
        { name: { es: "Ventilación", en: "Ventilación ingles"}, order: 1, active: true },
        { name: { es: "Monitoreo", en: "Monitoreo ingles"}, order: 2, active: true },
        { name: { es: "Camas", en: "Camas ingles"}, order: 1, active: true },
        { name: { es: "Prevención de úlceras", en: "Prevención de úlceras ingles"}, order: 1, active: true },
        { name: { es: "Desfibrilador", en: "Desfibrilador ingles"}, order: 1, active: true },
        { name: { es: "Telemetría", en: "Telemetría ingles"}, order: 1, active: true },
        { name: { es: "Columna de distribución", en: "Columna de distribución ingles"}, order: 1, active: true },
        { name: { es: "Estación de anestesia", en: "Estación de anestesia ingles"}, order: 1, active: true },
        { name: { es: "Mesa de cirugía", en: "Mesa de cirugía ingles"}, order: 1, active: true },
        { name: { es: "Lámpara scialítica", en: "Lámpara scialítica ingles"}, order: 1, active: true },
        { name: { es: "Quirófano inteligente", en: "Quirófano inteligente ingles"}, order: 1, active: true },
        { name: { es: "Incubadora y cuna radiante", en: "Incubadora y cuna radiante ingles"}, order: 1, active: true },
        { name: { es: "Fototerapia", en: "Fototerapia ingles"}, order: 1, active: true },
        { name: { es: "Cunas", en: "Cunas ingles"}, order: 1, active: true },
        { name: { es: "Monitoreo fetal", en: "Monitoreo fetal ingles"}, order: 1, active: true },
        { name: { es: "Alto flujo", en: "Alto flujo ingles"}, order: 1, active: true },
        { name: { es: "BiPAP", en: "BiPAP ingles"}, order: 1, active: true },
        { name: { es: "Máscaras", en: "Máscaras ingles"}, order: 1, active: true },
        { name: { es: "ECG", en: "ECG ingles"}, order: 1, active: true },
        { name: { es: "Mobiliario", en: "Mobiliario ingles"}, order: 1, active: true },
        { name: { es: "Camilla", en: "Camilla ingles"}, order: 1, active: true },
        { name: { es: "Lámpara de examinación", en: "Lámpara de examinación ingles"}, order: 1, active: true },
        { name: { es: "Respirador", en: "Respirador ingles"}, order: 1, active: true },
        { name: { es: "cPAP", en: "cPAP ingles"}, order: 1, active: true },
        { name: { es: "Holter", en: "Holter ingles"}, order: 1, active: true },
        { name: { es: "Ergometría", en: "Ergometría ingles"}, order: 1, active: true },
        { name: { es: "Ficha electrónica de anestesia", en: "Ficha electrónica de anestesia ingles"}, order: 1, active: true },
        { name: { es: "MUSE", en: "MUSE ingles"}, order: 1, active: true },
        { name: { es: "Central de monitoreo fetal", en: "Central de monitoreo fetal ingles"}, order: 1, active: true },
        { name: { es: "Mobile Care Server", en: "Mobile Care Server ingles"}, order: 1, active: true },
        { name: { es: "Anestesia Navegator", en: "Anestesia Navegator ingles"}, order: 1, active: true },
        { name: { es: "CardioSoft", en: "CardioSoft ingles"}, order: 1, active: true }
    ];

    items.forEach((item) => {
        subcategories(item).save((err,_item,numAffected) => {
            if (err) throw err;
            console.log("Saved " + _item.name);
        });
    });
}

function initCategories() {
    const items = [
        { name: { es: "Cuidados críticos", en: "Cuidados críticos ingles"}, subcategories:[1,2], order: 1, active: true },
        { name: { es: "Quirófano", en: "Quirófano ingles"}, subcategories:[8,9,10,7,5,11], order: 1, active: true },

    ];

    items.forEach((item) => {
        categories(item).save((err,_item,numAffected) => {
            if (err) throw err;
            console.log("Saved " + _item.name);
        });
    });
}

module.exports = function() {
    //initMenulist();
    //initSubCategories();
    //initCategories();
};