const axios = require('axios')


class faceController{

    static configureAge(req, res , next){
        
        axios({
            url: `https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age&returnFaceAttributes=gender`,
            headers : {
                'Ocp-Apim-Subscription-Key' : process.env.AZURE_FACE_KEY
            },
            method : "POST",
            data : {
                url : "https://storage.googleapis.com/mini-wpstorage-friska/1563510777248yuhu.jpeg"
                //req.file.cloudStoragePublicUrl 
            }
        })
        .then(({data}) => {
            res.status(200).json({
                data,
                image : 'gambar' //req.file.cloudStoragePublicUrl
            })
        })
        .catch(next)
    }

    
}


module.exports = faceController
