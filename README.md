# Job Application Form

A web application that allows job seekers to submit their applications online. The application collects personal information, educational qualifications, and a resume from applicants and stores them in a MongoDB database.

## Features

- User-friendly job application form
- File upload functionality for resumes
- Data validation and storage
- Responsive design
- Secure file handling with unique filenames
- MongoDB database integration

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating engine, HTML5, CSS3
- **File Upload**: Multer middleware
- **Development**: Nodemon for automatic server restarts

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (running locally or connection string for remote database)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database:
   - Make sure MongoDB is running locally or update the connection string in `db.js`
   - The default configuration connects to `mongodb://localhost:27017/form`

4. Create a `public/uploads` directory for storing uploaded files:
   ```bash
   mkdir -p public/uploads
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
.
├── app.js            # Main application file
├── db.js             # Database connection configuration
├── model/
│   └── user.js       # Mongoose schema and model
├── public/
│   └── uploads/      # Directory for storing uploaded resumes
├── views/
│   └── index.ejs     # Main view template
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables if needed:

```
MONGODB_URI=mongodb://localhost:27017/form
PORT=3000
```

## API Endpoints

- `GET /` - Renders the job application form
- `POST /submit` - Handles form submission and file upload

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with Express.js and MongoDB
- Uses Multer for file uploads
- EJS for server-side templating
