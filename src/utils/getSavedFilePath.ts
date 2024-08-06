import path from 'path';

const getSavedFilePath = (fileName: string) => path.resolve('temp', fileName);

export default getSavedFilePath;
