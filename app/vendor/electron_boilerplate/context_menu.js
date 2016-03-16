// This gives you default context menu (cut, copy, paste)
// in all input fields and textareas across your app.

(function () {
    'use strict';

    let remote = require('remote');
    let Menu = remote.require('menu');
    let MenuItem = remote.require('menu-item');

    let cut = new MenuItem({
        label: "Cut",
        click: function () {
            document.execCommand("cut");
        }
    });

    let copy = new MenuItem({
        label: "Copy",
        click: function () {
            document.execCommand("copy");
        }
    });

    let paste = new MenuItem({
        label: "Paste",
        click: function () {
            document.execCommand("paste");
        }
    });

    let textMenu = new Menu();
    textMenu.append(cut);
    textMenu.append(copy);
    textMenu.append(paste);

    document.addEventListener('contextmenu', function(e) {

        switch (e.target.nodeName) {
            case 'TEXTAREA':
            case 'INPUT':
                e.preventDefault();
                textMenu.popup(remote.getCurrentWindow());
                break;
        }

    }, false);

}());
