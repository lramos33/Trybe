function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let i = 0; i < weekDays.length; i += 1) {
    const days = weekDays[i];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1: 
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  const selectDays = document.querySelector('#days');
  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');

    dayItem.innerHTML = day;
    selectDays.appendChild(dayItem);

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
    } else {
      dayItem.className = 'day';
    }
  }
}
createDaysOfTheMonth();

// Exercício 2:
function holidayButton(buttonName) {
  const button = document.createElement('button');
  const localButton = document.getElementsByClassName('buttons-container')[0];
  button.id = 'btn-holiday';
  button.innerText = buttonName;
  localButton.appendChild(button);
}
holidayButton('Feriados');

// Exercício 3:
const buttonHoliday = document.querySelector('#btn-holiday');
buttonHoliday.addEventListener('click', changeColorHolidays);

function changeColorHolidays() {
  const holidays = document.querySelectorAll('.holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor === 'pink') {
      holidays[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[i].style.backgroundColor = 'pink';
    }
  }
}

// Exercício 4:
function fridayButton(buttonName) {
  const button = document.createElement('button');
  const localButton = document.getElementsByClassName('buttons-container')[0];
  button.id = 'btn-friday';
  button.innerText = buttonName;
  localButton.appendChild(button);
}
fridayButton('Sexta-feira');

// Exercício 5:
const buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener('click', changeColorFriday);
const allFridays = ['4', '11', '18', '25'];

function changeColorFriday() {
  const friday = document.querySelectorAll('.friday');
  for (let i = 0; i < friday.length; i += 1) {
    if (friday[i].innerText !== 'SEXTOU') {
      friday[i].innerText = 'SEXTOU';
    } else {
      friday[i].innerText = allFridays[i];
    }
  }
}

// Exercício 6:
const allDays = document.querySelector('#days');
allDays.addEventListener('mouseover', dayZoomIn);
allDays.addEventListener('mouseout', dayZoomOut);

function dayZoomIn(event) {
  event.target.style.fontSize = '30px';
}

function dayZoomOut(event) {
  event.target.style.fontSize = '20px';
}

// Exercício 7:
function addTask(task) {
  const elementSpan = document.createElement('span');
  const elementDiv = document.querySelector('.my-tasks');
  elementDiv.appendChild(elementSpan);
  elementSpan.innerText = task;
}
addTask('Estudar')


// Exercício 8:
function taskColor(color) {
  const elementDiv = document.createElement('div');
  const elementFather = document.querySelector('.my-tasks');
  elementDiv.className = 'task';
  elementDiv.style.backgroundColor = color
  elementFather.appendChild(elementDiv);
}
taskColor('red')

// Exercício 9:
const elementToChange = document.querySelector('.task')
elementToChange.addEventListener('click', changeCLass)

function changeCLass () {
  if (elementToChange.className === 'task') {
    elementToChange.className = 'task selected'
  } else if (elementToChange.className === 'task selected') {
    elementToChange.className = 'task'
  }
}

// Exercício 10:
allDays.addEventListener('click', changeDayColor)

function changeDayColor (event) {
  const defineColor = document.querySelector('.task');
  const defineExistence = document.getElementsByClassName('task selected');

  let taskColor = defineColor.style.backgroundColor;
  let targetColor = event.target.style.color;
  
  if (defineExistence.length > 0 && targetColor !== taskColor) {
    event.target.style.color = taskColor;
  } else if (defineExistence.length > 0 && targetColor === taskColor) {
    event.target.style.color = 'rgb(119,119,119)';
  }
}
