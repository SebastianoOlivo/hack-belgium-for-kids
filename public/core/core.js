var messageBox = document.querySelector('.message'),
  board = document.querySelector('.board-status'),
  connexion = document.querySelector('.connexion-status'),
  time = document.querySelector('.time'),
  boardTime = document.querySelector('.board-timer'),
  connexionTimer = document.querySelector('.connexion-timer');

const socket = io('http://localhost:5000');

clock(time)

socket.on('boardReady', () => {

  boardStatus();
  connexionStatus();

})

function boardStatus() {
  board.classList.toggle('status--on');
  board.textContent = board.classList.contains('status--on') ? 'on' : 'off';
  chrono(boardTime);
}

function connexionStatus() {
  connexion.classList.toggle('status--on');
  connexion.textContent = connexion.classList.contains('status--on') ? 'on' : 'off';
  chrono(connexionTimer);

}

function showMessage(message) {
  injectInHtml(message);
}

function happyEmot() {
  injectInHtml('<i class="em em-smile"></i>')
}

function angryEmot() {
  injectInHtml('<i class="em em-angry"></i>')
}

function logTime() {
  var date = new Date();

}

function injectInHtml(data) {
  messageBox.innerHTML = data;
}

function toggleMessageBox() {
  messageBox.classList.add('active')
  setTimeout(() => {
    messageBox.classList.remove('active')

  }, 2500);
}