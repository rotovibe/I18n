import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## Application registration APIs', () => {
  let application = {
    "appName": "Homestead",
    "active": true,
    "state":"created"
  };

  describe('# POST /api/applications', () => {
    it('should create a new application registration', (done) => {
      request(app)
        .post('/api/applications')
        .send(application)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.appName).to.equal(application.appName);
          expect(res.body.active).to.equal(application.active);
          application = res.body;
          done();
        })
        .catch(done);
    });
  });

  // describe('# GET /api/messages/:appId', () => {
  //   it('should get message details', (done) => {
  //     request(app)
  //       .get(`/api/messages/${message.appId}`)
  //       .expect(httpStatus.OK)
  //       .then((res) => {
  //         expect(res.body.appName).to.equal(message.appName);
  //         expect(res.body.appId).to.equal(message.appId);
  //         message = res.body;
  //         done();
  //       })
  //       .catch(done);
  //   });

    // it('should report error with message - Not found, when user does not exists', (done) => {
    //   request(app)
    //     .get('/api/users/56c787ccc67fc16ccc1a5e92')
    //     .expect(httpStatus.NOT_FOUND)
    //     .then((res) => {
    //       expect(res.body.message).to.equal('Not Found');
    //       done();
    //     })
    //     .catch(done);
    // });
  //});

  // describe('# PUT /api/users/:userId', () => {
  //   it('should update user details', (done) => {
  //     user.username = 'KK';
  //     request(app)
  //       .put(`/api/users/${user._id}`)
  //       .send(user)
  //       .expect(httpStatus.OK)
  //       .then((res) => {
  //         expect(res.body.username).to.equal('KK');
  //         expect(res.body.mobileNumber).to.equal(user.mobileNumber);
  //         done();
  //       })
  //       .catch(done);
  //   });
  // });

  // describe('# GET /api/users/', () => {
  //   it('should get all users', (done) => {
  //     request(app)
  //       .get('/api/users')
  //       .expect(httpStatus.OK)
  //       .then((res) => {
  //         expect(res.body).to.be.an('array');
  //         done();
  //       })
  //       .catch(done);
  //   });
  // });

  // describe('# DELETE /api/users/', () => {
  //   it('should delete user', (done) => {
  //     request(app)
  //       .delete(`/api/users/${user._id}`)
  //       .expect(httpStatus.OK)
  //       .then((res) => {
  //         expect(res.body.username).to.equal('KK');
  //         expect(res.body.mobileNumber).to.equal(user.mobileNumber);
  //         done();
  //       })
  //       .catch(done);
  //   });
  // });
});
