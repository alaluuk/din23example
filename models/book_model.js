const db=require('../database.js');

const book={

    getAllBooks(callback){
        return db.query('SELECT * FROM book',callback);
    },
    getOneBook(id,callback){
        return db.query('SELECT * FROM book WHERE id_book=?',[id],callback);
    },
    addBook(newData, callback){
        return db.query('INSERT INTO book (name,author,isbn) VALUES(?,?,?)',[newData.name, newData.author, newData.isbn],callback);
    },
    updateBook(updateData,id, callback){
        return db.query('UPDATE book SET name=?, author=?, isbn=? WHERE id_book=?',[updateData.name, updateData.author, updateData.isbn, id],callback);
    }
}

module.exports=book;