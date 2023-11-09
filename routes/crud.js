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
  try {
    const { title, author, summary } = req.body;
    const book = new Book({ title, author, summary });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create a new book' });
  }
});

// Get a list of all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve books' });
  }
});

// Get details of a specific book by its ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve the book' });
  }
});

// Update a book's details
router.put('/:id', async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, summary },
      { new: true }
    );
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update the book' });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({ _id: req.params.id });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete the book' });
  }
});

module.exports = router;
