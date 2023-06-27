module.exports = async function (context, req) {

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function was developed in Visual Studio Code."
        : "Automatically deployed using GitHub Actions on June 27th @15:05";

    context.res = {
        body: responseMessage
    };

}