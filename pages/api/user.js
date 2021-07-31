export default function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json({ name: 'yerinko'})
        // res.status(200).send('you')
    } else {
        res.status(200).json({ name: 'Get Request'})
    }
}