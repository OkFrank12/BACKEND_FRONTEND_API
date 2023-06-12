import { Request, Response } from "express";
import crypto from "crypto";
import { iBooks } from "../utils/interface";

const BookShelf: iBooks[] = [];

export const getBooks = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Getting books successfully",
      data: BookShelf,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to get books",
    });
  }
};

export const createBooks = (req: Request, res: Response) => {
  try {
    const { title, author, publicationYear, genre } = req.body;
    const ID: string = crypto.randomBytes(16).toString("hex");

    const newBook = {
      id: ID,
      title,
      author,
      publicationYear,
      genre,
    };

    BookShelf.push(newBook);

    return res.status(201).json({
      message: "Created books successfully",
      data: newBook,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to create books",
    });
  }
};

export const singleBook = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const singleBook = BookShelf.filter((el: iBooks) => {
      return el?.id === id;
    });

    return res.status(200).json({
      message: "Get single books successfully",
      data: singleBook,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to get single books",
    });
  }
};

export const deleteBook = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteBook = BookShelf.filter((el: iBooks) => {
      return el?.id !== id;
    });

    return res.status(201).json({
      message: "Deleted books successfully",
      data: deleteBook,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to delete book from shelf",
    });
  }
};

export const updateBook = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, publicationYear, genre, author } = req.body;

    const updates = parseInt(id) - 1;

    BookShelf[updates].title = title;
    BookShelf[updates].author = author;
    BookShelf[updates].publicationYear = publicationYear;
    BookShelf[updates].author = author;

    return res.status(201).json({
      message: "Updated books successfully",
      data: BookShelf,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to update book from shelf",
    });
  }
};
