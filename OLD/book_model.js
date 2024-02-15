const book={
    bookArray:[
        {id_book:1, name:'Databases',author:'Jim Smith',isbn:'12334'},
        {id_book:2, name:'JAvaScript',author:'Lisa Smith',isbn:'12334'}
    ],

    getAllBooks(callback){
        callback(this.bookArray);
    },
    getOneBook(id,callback){
        callback(this.bookArray[id]);
    },
    addBook(newData, callback){
        const sql='INSERT INTO book (name,author,isbn) VALUES('+newData.name+', '+newData.author+')';
        callback(sql);
    }
}

module.exports=book;