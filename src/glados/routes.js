import express from 'express';
import fs from 'fs';
import glados from '@philgs/glados';
import path from 'path';

const auth0PublicKey = fs.readFileSync( path.resolve( __dirname, '../../config/ickyzoo-auth0-com.pem' ) );
const PARENT_ROUTE = '/login';
const requireAuthentication = glados.getRequireAuthMiddleware( `/login` );
const router = express.Router();

router.get(
    '/',
    glados.startOAuth2(),
    glados.getDummyHandler()
);

router.get(
    '/auth-complete',
    glados.completeOAuth2( auth0PublicKey ),
    ( request, response ) => response.redirect( request.session.returnTo || `${PARENT_ROUTE}/user` )
);

router.get(
    // TODO Implement something for this in Glados
    '/login-failed',
    ( request, response ) => {
        response.render( 'login-failed', {
            flash: request.flash('error')
        } )
    }
);

router.get(
    '/logout',
    glados.logout(),
    ( request, response ) => response.redirect( '/logout-successful' )
);

router.get(
    '/user',
    requireAuthentication,
    ( request, response ) => response.render( 'user-details.ejs', {
        cookie: JSON.stringify( request.cookies.glados, null, 4 ),
        requestUser: JSON.stringify( request.user, null, 4 )
    } )
);

export default router;
