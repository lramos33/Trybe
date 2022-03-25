"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const books_service_1 = __importDefault(require("../services/books.service"));
class BooksController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield books_service_1.default.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(books);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const book = yield books_service_1.default.getById(id);
            if (!book) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'Book not found!' });
            }
            res.status(http_status_codes_1.StatusCodes.OK).json(book);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = this.buildBookByParams(req.body);
            const bookCreated = yield books_service_1.default.create(book);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(bookCreated);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const book = this.buildBookByParams(req.body);
            yield books_service_1.default.update(id, book);
            res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            yield books_service_1.default.remove(id);
            res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        });
    }
    buildBookByParams(params) {
        const { title, price, author, isbn } = params;
        return { title, price, author, isbn };
    }
}
exports.default = new BooksController();
