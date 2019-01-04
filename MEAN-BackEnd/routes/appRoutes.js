var express =require('express');
var router=express.Router();
var Note =require('../model/dataSchema');


router.post('/create',(req,res,next) => {

    var newNote= new Note({
        title:req.body.title,
        dec:req.body.dec,
        creation_dt: Date.now()
    });
    newNote.save((err,note)=>{
        if (err)
        
    res.status(500).json({ errmsg :err});
    res.status(200).json({ msg :note});


    });

});


// router.get('/read',(req,res,next) => {

//     Note.find({},(err,notes)=>{
//         if (err)
//         res.status(500).json({ errmsg :err});
//         res.status(200).json({ msg :notes});
    

//     });

// });
router.get('/read',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Note.find()
                .then(function(products){
                    res.send(products);
                });
  });



router.put('/update',(req,res,next) => {

    Note.findById(req.body._id,(err,note)=>{
        if (err)
        
        res.status(500).json({ errmsg :err});
        note.title=req.body.title;
        note.dec=req.body.dec;
        note.save((err,note)=>{
            if(err)

            res.status(500).json({ errmsg :err});
            res.status(200).json({ msg :note});

        });

    })
});


router.delete('/delete/:id',(req,res,next) => {

   Note.findOneAndRemove({_id:req.param._id},(err,note)=>{

    if(err)

    res.status(500).json({ errmsg :err});
    res.status(200).json({ msg :note});
    
   });
});

module.exports =router;
