import express from 'express';
const router = express.Router();
import entryController from '../controllers/brain.mjs';

// seed route
// !!!!! to be taken out for deployment
router.get('/seed', entryController.seed);


// TODO: get individual entry
// TODO: get based on criteria
// Index Route
// *****        get     /api/braindump/
// *****    returns all entries
//  NOTE: if the number of entries gets too large,
//      this may be updated to limit the number returned
router.get('/', entryController.getEntries);

// Create Route
// *****        post    /api/braindump
// *****        add the entry to the database and return the added entry
router.post('/', entryController.addEntry);

// TODO: delete
// Delete Route
// *****        delete  /api/braindump/:id
// *****        delete the specified entry and return the deleted entry
router.delete('/:id', entryController.deleteEntry);

// TODO: edit

export default router;
