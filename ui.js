const historyEl = document.getElementById('history');
const inputEl = document.getElementById('input');

function writeHistory(lines) {
    for (let i = 0; i < lines.length; i++) {
        writeHistoryLine(lines[i], false);
    }
}

function writeHistoryLine(line, isAction) {
    const paragraph = document.createElement('p');
    paragraph.innerText = line;
    paragraph.className = 'history__paragraph';
    if (isAction) {
        paragraph.className += ' history__paragraph_action';
    }
    historyEl.appendChild(paragraph);

}

inputEl.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        writeHistoryLine(`> ${inputEl.value}`, true);
        writeHistory(act(inputEl.value));
        inputEl.value = "";
        historyEl.scrollTop = historyEl.scrollHeight;
    }
});

writeHistory(start());

