export interface WavesurferOptions {
    /**
     * Use your own previously initialized AudioContext or leave blank
     */
    audioContext?: any;

    /**
     * Speed at which to play audio. Lower number is slower.
     * @type: {float}
     */
    audioRate?: number;

    /**
     * WebAudio or MediaElement.
     * In most cases you don't have to set this manually. MediaElement is a fallback for unsupported browsers.
     */
    backend?: "WebAudio" | "MediaElement";

    /**
     * Height of the waveform bars. Higher number than 1 will increase the waveform bar heights.
     */
    barHeight?: number | 1;

    /**
     * default: none
     * If specified, the waveform will be drawn like this: ▁ ▂ ▇ ▃ ▅ ▂
     */
    barWidth?: number;

    /**
     * CSS-selector or HTML-element
     * where the waveform should be drawn.
     * This is the only required parameter
     */
    container: string | Element;

    /**
     * 	@default: #333
     *  The fill color of the cursor indicating the playhead position.
     */
    cursorColor?: string;

    /**
     * @type: {integer}
     * @default: 1
     * Measured in pixels
     */
    cursorWidth?: number;
    /**
     * @default: {true}
     * Whether to fill the entire container or draw only according to minPxPerSec.
     */
    fillParent?: boolean;

    /**
     * @type: {integer}
     * @default: {128}
     * The height of the waveform. Measured in pixels.
     */
    height?: number;

    /**
     * @default: {false}
     * Whether to hide the horizontal scrollbar when one would normally be shown
     */
    hideScrollbar?: boolean;

    /**
     * @default: true
     * Whether the mouse interaction will be enabled at initialization.
     * You can switch this parameter at any time later on.
     */
    interact?: boolean;

    /**
     * @type: {integer}
     * @default: {4000}
     * Maximum width of a single canvas in pixels,
     * excluding a small overlap (2 * pixelRatio,
     * rounded up to the next even integer).
     * If the waveform is longer than this value,
     * additional canvases will be used to render the waveform,
     * which is useful for very large waveforms that may be too wide for browsers to draw on a single canvas.
     * This parameter is only applicable to the MultiCanvas renderer
     */
    maxCanvasWidth?: number;

    /**
     * @default: {"audio"}
     * 'audio' or 'video'.
     *  Only used with backend: 'MediaElement'
     */
    mediaType?: "audio" | "video";

    /**
     * 	@type: {integer}
     *  @default: {50}
     *  Minimum number of pixels per second of audio.
     */
    minPxPerSec?: number;

    /**
     * @default: {false}
     * If true, normalize by the maximum peak instead of 1.0.
     */
    normalize?: boolean;

    /**
     * 	@type: {integer}
     *  window.devicePixelRatio	Can be set to 1 for faster rendering.
     */
    pixelRatio?: number;

    /**
     * @default: {"#555"}
     * The fill color of the part of the waveform behind the cursor
     */
    progressColor?: string;

    /**
     * 	Canvas The renderer object used to draw the waveform.
     *  The MultiCanvas renderer can be used to render waveforms
     *  that cannot fit on a single canvas due to browser limitations
     */
    renderer?: string;
    /**
     * @default: {false}
     * Whether to scroll the container with a lengthy waveform.
     * Otherwise the waveform is shrunk to the container width (see fillParent).
     */
    scrollParent?: boolean;

    /**
     * @type: {float}
     * @default: {2}
     * Number of seconds to skip with the skipForward() and skipBackward()
     */
    skipLength?: number;

    /**
     * 	@default {"#999"}
     * The fill color of the waveform after the cursor.
     */
    waveColor?: string;

    /**
     * @default: {true}
     * If a scrollbar is present, center the waveform around the progress
     */
    autoCenter?: boolean;
}