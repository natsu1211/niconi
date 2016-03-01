var loginNico = function(mail, pwd){
    var LOGIN_URL = "secure.nicovideo.jp/secure/login?site=niconico"
    var body = "mail"
}

var getVideoUrl = function(){
    var videoIdText = document.getElementById("video_id")
    var API_URL = "http://flapi.nicovideo.jp/api/getflv/"
    req = new XMLHttpRequest;
    req.open("GET", API_URL+videoIdText, false);
    req.withCredentials = true;
    req.send(null);
    var response_data = req.responseText;
    alert(response_data);
}
