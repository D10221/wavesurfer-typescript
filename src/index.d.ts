import { WavesurferOptions } from "./WavesurferOptions";

import { IWavesurfer } from "./IWavesurfer";

declare module "wavesurfer" {
    export default class Wavesurfer {
        create(options: WavesurferOptions): IWavesurfer;
    }
}
