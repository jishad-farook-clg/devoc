import { google } from 'googleapis';

function loadCredentials(): Record<string, unknown> {
  const b64 = process.env.GCLOUD_CREDENTIALS_BASE64;
  if (!b64) {
    throw new Error('GCLOUD_CREDENTIALS_BASE64 is not set. Add your service account JSON as a base64 env var.');
  }
  try {
    const json = Buffer.from(b64, 'base64').toString('utf8');
    return JSON.parse(json);
  } catch (err) {
    throw new Error('Failed to parse GCLOUD_CREDENTIALS_BASE64: ' + String(err));
  }
}

/**
 * Returns a GoogleAuth configured with in-memory credentials.
 * Use this on the server (API routes / server components) only.
 */
export function getGoogleAuth() {
  const credentials = loadCredentials();
  return new google.auth.GoogleAuth({
    credentials,
    projectId: process.env.GCLOUD_PROJECT_ID,
  });
}

/**
 * Helper to return an authenticated client for use with google APIs.
 * Example: const client = await getClient();
 */
export async function getClient(scopes?: string | string[]) {
  const auth = getGoogleAuth();
  if (scopes) auth.scopes = scopes;
  return auth.getClient();
}

export default getGoogleAuth;
