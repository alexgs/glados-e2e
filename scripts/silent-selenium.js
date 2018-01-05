const _ = require( 'lodash' );
const selenium = require( 'selenium-standalone' );

const globalOptions = require( '../selenium.json' );

const startOptions = {
    spawnOptions: {
        stdio: 'ignore'
    }
};

selenium.start( _.merge( {}, startOptions, globalOptions ), ( error, childProcess ) => {
    /* do nothing */
} );
