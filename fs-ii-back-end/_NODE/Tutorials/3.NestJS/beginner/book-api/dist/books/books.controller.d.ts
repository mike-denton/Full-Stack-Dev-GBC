import { Book } from './book.entity';
import { BooksService } from './books.service';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getAllBooks(): Book[];
    createBook(book: Book): void;
}
