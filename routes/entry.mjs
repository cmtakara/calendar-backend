import express from 'express';
const router = express.Router();
import entryController from '../controllers/entry.mjs';

// seed route
// !!!!! to be taken out for deployment
router.get('/seed', entryController.seed);

// Index Route
// *****        get     api/calendar/
// *****    returns all entries
//  NOTE: if the number of entries gets too large,
//      this may be updated to limit the number returned
router.get('/', entryController.getEntries);

// Index Route for specific User
// *****        get     api/calendar/:user
// *****    returns all entries for the specified user
//  NOTE: if the number of entries gets too large,
//      this may be updated to limit the number returned
router.get('/:user', entryController.getUserEntries);

// TODO: create - test route
// Create Route
// *****        post    /api/calendar
// *****        add the entry to the database and return the added entry
router.post('/', entryController.addEntry);

// TODO: delete - test route
// Delete Route
// *****        delete  /api/calendar/:id
// *****        delete the specified entry and return the deleted entry
router.delete('/:id', entryController.deleteEntry);


// TODO: post  new entry
// TODO: get individual entry
// TODO: edit


export default router;