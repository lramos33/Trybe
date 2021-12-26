const enterButton = document.querySelector('#enter-button');
const checkbox = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const length = textArea.getAttribute('maxlength');
const formSection = document.querySelector('#display-none');
const inputInfoSection = document.querySelector('#evaluation-form');

// counter.innerHTML = length + '/500';
counter.innerHTML = (`${length}/500`);

function loginValidade() {
  const inputEmail = document.querySelector('#email');
  const inputPassword = document.querySelector('#password');

  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function validadeSubmitButton() {
  if (checkbox.checked === true) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = 'rgb(78, 44, 131)';
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'rgb(177, 152, 217)';
  }
}

function caracterCounter() {
  counter.innerHTML = (`${length - textArea.value.length}/500`);
}

// Funções complementares
function inputNameFunction() {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const inputFullName = document.createElement('p');
  inputFullName.innerText = (`Nome: ${name} ${lastName}`);
  inputInfoSection.appendChild(inputFullName);
}

function inputEmailFunction() {
  const email = document.querySelector('#input-email').value;
  const inputEmail = document.createElement('p');
  inputEmail.innerText = (`Email: ${email}`);
  inputInfoSection.appendChild(inputEmail);
}

function inputHouseFunction() {
  const house = document.querySelector('#house');
  const houseValue = house.options[house.selectedIndex].value;
  const inputHouse = document.createElement('p');
  inputHouse.innerText = (`Casa: ${houseValue}`);
  inputInfoSection.appendChild(inputHouse);
}

function inputFamilyFunction() {
  const allFamilyInputs = document.querySelectorAll('.family-input');
  for (let index = 0; index < allFamilyInputs.length; index += 1) {
    if (allFamilyInputs[index].checked) {
      const familyValue = allFamilyInputs[index].value;
      const inputFamily = document.createElement('p');
      inputFamily.innerText = (`Família: ${familyValue}`);
      inputInfoSection.appendChild(inputFamily);
    }
  }
}

function inputSubjectsFunction() {
  const allSubjects = document.querySelectorAll('.subject');
  const subjectValue = [];
  for (let index = 0; index < allSubjects.length; index += 1) {
    if (allSubjects[index].checked) {
      subjectValue.push(allSubjects[index].getAttribute('value'));
    }
  }
  const finalResult = subjectValue.join(', ');
  const inputSubjects = document.createElement('p');
  inputSubjects.innerText = (`Matérias: ${finalResult}`);
  inputInfoSection.appendChild(inputSubjects);
}

function inputRateFunction() {
  const allRateInputs = document.querySelectorAll('.family-rate');
  for (let index = 0; index < allRateInputs.length; index += 1) {
    if (allRateInputs[index].checked) {
      const rateValue = allRateInputs[index].value;
      const inputRate = document.createElement('p');
      inputRate.innerText = (`Avaliação: ${rateValue}`);
      inputInfoSection.appendChild(inputRate);
    }
  }
}

function inputTextFunction() {
  const textAreaValue = document.createElement('p');
  textAreaValue.innerText = (`Observações: ${textArea.value}`);
  inputInfoSection.appendChild(textAreaValue);
}

// Função principal
function changeContentToResult(e) {
  const event = e;
  event.preventDefault();
  formSection.style.display = 'none';

  inputNameFunction();
  inputEmailFunction();
  inputHouseFunction();
  inputFamilyFunction();
  inputSubjectsFunction();
  inputRateFunction();
  inputTextFunction();
}

enterButton.addEventListener('click', loginValidade);
checkbox.addEventListener('click', validadeSubmitButton);
textArea.addEventListener('keyup', caracterCounter);
submitButton.addEventListener('click', changeContentToResult);
