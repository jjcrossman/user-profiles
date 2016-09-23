//REQUIRES
const express = require( "express" );
const { json } = require( "body-parser" );
const session = require( "express-session" );
const sessionConfig = require( "./config/sessionConfig.js" );
const cors = require( "cors" );
const corsOptions = require( "./config/corsOptions.js" )
const app = express();
const port = 8899;

//MIDDLEWARE
app.use( cors( corsOptions ) );
app.use( json() );
app.use( session( sessionConfig ) );
app.use( express.static( `${ __dirname }/public` ) );

//ROUTES
const userRoutes = require( "./features/login/userRoutes.js" );
userRoutes( app );

const profileRoutes = require( "./features/profile/profileRoutes.js" );
profileRoutes( app );

//LISTEN
app.listen( port, () => console.log( "User Profiles is listening on port: " + port ) );
