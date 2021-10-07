const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const optionState = document.querySelector('#state');

function addStateOption() {
  for (let index = 0; index < stateOptions.length; index += 1) {
    const option = document.createElement('option')
    option.innerText = stateOptions[index];
    option.value = stateOptions[index];
    optionState.appendChild(option);
  }
}
addStateOption();
