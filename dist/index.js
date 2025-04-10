"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackableEventNameEnum = exports.FacebookPixel = void 0;
const connection_1 = __importDefault(require("./connection"));
const enums_1 = require("./enums");
Object.defineProperty(exports, "TrackableEventNameEnum", { enumerable: true, get: function () { return enums_1.TrackableEventNameEnum; } });
class FacebookPixel {
    constructor({ pixelID, debug = true, pageViewOnInit = true, autoConfig = true, disablePushState = false }) {
        this.consolePrefix = '[react-use-facebook-pixel]';
        this.initialized = false;
        this.externalId = undefined;
        (0, connection_1.default)();
        this.pixelID = pixelID;
        this.debug = debug;
        this.pageViewOnInit = pageViewOnInit;
        this.autoConfig = autoConfig;
        this.disablePushState = disablePushState;
    }
    init(props) {
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        window.fbq.disablePushState = this.disablePushState;
        window.fbq('set', 'autoConfig', this.autoConfig, this.pixelID);
        window.fbq('init', this.pixelID, props);
        if (props.external_id) {
            this.externalId = props.external_id;
        }
        if (this.pageViewOnInit) {
            this.trackEvent('PageView');
        }
        if (this.debug) {
            console.log(this.consolePrefix, new Date().toLocaleTimeString(), 'Facebook Pixel initialized');
        }
    }
    getExternalId() {
        return this.externalId;
    }
    trackEvent(eventName, data, additionalData) {
        if (!this.initialized && this.debug) {
            console.error(this.consolePrefix, new Date().toLocaleTimeString(), '\nError', '\nYou tried to track event before initialization');
            return;
        }
        window.fbq('track', eventName, data, additionalData);
        if (this.debug) {
            console.log(this.consolePrefix, new Date().toLocaleTimeString(), '\nEvent tracked.', '\nEvent name: ', eventName, '\nEvent data: ', data, '\nEvent additiona data', additionalData);
        }
    }
}
exports.FacebookPixel = FacebookPixel;
