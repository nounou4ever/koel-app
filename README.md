koel app
==============

The official desktop application for [Koel](https://github.com/phanan/koel), built on [Electron](http://electron.atom.io/).

The app will inherit all features from its web-based counterpart, plus functionalities only possible in a desktop environment, e.g. lower-level OS interactions like global media shortcuts. Basically, the best of both worlds.

Still in its early days, but here is a screenshot:

![Screenshot](http://koel.phanan.net/dist/img/app.jpg?new)

## Installation

```bash
git clone git@github.com:phanan/koel-app.git
cd koel-app
npm install
npm start # if you want to try it out, or just to take a peek
npm run release # to create an cool installation package
```

The project got its boilerplate from [electron-boilerplate-vue](https://github.com/bradstewart/electron-boilerplate-vue), so head there for in-depth instructions.

## Notes

* Only tested on OS X Yosemite so far, since that's the only OS I have.
* Again, still very raw. Expect bugs and incomplete functionalities.
