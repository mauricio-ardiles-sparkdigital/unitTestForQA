/**
 * Ugly code just for the training
 * @param dayName
 * @returns {string}
 */

function shouldPaidExtraHours(dayName) {
  let message = '';

  if (dayName === 'Saturday' || dayName === 'Sunday'){
    if (dayName === 'Saturday') {
      message = 'PAY';
    } else {
      message = 'DOUBLE PAY!!!';
    }
  } else if (dayName === 'Monday' || dayName === 'Tuesday' || dayName === 'Wednesday' || dayName === 'Thursday' || dayName === 'Friday') {
    message = 'NO!';
  }

  return message;
}



module.exports = {
  shouldPaidExtraHours
};
