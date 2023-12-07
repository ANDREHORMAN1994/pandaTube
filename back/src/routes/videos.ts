import { Router } from 'express';
import middleware from '../middleware';
import controllers from '../controllers';
import upload from '../utils/multer';
// import swaggerCreateVideo from '../docs/swaggerCreateVideo';
// import swaggerGetvideos from '../docs/swaggerGetvideos';
// import swaggerUpdateVideoById from '../docs/swaggerUpdateVideoById';
// import swaggerDeleteVideoById from '../docs/swaggerDeleteVideoById';

const videosRoutes = Router();

videosRoutes.post(
  '/video',
  upload.single('img'),
  middleware.valInfoVideo,
  controllers.createVideo,
  // swaggerCreateVideo(controllers.createVideo),
);

videosRoutes.get(
  '/videos',
  controllers.getAllVideos,
  // swaggerGetvideos(controllers.getAllVideos),
);

videosRoutes.get(
  '/videos/download/:id',
  controllers.downloadVideo,
  // swaggerGetvideos(controllers.getAllVideos),
);

videosRoutes.get(
  '/videos/img/:name',
  controllers.getImageByName,
  // swaggerGetvideos(controllers.getAllVideos),
);

videosRoutes.patch(
  '/video/:id',
  upload.single('img'),
  middleware.valId,
  middleware.valInfoVideo,
  controllers.updateVideo,
  // swaggerUpdateVideoById(controllers.updateVideo),
);

videosRoutes.delete(
  '/video/:id',
  middleware.valId,
  controllers.deleteVideo,
  // swaggerDeleteVideoById(controllers.deleteVideo),
);

export default videosRoutes;
