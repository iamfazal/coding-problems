/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = [], directories = path.split("/");
    console.log(directories)
    for (let i = 0; i < directories?.length; i++) {
        if (directories?.[i]) {
            if (directories?.[i] == "..")
                stack.pop()
            else if (directories?.[i] == "" || directories?.[i] == ".")
                continue;
            else
                stack.push(directories?.[i])
        }

    }
    console.log(stack?.join("/"))
    return "/" + stack.join("/");
};