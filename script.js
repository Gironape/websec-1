document.addEventListener('DOMContentLoaded', function() {
  const calculateButton = document.querySelector('input[type="button"]');
  const numberInputs = document.querySelectorAll('input[type="number"]');
  const operatorSelect = document.querySelector('select.operator');
  const oldResultParagraph = document.querySelector('.old_resul');
  const nowResultParagraph = document.querySelector('.now_result');

  let lastOperator = '+'; 
  calculateButton.addEventListener('click', calculateResult);

  function calculateResult() {
    const num1 = parseFloat(numberInputs[0].value);
    const num2 = parseFloat(numberInputs[1].value);
    lastOperator = operatorSelect.value; 

    if (isNaN(num1) || isNaN(num2)) {
      nowResultParagraph.textContent = 'Ошибка: Введите числа.';
      return;
    }

    let result;

    switch (lastOperator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '/':
        if (Math.abs(num2) < Number.EPSILON) {
          nowResultParagraph.textContent = 'Ошибка: Деление на ноль!';
          return;
        }
        result = num1 / num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        nowResultParagraph.textContent = 'Ошибка: Неизвестный оператор.';
        return;
    }

    oldResultParagraph.textContent = nowResultParagraph.textContent;

    const expression = `${num1} ${lastOperator} ${num2} =`;
    nowResultParagraph.textContent = expression + " " + result;
  }
});
