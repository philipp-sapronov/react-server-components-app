import moment from 'moment';

export default function getDaysToBirthday(today, birthday) {
  const dayA = moment(birthday.day.toString() + birthday.month.toString(), 'DDMM');
  const dayB = moment(today.day.toString() + today.month.toString(), 'DDMM');

  const diff = dayB.diff(dayA, 'days');

  if (diff < 0) {
    return diff * -1;
  } else if (diff === 0) {
    return diff;
  } else {
    return diff * -1 + 365;
  }
}
