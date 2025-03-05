import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import BookList from './components/BookList/BookList'
import BookForm from './components/BookForm/BookForm'

function App() {
  const [activeComponent, setActiveComponent] = useState("home");
  const [books, setBooks] = useState([]);

  //adicionar o novo livro:
  const addBook = (newBook) => {
    console.log("Adicionando livro:", newBook);
    setBooks((prevBooks) => [...prevBooks, { id: prevBooks.length + 1, ...newBook }]);
    alert("Livro adicionado com sucesso!");
  };
  
  //excluir livro da lista
  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter(book => book.id !== id));
    alert ("Livro removido da lista com sucesso!")
  };

  return (
    <div>
      <NavBar setActiveComponent={setActiveComponent} />
      <div className='container'>
        {activeComponent === "home" && <h1>Bem Vindo(a) ao "Reading Journal"!</h1>}
        {activeComponent === "livros" && <BookList books={books} deleteBook={deleteBook} />}
        {activeComponent === "cadastrar" && <BookForm addBook={addBook} />}
      </div>
    </div>
  );
}

export default App;
