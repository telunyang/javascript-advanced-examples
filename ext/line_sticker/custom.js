//搭配 button 進行「事件處理」所使用的函式
function showImages(){
    //取得 textarea 中的 html string
    let textarea = document.getElementById("txt");

    //將 textarea 中的 html string，放到 html 變數中
    let html = textarea.value;

    //宣告變數
    let regex, matches, arr = [];

    //透過 regular expression 取得貼圖網址，同時放到空陣列中
    regex = /https?:\/\/stickershop\.line-scdn\.net\/stickershop\/v1\/sticker\/[0-9]+\/android\/sticker\.png/g;
    while( (m = regex.exec(html)) !== null ){
        arr.push( m[0] );
    }

    //輸出陣列內容
    //console.log(arr);

    //將陣列當中所有重覆的值去除掉
    arr = Array.from( new Set(arr) );

    //再輸出陣列內容
    //console.log(arr)

    //取得 ul element
    let ul = document.getElementsByTagName("ul")[0];

    //將陣列中的貼圖網址，一個一個顯示在網頁上
    for(let url of arr){
        //建立 li node
        let li = document.createElement("li");
        li.style = "float: left;";

        //建立 a node
        let a = document.createElement("a");
        a.target = "_blank";
        a.href = url;
        
        //建立 img node，並增加 src 跟 style 屬性
        let img = document.createElement("img");
        img.src = url;
        img.style = "width: 297px; height: 263px;";

        //將 img node 放到 a node 當中
        a.appendChild(img);

        //將 a node 放到 li node 當中
        li.appendChild(a);

        //將 li node 放到 ul node 當中
        ul.appendChild(li);
    }
    
    //將 textarea 內的文字清空
    html.value = '';
}