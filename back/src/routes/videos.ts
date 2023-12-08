import { Router } from 'express';
import middleware from '../middleware';
import controllers from '../controllers';
import upload from '../utils/multer';
import swaggerCreateVideo from '../docs/videos/swaggerCreateVideo';
import swaggerGetVideos from '../docs/videos/swaggerGetVideos';
import swaggerDownloadVideo from '../docs/videos/swaggerDownloadVideo';
import swaggerThumbVideo from '../docs/videos/swaggerThumbVideo';
import swaggerUpdateVideoById from '../docs/videos/swaggerUpdateVideoById';
import swaggerDeleteVideoById from '../docs/videos/swaggerDeleteVideoById';

const videosRoutes = Router();

videosRoutes.post(
  '/video',
  upload.single('img'),
  middleware.valInfoVideo,
  swaggerCreateVideo(controllers.createVideo),
);

videosRoutes.get(
  '/videos',
  swaggerGetVideos(controllers.getAllVideos),
);

videosRoutes.get(
  '/videos/:id',
  middleware.valId,
  controllers.getVideoById,
);

videosRoutes.get(
  '/videos/download/:id',
  middleware.valId,
  swaggerDownloadVideo(controllers.downloadVideo),
);

videosRoutes.get(
  '/videos/img/:name',
  swaggerThumbVideo(controllers.getImageByName),
);

videosRoutes.patch(
  '/video/:id',
  upload.single('img'),
  middleware.valId,
  middleware.valInfoVideo,
  swaggerUpdateVideoById(controllers.updateVideo),
);

videosRoutes.delete(
  '/video/:id',
  middleware.valId,
  swaggerDeleteVideoById(controllers.deleteVideo),
);

export default videosRoutes;
