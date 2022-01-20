export default function addViewLisenters(foley) {
  addBetViewToggleListener(foley);
  addHelpViewToggleListener(foley);
}

function addBetViewToggleListener(foley) {
  const betViewToggleEl = document.getElementById('bet-view-toggle');
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
  const helpViewEl = document.getElementById('help-view');
  const helpViewToggleEl = document.getElementById('help-view-toggle');
  const helpViewToggleIconEl = helpViewToggleEl.querySelector('.icon');
  const innerText = ['Help', ''];
  let innerTextSelection = 0;

  helpViewEl.style.display = 'none';

  helpViewToggleEl.addEventListener('click', () => {
    const helpViewDisplay = helpViewEl.style.display;
    innerTextSelection = (innerTextSelection + 1) % 2;

    helpViewEl.style.display = helpViewDisplay === 'none' ? 'block' : 'none';

    helpViewToggleEl.classList.toggle('open');
    helpViewToggleEl.classList.toggle('close');
  
    helpViewToggleIconEl.classList.toggle('far');
    helpViewToggleIconEl.classList.toggle('fa-times');
    helpViewToggleIconEl.innerText = innerText[innerTextSelection];
    
    foley.playSoundEffectFor('betViewToggle');
  })
}