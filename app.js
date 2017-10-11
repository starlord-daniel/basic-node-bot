require('./config.js')();
require('./connectorSetup.js')();

// Dialogs
require('./dialogs/sampleDialog.js')();

bot.dialog('/', [
    function (session) 
    {
        var input = session.message.text;

        input = sampleFunction(input);

        session.replaceDialog('/sampleDialog', { input });
    }
]);