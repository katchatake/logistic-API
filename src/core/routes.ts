import express, { Express, Request, Response } from 'express';
import fs from "fs";
import path from "path";

const router = express.Router();

const pathRouter = path.join(process.cwd(), "src/services");

fs.readdirSync(pathRouter).filter((file:string) => {
  const skip = ["index"].includes(file);
//   console.log("=>",`/${file}`, require(path.join(process.cwd(), `src/services/${file}/routes.ts`)))
  if (!skip) return router.use(`/${file}`, require(path.join(process.cwd(), `src/services/${file}/routes.ts`)));
  return console.log("No existe ninguna ruta creada en apiServices", file);
});

module.exports = router;
