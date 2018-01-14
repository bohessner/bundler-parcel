const express = require( "express" );
const path = require( "path" );

const app = express();

// Define the port to run on
app.set( "port", 3000 );

app.use( express.static( path.join( __dirname, "public" ) ) );

app.listen( app.get( "port" ), () => {
    console.log( `Magic happens on port ${ app.get( "port" ) }` );
} );
