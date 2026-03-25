import { BOOKS } from './data';
import { CONTACT } from './data';
import Books from './component/Books';
import ContactCard from './component/ContactCard';
const App = () => {
  return (
    <>
      <h1 className='heading'>My Favorite Books</h1>
      {/* this component has a list of favorite books */}

      <ul>
        <Books
          title={BOOKS[0].title}
          image={BOOKS[0].image}
          Author={BOOKS[0].Author}
          description={BOOKS[0].description}
        />
        <Books
          title={BOOKS[1].title}
          image={BOOKS[1].image}
          Author={BOOKS[1].Author}
          description={BOOKS[1].description}
        />
        <Books
          title={BOOKS[2].title}
          image={BOOKS[2].image}
          Author={BOOKS[2].Author}
          description={BOOKS[2].description}
        />
      </ul>

      <h1 className='heading_two'> A CONTACT CARD FOR QUESTION 2</h1>
      <ul>
        <ContactCard
          name={CONTACT[0].name}
          job={CONTACT[0].job}
          email={CONTACT[0].email}
        />
        <ContactCard
          name={CONTACT[1].name}
          job={CONTACT[1].job}
          email={CONTACT[1].email}
        />
      </ul>
    </>
  );
};

export default App;
