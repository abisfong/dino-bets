export default function addViewLisenters(foley) {
  addBetViewToggleListener(foley);
  addHelpViewToggleListeners(foley);
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

function addHelpViewToggleListeners(foley) {
  addOpenHelpViewListener(foley);
  addCloseHelpViewListener(foley);
}

function addOpenHelpViewListener(foley) {
  const helpViewEl = document.getElementById('help-view');
  const helpViewCloseBtnEl = document.querySelector('.help-view-toggle.close');
  const helpViewOpenBtnEl = document.querySelector('.help-view-toggle.open');
  
  helpViewOpenBtnEl.addEventListener('click', () => {
    helpViewEl.style.display = 'block';
    helpViewCloseBtnEl.style.display = 'block';
    foley.playSoundEffectFor('helpViewToggle');
  })
}

function addCloseHelpViewListener(foley) {
  const helpViewEl = document.getElementById('help-view');
  const helpViewCloseBtnEl = document.querySelector('.help-view-toggle.close');

  helpViewCloseBtnEl.addEventListener('click', () => {
    helpViewEl.style.display = 'none';
    helpViewCloseBtnEl.style.display = 'none';
    foley.playSoundEffectFor('helpViewToggle');
  })
}