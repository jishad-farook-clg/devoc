const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

export function executeRecaptcha(action: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      return reject("No window");
    }

    if (!window.grecaptcha) {
      return reject("reCAPTCHA not loaded");
    }

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(SITE_KEY, {
          action,
        });
        resolve(token);
      } catch (err) {
        reject(err);
      }
    });
  });
}