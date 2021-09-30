async function getArticles(){
    return Promise.resolve([
        {
            _id: 1,
            author: 'author',
            title: 'title',
            body: 'body',
            created: Date.now(),
        }
    ]);
}

async function saveArticle(){
    return Promise.resolve({
        status: {
            acknowledged: true,
            insertedId: 1,
        },
    });
}

module.exports = {
    getArticles,
    saveArticle,
};