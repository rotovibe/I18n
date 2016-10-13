import mg from 'mongoose'
import Message from '../models/message';
import moment from 'moment';

// /**
//  * Load message and append to req.
//  */
// function load(req, res, next, id) {
//   User.get(id)
//     .then((user) => {
//       req.user = user; // eslint-disable-line no-param-reassign
//       return next();
//     })
//     .catch(e => next(e));
// }

/**
 * Get message
 * @returns {message}
 */
function get(req, res) {
  return res.json(req.message);
}

/**
 * Get message by appId
 * @returns {message}
 */
function getByAppId(req, res, next) {
  Message.findOne( { "appId": mg.Types.ObjectId("57fcf8129eb1d52f1cb10332") } )
    .then(msgs => res.json(msgs))
    .catch(e => next(e));
}

/**
 * Create new message
 * @property {string} req.body.appName - The name of the app.
 * @property {string} req.body.appId - The Id of the app to look for translations.
 * @returns {Message}
 */
function create(req, res, next) {
  const message = new Message({
    appName: req.body.appName,
    appId: mg.Types.ObjectId(req.body.appId),
    createdAt: new Date(moment().toISOString()),
    state: "created",    
    messages: req.body.messages
  });

  message.save()
    .then(savedMessage => res.json(savedMessage))
    .catch(e => next(e));
}

// /**
//  * Update existing user
//  * @property {string} req.body.username - The username of user.
//  * @property {string} req.body.mobileNumber - The mobileNumber of user.
//  * @returns {User}
//  */
// function update(req, res, next) {
//   const user = req.user;
//   user.username = req.body.username;
//   user.mobileNumber = req.body.mobileNumber;

//   user.save()
//     .then(savedUser => res.json(savedUser))
//     .catch(e => next(e));
// }

// /**
//  * Get user list.
//  * @property {number} req.query.skip - Number of users to be skipped.
//  * @property {number} req.query.limit - Limit number of users to be returned.
//  * @returns {User[]}
//  */
// function list(req, res, next) {
//   const { limit = 50, skip = 0 } = req.query;
//   User.list({ limit, skip })
//     .then(users => res.json(users))
//     .catch(e => next(e));
// }

// /**
//  * Delete user.
//  * @returns {User}
//  */
// function remove(req, res, next) {
//   const user = req.user;
//   user.remove()
//     .then(deletedUser => res.json(deletedUser))
//     .catch(e => next(e));
// }

//export default { load, get, create, update, list, remove };
export default { create, getByAppId};