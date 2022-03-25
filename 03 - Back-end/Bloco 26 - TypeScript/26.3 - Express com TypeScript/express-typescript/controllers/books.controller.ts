import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Book from "../interfaces/book.interface";

import bookService from "../services/books.service";

class BooksController {
  public async getAll(req: Request, res: Response) {
    const books = await bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  }

  public async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const book = await bookService.getById(id);

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Book not found!'});
    }

    res.status(StatusCodes.OK).json(book);
  }

  public async create(req: Request, res: Response) {
    const book = this.buildBookByParams(req.body);

    const bookCreated = await bookService.create(book);
    res.status(StatusCodes.CREATED).json(bookCreated);
  }

  public async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const book = this.buildBookByParams(req.body);
    await bookService.update(id, book);

    res.status(StatusCodes.NO_CONTENT).end();

  }

  public async remove(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await bookService.remove(id);

    res.status(StatusCodes.NO_CONTENT).end();

  }

  private buildBookByParams(params: any): Book {
    const { title, price, author, isbn } = params;
    return { title, price, author, isbn } as Book;
  }
}

export default new BooksController();