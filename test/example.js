describe( 'User management URLs', function() {
    context( '/system/register', function() {
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

        it( 'has a field for the user\'s email address', function( browser ) {
            browser
                .url( 'http://localhost:2765/system/register' )
                .waitForElementVisible( 'body', 1000 )
                .assert.elementPresent( '@emailField' )
        } );
    } );
} );
