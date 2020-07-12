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
 * Product create test suite.
 */
describe('posts create ', () => {
    it('can be created correctly', async () => {
        expect(async () => {
            await PostCreateAction(data);
        })
            .not
            .toThrow();
    });

    it('Posts data persisted after being created', async () => {
        await PostCreateAction(data);

        const post = await PostModel.findOne();

        expect(post.title)
            .toBe(data.title);
    })

    it('can create a posts', async (done) => {
        request(app)
            .post('/posts')
            .send(data)
            .expect(302)
            .end(done)

        const post = await PostModel.findOne();

        expect(post.title)
            .toBe(data.title)
    });

});



const data = {
    title: 'this is post tile',
    description: 'A new dual‑camera system captures more of what you see and love. '
};
