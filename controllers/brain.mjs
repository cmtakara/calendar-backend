import Brain from '../models/brain.mjs';

async function seed (req, res) {
    const TODAY = new Date();

    try {
        await Brain.create(
            [
                {
                    entryDate: TODAY,
                    entryType: 'ToDo',
                    description: 'add meeting to calendar'
                },
                {
                    entryDate: TODAY,
                    entryType: 'Sched',
                    description: 'read required chapter'
                },
                {
                    entryDate: TODAY,
                    entryType: 'Idea',
                    description: 'i do not have ideas right now'
                },
                {
                    entryDate: TODAY,
                    entryType: 'List',
                    description: 'more books to read'
                },
            ]
        )
        res.send('success').status(200);
    } catch (err) {
        res.send(err).status(400);
    }
}

const getEntries = async (req, res) => {
    try {
        const foundEntries = await Brain.find({});
        res.status(200).json(foundEntries);
    } catch (err) {
        res.send(err).status(400);
    }
}

const addEntry = async (req, res) => {
    console.log('body: ',  req.body);
    try {
        const createdEntry = await Brain.create(req.body);
        console.log('created', createdEntry);
        res.status(200).json(createdEntry);
        
    } catch (err) {
        console.log(err);
        res.send(err).status(400);
    }
}

const deleteEntry = async (req, res) => {
    console.log('deleting...')
    // res.send('success').status(200)
    try {
        const deletedEntry = await Brain.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedEntry)
    } catch (err) {
        res.send(err).status(400);
    }
}

export default { seed, getEntries, addEntry, deleteEntry };