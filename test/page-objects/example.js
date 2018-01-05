module.exports = {
    url: () => process.env.NIGHTWATCH_HOME,
    elements: {
        loginLink: '#login-link',
        welcomeText: '#welcome'
    }
};
