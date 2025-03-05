import React, { useState, useCallback } from "react";

function BookForm({ addBook }) {
    const [book, setBook] = useState({ title: "", author: "", genre: "", date: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setBook((prevBook) => ({
            ...prevBook,
            [e.target.name]: e.target.value
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: ""
        }));
    };

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        let newErrors = {};  //para guardar os erros

        Object.keys(book).forEach((field) => {
            if (!book[field].trim()) {
                newErrors[field] = "Este campo é obrigatório!";
            }
        });

        //se tiver erro, atualizar
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        addBook(book);
        setBook({ title: "", author: "", genre: "", date: "" });
        setErrors({});  // limpar de novo os error depois do Submit

    }, [book, addBook]);

    return (
        <form onSubmit={handleSubmit}>
            <h1>Cadastrar Livros</h1>
            <fieldset>
                <label>Título:</label>
                <input 
                    type="text" 
                    name="title" 
                    value={book.title} 
                    onChange={handleChange}
                    style={{ borderColor: errors.title ? "red" : "" }}
                />
                {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}

                <label>Autor(a):</label>
                <input 
                    type="text" 
                    name="author" 
                    value={book.author} 
                    onChange={handleChange}
                    style={{ borderColor: errors.author ? "red" : "" }}
                />
                {errors.author && <span style={{ color: "red" }}>{errors.author}</span>}

                <label>Gênero:</label>
                <input 
                    type="text" 
                    name="genre" 
                    value={book.genre} 
                    onChange={handleChange}
                    style={{ borderColor: errors.genre ? "red" : "" }}
                />
                {errors.genre && <span style={{ color: "red" }}>{errors.genre}</span>}

                <label>Data:</label>
                <input 
                    type="date" 
                    name="date" 
                    value={book.date} 
                    onChange={handleChange}
                    style={{ borderColor: errors.date ? "red" : "" }} //vermelinho
                />
                {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}

                <button type="submit">Adicionar</button>
            </fieldset>
        </form>
    );
}

export default BookForm;