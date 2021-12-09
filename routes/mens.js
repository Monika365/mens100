const express = require("express");
const router = new express.Router()
const MensRanking = require('../model/mens');
router.post("/mens",async(req,res)=>{
    try{
        const addingmensRecords = new MensRanking(req.body)
           console.log(req.body);
         const insertmens =await  addingmensRecords.save();
         res.status(201).send(insertmens)
           }catch(error){
        res.status(400).send(error);
           }
        })
    
    router.get("/mens",async(req,res)=>{
        try{
        
             const getmens =await MensRanking .find({}).sort({"ranking":1});
             res.status(201).send(getmens)
               }catch(error){
            res.status(400).send(error);
               }
            })
            router.get("/mens/:id",async(req,res)=>{
                try{
                const _id = req.params.id
                     const getmen =await MensRanking.ind({_id})
                     res.status(201).send(getmen)
                       }catch(error){
                    res.status(500).send(error);
                       }
                    })
                    router.patch("/mens/:id",async(req,res)=>{
                        try{
                        const _id = req.params.id
                             const getmen =await MensRanking.findByIdAndUpdate(_id,req.body, {new:true})
                             res.status(201).send(getmen)
                               }catch(error){
                            res.status(400).send(error);
                               }
                            })
                            router.delete("/mens/:id",async(req,res)=>{
                                try{
                        
                                     const getmendelete =await MensRanking.findByIdAndDelete(req.params.id)
                                     res.status(201).send(getmendelete)
                                       }catch(error){
                                    res.status(400).send(error);
                                       }
                                    })


    module.exports = router;