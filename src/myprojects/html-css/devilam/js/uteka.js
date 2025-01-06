window.uteka = window.uteka || {};
window.uteka._host = 'widget.uteka.ru';
window.uteka._queue = [];
window.uteka._loaded = false;
window.uteka.onReady = function (callback) {
	if (window.uteka._loaded) {
		return callback();
	}
  	window.uteka._queue.push(callback);
}

let script = document.createElement('script');
script.src = 'https://' + window.uteka._host + '/static/widgets/widget.compiled.js?l=' + Date.now();
script.async = true;
script.addEventListener('load', function () {
	window.uteka._loaded = true;
	window.uteka._queue.forEach(function (callback) {
		callback();
	});
});

document.head.appendChild(script)

window.uteka.onReady(function () {
  	let widget = document.querySelector('.uteka__map__widget');
  	window.uteka.loadWidget(widget, {'productId':'402664', 'productIds':['402664','402668']});
});

