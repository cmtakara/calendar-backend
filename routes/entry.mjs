import express from 'express';
const router = express.Router();
import entryController from '../controllers/entry.mjs';

// seed route
// !!!!! to be taken out for deployment
router.get('/seed', entryController.seed);

// Index Route
// *****        get     /braindump/
// *****    returns all entries
//  NOTE: if the number of entries gets too large,
//      this may be updated to limit the number returned
router.get('/', entryController.getEntries);

// TODO: post  new entry
// TODO: get individual entry
// TODO: get based on timeframe
// TODO: edit
// TODO: delete

export default router;