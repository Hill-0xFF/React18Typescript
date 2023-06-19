// type ApiRequestType = {
//   url: string;
//   optionsObj: undefined | object;
//   errorMsg: null | string;
// };

const api_request = async (
  url: string,
  optionsObj: object,
  errorMsg?: string) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error('Please reload the page');
  } catch (err) {
    if (err instanceof Error) errorMsg = err.message;
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return errorMsg;
    // (function() {
    //   return errorMsg;
    // })();
  }
};

export default api_request;
