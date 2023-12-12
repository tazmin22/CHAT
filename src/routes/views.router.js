const { Router } = require('express')

//http://localhost:8080/views
//ACA ES EL HOME DE LA TIENDA

const router = Router()


router.get('/', (req,res) =>{
    res.render('index', {
      title: 'TIENDA',
      name: 'usuario',
      style: 'index.css'
    })
  })



module.exports = router