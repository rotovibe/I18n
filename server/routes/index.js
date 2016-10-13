import express from 'express';
import userRoutes from './user';
import messageRoutes from './message';
import applicationRoutes from './application';
import authRoutes from './auth';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount application routes at /applications
router.use('/applications', applicationRoutes);

// mount message routes at /messages
router.use('/messages', messageRoutes);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

export default router;
