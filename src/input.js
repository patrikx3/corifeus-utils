const readline = require('readline');

module.exports.key = async (msg = "Press for enter...") => {

    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(msg, function (answer) {
            resolve(answer);
            rl.close();
        })

    })

}