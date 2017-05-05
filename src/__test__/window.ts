export const defaultHtml = '<!doctype html><html><head><meta charset="utf-8"></head><body></body></html>';

import { jsdom, Config } from "jsdom";

export const loadWindow = (html?: string, options?: Config) => {
  const document = jsdom(html || defaultHtml, options);
  (global as any).document = document;
  (global as any).window = document.defaultView;
  (global as any).screen = window.screen;
  propagateToGlobal(window);
};

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
export function propagateToGlobal(window: any) {
  for (let key in window) {

    if (!window.hasOwnProperty(key)) {
      continue;
    }

    if (key in global) {
      continue;
    }

    (global as any)[key] = window[key];
  }
}

loadWindow();
