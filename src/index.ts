import connectionScript from './connection';
import { AdditionalEventData, InitProps, Props, EventData, TrackableEventName } from './types';
import { TrackableEventNameEnum } from './enums';

class FacebookPixel {
  constructor({ pixelID, debug = true, pageViewOnInit = true, autoConfig = true, disablePushState = false }: Props) {
    connectionScript();
    this.pixelID = pixelID;
    this.debug = debug;
    this.pageViewOnInit = pageViewOnInit;
    this.autoConfig = autoConfig;
    this.disablePushState = disablePushState;
  }

  private disablePushState: boolean;
  private autoConfig: boolean;
  private pixelID: string;
  private debug: boolean;
  private consolePrefix = '[react-use-facebook-pixel]';
  private initialized = false;
  private pageViewOnInit: boolean;
  private externalId: string | undefined = undefined;

  init(props: InitProps) {
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
      console.log(
        this.consolePrefix,
        new Date().toLocaleTimeString(),
        'Facebook Pixel initialized'
      );
    }
  }

  getExternalId() {
    return this.externalId;
  }

  trackEvent<K extends TrackableEventName>(
    eventName: K,
    data?: EventData[K],
    additionalData?: AdditionalEventData
  ) {
    if (!this.initialized && this.debug) {
      console.error(
        this.consolePrefix,
        new Date().toLocaleTimeString(),
        '\nError',
        '\nYou tried to track event before initialization'
      );
      return;
    }
    window.fbq('track', eventName, data, additionalData);

    if (this.debug) {
      console.log(
        this.consolePrefix,
        new Date().toLocaleTimeString(),
        '\nEvent tracked.',
        '\nEvent name: ',
        eventName,
        '\nEvent data: ',
        data,
        '\nEvent additiona data',
        additionalData
      );
    }
  }
}

export { FacebookPixel, TrackableEventNameEnum, EventData, AdditionalEventData };
