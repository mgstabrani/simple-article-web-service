const { getArticles, saveArticle } = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/articles',
        handler: getArticles,
    },
    {
        method: 'POST',
        path: '/articles',
        handler: saveArticle,
    },
];

module.exports = routes;