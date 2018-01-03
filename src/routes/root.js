import express from 'express';
const router = express.Router();

// GET home page.
router.get( '/', function( request, response, next ) {
    response.render( 'index', { title: 'Glados End-to-End Tests' } );
} );

export default router;
