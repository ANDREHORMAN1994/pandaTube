import multer from 'multer';
import path from 'path';
import fs from 'fs';

const DIR_FILE = path.join(__dirname, '../../public/img');

const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    if (!fs.existsSync(DIR_FILE)) {
      fs.mkdirSync(DIR_FILE, { recursive: true });
    }

    cb(null, DIR_FILE);
  },

  filename(_req, file, cb) {
    const name = file.originalname.split('.')[0];
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fullName = `${name}-${uniqueSuffix}${path.extname(
      file.originalname,
    )}`;

    const files = fs.readdirSync(DIR_FILE);

    if (files && files.length > 0) {
      files.forEach((f) => {
        if (f.includes(name)) {
          fs.unlinkSync(path.join(DIR_FILE, f));
        }
      });
    }

    cb(null, fullName);
  },
});

const upload = multer({ storage });

export default upload;
