import { Book } from './book.entity';
export declare class BooksService {
    private readonly books;
    getAllBooks(): Book[];
    createBook(book: Book): void;
}
