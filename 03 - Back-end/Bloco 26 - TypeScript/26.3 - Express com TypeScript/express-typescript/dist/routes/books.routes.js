"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const books_middleware_1 = __importDefault(require("../middlewares/books.middleware"));
const router = (0, express_1.Router)();
router.get("/books", books_controller_1.default.getAll);
router.get("/books/:id", books_controller_1.default.getById);
router.post("/books/", books_middleware_1.default, books_controller_1.default.create);
router.put("/books/:id", books_middleware_1.default, books_controller_1.default.update);
router.delete("/books/:id", books_controller_1.default.remove);
exports.default = router;
