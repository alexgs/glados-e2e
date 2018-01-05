const assert = require( 'assert' );
const ms = require( 'ms' );
const path = require( 'path' );

const halfSecond = 500;
const oneSecond = ms( '1s' );
const twoSeconds = ms( '2s' );
const fiveSeconds = ms( '5s' );

describe.only( 'The Glados module', function() {
    before( function( browser, done ) {
        done();
    } );

    beforeEach( function( browser, done ) {
        done();
    } );

    after( function( browser, done ) {
        browser.end( function() {
            done();
        } );
    } );

    afterEach( function( browser, done ) {
        done();
    } );

    it( 'handles login via Auth0', function( browser ) {
        const loginSequence = browser.page.basicLogin();

        // Click the "login" link on the homepage and navigate to Auth0
        loginSequence
            .navigate()
            .waitForElementVisible( 'body', 1000 )
            .expect.element( '@loginLink' ).to.be.visible;
        loginSequence
            .click( '@loginLink' )
            .waitForElementVisible( 'body', 1000 )
            .assert.urlContains( process.env.AUTH0_DOMAIN );

        // Wait for the lock widget to load
        loginSequence
            .waitForElementVisible( '@auth0title', 1000 )
            .expect.element( '@auth0title' ).text.to.equal( 'Express App Prototype' );
        loginSequence.waitForElementVisible( '@auth0email', 1000 );
        // browser.saveScreenshot( path.resolve( process.env.SCREENSHOT_DIR, 'auth0.png' ) );

        // Enter login details and submit
        loginSequence.expect.element( '@auth0email' ).to.have.attribute( 'class' ).contains( 'auth0-lock-input' );
        loginSequence.expect.element( '@auth0password' ).to.have.attribute( 'class' ).contains( 'auth0-lock-input' );
        loginSequence.expect.element( '@auth0button1' ).to.be.visible;

        loginSequence.setValue( '@auth0email', process.env.AUTH0_EMAIL );
        loginSequence.setValue( '@auth0password', process.env.AUTH0_PASSWORD );
        loginSequence.submitForm( '@auth0form' );
        browser.pause( fiveSeconds );

        // Check that we're on the user page with a "secure" session cookie
        loginSequence.waitForElementVisible( 'body', oneSecond );
        loginSequence.assert.urlContains( process.env.NIGHTWATCH_HOME );
        loginSequence.assert.urlEquals( process.env.NIGHTWATCH_HOME + 'login/user' );
        browser.getCookie( 'aegis.sid', function( cookie ) {
            this.assert.ok( cookie );
            this.assert.equal( typeof cookie.value, 'string' );
            console.log( `>>> ${cookie.name} :: ${cookie.value} <<<` );
        } );
    } );
} );
