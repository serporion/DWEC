class bookList {

    #libros = [];

    constructor(book) {
        this.librosSinLeer = 0;
        this.librosLeidos = 0;
        this.fechaLectura = null;
        this.currentBook;
        this.lastBookRead;
        this.nextBookRead;

        if (book) {
            this.anadir(book); 
            if (book.librosLeidos) {
                this.librosLeidos += 1;
            } else {
                this.librosSinLeer += 1;
            }
        }
        
    }

    anadir(book){
        this.#libros.push(book);

        if (book.leido) {
            this.librosLeidos += 1;
        } else {
            this.librosSinLeer += 1;
            if (!this.nextBookRead) {
                this.nextBookRead = book; 
            }
        }

    }


    hacerCurrentBook(book){
        this.currentBook = book;
        console.log(`El libro actual es: ${book.titulo}`);
    }

    mostrarCurrentBook(){

        if (!this.currentBook) {
            console.log("No hay un libro en lectura actualmente.");
            return;
        }

        let lib = this.currentBook;
        //console.log(`El libro actual es el siguiente: ${lib.titulo}`);
        return this.currentBook.titulo;
    }


    finishCurrentBook(){

        if (!this.currentBook) {
            console.log("No hay un libro en lectura actualmente.");
            return;
        }

        this.currentBook.leido = true;
        this.librosLeidos++;
        this.librosSinLeer--
        this.fechaLectura = new Date();
        this.lastBookRead = this.currentBook;

        let lib = this.#libros.find(libro => !libro.leido);

        this.nextBookRead = lib;
        this.currentBook = this.nextBookRead || null;

        if (this.currentBook) {
            console.log(`El siguiente libro a leer es: ${this.currentBook.titulo}`);
        } else {
            console.log("No hay más libros por leer.");
        }
    }

    mostrarLibros() {
        return this.#libros.forEach(libro => console.log(libro));
    }
}


class book {

    constructor(objetoBook){
        this.id = objetoBook.id;
        this.titulo = objetoBook.titulo;
        this.genero = objetoBook.genero;
        this.leido = objetoBook.leido;
        this.fechaLectura = objetoBook.fechaLectura;
    }
}


const book1 = {
    id: 1,
    titulo: "El",
    genero: "Novela",
    leido: false,
    fechaLectura:null

}

const book2 = {
    id: 2,
    titulo: "Tu",
    genero: "Ensayo",
    leido: false,
    fechaLectura:null

}

//Creo mi lista de libros

let listaDePrueba = new bookList();


//Tenemos libros y queremos controlarlos, pues hacemos libros individualmente y los pasamos. 
//Si no nos hace falta, directamente los pasamos a lista de libros, pero en el método anadir 
//habría que moodificarlo así:  anadir(idOrBook, titulo, genero, leido, fechaLectura){....}.
//Se puede pasar tanto un objeto como todas las propiedades. Se lo traga, podemos decirle que
//si el primero es un objeto, que lo trate como tal, sino, pues como una sucesion de propiedades.
//ver metodo anadir de carpeta del tema 3 de objetos "NO" repositorio.

let libro1 = new book(book1);
//listaDePrueba.anadir(2,"Tu","Ensayo",false,null);
let libro2 = new book(book2);


listaDePrueba.anadir(libro1);
listaDePrueba.anadir(libro2);

console.log(libro1);



listaDePrueba.mostrarLibros();

//listaDePrueba.currentBook


listaDePrueba.hacerCurrentBook(libro1);

console.log("Este es el libro de lectura actual: " + listaDePrueba.mostrarCurrentBook());

listaDePrueba.finishCurrentBook(libro1);


listaDePrueba.mostrarLibros();

console.log(`Este es el libro de lectura actual ${listaDePrueba.mostrarCurrentBook()}`);


