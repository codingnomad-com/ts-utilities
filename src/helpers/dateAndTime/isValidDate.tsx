// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (date: any): boolean {
  return (
    (date &&
      Object.prototype.toString.call(date) === '[object Date]' &&
      !Number.isNaN(date?.getTime())) ||
    false
  );
}
