/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const getStringWithoutSharp = (text) => {
        let str = text;
        while(str.includes('#')) {
            const position = str.indexOf('#');
                if (position === 0) {
                    str = str.slice(0, position) + str.slice(position + 1);

                } else {
                    str = str.slice(0,position - 1) + str.slice(position + 1);
                }
            }

            return str;
        }

    return getStringWithoutSharp(s) === getStringWithoutSharp(t);
};