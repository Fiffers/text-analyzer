$(document).ready(function(event) {
	$('form').submit(function(event) {

		//When form is submitted, reset all values to 0.
		var wordLength, totalWordLength = 0;
		var sentenceLength, totalSentenceLength = 0;
		var uniqueWords, wordCount = 0
		var sentenceCount = 0
			
		//Prevents the page from reloading upon form submission.
		event.preventDefault();

		//Store all the major values I need for
		//the function into an array with the array
		//split by periods and spaces
		wordCount = ($('textarea#user-text').val().split(' '));
		uniqueWords = ($('textarea#user-text').val().split(' '));
		sentenceCount = ($('textarea#user-text').val().split('. '));
		//console.log (sentenceCount)

		//Loop through wordCount[i].length
		//to get total # of words.
		for (var i = 0; i < wordCount.length; i++) {
			totalWordLength += wordCount[i].length;
		}

		//Loop through sentenceCount[i].length
		//to get total # of sentences.
		for (var i = 0; i < sentenceCount.length; i++) {
			totalSentenceLength += sentenceCount[i].split(' ').length;
			console.log (totalSentenceLength);
		}

		//searches through the array, sorts the array, and 
		//removes duplicates. My Google-Fu is strong.
		uniqueWords = jQuery.uniqueSort(uniqueWords);

		//Gets the average I need to get the average 
		//length of all the words submitted.
		wordLength = (totalWordLength / wordCount.length);

		//Gets the average I need to get the average 
		//length of all the sentences submitted.
		sentenceLength = (totalSentenceLength / sentenceCount.length);

		//Removes hidden class from the parent <dl>
		$('.js-text-report').removeClass('hidden');

		//Adds the stored variables 
		//to the <dd> elements as text.
		$('.js-total-count').text(wordCount.length);
		$('.js-unique-count').text(uniqueWords.length);
		$('.js-average-word-length').text(wordLength);
		$('.js-average-sentence-length').text(sentenceLength);
	});
});