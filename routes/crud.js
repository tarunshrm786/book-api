const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define a book schema and model
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  summary: String
});

const Book = mongoose.model('Book', bookSchema);

// Create a new book
router.post('/', async (req, res) => {
  const { title, author, summary } = req.body;
  const book = new Book({ title, author, summary });
  await book.save();
  res.status(201).json(book);
});

// Get a list of all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get details of a specific book by its ID
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// Update a book's details
router.put('/:id', async (req, res) => {
  const { title, author, summary } = req.body;
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    { title, author, summary },
    { new: true }
  );
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// Delete a book
router.delete('/:id', async (req, res) => {
  const book = await Book.findOneAndDelete({ _id: req.params.id });
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json({ message: 'Book deleted' });
});

module.exports = router;
