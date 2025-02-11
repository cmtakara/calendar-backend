import Entry from '../models/entry.mjs';

async function seed (req, res ) {
    const TODAY = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let next = new Date();
    next.setDate(next.getDate() + 2);

    try {
        await Entry.create( 
            [
                {
                    label: 'something today',
                    startDate: TODAY
                },
                {
                    label: 'something tomorrow',
                    startDate: tomorrow
                },
                {
                    label: 'the following day',
                    startDate: next
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

export default { seed, getEntries }