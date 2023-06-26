module.exports = async function (context, req) {

    const currentDate = new Date();
    const date = (`0 ${currentDate.getDate()}`).slice(-2);
    const month = (`0 ${currentDate.getMonth() + 1}`).slice(-2);
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const now = (`${year}-${month}-${date} ${hours}:${minutes}`);

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function was developed in Visual Studio Code."
        : (`This HTTP triggered function was developed in Visual Studio Code 
                and automatically deployed using GitHub actions at ${now}`);

    context.res = {
        body: responseMessage
    };

}