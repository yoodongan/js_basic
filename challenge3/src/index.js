const submitForm = document.querySelector(".submit-form");
const generateInput = document.querySelector(".generate input");
const guessInput = document.querySelector(".guess input");
const guessSubmit = document.querySelector(".guess submit");
const chosenNumber = document.querySelector(".chosenNumber");
const result = document.querySelector(".result");





function submitClick(event){
    event.preventDefault();
    randomRange = generateInput.value;  // 랜덤 값 범위 
    randomValue = parseInt(Math.random()*randomRange)+1;
    chosenNum = guessInput.value;   // 선택한 값 저장.
    chosenNumber.innerText = `You chose: ${chosenNum}, the machine chose: ${randomValue}`;
    if (chosenNum == randomValue){
        result.innerText = "You Won!"
    }
    else{
        result.innerText = "You Lost!"
    }
}

submitForm.addEventListener("submit", submitClick);