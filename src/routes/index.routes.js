import { Router } from 'express';
import studentsRoutes from "./students.routes.js"

const rotas = Router();

rotas.use('/students', studentsRoutes);

rotas.get('/', (req, res) => {
     return res.send(200).send({ message: 'Servidor OK'});
    });
export default rotas