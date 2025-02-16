const router = require('express').Router();
router.get('/getData',(req,res)=>{
    res.send("data");
})
module.exports = router;