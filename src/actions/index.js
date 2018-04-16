export function selectBook(book) {
  console.log("selecting book");
  //selectBook is an ActionCreators
  //it needs to return an action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
