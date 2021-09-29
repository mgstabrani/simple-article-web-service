async function getArticles(request, h){
    const { name, query } = request.query;

    await request.mongo.db.collection('articles').createIndex({
        title: 'text',
        body:'text',
    });

    let filterBy = {};

    if(name) filterBy.author = name;

    if(query) filterBy.$text = {$search: `\"${query}\"`};

    const articles = await request.mongo.db.collection('articles').find(filterBy).sort({
        created:-1    
    }).toArray();
    
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