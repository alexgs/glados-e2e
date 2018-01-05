describe( 'An Express app with the Glados module', function() {
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

        it( 'works with a page object', function( browser ) {
            const example = browser.page.example();

            example.navigate()
                .waitForElementVisible( 'body', 1000 )
                .assert
                .visible( '@welcomeText' )
            ;
        } );
} );
