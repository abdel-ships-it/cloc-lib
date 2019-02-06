//@ts-check
const exec = require('child_process').exec;


/**
 * Calls 
 */
module.exports.cloc = (absolutePath, args = []) => {
    const promise = new Promise((resolve, reject) => {
        exec(`${__dirname}/lib/cloc ${absolutePath} ${args.join(' ')}`, (err, stdout, stderr) => {
            if (err) {
                reject(err);
                return;
            } else if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });

    return promise;
}