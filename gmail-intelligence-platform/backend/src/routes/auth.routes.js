import { Router } from 'express';
import {
  getCurrentUser,
  handleGoogleAuthCallback,
  logout,
  startGoogleAuth
} from '../controllers/auth.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/google', startGoogleAuth);
router.get('/google/callback', handleGoogleAuthCallback);
router.get('/me', requireAuth, getCurrentUser);
router.post('/logout', requireAuth, logout);

export default router;

