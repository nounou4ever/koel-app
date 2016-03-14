export default {
    /**
     * Convert a duration in seconds into H:i:s format.
     * If H is 0, it will be ommited.
     */
    secondsToHis(d) {
        d = parseInt(d, 10);

        var s = d % 60;

        if (s < 10) {
            s = '0' + s;
        }

        var i = Math.floor((d / 60) % 60);

        if (i < 10) {
            i = '0' + i;
        }

        var h = Math.floor(d / 3600);

        if (h < 10) {
            h = '0' + h;
        }

        return (h === '00' ? '' : h + ':') + i + ':' + s;
    },

    /**
     * Parse the validation error from the server into a flattened array of messages.
     *
     * @param  {Object}  error  The error object in JSON format.
     *
     * @return {Array.<String>}
     */
    parseValidationError(error) {
        return Object.keys(error).reduce((messages, field) => messages.concat(error[field]), []);
    },

    /**
     * Check if AudioContext is supported by the current browser.
     * As we're on a Electron/Chrominum ship, just return true.
     *
     * @return {Boolean}
     */
    isAudioContextSupported() {
        return true;
    },

    /**
     * Turn <br> into new line characters.
     *
     * @param  {string} str
     *
     * @return {string}
     */
    br2nl(str) {
        return str.replace(/<br\s*[\/]?>/gi, '\n');
    }
};
