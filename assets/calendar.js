const date = new Date();
const [currMonth, currDate, currYear] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear()
];

const months = [
  'Januari',
  'Februari',
  'Mars',
  'April',
  'Maj',
  'Juni',
  'Juli',
  'Augusti',
  'September',
  'Oktober',
  'November',
  'December'
];

// console.log(currMonth, currDate, currYear);
// console.log(months[currMonth]);

const renderCalendar = () => {
  const allDatesOfMonth = [];
  const firstDayOfMonth = new Date(currYear, currMonth, 0).getDay();
  const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

  //pushes last dates of last month to allDatesOfMonth arr
  for(let i = firstDayOfMonth; i > 0; i--) {
    console.log(1, i);
    allDatesOfMonth.push(lastDateOfLastMonth - i + 1);
    console.log(lastDateOfLastMonth - i + 1, lastDateOfLastMonth - i, i, 1);
  }
  
  //pushes dates of curr month to allDatesOfMonth arr
  for(let i = 1; i <= lastDateOfMonth; i++) {
    allDatesOfMonth.push(i);
  }
  
  //displays & appends allDatesOfMonth to calendar
  for(let i = 0; i <= allDatesOfMonth.length - 1; i++) {
    const li = document.createElement('li');
    li.append(allDatesOfMonth[i]);
    
    document.querySelector('.days').appendChild(li);
  }

  document.querySelector('.current-date').innerText = `${months[currMonth]} ${currYear}`;
}

renderCalendar();
    