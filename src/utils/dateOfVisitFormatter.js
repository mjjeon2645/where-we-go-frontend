export function formatDate(date) {
  const dateArray = date.toLocaleString().split('. ');
  const year = dateArray[0];
  const month = dateArray[1].length === 1 ? `0${dateArray[1]}` : dateArray[1];
  const day = dateArray[2].length === 1 ? `0${dateArray[2]}` : dateArray[2];

  return `${year}-${month}-${day}`;
}

export function visitOfDateFormatter(date) {
  return date.slice(0, 10);
}
// TODO: Delete This!
export const xxx = '';
