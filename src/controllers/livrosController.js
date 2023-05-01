import livros from "../models/Livro.js";

class LivroController {

    static listarTodosLivros = async (req, res) => {
        try {
            let arrayLivros =  await  livros.find({});
            res.status(200).json(arrayLivros);
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao bucar todos os livros`})
        }  
    }

    static listarLivrosPorId = async (req, res) => {
        try {
            const id = req.params.id;
            let livro =  await  livros.findById(id);
            res.status(200).json(livro);
        } catch (error) {
            res.status(400).send({message: `${error.message} - falha ao bucar o livro`})
        }  
    }

    static cadastrarLivro = async (req, res) => {
        try {
            let livro = new livros (req.body);
            await livro.save();
            res.status(201).send(livro.toJSON())
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao cadastrar o livro`})
        }
    }

    static atualizarLivro = async (req, res) => {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: `O Livro foi atualizado com sucesso`})
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao atualizar o livro`})
        }
    }

    static deletarLivro = async (req, res) => {
        try {
            const id = req.params.id;
            await livros.findByIdAndRemove(id);
            res.status(200).send({message: `O Livro foi excluido com sucesso`})
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao excluir o livro`})
        }
    }
}
export default LivroController