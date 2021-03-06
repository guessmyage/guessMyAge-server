const axios = require("axios");

class faceController {
  static configureAge(req, res, next) {
    axios({
      url: `https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age&returnFaceAttributes=gender`,
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.AZURE_FACE_KEY
      },
      method: "POST",
      data: {
        url: req.file.cloudStoragePublicUrl
      }
    })
      .then(({ data }) => {
        res.status(200).json({
          data,
          image: req.file.cloudStoragePublicUrl
        });
      })
      .catch(next);
  }

  static alternateAge(req, res, next) {
      console.log(req, 'XXXXXXXXXXXXXXXX');
    // axios({
    //   url: `http://max-facial-age-estimator.max.us-south.containers.appdomain.cloud/model/predict`,
    //   headers: {
    //     accept: "application/json",
    //     "Content-Type": "multipart/form-data"
    //   },
    //   method: "POST",
    //   data: {
    //     image: req
    //   }
    // })
    //   .then(({ data }) => {
    //     res.status(200).json({
    //       data,
    //       image : req.file.cloudStoragePublicUrl
    //     });
    //   })

    //   .catch(next);
  }
}

module.exports = faceController;
