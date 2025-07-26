const express = require('express');
const path = require('path');
const multer = require('multer');
const crypto = require('crypto');
const connectDB = require('./db');
const USER = require('./model/user');
const app = express();

connectDB();

// Middleware to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  }
});
const upload = multer({ storage: storage });

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (optional, to access uploaded files)
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Render form
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission
app.post('/submit', upload.single('resume'), async (req, res) => {
  const { name, email, degree, phone } = req.body;
  const resume = req.file.path

  try {
    const newForm = new USER({
      name,
      email,
      degree,
      phone,
      resume
    });

    const savedForm = await newForm.save();
    res.status(201).json({ message: 'Form submitted!', data: savedForm });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
