import { Router } from 'express';
import { getDiscordUser } from '../../controllers/user';
// import { getTwitterUser } from '../../controllers/user';

const router = Router();

router.get('/twitteruser', getDiscordUser);
router.get('/discorduser', getDiscordUser);

export default router;
