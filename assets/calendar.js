const prevNextBtn = document.querySelectorAll('#calendar span');
const icon = document.querySelector('#calendar');

let date = new Date();
let currMonth = date.getMonth();
let currYear = date.getFullYear();

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

const renderCalendar = () => {
  const allDatesOfMonth = [];
  const firstDayOfMonth = new Date(currYear, currMonth, 0).getDay();
  const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  const lastDayOfMonth = new Date(currYear, currMonth + 1, 0).getDay();
  const lastDOfMonth = new Date(currYear, currMonth + 1, 0);

  // pushes last dates of last month to allDatesOfMonth arr
  for(let i = firstDayOfMonth; i > 0; i--) allDatesOfMonth.push((lastDateOfLastMonth - i + 1));
  
  // pushes dates of curr month to allDatesOfMonth arr
  for(let i = 1; i <= lastDateOfMonth; i++) allDatesOfMonth.push(i);
  
  //takes last day index and pushes first date of next month
  //if index is 3 adds 4 days, loops until all the 7 calendar days(horizontally) are full
  for(let i = lastDayOfMonth; i < 7; i++) allDatesOfMonth.push(i - lastDayOfMonth + 1);
  
  //displays & appends allDatesOfMonth to calendar
  for(let i = 0; i <= allDatesOfMonth.length - 1; i++) {
    const li = document.createElement('li');
    
    li.append(allDatesOfMonth[i]);
    document.querySelector('.days').appendChild(li);
  }

  document.querySelector('.current-date').innerText = `${months[currMonth]} ${currYear}`;
}

renderCalendar();

prevNextBtn.forEach((element) => {
  element.addEventListener('click', () => {
    //loops and removes all li of days when going prev/next month
    document.querySelectorAll('.days li').forEach(element => element.parentNode.removeChild(element));
    currMonth = element.id === 'prev' ? currMonth -= 1 : currMonth += 1;

    if(currMonth < 0 || currMonth > 11) {

      //Updates the date if currMonth < 0 or > 11
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else date = new Date();

    renderCalendar();
  });
});
    