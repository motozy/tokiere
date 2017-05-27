// twitter: @mmzy3

function main(){
    updateView();

    // 背景画像変更
    document.getElementById("background-image").addEventListener("change", function(){
        var fileReader = new FileReader();
        fileReader.onload = function() {
            var uri = this.result ;
            var view = document.getElementById("view");
            view.style.backgroundImage = "url(" + uri + ")";
        }
        fileReader.readAsDataURL(this.files[0]);
    });

    // 名前変更
    document.getElementById("name-edit").addEventListener("change", function(){
        updateView();
    });

    // セリフ変更
    document.getElementById("words-edit").addEventListener("change", function(){
        updateView();
    });

    // フルスクリーン
    var fsOn = document.getElementById("full-screen-on");
    var fsOff = document.getElementById("full-screen-off");
    fsOn.addEventListener("click", function(){
        fullScreen(document.body);
        fsOn.hidden = true;
        fsOff.hidden = false;
    });
    fsOff.addEventListener("click", function(){
        fullScreen(null);
        fsOff.hidden = true;
        fsOn.hidden = false;
    });

    // OK
    document.getElementById("ok").addEventListener("click", function(){
        updateView();
        showEditor(false);
    });

    // 編集ウィンドウ表示
    document.getElementById("view").addEventListener("click", function(){
        showEditor(true);
    });
}

// 顔設定
function setFace(uri){
    var img = document.getElementById("erenchan-face");
    img.src = uri;
}

// 服装設定
function setBody(uri){
    var img = document.getElementById("erenchan-body");
    img.src = uri;
}

// view更新
function updateView(){
    var nameEdit = document.getElementById("name-edit");
    var nameText = document.getElementById("name-text");
    nameText.innerHTML = nameEdit.value;

    var wordsEdit = document.getElementById("words-edit");
    var wordsText = document.getElementById("words-text");
    wordsText.innerHTML = wordsEdit.value
}

// 編集ウィンドウ表示ON/OFF
function showEditor(show){
    var editor = document.getElementById("editor");
    editor.hidden = !show;
}

// フルスクリーンエレメント取得
function getFullscreenElement(){
    return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        null
    );
}

// フルスクリーンON/OFF
function fullScreen(ele){
    if(ele){
        if(ele.webkitRequestFullScreen){
            ele.webkitRequestFullScreen();
        }else if(ele.mozRequestFullScreen){
            ele.mozRequestFullScreen();
        }else if(ele.msFullscreenEnabled){
            ele.msFullscreenEnabled();
        }else if(ele.requestFullscreen){
            ele.requestFullscreen();
        }
    }else{
        if(document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullScreen){
            if(document.cancelFullscreen) {
                document.cancelFullscreen(); 
            }else if(document.webkitCancelFullScreen){
                document.webkitCancelFullScreen();
            }else if(document.mozCancelFullScreen){
                document.mozCancelFullScreen();
            }else if(document.msCancelFullscreen){
                document.msCancelFullscreen(); 
            }
        }
    }
}

main();
