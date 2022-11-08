import { Router } from 'express';
import twitterAuthRoutes from './twitter';
import discordAuthRoutes from './discord';

const router = Router();

router.get('/twitter', twitterAuthRoutes);
router.get('/discord', discordAuthRoutes);


export default router;
