module.exports = function () 
{
    bot.dialog('/questionSearch', [
        function (session, args) 
        {
            // Retrieve the handed parameter
            var query = args.input;
            
            //Prompt for string input
            session.send("I received "+query+" which is "+query.length+" characters.");
        }
    ]);
}