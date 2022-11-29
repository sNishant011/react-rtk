import { useEffect } from 'react';

import { useAppSelector } from '../app/store';
import { useAppDispatch } from '../app/store';
import { useGetAllBooksQuery } from '../books/bookApiSlice';
import { setAllBooks, setIsLoading } from '../books/bookSlice';
import { selectBookState } from './bookSlice';

const BookList = () => {
  const response = useGetAllBooksQuery(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (response.data) {
      dispatch(setAllBooks(response.data.results));
    }
    dispatch(setIsLoading(response.isLoading));
  }, [response.data, response.isLoading]);

  const { allBooks, isLoading } = useAppSelector(selectBookState);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {allBooks.map((book) => (
            <div key={book.id} className="bookContainer">
              <h2 className="bookTitle">Title: {book.title}</h2>
              <ul className="authorList">
                <h3>Authors</h3>
                {book.authors.map((author, index) => (
                  <li key={index}>{author.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
