const notFound = (req, res) => {
    res.status(404).json({msg:'routes does not exists'})
    
}

module.exports = notFound