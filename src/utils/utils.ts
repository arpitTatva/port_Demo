export function getSimpleDate(date: string): string {
  let newDate = new Date(date);
  var day = newDate.getDate();
  var month = newDate.getMonth();
  var year = newDate.getFullYear();
  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var string = year + '-' + month + '-' + day + ' ' + hours + '-' + minutes;
  return string;
}

export function getSimpleTime(date: string): string {
  let newDate = new Date(date);
  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var string = hours + '-' + minutes;
  return string;
}
