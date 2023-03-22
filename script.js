const openEnvelopeButton = document.getElementById('open-envelope');
const closeEnvelopeButton = document.getElementById('close-envelope');
const envelope = document.querySelector('.envelope');
openEnvelopeButton.addEventListener('click', function() {
	envelope.style.display = 'block';
});

closeEnvelopeButton.addEventListener('click', function() {
	envelope.style.display = 'none';
});
