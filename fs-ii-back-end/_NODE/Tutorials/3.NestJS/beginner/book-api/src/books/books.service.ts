/* eslint-disable prettier/prettier */
// books/books.service.ts
import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
    private readonly books: Book[] = [{ id: 1, title: 'Test Book', author: 'Test User' }];

    getAllBooks(): Book[] {
        return this.books;
    }

    createBook(book: Book): void {
        this.books.push(book);
    }
}
