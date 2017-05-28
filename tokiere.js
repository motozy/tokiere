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
    if(isRequestFullScreenAvelable(document.body)){
        document.getElementById("full-screen-on").addEventListener("click", function(){
            updateView();
            showEditor(false);
            fullScreen(document.body);
        });
    }else{
        document.getElementById("full-screen-on").hidden = true;
    }

    // OK
    document.getElementById("ok").addEventListener("click", function(){
        updateView();
        showEditor(false);
    });

    // 編集ウィンドウ表示
    document.getElementById("view").addEventListener("click", function(){
        showEditor(true);
        fullScreen(null);
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

// フルスクリーン可否確認
function isRequestFullScreenAvelable(ele){
    return (
        ele.requestFullscreen ||
        ele.mozRequestFullScreen ||
        ele.webkitRequestFullScreen ||
        ele.msFullscreenEnabled
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
