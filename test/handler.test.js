const handler = require('../src/handler');

jest.mock('../src/handler',
    () => jest.requireActual('../src/__mocks__/handler'));

describe('GET articles integration test', () => {
    it('should return length of articles', async () => {
        const res = await handler.getArticles();
        expect(res.length).toEqual(1);
    });
})

describe('POST article integration test', () => {
    it('should return', async () => {
        const res = await handler.saveArticle();
        expect(res.status.acknowledged).toEqual(true);
    })
})