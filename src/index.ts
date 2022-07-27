import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const routes = require("./core/routes");

dotenv.config();
// console.log(process.env.localhost)
const app: Express = express();
const port = process.env.PORT;

app.set("port", port || 3000);
// app.use(express.urlencoded({ extended: true, strict: false }));
app.use(express.json());

app.use("/v1", routes);

// app.get('/', (req: Request, res: Response) => {
//   res.send({message:'Express + TypeScript Server'});
// });

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
// });

// Running app
(async () => {
    await app.listen(app.get("port"));
    console.log(`
        ###################################################
            My custom API Katchatake                       
        🛡️app running on http://localhost:${app.get("port")} 🛡️
        ###################################################
      `);
  })();