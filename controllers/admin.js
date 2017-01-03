module.exports.controller = app => {
    app.get('/admin', (req, res) => {
        res.render('admin');
    });
}