// TODO Update Ansible to install Google Chrome on `atlas.sword` automatically
// TODO Use page objects <http://nightwatchjs.org/guide#page-objects>

describe.only( 'The canary test', function() {
    context( 'for Nightwatch', function() {
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

        it( 'works as expected', function( browser ) {
            browser
                .url( 'http://localhost:2765/system/register' )
                .waitForElementVisible( 'body', 1000 )
                // .assert.elementPresent( '#user-email' )
        } );
    } );
} );
