import httpError from './httpError';
import fs from 'fs/promises';

const removeFile = (filePath: string) => async (err: Error) => {
  if (err) {
    throw httpError({
      status: 500,
      message: err.message,
    });
  } else {
    await fs.unlink(filePath);
  }
};

export default removeFile;
