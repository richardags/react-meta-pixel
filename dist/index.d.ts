import { AdditionalEventData, InitProps, Props, EventData, TrackableEventName } from './types';
import { TrackableEventNameEnum } from './enums';
declare class FacebookPixel {
    constructor({ pixelID, debug, pageViewOnInit, autoConfig, disablePushState }: Props);
    private disablePushState;
    private autoConfig;
    private pixelID;
    private debug;
    private consolePrefix;
    private initialized;
    private pageViewOnInit;
    private externalId;
    init(props: InitProps): void;
    getExternalId(): string | undefined;
    trackEvent<K extends TrackableEventName>(eventName: K, data?: EventData[K], additionalData?: AdditionalEventData): void;
}
export { FacebookPixel, TrackableEventNameEnum, EventData, AdditionalEventData };
