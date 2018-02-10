module.exports = {
    url: () => process.env.NIGHTWATCH_HOME,
    elements: {
        loginLink: '#login-link',
        welcomeText: '#welcome',
        auth0title: '.auth0-lock-name',
        auth0email: {
            selector: '//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div[3]/span/div/div/div/div/div/div/div/div/div[4]/div[1]/div/input',
            locateStrategy: 'xpath'
        },
        auth0password: {
            selector: '//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div[3]/span/div/div/div/div/div/div/div/div/div[4]/div[2]/div/div/input',
            locateStrategy: 'xpath'
        },
        auth0form: {
            selector: '//*[@id="auth0-lock-container-1"]/div/div[2]/form',
            locateStrategy: 'xpath'
        },
        auth0button1: {
            selector: '//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/button',
            locateStrategy: 'xpath'
        },
        auth0button2: {
            selector: '//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div[3]/span/div/div/div/div/div/div/div/div/button',
            locateStrategy: 'xpath'
        }
    }
};
