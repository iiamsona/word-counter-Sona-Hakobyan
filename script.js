letter = document.getElementById('letterCount')
word = document.getElementById('wordCount')
sentence = document.getElementById('sentenceCount')


function getInputText() {
	text = document.getElementById('text').value
	letterCount = 0
	for (var i = 0; i < text.length; i++) {
	  if (text[i] != " ") {
	  letterCount++
	  letter.innerHTML = letterCount
	  }
	}
}

button = document.getElementById('done')

button.addEventListener('click', function() {
    getInputText();
});
