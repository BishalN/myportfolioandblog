export function timetoRead(str: string) {
  const wpm = 400;
  const words = str.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
