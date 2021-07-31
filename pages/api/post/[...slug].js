export default (req, res) => {
    const { slug } = req.query
    res.status(200).json({name: slug })
}