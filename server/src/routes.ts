import { Router } from "express";
import CountriesController from "./controllers/CountriesControlle";

const routes = Router()

routes.get('/countries', CountriesController.all )

export default routes