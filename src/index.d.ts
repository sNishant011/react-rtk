interface Author {
  name: string;
  birthYear: number;
  deathYear?: number;
}
interface Book {
  id: number;
  title: string;
  authors: Author[];
  subjects: string[];
  download_count: number;
}
interface BookState {
  isLoading: boolean;
  allBooks: Book[];
}
