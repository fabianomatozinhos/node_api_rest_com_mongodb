import autores from "../models/Autor.js";

class AutorController {

    static listarTodosAutores = async (req, res) => {
        try {
            let arrayAutores =  await  autores.find({});
            res.status(200).json(arrayAutores);
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao bucar todos os Autores`})
        }  
    }

    static listarAutorPorId = async (req, res) => {
        try {
            const id = req.params.id;
            let autor =  await  autores.findById(id);
            res.status(200).json(autor);
        } catch (error) {
            res.status(400).send({message: `${error.message} - falha ao bucar o Autor`})
        }  
    }

    static cadastrarAutor = async (req, res) => {
        try {
            let autor = new autores (req.body);
            await autor.save();
            res.status(201).send(autor.toJSON())
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao cadastrar o autor`})
        }
    }

    static atualizarAutor = async (req, res) => {
        try {
            const id = req.params.id;
            await autores.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: `O Autor foi atualizado com sucesso`})
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao atualizar o Autor`})
        }
    }

    static deletarAutor = async (req, res) => {
        try {
            const id = req.params.id;
            await autores.findByIdAndRemove(id);
            res.status(200).send({message: `O Autor foi excluido com sucesso`})
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao excluir o Autor`})
        }
    }
}
export default AutorController