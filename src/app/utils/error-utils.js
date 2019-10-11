export const constructErrorMessage = (errorDetails = '', invokedFn = '') =>
  `Server responde with an error: ${errorDetails}. Caused by ${invokedFn}`;
