export const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
export const longSleep = (ms = 10000) => new Promise((r) => setTimeout(r, ms));