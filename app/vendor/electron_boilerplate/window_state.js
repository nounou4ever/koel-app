// Simple module to help you remember the size and position of windows.
// Can be used for more than one window, just construct many
// instances of it and give each different name.

'use strict';

let app = require('app');
let jetpack = require('fs-jetpack');

module.exports = function (name, defaults) {

    let userDataDir = jetpack.cwd(app.getPath('userData'));
    let stateStoreFile = 'window-state-' + name +'.json';

    let state = userDataDir.read(stateStoreFile, 'json') || {
        width: defaults.width,
        height: defaults.height
    };

    let saveState = function (win) {
        if (!win.isMaximized() && !win.isMinimized()) {
            let position = win.getPosition();
            let size = win.getSize();
            state.x = position[0];
            state.y = position[1];
            state.width = size[0];
            state.height = size[1];
        }
        state.isMaximized = win.isMaximized();
        userDataDir.write(stateStoreFile, state, { atomic: true });
    };

    return {
        get x() { return state.x; },
        get y() { return state.y; },
        get width() { return state.width; },
        get height() { return state.height; },
        get isMaximized() { return state.isMaximized; },
        saveState: saveState
    };
};
