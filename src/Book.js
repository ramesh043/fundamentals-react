const Book = (props) => {
  const { img, title, author } = props;
  return (
    <>
      <article className="book">
        <img src={img} alt="jdghj" />
        <h2>{title}</h2>
        <p>{author}</p>
        <span className="num">{1}</span>
      </article>
    </>
  );
};

export default Book;
