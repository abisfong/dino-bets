export default function addViewLisenters(foley) {
  addBetViewToggleListener(foley);
  addHelpViewToggleListener(foley);
}

function addBetViewToggleListener(foley) {
  const betViewToggleEl = document.querySelector('#bet-view-toggle');
  const betViewToggleIconEl = betViewToggleEl.querySelector('.icon');

  betViewToggleEl.addEventListener('click', () => {
    betViewToggleEl.classList.toggle('open');
    betViewToggleEl.classList.toggle('close');
  
    betViewToggleIconEl.classList.toggle('fa-times');
    betViewToggleIconEl.classList.toggle('fa-dollar-sign');
    
    foley.playSoundEffectFor('betViewToggle');
  })
}

function addHelpViewToggleListener(foley) {
  const helpViewToggleEl = document.querySelector('#help-view-toggle');
  const helpViewToggleIconEl = helpViewToggleEl.querySelector('.icon');

  helpViewToggleEl.addEventListener('click', () => {
    helpViewToggleEl.classList.toggle('open');
    helpViewToggleEl.classList.toggle('close');
  
    helpViewToggleIconEl.classList.toggle('fa-times');
    helpViewToggleIconEl.classList.toggle('fa-dollar-sign');
    
    foley.playSoundEffectFor('betViewToggle');
  })
}