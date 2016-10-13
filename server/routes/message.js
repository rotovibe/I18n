import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import messageCtrl from '../controllers/message';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
   /** GET /messages/?appId - Get list of messages */
  .get(messageCtrl.getByAppId)

  /** POST /api/messages - Create new message */
  .post(validate(paramValidation.createMessage), messageCtrl.create)

// router.route('/:msgId')
//   /** GET /api/applications/:appId/messages/:msgId - Get message by id */
//   .get(messageCtrl.get)

//   /** PUT /api/users/:userId - Update user */
//   .put(validate(paramValidation.updateUser), userCtrl.update)

//   /** DELETE /api/users/:userId - Delete user */
//   .delete(userCtrl.remove);

// /** Load user when API with userId route parameter is hit */
// router.param('userId', messageCtrl.load);

export default router;
