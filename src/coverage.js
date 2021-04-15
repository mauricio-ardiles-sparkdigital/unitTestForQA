/**
 * Ugly code just for the training
 * @param dayName
 * @returns {string}
 */

function shouldIWorkToday(dayName) {
  let message = '';

  if (dayName === 'Saturday' || dayName === 'Sunday'){
    if (dayName === 'Saturday') {
      message = 'Is saturday enjoy your weekend';
    } else {
      message = 'You should not work but the end is near';
    }
  } else if (dayName === 'Monday' || dayName === 'Tuesday' || dayName === 'Wednesday' || dayName === 'Thursday' || dayName === 'Friday') {
    message = 'Sad but True';
  }

  return message;
}



module.exports = {
  shouldIWorkToday
};
