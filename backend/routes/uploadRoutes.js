import fs from 'fs';
import path from 'path';
import express from 'express';
import multer from 'multer';
// import sharp from 'sharp'; // Import sharp for image resizing

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const dir = 'uploads/';
    //if dir not exists, create.
    fs.mkdir(dir, { recursive: true }, (err) => {
      if (err) {
        cb(err);
      } else {
        cb(null, dir);
      }
    });
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

//file types that are supported
function fileFilter(req, file, cb) {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Images only!'), false);
  }
}

const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single('image');

//upload image route with resize
// router.post('/', (req, res) => {
//   uploadSingleImage(req, res, function (err) {
//     if (err) {
//       return res.status(400).send({ message: err.message });
//     }

//     // Resize image to 640x510 using Sharp
//     const resizedImagePath = `uploads/resized-${Date.now()}.jpg`; // Save resized image with a different name
//     sharp(req.file.path)
//       .resize(640, 510)
//       .toFile(resizedImagePath, (err, info) => {
//         if (err) {
//           return res.status(500).send({ message: 'Error resizing image' });
//         }
//         // Delete original uploaded image
//         // fs.unlinkSync(req.file.path);

//         res.status(200).send({
//           message: 'Image uploaded and resized successfully',
//           image: `/${resizedImagePath}`,
//         });
//       });
//   });
// });

router.post('/', (req, res) => {
  uploadSingleImage(req, res, function (err) {
    if (err) {
      return res.status(400).send({ message: err.message });
    }

    res.status(200).send({
      message: 'Image uploaded successfully',
      image: `/${req.file.path}`,
    });
  });
});

export default router;
