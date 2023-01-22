module.exports.home = (request, response, next) => {
    response.send({
        success: true,
        message: 'This is the homepage of voice chess application. Welcome!'
    });
}