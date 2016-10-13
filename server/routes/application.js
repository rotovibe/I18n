import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import applicationCtrl from '../controllers/application';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  // /** GET /api/applications - Get list of applications */
  // .get(applicationCtrl.list)

  /** POST /api/applications - Create new application */
  .post(validate(paramValidation.createApplication), applicationCtrl.create);

// router.route('/:appId')
//   /** GET /api/applications/:appId - Get applications by id */
//   .get(applicationCtrl.get)

//   /** PUT /api/applications/:appId - Update application */
//   .put(validate(paramValidation.updateUser), applicationCtrl.update)

//   /** DELETE /api/applications/:appId - Delete application */
//   .delete(applicationCtrl.remove);

// /** Load application when API with appId route parameter is hit */
// router.param('appId', applicationCtrl.load);

export default router;
