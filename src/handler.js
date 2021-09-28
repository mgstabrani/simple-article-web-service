async function getArticles(request, h){
    const articles = await request.mongo.db.collection('articles').find().toArray();

    const response = h.response({
        status: 'success',
        data: {
            articles,
        },
    });

    response.code(200);

    return response;
};

async function saveArticle(request, h){
    const payload = request.payload;

    const status = await request.mongo.db.collection('articles').insertOne(payload);

    const response = h.response({
        status,
    });

    response.code(201);

    return response;
}

module.exports = { getArticles, saveArticle };