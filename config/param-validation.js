import Joi from 'joi';

export default {
  // POST /api/messages
  // {
  //   'appName': 'Homestead',
  //   'appId': '12345678ryu2ehrjiou78123',
  //   'messages': {
  //     'app.name': {
  //       en: 'I18n Starter',
  //       es: 'I18n Entrada'
  //     },
  //     'auth.login.prompt': {
  //       en: "Don't have an account?",
  //       es: '¿No tienes una cuenta?',
  //     }
  //   }
  // }

    createApplication: {
    body: {
      appName: Joi.string().required(),
      active: Joi.boolean().required()
    }
  },

  createMessage: {
    body: {
      appName: Joi.string().required(),
      appId: Joi.string().required()
    }
  },

  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // // UPDATE /api/messages/:appId
  // updateUser: {
  //   body: {
  //     appName: Joi.string().required(),
  //     appId: Joi.string().required()
  //   },
  //   params: {
  //     appId: Joi.string().required()
  //   }
  // },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
