/*
 * Actions
 */
export const SET_SSR = 'SET_SSR';

export const setSSR = (ssrPath = '', isDone = false) => {
  return {
    type: SET_SSR,
    ssrPath: ssrPath,
    isDone: isDone
  }
}
