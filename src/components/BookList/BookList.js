// componente que lista os livros e que deve receber pelo menos uma lista de livros via props;
import React from "react";

function BookList({ books, deleteBook}) {
    return (
        <div>
            <h1>Lista de Livros</h1>
            {books.length === 0 ? (
                <p>Nenhum livro cadastrado.</p>
            ) : (
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            <strong>{book.title}</strong> - {book.author}({book.genre}) - {book.date}
                            <button
                                onClick={() => deleteBook(book.id)}
                                style={{ marginLeft: "10px", color: "white", backgroundColor: "red", border: "none", cursor: "pointer" }}
                            >
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BookList;