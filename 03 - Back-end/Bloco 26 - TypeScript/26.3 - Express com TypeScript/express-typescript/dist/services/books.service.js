"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const book_model_1 = __importDefault(require("../models/book.model"));
class BookService {
    constructor() {
        this.model = new book_model_1.default(connection_1.default);
    }
    getAll() {
        return this.model.getAll();
    }
    getById(id) {
        return this.model.getById(id);
    }
    create(book) {
        return this.model.create(book);
    }
    update(id, book) {
        this.checkBookExists(id);
        return this.model.update(id, book);
    }
    remove(id) {
        this.checkBookExists(id);
        return this.model.remove(id);
    }
    checkBookExists(id) {
        if (!this.model.getById(id)) {
            throw new Error('Book doesn`t exists!');
        }
    }
}
exports.default = new BookService();
