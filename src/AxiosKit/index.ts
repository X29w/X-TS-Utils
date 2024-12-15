import { AxiosKit as AxiosKitCore } from './core/axios-kit';
import { downloadStreamFile } from './core/download-stream-file';
import { useLoadingCounter } from './core/loading-counter';

const AxiosKit = { AxiosKitCore, downloadStreamFile, useLoadingCounter };

export default AxiosKit;
