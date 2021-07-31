export default (req, res) => {
    res.status(200).json({name: req.query.id})
}