import multer from 'multer';

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    const arr = file.originalname.split('.');
    cb(null, Date.now() + '-img.' + arr[arr.length - 1]);
  },
});

const upload = multer({ storage });

export default upload;
