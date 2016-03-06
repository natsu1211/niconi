var loginNico = function(mail, pwd){
    var LOGIN_URL = "http://cors.io/?u=https://secure.nicovideo.jp/secure/login?site=niconico";
    var xhr = new XMLHttpRequest();
    xhr.open("POST",LOGIN_URL,true, mail, pwd);
    var fd = new FormData();
    // fd.append(MAIL,PWD);
    xhr.onload = function() {
        alert('data sent and response loaded' );
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };
    xhr.send();
    var resp = xhr.response;
    var cookies = resp.headers['set-cookie'];
    var cookie = '';
    for (var c in cookies){
        if (c.indexOf(user_session_) > -1){
            cookie = c;
            break;
        }
    }
    if (c == ''){
        alert("Cannot get login in session");
    }



}

var getVideoUrl = function(id){
    var API_URL = "http://cors.io/?u=http://flapi.nicovideo.jp/api/getflv/";
    var xhr = createCORSRequest('GET', API_URL + id);
    if(!xhr){
        alert('CORS not supported');
        return;
    }
    xhr.onload = function() {
        var text = xhr.responseText;
        alert('Response from CORS request ' + text);
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };
    xhr.send();
}

var getVideoUrl2 = function(id){
    window.open( "http://www.nicovideo.jp/watch/" + id, "_blank");
    window.open( "http://flapi.nicovideo.jp/api/getflv/" + id, "_blank");
}
