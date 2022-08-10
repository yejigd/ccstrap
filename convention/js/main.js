// header & footer include
window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.include; // data-include 속성값 담기

        if (includePath) { // 해당 요소에 data-include 속성값이 있다면
            var xhttp = new XMLHttpRequest(); // 서버로 보내는 요청

            xhttp.onreadystatechange = function () { // 서버로부터 응답 받은 후 할 동작
                if (this.readyState == 4 && this.status == 200) { // 요청한 데이터 처리가 완료되어 응답할 준비가 완료됨 && 서버에 문서가 존재함
                    el.outerHTML = this.responseText; 
                }
            };
            xhttp.open('GET', '/ccstrap/convention/include/'+includePath, true);
            xhttp.send();
        }
    });
});