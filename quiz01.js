(function() {
    var locale = 'EN';

    setTimeout(function(){ locale = 'KR' }, 0);

    if(locale === 'KR') {
        function initHandler() {
            var buttonList = $('a');
            for (var i = 0; i < buttonList.length; i++) {
                var item = i + '번째 날';
	            buttonList[i].onclick = function() {console.log(item);};
            }
        }
    } else {
        function initHandler() {
            var buttonList = $('a');
            for (var i = 0; i < buttonList.length; i++) {
                var item = 'Day : ' + i;
	            buttonList[i].onclick = function() {console.log(item);};
            }
        }
    }

    initHandler();
})();
