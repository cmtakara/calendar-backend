import Entry from '../models/entry.mjs';

async function seed(req, res) {
    const TODAY = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let next = new Date();
    next.setDate(next.getDate() + 2);

    try {
        await Entry.create(
            [
                {
                    user: '67b3aca5a4e66487678d036c',
                    text: "event today",
                    start: TODAY,
                    end: TODAY,
                    category: 'Focus',
                    participants: 2
                },
                {
                    user: '67b3aca5a4e66487678d036c',
                    text: "event today",
                    start: TODAY,
                    end: TODAY,
                    category: 'Focus',
                    participants: 2
                },
                {
                    user: '67b3aca5a4e66487678d036c',
                    text: "event today",
                    start: TODAY,
                    end: TODAY,
                    category: 'Focus',
                    participants: 2
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
        const foundEntries = await Entry.find({});
        res.status(200).json(foundEntries);
    } catch (err) {
        res.json(err).status(400);
    }
}

const getUserEntries = async (req, res) => {
    console.log('in getuserentries')
    try {
        console.log(req.params.user)
        const foundEntries = await Entry.find({ user: req.params.user });
        res.status(200).json(foundEntries);
    } catch (err) {
        res.json(err).status(400);
    }
}

const addEntry = async (req, res) => {
    try {
        console.log('in add entry - functionality not tested yet');
        console.log(req.body);
        const createdEntry = await Entry.create(req.body);
        console.log('created', createdEntry);
        res.status(200).json(createdEntry);
    } catch (err) {
        res.json(err).status(400);
    }
}

const deleteEntry = async (req, res) => {
    try {
        console.log('deleting... not tested yet')
        const deletedEntry = await Entry.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedEntry)
    } catch (err) {
        res.json(err).status(400);
    }
}

export default { seed, getEntries, getUserEntries, addEntry, deleteEntry }