class bookList {

    constructor(book) {
        this.librosSinLeer;
        this.librosLeidos = book.librosLeidos ? this.librosLeidos + 1: this.librosSinLeer + 1;
        this.fechaLectura = book.fechaLectura;
        this.currentBook;
        this.lastBookRead;
        this.nextBookRead;
        this.libros=[];

    }

    add(book){
        this.libros.add(book);
    }

    finishCurrentBook(){
        this.currentBook.leido = true;
        this.librosLeidos++;
        this.librosSinLeer--
        this.fechaLectura = new Date();
        this.lastBookRead = currentBook;

        this.libros.map(x=> this.libros.find(x.leido==false));


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

let libro1 = new book(book1);

console.log(libro1);