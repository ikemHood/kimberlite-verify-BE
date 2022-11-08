import { Router } from 'express';
import {
  authDiscordRedirectController,
  getAuthenticatedUserController,
  revokeAccessTokenController,
} from '../../../controllers/auth/discord';

const router = Router();

router.get('/redirect', authDiscordRedirectController);
router.get('/user', getAuthenticatedUserController);
router.get('/revoke', revokeAccessTokenController);


export default router;
