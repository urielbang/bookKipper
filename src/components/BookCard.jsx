export default function BookCard(props) {
  const hankleDelete = () => {
    console.log(props.booksNotBerrowed);
    const updatedBooks = props.booksNotBerrowed.filter((book) => {
      return props.book.name != book.name;
    });
    props.setBooksNotBerrowed(updatedBooks);
    console.log(updatedBooks);
  };
  return (
    <div className="bookCard">
      <p className="deletBook" onClick={hankleDelete}>
        DeleteBook
      </p>
      <h2>{props.book.name}</h2>
      <span>{props.book.description}</span>
      <img src={props.book.picture}></img>
    </div>
  );
}
