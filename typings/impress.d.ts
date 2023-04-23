/**
 * IMPRESS.JS API
 * And that's where interesting things will start to happen.
 * It's the core `impress` function that returns the impress.js API
 * for a presentation based on the element with given id ("impress"
 * by default).
 * @param rootId root element id, default is 'impress' .
 */
declare function impress(rootId?: string): ImpressInstance;

/**
 * IMPRESS.JS Instance
 */
interface ImpressInstance {
    /**
     * `init` API function that initializes (and runs) the presentation.
     */
    init(): void;
    /**
     * `goto` API function that moves to step given as `el` parameter (by index, id or element).
     * `duration` optionally given as second parameter, is the transition duration in css.
     * `reason` is the string "next", "prev" or "goto" (default) and will be made available to
     * preStepLeave plugins.
     * `origEvent` may contain event that caused the call to goto, such as a key press event
     */
    goto(el: HTMLElement, duration?: number, reason?: string, origEvent?: Event): void;
    /**
     * `prev` API function goes to previous step (in document order)
     * `event` is optional, may contain the event that caused the need to call prev()
     */
    prev(origEvent?: Event): void;
    /**
     * `next` API function goes to next step (in document order)
     * `event` is optional, may contain the event that caused the need to call next()
     */
    next(origEvent: Event): void;
    /**
     * Teardown impress
     * Resets the DOM to the state it was before impress().init() was called.
     * (If you called impress(rootId).init() for multiple different rootId's, then you must
     * also call tear() once for each of them.)
     */
    tear(): void;
    /** internal libs */
    lib: any;
    addLibraryFactory(obj: any): void;
    addPreInitPlugin(plugin: any, weight?: number): void;
    addPreStepLeavePlugin(plugin: any, weight?: number): void;
    getConfig(): any;
}
