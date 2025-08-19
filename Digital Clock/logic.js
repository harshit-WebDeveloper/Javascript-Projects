function updateClock() {
  const now = new Date();
  //Time
  let hours = pad(now.getHours());
  let minute = pad(now.getMinutes());
  let seconds = pad(now.getSeconds());
  let period = "";
  if (hours === 0) {
    hours = 12;
    period = "AM";
  } else if (hours === 12) {
    period = "PM";
  } else if (hours > 12) {
    hours -= 12;
    period = "PM";
  } else {
    period = "AM";
  }
  let timeString = `${hours}:${minute}:${seconds} ${period}`;
  document.querySelector("#time").innerHTML = timeString;
  //Date
  let todayDate = now.getDate();
  let day = now.getDay();
  let month = now.getMonth();
  let year = now.getFullYear();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dateString = `${days[day]}, ${todayDate} ${months[month]} ${year}`;
  document.querySelector("#date").innerHTML = dateString;
}
function pad(n) {
  return n.toString().padStart(2, "0");
}

setInterval(updateClock, 1000);
updateClock();
