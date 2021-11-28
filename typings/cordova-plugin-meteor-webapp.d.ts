// Type definitions for Apache Cordova Meteor WebApp plugin
// Project: https://github.com/meteor/cordova-plugin-meteor-webapp
//
// Copyright (c) 2015 Meteor Development Group
// Licensed under the MIT license.

declare namespace WebAppLocalServer {
    type onNewVersionReadyCallback = (version: string) => void;
    type switchToPendingVersionErrorCallback = (error: string) => void;
    type errorCallback = (error: Error) => void;

    /**
     * Invoke it after a successful startup.
     *
     * @param {Function} callback
     */
    function startupDidComplete(callback: Function): void;
    /**
     * Invoke it after need update.
     *
     * @param {Function} callback
     */
    function checkForUpdates(callback: Function): void;
    /**
     * Once we have a complete new version, we rename Downloading to a directory name based on its version,
     * we make it the pendingAssetBundle, and we invoke the onNewVersionReady() callback (this callback is
     * normally handled as part of the autoupdating package and calls into the reload package).
     *
     * @param {onNewVersionReadyCallback} callback
     */
    function onNewVersionReady(callback: onNewVersionReadyCallback): void;
    /**
     * Switch to new version.
     *
     * @param {Function} successCallback
     * @param {switchToPendingVersionErrorCallback} errorCallback
     */
    function switchToPendingVersion(
        successCallback: Function,
        errorCallback: switchToPendingVersionErrorCallback
    ): void;
    /**
     * Invoke it when catch an error.
     *
     * @param {errorCallback} callback
     */
    function onError(callback: errorCallback): void;
    /**
     * Get local filesystem url.
     *
     * @param {string} fileUrl - file url
     *
     * @returns {string}
     */
    function localFileSystemUrl(fileUrl: string): string;
}
