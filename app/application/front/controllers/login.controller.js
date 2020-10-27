const create = (req, res) => {
    return res.render('index', { username: 'Virk' })
}

const store = (req, res) => { }


export default { create, store }