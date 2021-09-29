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

/*
Exercício 1: 
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/
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

/*
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
  Adicione a este botão a ID "btn-holiday" .
  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function holidayButton(buttonName) {
  const button = document.createElement('button');
  const localButton = document.getElementsByClassName('buttons-container')[0];
  button.id = 'btn-holiday';
  button.innerText = buttonName;
  localButton.appendChild(button);
}
holidayButton('Feriados');

/*
Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
  É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/
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

/*
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
  Adicione a este botão o ID "btn-friday" .
  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function fridayButton(buttonName) {
  const button = document.createElement('button');
  const localButton = document.getElementsByClassName('buttons-container')[0];
  button.id = 'btn-friday';
  button.innerText = buttonName;
  localButton.appendChild(button);
}
fridayButton('Sexta-feira');

/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
  É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
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

/*
Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/
const allDays = document.querySelector('#days');
allDays.addEventListener('mouseover', dayZoomIn);
allDays.addEventListener('mouseout', dayZoomOut);

function dayZoomIn(event) {
  event.target.style.fontSize = '30px';
}

function dayZoomOut(event) {
  event.target.style.fontSize = '20px';
}

/*
Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
  O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function addTask(task) {
  const elementSpan = document.createElement('span');
  const elementDiv = document.querySelector('.my-tasks');
  elementDiv.appendChild(elementSpan);
  elementSpan.innerText = task;
}
addTask('Estudar')

/*
Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
  O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
  O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function taskColor(color) {
  const elementDiv = document.createElement('div');
  const elementFather = document.querySelector('.my-tasks');
  elementDiv.className = 'task';
  elementDiv.style.backgroundColor = color
  elementFather.appendChild(elementDiv);
}
taskColor('red')

/*
Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
  Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/
const elementToChange = document.querySelector('.task')
elementToChange.addEventListener('click', changeCLass)

function changeCLass () {
  if (elementToChange.className === 'task') {
    elementToChange.className = 'task selected'
  } else if (elementToChange.className === 'task selected') {
    elementToChange.className = 'task'
  }
}

/*
Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
  Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/
allDays.addEventListener('click', changeDayColor)   // Declarado na linha 93

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
