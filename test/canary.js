describe.skip( 'The canary test for Nightwatch', function() {
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

    it( 'works with the Google homepage', function( browser ) {
        browser
            .url( 'https://www.google.com' )
            .waitForElementVisible( 'body', 1000 )
            .expect.element( 'input[type=text]' ).to.be.visible;
    } );

    it( 'works with the dev server', function( browser ) {
        browser
            .url( process.env.NIGHTWATCH_HOME )
            .waitForElementVisible( 'body', 1000 )
            .expect.element( '#welcome' ).to.be.visible;
    } );

    it( 'works with a page object', function( browser ) {
        const example = browser.page.example();

        example.navigate()
            .waitForElementVisible( 'body', 1000 )
            .assert
            .visible( '@welcomeText' )
        ;
    } );
} );
