function getInputText() {
	text = document.getElementById('text').value
	alert(text)
}

letter = document.getElementById('letterCount').value
word = document.getElementById('wordCount').value
sentence = document.getElementById('sentenceCount').value
button = document.getElementById('done')

button.addEventListener('click', function() {
    getInputText();
});
