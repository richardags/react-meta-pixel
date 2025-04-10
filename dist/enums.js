"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackableEventNameEnum = void 0;
var TrackableEventNameEnum;
(function (TrackableEventNameEnum) {
    /**
     *  When payment information is added in the checkout flow.
     *
     * A person clicks on a save billing information button. */
    TrackableEventNameEnum["AddPaymentInfo"] = "AddPaymentInfo";
    /** When a product is added to the shopping cart.
     *
     * A person clicks on an add to cart button. */
    TrackableEventNameEnum["AddToCart"] = "AddToCart";
    /** When a product is added to a wishlist.
     *
     * A person clicks on an add to wishlist button. */
    TrackableEventNameEnum["AddToWishlist"] = "AddToWishlist";
    /** When a registration form is completed.
     *
     * A person submits a completed subscription or signup form. */
    TrackableEventNameEnum["CompleteRegistration"] = "CompleteRegistration";
    /** When a person initiates contact with your business via telephone, SMS, email, chat, etc.
     *
     * A person submits a question about a product. */
    TrackableEventNameEnum["Contact"] = "Contact";
    /** When a person customizes a product.
     *
     * A person selects the color of a t-shirt. */
    TrackableEventNameEnum["CustomizeProduct"] = "CustomizeProduct";
    /** When a person donates funds to your organization or cause.
     *
     * A person adds a donation to the Humane Society to their cart. */
    TrackableEventNameEnum["Donate"] = "Donate";
    /** When a person searches for a location of your store via a website or app, with an intention to visit the physical location.
     *
     * A person wants to find a specific product in a local store. */
    TrackableEventNameEnum["FindLocation"] = "FindLocation";
    /** When a person enters the checkout flow prior to completing the checkout flow.
     *
     * A person clicks on a checkout button. */
    TrackableEventNameEnum["InitiateCheckout"] = "InitiateCheckout";
    /** When a sign up is completed.
     *
     * A person clicks on pricing. */
    TrackableEventNameEnum["Lead"] = "Lead";
    /** When a purchase is made or checkout flow is completed.
     *
     * A person has finished the purchase or checkout flow and lands on thank you or confirmation page. */
    TrackableEventNameEnum["Purchase"] = "Purchase";
    /** When a person books an appointment to visit one of your locations.
     *
     * A person selects a date and time for a tennis lesson. */
    TrackableEventNameEnum["Schedule"] = "Schedule";
    /** When a search is made.
     *
     * A person searches for a product on your website.
     */
    TrackableEventNameEnum["Search"] = "Search";
    /**
     * When a person starts a free trial of a product or service you offer.
     *
     * A person selects a free week of your game.
     */
    TrackableEventNameEnum["StartTrial"] = "StartTrial";
    /**
     * When a person applies for a product, service, or program you offer.
     *
     * A person applies for a credit card, educational program, or job.
     */
    TrackableEventNameEnum["SubmitApplication"] = "SubmitApplication";
    /**
     * When a person applies to a start a paid subscription for a product or service you offer.
     *
     * A person subscribes to your streaming service.
     */
    TrackableEventNameEnum["Subscribe"] = "Subscribe";
    /**
     * A visit to a web page you care about (for example, a product page or landing page). ViewContent tells you if someone visits a web page's URL, but not what they see or do on that page.
     *
     * A person lands on a product details page.
     */
    TrackableEventNameEnum["ViewContent"] = "ViewContent";
    /**
     * Initial point for tracking.
     */
    TrackableEventNameEnum["PageView"] = "PageView";
})(TrackableEventNameEnum || (exports.TrackableEventNameEnum = TrackableEventNameEnum = {}));
