$(document).ready(function(event) {
	var wordLength, totalWordLength = 0;
	var sentenceLength, totalSentenceLength = 0;
	var uniqueWords = 0
	$('form').submit(function(event) {
		event.preventDefault();
		var wordCount = ($('textarea#user-text').val().split(' '));
		var uniqueWords = ($('textarea#user-text').val().split(' '));
		var sentenceCount = ($('textarea#user-text').val().split('.'));
		for (var i = 0; i < wordCount.length; i++) {
			totalWordLength += wordCount[i].length;
		}
		for (var i = 0; i < sentenceCount.length; i++) {
			totalSentenceLength += sentenceCount[i].length;
		}
		uniqueWords = $.unique(uniqueWords);
		wordLength = (totalWordLength / wordCount.length);
		sentenceLength = (totalSentenceLength / sentenceCount.length);
		$('.js-text-report').removeClass('hidden');
		$('.js-total-count').text(wordCount.length);
		$('.js-unique-count').text(uniqueWords.length);
		$('.js-average-word-length').text(wordLength);
		$('.js-average-sentence-length').text(sentenceLength);
	});
});