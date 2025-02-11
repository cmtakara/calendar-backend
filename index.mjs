// import dependencies
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
dotenv.config();
// import conn.mjs so that I connect to my db
import db from './db/conn.mjs';
// import cors so that my frontend and backend can communicate
import cors from 'cors';
// import my routes from their folders
import brainEntries from './routes/brain.mjs';
import calendarEntries from './routes/entry.mjs';
import todoEntries from './routes/todo.mjs';
import users from './routes/user.mjs';
// set up port
const PORT = process.env.PORT || 5052;


// create app
const app = express();

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

// ROUTES
app.get('/', (req, res) => {
    res.send(
        '<h1>Calendar api</h1><ol>endpoints: <li>brain dump - /api/braindump</li><li>calendar - /api/calendar</li><li>todos - /api/todo</li></ol>'
    )
})

// fill in my endpoint routes - but they will be in their own folders
app.use('/api/braindump', brainEntries);
app.use('/api/calendar', calendarEntries);
app.use('/api/todo', todoEntries);
app.use('/api/users', users);

// default, catch-all route
app.get('/*', (req, res) => {
    res.redirect('/');
})

// Global error handling after the routes
app.use((err, _req, res, next) => {
    res.status(500).send('there was an issue on the server');
})

// Start express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})