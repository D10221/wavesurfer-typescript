   /**
    *    audioprocess: Fires continuously as the audio plays. Also fires on seeking.
    *    error: Occurs on error. Callback will receive (string) error message.
    *    finish: When it finishes playing.
    *    loading: Fires continuously when loading via XHR or drag'n'drop.
    *        Callback will receive (integer) loading progress in percents [0..100] and (object) event target.
    *    pause: When audio is paused.
    *    play: When play starts.
    *    ready: When audio is loaded, decoded and the waveform drawn.
    *        This fires before the waveform is drawn when using MediaElement, see waveform-ready.
    *    scroll: When the scrollbar is moved. Callback will receive a ScrollEvent object.
    *    seek: On seeking. Callback will receive (float) progress [0..1].
    *    waveform-ready: Fires after the waveform is drawn when using the MediaElement backend.
    *      If your using the WebAudio backend you can use ready.
    *   zoom: On zooming. Callback will receive (integer) minPxPerSec.
    */
    export type WavesurferEvent =
        "audioprocess" |
        "error" |
        "finish" |
        "loading" |
        "pause" |
        "play" |
        "ready" |
        "scroll" |
        "seek" |
        "waveform-ready" |
        "zoom";