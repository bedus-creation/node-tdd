'use strict';

const mongoose = require('mongoose');

const dbHandler = require('@tests/db-handler');
import PostModel from '@domain/artefact/models/Post'
import PostCreateAction from '@domain/artefact/actions/PostCreateAction';
import request from 'supertest';
import app from '@public'

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await dbHandler.connect();
});

/**
 * Clear all test data after every test.
 */
afterEach(async () => {
    await dbHandler.clearDatabase();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await dbHandler.closeDatabase();
});

/**
 * Login test suite.
 */
describe('Login Test', () => {
    it('Guests users can access to login form', async () => {
        request(app)
            .get('/login')
            .expect(200)
            .end(done)
    });
});