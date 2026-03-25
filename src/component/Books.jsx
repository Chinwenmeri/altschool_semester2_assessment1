// this block of codes uses the props to display the image, title and description of the book.

const Books = ({ title, image, Author, description }) => {
  return (
    <li className='book'>
      <img src={image} alt={title} />

      <div className='details'>
        <h2>{title}</h2>
        <h3>{Author}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Books;
