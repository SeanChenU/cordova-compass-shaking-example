## Shake Gesture Detection for Cordova / PhoneGap

Apache Cordova / PhoneGap Plugin to detect when a physical device performs a shake gesture.

This is based on a standalone JavaScript implementation I wrote last year ([gist](https://gist.github.com/leecrossley/4078996)).

## Install

#### Latest published version on npm (with Cordova CLI >= 5.0.0)

```
cordova plugin add cordova-plugin-shake
```

#### Latest version from GitHub

```
cordova plugin add https://github.com/leecrossley/cordova-plugin-shake.git
```

### Usage

You **do not** need to reference any JavaScript, the Cordova plugin architecture will add a shake object to your root automatically when you build.

**NB:** There is no native component to this plugin but it depends on the device motion plugin (added when this plugin is added).

### Example

```js
var onShake = function () {
  // Fired when a shake is detected
};

var onError = function () {
  // Fired when there is an accelerometer error (optional)
};

// Start watching for shake gestures and call "onShake"
// with a shake sensitivity of 40 (optional, default 30)
shake.startWatch(onShake, 40 /*, onError */);

// Stop watching for shake gestures
shake.stopWatch();
```

## License

[MIT License](http://ilee.mit-license.org)
