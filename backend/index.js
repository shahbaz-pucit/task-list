const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3002;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// MySQL Database Connection note: 
const db = mysql.createConnection({
  host: 'techtriggered.com',
  user: 'techtrig_task',        
  password: 'Testdb@123',
  database: 'techtrig_task'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
  console.log('Connected to the MySQL database');
});

// CRUD Endpoints

//Creating a new task along with proper error handling
app.post('/create-task', (req, res) => {
  const { title, description } = req.body;
  const query = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
  db.query(query, [title, description], (err, result) => {
    if (err) {
      console.error('Error creating task:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Task created', taskId: result.insertId });
  });
});

// Getting all tasks along with proper error handling
app.get('/tasks', (req, res) => {
  let query = 'SELECT * FROM tasks';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving tasks:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
    console.log(results);
    
  });
});

// Getting a task by ID along with proper error handling
app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  let query = `SELECT * FROM tasks WHERE id = ?`;
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error in getting task:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(results[0]);
  });
});

// Updating a task along with proper error handling
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  let query = 'UPDATE tasks SET title = ?, description = ? WHERE id = ?';
  db.query(query, [title, description, id], (err, result) => {
    if (err) {
      console.error('Error updating the task:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task updated' });
  });
});

// Deleting a task along with proper error handling
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tasks WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting task:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  });
});


// Starting the Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
