module.exports = async function (context, req) {

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function was developed in Visual Studio Code."
        : "This HTTP triggered function was developed in Visual Studio Code and automatically deployed using GitHub actions on June 26th @13:10";

    context.res = {
        body: responseMessage
    };

}