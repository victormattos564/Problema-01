import express from "express";
import { config } from "dotenv";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
    const { dia } = req.query;
    return res.status(200).send({ message: `Hoje é ${dia}` });
});
app.get("/users/:mes", (req, res) => {
    const { mes } = req.params;
    return res.status(200).send({ message: `Estamos em ${mes}` });
});

app.post("/courses", (req, res) => {
    const { nome, idade } = req.body;

    if (!nome || !idade) {
        return res.status(400).send({ message: "Dados inválidos" });
    }

    return res.status(200).send({ message: `Olá ${nome}, você tem ${idade} anos` });
});

app.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;

    if (!nome || !idade) {
        return res.status(400).send({ message: "Dados inválidos" });
    }

    return res.status(200).send({ message: `Usuário ${id} atualizado com sucesso` });


});

app.delete("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Usuário ${id} deletado com sucesso` });
});
app.listen(port, () =>
    console.log(`⚡ Server started on http://localhost:${port}`)
);