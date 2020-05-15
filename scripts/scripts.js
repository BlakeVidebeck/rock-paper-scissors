  let user = document.getElementById('userChoice')
  let comp = document.getElementById('compChoice')
  let play = document.getElementById('playagain')
  let winner = document.getElementById('winner')

  let rock = document.getElementById('rock')
  let paper = document.getElementById('paper')
  let scissors = document.getElementById('scissors')

  let compScore = document.getElementById('userscore');
  let userScore = document.getElementById('compscore')
  
  let cScore = 0;
  let uScore = 0;

  const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput
    } else {
      console.log('error')
    }
  }
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 1){
      return 'rock'
    } else if (randomNumber === 2){
      return 'paper'
    } else {
      return 'scissors'
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'Tie'
    }
    if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
          return 'Computer!'
      } else {
          return 'You!'
          
      }
    }
    if (userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'Computer!'
        } else {
            return 'You!'
            
        }
      }
      if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'Computer!'
        } else {
            return 'You!'
        }
      }
  }

  const updateScore = win => {
      if(win === 'Computer!'){
          cScore++
      } else if (win === 'You!'){
          uScore++
      } else {
          cScore = cScore;
          uScore = uScore;
      }
  }

  function playGame (choice) {
    let userChoice = getUserChoice(choice)
    let computerChoice = getComputerChoice()
    user.innerHTML = `${userChoice}`
    comp.innerHTML = `${computerChoice}`
    winner.innerHTML = `${determineWinner(userChoice, computerChoice)}`
    let win = `${determineWinner(userChoice, computerChoice)}`;
    updateScore(win)
    compScore.innerHTML = cScore
    userScore.innerHTML = uScore
  }

rock.onclick = function() {
    playGame('rock')
}
paper.onclick = function() {
    playGame('paper')
}
scissors.onclick = function() {
    playGame('scissors')
}

  play.onclick = function() {
    user.innerHTML = ''
    comp.innerHTML = ''
    winner.innerHTML = ''
    compScore.innerHTML = cScore = 0
    userScore.innerHTML = uScore = 0
  }