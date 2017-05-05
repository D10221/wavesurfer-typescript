import {WavesurferEvent} from "./WavesurferEvent";
export type Disposer = () => void;

export interface IWavesurfer {

    /**
     *  Removes events, elements and disconnects Web Audio nodes.
     */
    destroy(): void;

    /**
     * Clears the waveform as if a zero-length audio is loaded.
     */
    empty(): void;
    /**
     * Returns current progress in seconds.
     */
    getCurrentTime(): number;

    /**
     *  Returns the duration of an audio clip in seconds.
     */
    getDuration(): number;

    /**
     * Returns the playback speed of an audio clip.
     */
    getPlaybackRate(): number;

    /**
     * Returns the volume of the current audio clip.
     */
    getVolume(): number; // 
    /**
     * Returns the current mute status.
     */
    getMute(): any; // 

    /**
     * Returns an array of the current set filters.
     */
    getFilters(): any[];

    /**
     * Returns true if currently playing, false otherwise.
     */
    isPlaying(): boolean;

    /**
     * Loads audio from URL via XHR.
     * Optional array of peaks. 
     * Optional preload parameter [none|metadata|auto], 
     * parsed to the Audio element if using backend MediaElement.
     */
    load(url: string, peaks?: any[], preload?: ['none' | 'metadata' | 'auto']): void;

    /**
     * Loads audio from a Blob or File object.
     */
    loadBlob(url: string): void;

    /**
     * Subscribes to an event. See WaveSurfer Events for the list of all events.
     */
    on(eventName: WavesurferEvent, callback: (x?: any) => void): Disposer;

    /**
     * Unsubscribes from an event.
     */
    un(eventName: WavesurferEvent, callback: (x?: any) => void): void;
    /**
     * Unsubscribes from all events.
     */
    unAll(): void;

    /**
     * Stops playback.
     */
    pause(): void;

    /**
     * Starts playback from the current position. Optional start and end measured in seconds can be used to set the range of audio to play.
     */
    play(start: number, end: number): void;

    /**
     * Plays if paused, pauses if playing.
     */
    playPause(): void;

    /**
     * Seeks to a progress and centers view [0..1] (0 = beginning, 1 = end).
     */
    seekAndCenter(progress: number): void;


    /** 
     * Seeks to a progress [0..1] (0 = beginning, 1 = end)     
     */
    seekTo(progress: number): void;

    /**
     *  For inserting your own WebAudio nodes into the graph. See Connecting Filters below.
     */
    setFilter(filters: any[]): void;

    /**
     * Sets the speed of playback (0.5 is half speed, 1 is normal speed, 2 is double speed and so on).
     */
    setPlaybackRate(rate: number): void;

    /**
     *  Sets the playback volume to a new value [0..1] (0 = silent, 1 = maximum).
     */
    setVolume(newVolume: number): void;

    /**
     * Mute the current sound. Can be a boolean value of true to mute sound or false to unmute
     */
    setMute(mute: boolean): void;

    /**
     * Skip a number of seconds from the current position (use a negative value to go backwards).
     */
    skip(offset: number): void;

    /**
     * Rewind skipLength seconds.
     */
    skipBackward(): void;

    /**
     * Skip ahead skipLength seconds.
     */
    skipForward(): void;

    /**
     * Stops and goes to the beginning.
     */
    stop(): void;

    /**
     * Toggles the volume on and off.
     */
    toggleMute(): void;

    /**
     * Toggle mouse interaction.
     */
    toggleInteraction(): void;


    /**
     * Toggles scrollParent.
     */
    toggleScroll(): void;

    /**
     * Horizontally zooms the waveform in and out. The parameter is a number of horizontal pixels per second of audio. It also changes the parameter minPxPerSec and enables the scrollParent option.
     */
    zoom(pxPerSec: number): void;
}