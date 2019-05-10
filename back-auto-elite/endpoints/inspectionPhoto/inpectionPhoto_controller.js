const express = require('express');
const router = express.Router();

const {
    getInspectionPhotos,
    getInspectionPhotoById,
    getInspectionPhotoByInspectionId
} = require('./inspectionPhoto_model');

router.get('/', (req, res) => {
    const { id, inspectionId } = req.query;

    if(id) return res.send(getInspectionPhotoById(id));
    if(inspectionId) return res.send(getInspectionPhotoByInspectionId(inspectionId));
    return res.send(getInspectionPhotos());
    
});

router.post('/', (req, res) => {
    return res.send("Post on Inspection Photo successfuly accessed");
});

module.exports = router;
