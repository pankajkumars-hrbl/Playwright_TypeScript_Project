const env = (globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
}).process?.env;

export const ENV = {
    baseUrl: env?.BASE_URL || 'https://www.playwrightautomation.com/practice.html'
};