/**
 * App Configuration
 */

/**
 * This section sets up some basic app metadata, the entire section is optional
 */
App.info({
    id: 'com.test.demo',
    name: 'Demo App',
    version: '1.0.0',
    buildNumber: '100',
    description: 'Demo App',
    author: 'Demo App',
    email: '',
    website: '',
});

/**
 * Set PhoneGap/Cordova preferences
 */
// App.setPreference('BackgroundColor', '0xFF020204'); // App背景色
App.setPreference('Orientation', 'portrait'); // 竖屏模式
App.setPreference('Fullscreen', true); // 全屏模式
App.setPreference('AndroidLaunchMode', 'singleTask'); // Android启动模式(singleTop、standard、singleTask·singleInstance)
App.setPreference('android-targetSdkVersion', '30'); // 上传Google Play最小28
App.setPreference('android-minSdkVersion', '26'); // Android 4.0 (ICS) in Crosswalk starting with version 20
App.setPreference('LoadUrlTimeoutValue', '1000000', 'android'); // 解决安卓版本太旧的问题

// cordova-plugin-camera
// for iOS only
App.setPreference('CameraUsesGeolocation', false); // 相机不使用地理位置

// cordova-plugin-crosswalk-webview-v3
// for Android only
// App.setPreference('xwalkMultipleApk', false); // 只生成一个apk

// cordova-plugin-file
// for Android only
App.setPreference('AndroidPersistentFileLocation', 'Internal'); // Android Persistent storage location(Internal、Compatibility)
// for iOS only
App.setPreference('iosPersistentFileLocation', 'Library'); // iOS Persistent storage location(Library、Compatibility)

// cordova-plugin-ionic-keyboard
// for Android only
App.setPreference('resizeOnFullScreen', false); // 全屏时，不调整WebView的大小
// for iOS only
App.setPreference('KeyboardResize', false); // 键盘改变webview高度
App.setPreference('KeyboardResizeMode', 'native'); // 缩放模式(native、body、ionic)
App.setPreference('KeyboardStyle', 'light'); // 样式(light、dark)
App.setPreference('HideKeyboardFormAccessoryBar', true); // 显示工具栏

// cordova-plugin-meteor-webapp
App.setPreference('WebAppStartupTimeout', 120000); // 启动timeout时间

// cordova-plugin-splashscreen
App.setPreference('AutoHideSplashScreen', false); // 自动隐藏Splash
App.setPreference('SplashScreenDelay', 0); // Splash显示的时间
App.setPreference('FadeSplashScreen', false); // 渐隐Splash
App.setPreference('FadeSplashScreenDuration', 0); // 渐隐Splash的时间
App.setPreference('ShowSplashScreenSpinner', false); // 不显示loading图标
// // for Android only
// App.setPreference('SplashMaintainAspectRatio', true); // Splash覆盖样式，true：cover；false：fit；
// App.setPreference('SplashShowOnlyFirstTime', true); // 只有第一次打开App时显示Splash，从进程中打开不显示
// App.setPreference('SplashScreenSpinnerColor', 'white'), // loading图标颜色，支持hex和名称

// cordova-plugin-statusbar
App.setPreference('StatusBarOverlaysWebView', true); // 状态栏显示在WebView上面
App.setPreference('StatusBarBackgroundColor', '#17181D'); // 状态栏背景色
App.setPreference('StatusBarStyle', 'lightcontent'); // 状态栏样式(lightcontent、default、blacktranslucent、blackopaque)
// for iOS only
App.setPreference('StatusBarDefaultScrollToTop', false); // 状态栏不滚动到顶部
App.setPreference('StatusBarCropsWebview', false); // 解决iOS11和iPhone X布局问题

/**
 * Set a new access rule based on origin domain for your app
 */
App.accessRule('blob:*');
App.accessRule('*');

/**
 * Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
 * generated config.xml.
 */
// Enable the use of cleartext in order to have HCP working.
App.appendToConfig(`
    <edit-config file="app/src/main/AndroidManifest.xml" mode="merge" target="/manifest/application" xmlns:android="http://schemas.android.com/apk/res/android">
        <application android:usesCleartextTraffic="true"></application>
    </edit-config>
`);

/**
 * 添加资源文件
 * app/是项目根目录
 */
// App.addResourceFile('google-services.json', 'app/google-services.json', 'android');

/**
 * Pass preferences for a particular PhoneGap/Cordova plugin
 */
App.configurePlugin('cordova-plugin-geolocation', {
    GPS_REQUIRED: false,
});
