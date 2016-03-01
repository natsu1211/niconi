var loginNico = function(mail, pwd){
    var LOGIN_URL = "secure.nicovideo.jp/secure/login?site=niconico"
    var body = "mail"
}

var getVideoUrl = function(id){
    //var videoIdText = window.document.getElementById("video_id");
    var API_URL = "http://flapi.nicovideo.jp/api/getflv/";
    req = new XMLHttpRequest();
    req.open("GET", API_URL + id, true);
    req.withCredentials = true;
    req.send(null);
    var response_data = req.responseText;
    alert(response_data);
    return response_data;
}
