function findAuthorById(authors, id) {
  let find= authors.find((author)=> author.id === id);
  return find
}

function findBookById(books, id) {
  let find = books.find((book)=> book.id === id);
  return find
}
function partitionBooksByBorrowedStatus(books) {
 let returns = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
  );
  let borrow= books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
  );
  let result= [[...borrow], [...returns]];
  return result;
}
function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
