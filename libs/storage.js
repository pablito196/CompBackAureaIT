import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/uploads')
      //cb(null, path.join(__dirname,'./public/img/uploads'))
    },
    filename: function (req, file, cb) {
     // cb(null, file.fieldname + '-' + Date.now())
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`) 
    }
  })
   
  const upload = multer({ storage})

  module.exports = upload