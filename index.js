//@ts-check
const exec = require('child_process').exec;


/**
 * Calls cloc internally
 * @param absolutePath {string} the path of the file or folder
 * @param args {string[]} the arguments to pass to cloc
 * 
 * @see https://github.com/AlDanial/cloc
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