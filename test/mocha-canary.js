const nightwatch = require( 'nightwatch' );
const ms = require( 'ms' );

const nightwatchConfig = require( '../nightwatch.json' );
const defaultTestConfig = nightwatchConfig.test_settings.default;
// console.log( '>>> --- <<<' );
// console.log( JSON.stringify( defaultTestConfig, null, 2 ) );
// console.log( '>>> --- <<<' );

describe( 'The canary test for Mocha', function() {
    const client = nightwatch.initClient( defaultTestConfig );

    // const browser = client.api();
    let browser = null;

    this.timeout( ms( '20s' ) );

    // before( function( done ) {
    //     client.start( done );
    // } );

    // beforeEach( function( done ) {
    //     client.start( done );
    // } );

    beforeEach( function() {
        browser = client.api();
    } );

    // after( function( done ) {
    //     client.start( done );
    // } );

    // afterEach( function( done ) {
    //     client.start( done );
    // } );

    afterEach( function() {
        browser.end();
    } );

    it( 'works with the Google homepage', function( done ) {
        browser
            .url( 'https://www.google.com' )
            .waitForElementVisible( 'body', 1000 )
            .expect.element( 'input[type=text]' ).to.be.visible
            // .end()
        ;

        client.start( done );
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
