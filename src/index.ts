 import express , { Request, Response }  from "express" ;
const app = express();
const port = 8080; // default port to listen
import user from "./routes/api/user";
app.use(express.static("public"));
app.use("/api/user", user);

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );