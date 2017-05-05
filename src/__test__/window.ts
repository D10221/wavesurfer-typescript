import { env } from "jsdom";

const defaultHtml = '<!doctype html><html><head><meta charset="utf-8"></head><body></body></html>';

export const getWindow = (html?: string, imports?: string[]) => new Promise<Window>((resolve, reject) => {
  env(html || defaultHtml, imports,
    (err: Error, window: Window) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(window);
    }
  );
});

import { jsdom, Config } from "jsdom";
export const loadWindow = (html?: string, options?: Config) => {
  const document = jsdom(html || defaultHtml, options);
  (global as any).window = document.defaultView;
  (global as any).document = window.document;
  (global as any).screen = window.screen;
};
