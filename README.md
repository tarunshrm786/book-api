# book-api
Book Management API


1. API Endpoints and Their Usage
POST /api/books: Add a new book to the database.
GET /api/books: Retrieve a list of all books from the database.
GET /api/books/:id: Retrieve details of a specific book by its ID.
PUT /api/books/:id: Update a book's details by its ID.
DELETE /api/books/:id: Delete a book by its ID.

2. Instructions to Set Up and Run the Application Locally
Clone the Repository: git clone https://github.com/your-repo-url.git
Install Dependencies: npm install, npm install express, npm install mongoose

Configuration: Create a .env file and configure the MongoDB connection string.
Start the Application: npm start
Access the API: The API will be accessible at http://localhost:6600.

3. Decisions and Assumptions
Assumed that MongoDB is running and configured correctly.
Chose to use Express.js as the web framework for the Node.js application.
Created a simple API with basic error handling and validation.
Decided to use environment variables for configuration.
