 import express , { Request, Response }  from "express" ;
const app = express();
const port = 8080; // default port to listen

app.get( "/", ( req: Request, res: Response) => {
  res.send( "Hello world!" );
} );

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );