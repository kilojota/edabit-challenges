// Create a function that takes an array of strings representing times ('hours:minutes:seconds') and returns their sum as an array of integers ([hours, minutes, seconds]).
function timeSum(times) {
  hours = 0;
  minutes = 0;
  seconds = 0;
  times.forEach(time => {
    [hours_, minutes_, seconds_] = time.split(':');
    hours += parseInt(hours_);
    minutes += parseInt(minutes_);
    seconds += parseInt(seconds_);
  });
  minutesFromSeconds = Math.floor(seconds / 60);
  minutes += minutesFromSeconds;
  seconds = Math.floor(seconds % 60);
  hoursFromMinutes = Math.floor(minutes / 60);
  hours += hoursFromMinutes;
  minutes = Math.floor(minutes % 60);

  return [hours, minutes, seconds];
}
