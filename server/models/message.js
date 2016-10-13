import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


// {
//     "appName": "Homestead",
//     "appId": "12345678ryu2ehrjiou78123",
//     "messages": {
//         "app.name": {
//             "en": "I18n Starter",
//             "es": "I18n Entrada"
//         },
//         "auth.login.prompt": {
//             "en": "Don't have an account?",
//             "es": "¿No tienes una cuenta?"
//         }
//     }
// }

/**
 * Message Schema
 */
const MessageSchema = new mongoose.Schema({
  appName: { type: String, required: true},
  appId: { type: mongoose.Schema.Types.ObjectId, required: true},
  messages: {},
  createdAt: { type: Date, default: Date.now},
  state: {type: String, required: true}
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
MessageSchema.method({
});

// /**
//  * Statics
//  */
// MessageSchema.statics = {
//   /**
//    * Get message
//    * @param {ObjectId} id - The objectId of message.
//    * @returns {Promise<Message, APIError>}
//    */
//   get(id) {
//     return this.findById(id)
//       .exec()
//       .then((message) => {
//         if (message) {
//           return message;
//         }
//         const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
//         return Promise.reject(err);
//       });
//   }
// };

/**
 * @typedef Message
 */
export default mongoose.model('Message', MessageSchema);
