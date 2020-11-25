var ajax = new XMLHttpRequest();//XMLHttpRequestのインスタンスajaxの各メソッドでJSONファイルを読み込んでいく
ajax.open('GET','https://h2o-space.com/htmlbook/images.php');
//まず、通信を開始するopenメソッドにURLを指定。GETかPOST。今回ｊｓからデータを送信することはないため、どちらでもよいが、通常このような場合はGETを指定
ajax.responseType = 'json';
//sendメソッドを利用すると指定したURLからレスポンスを受け取ることができる。この時、ｊｓ側でどのような正式で受信するかを指定できるのがresponseTypeプロパティー。sendメソッドの前に使用。
//指定できる値の標準「text」で「DOMString」というデータ型　その他↓
//値arraybuffer:型arraybuffer,blob:blob,document:Document,json:Json jsonを使うことが多い
ajax.send(null);
//openメソッドで開通した通信を使ってデータを送信するのがsendメソッド。今回単純にJSONデータを取得するだけなのでnull



//XMLHttpRequestを使うとデータは特殊な形で受信されるため、「イベント」の形で記述する
ajax.onreadystatechange = function() {
//onreadystatechageイベント：XMLHttpRequestオブジェクトが受信している最中、通信状況が変わるたびに指定したファンクションを呼び出す。
  if(ajax.readyState === XMLHttpRequest.Done && ajax.status === 200) {
  /*
  readyStateプロパティ
  値（数値）、値（定数）、意味
  ０、UNSENT、インスタンスができたが、openメソッドはまだ利用されていない
  １、OPENED、openメソッドを利用した
  ２、HEADERS_RECEIVED、sendメソッドが利用され、ヘッダー部分が受信できた
  ３、LOADING、データを受信中である
  ４、DONE、通信が終了して、すべてのデータを受信できた

  Statusプロパティ
  HTTPレスポンスを知ることができる（２００＝正常、３０１＝Webページが移動した、４０１＝認証が必要、４０４＝ファイルが見つからなかった、５００＝内部エラー）
  */
    for (var i=0; i<this.response.length; i++) {//responseプロパティ:受信した内容を参照　受信した内容はJSONの配列になる
      var data = this.response[i];

      var img = document.createElement('img');
      img.setAttribute('src', data.path);

      var caption = document.createElement('div');
      caption.className = 'inner';
      caption.innerHTML = '<p>' + data.caption + '<span>' + data.name + '</span></p>';

      var div = document.createElement('div');
      div.className = 'photo',
      div.appendChild(img);
      div.appendChild(caption);

      document.getElementById('img_unit').appendChild(div);
    }
  }
};






//非同期通信：送信と受信を同時に行える方法。「同期通信」では、データの受信をすべて待ってから次の処理を行うため、通信をしている間はほかの操作は一切行えず、画面が固まったような状態になる。XMLHttpRequestオブジェクトは標準で非同期通信を行う。sendメソッドを実行した後、レスポンスを待つことなくほかの処理を行ったユーザーも画面の操作が可能