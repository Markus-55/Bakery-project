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
  const datesOfCurrMonth = [];
  const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth);
  
  document.querySelector('.current-date').innerText = `${months[currMonth]} ${currYear}`;
  
  
  for(let date = 1; date <= lastDateOfMonth; date++) {
    datesOfCurrMonth.push(date);
  }
  
  //for loop that prints all day of month
  for(let i = 0; i <= datesOfCurrMonth.length -1; i++) {
    const li = document.createElement('li');
    li.append(datesOfCurrMonth[i]);
    document.querySelector('.days').appendChild(li);    
  }
}

renderCalendar();
                       