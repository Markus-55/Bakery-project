const prevNextBtn = document.querySelectorAll('#calendar span');
const calendar = document.querySelector('#calendar');
const payBtn = document.querySelector('#order-payment');
const days = document.querySelector('.days');
const orderDate = document.querySelector('.order-date');

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
  let li;
  const allDatesOfMonth = [];
  const firstDayOfMonth = new Date(currYear, currMonth, 0).getDay();
  const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  const lastDayOfMonth = new Date(currYear, currMonth + 1, 0).getDay();



  // pushes last dates of last month to calendar
  for(let i = firstDayOfMonth; i > 0; i--) {
    li = document.createElement('li');
    li.className = 'prevMonth';

    allDatesOfMonth.push(lastDateOfLastMonth - i + 1);
    li.append(lastDateOfLastMonth - i + 1);
    days.appendChild(li);
  }

  // pushes dates of curr/selected month to calendar
  for(let i = 1; i <= lastDateOfMonth; i++) {
    li = document.createElement('li');

    allDatesOfMonth.push(i);
    li.append(i);
    days.appendChild(li);
  }
  
  //takes last day index and pushes first date of next month
  //if index is 3 adds 4 days, loops until all the 7 calendar days(horizontally) are full
  for(let i = lastDayOfMonth; i < 7; i++) {
    li = document.createElement('li');
    li.className = 'nextMonth';
    
    allDatesOfMonth.push(i - lastDayOfMonth + 1);
    li.append(i - lastDayOfMonth + 1);
    days.appendChild(li);
  }
  document.querySelector('.current-date').innerText = `${months[currMonth]} ${currYear}`;

  document.querySelectorAll('.prevMonth').forEach(element => element.style.color = '#969696');
  document.querySelectorAll('.nextMonth').forEach(element => element.style.color = '#969696');

  // Event listener for date selection
  allDatesOfMonth.forEach((date, index) => {
    document.querySelectorAll('.days li')[index].addEventListener('click', (event) => {
      document.querySelector('.order-date').style.visibility = 'visible';

      if(event.currentTarget.classList.contains('prevMonth')) {
        orderDate.innerText = 'Du kan inte beställa för föregående månad.';
      } 
      else if(event.currentTarget.classList.contains('nextMonth')) {
        orderDate.innerText = 'Vänligen välj nästa månad för att göra en beställning på nästa månad.';
      } else orderDate.innerText = `Din beställning planeras för ${date} ${months[currMonth]} ${currYear}.`;
      
      /// Event listener for payment
      document.querySelector('#order-payment').addEventListener('click', () => {
        if(orderDate.innerText.includes(`${date} ${months[currMonth]} ${currYear}`)) {
          orderDate.innerText = 'Beställningen är nu betald!';
        } 
      });
    });
  });
}
renderCalendar();

const hideShowCalendar = () => {
  calendar.style.visibility = 'hidden';
  payBtn.style.visibility = 'hidden';
  document.querySelector('.order-date').style.visibility = 'hidden';

  document.querySelector('#choose-date').addEventListener('click', () => {
    calendar.style.visibility = 'visible';
    payBtn.style.visibility = 'visible';
  });
}
hideShowCalendar();

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
