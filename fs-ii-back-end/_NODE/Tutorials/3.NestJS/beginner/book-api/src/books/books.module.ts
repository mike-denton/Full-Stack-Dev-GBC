import { Module } from '@nestjs/common';
import { BooksController } from './books.controller'; // Import your controller
import { BooksService } from './books.service'; // Import your service

@Module({
    controllers: [BooksController], // Include the controller in the controllers array
    providers: [BooksService], // Include the service in the providers array
})
export class BooksModule { }
