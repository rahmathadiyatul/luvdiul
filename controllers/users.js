const storeSession = require('store2')

module.exports.loginUser = (req, res) => {
    res.render('users/login')
}

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome Back!')
    const returnTo = storeSession.get('A') || '/home'
    res.redirect(returnTo)
    // req.flash('success', 'welcome back!');
    // const redirectUrl = req.session.returnTo;
    // delete req.session.returnTo;
    // res.redirect(redirectUrl);
}

module.exports.logout = async (req, res) => {
    req.logout((err) => {
        if (err) { return next(err); }
        req.flash('success', 'Sampai jumpa!')
        return res.redirect('/');
    })
}