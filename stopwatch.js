var addZero = function(value) {
if (value < 10) {
  value = '0' + value;
}
return value; //返す値
};

//無名関数　プログラムに直接function~を定義 1度しか使わないようなとき
document.getElementById('start_stop').addEventListener('click', function() {
//addEventListenerメソッド：ユーザーの操作（＝Event）の監視役（Listener）を定義
//要素.addEventListener(イベントの種類、処理);
var now = new Date();
var seconds = now.getSeconds();
seconds = addZero(seconds);

var minutes = now.getMinutes();
minutes = addZero(minutes);

var hours = now.getHours();
hours = addZero(hours);

document.getElementById('timer').innerHTML = hours + ':' +　minutes + ':' + seconds;
});

/*
イベントの種類
keydown:キーボードが押された
keypress:キーボードが押し続けられている
keyup:キーボードが押された状態から放された
mouseenter:マウスカーソルが要素に触れた
mouseover:マウスカーソルが要素に触れ続けている
mousemove:マウスカーソルが動いた
mousedown:マウスボタンをクリックした
mouseup:マウスのボタンを放した
click:クリックした
dblclick:ダブルクリックした
*/


document.getElementById('start_stop2').addEventListener('click', function() {
  var start = new Date();
  setInterval(goTimer, 10);//setIntervalメソッド：ボタンをクリックすると時間が変わり続ける
  /*
  タイマーID = setInterval(処理, 間隔);
  処理には無名関数やファンクション名を指定できる。ファンクション名を指定するときは、パラメータを指定する（）が不要（指定きでない）
  間隔はミリ秒(1/1000秒)単位で指定。１０ミリ秒は1/100秒ごと。
  */
};
//タイマーの処理
var goTimer = function() {
  var now = new Date();
  document.getElementById('timer2').innerHTML = now.getTime();
}

//指定秒数後に1回だけ呼び出すsetTimeout
getTimeout(goTimer,2000);//→ボタンを押した2秒後に現在の時間が表示される


/*
秒＝ミリ秒/1000;
整数＝Math.floor(少数);
秒＝Math.floor(ミリ秒/1000);
*/

//↓1秒ずつカウント
var start;//開始時間（グローバル変数）
var goTimer = function() {
  var now = new Date();

  var milli = now.getTime() - start.getTime();
  var seconds = Math.floor(milli/1000);　//→このままでは６１秒、62秒と増えて行ってしまう
  var minutes = Math.floor(seconds/60);//分　//→このままでは６１分、62分と増えて行ってしまう
  var hours = Math.floor(minutes/60);//時

  seconds = seconds - minutes * 60
  minutes = minutes - hours * 60

  document.getElementById('timer2').innerHTML = seconds;
}



//タイマーを止める　clearIntervalメソッド
window.clearInterval(タイマーID);
//タイマーIDとは、setIntervalメソッドの返り値として得ることができる情報


//toggleボタン：同じ操作で動作を切り替えられるボタン
var timer_id;//外で宣言しておく。タイマーIDを取得するため (スコープがイベントリスナー内に留まらないように)
document.getElementById('start_sopt2').addEventListener('click', function(){
  if (this.innerHTML === 'START') {
    start = new Date();
    timer_id = setInterval(goTimer, 10);

    this.innerHTML = 'stop';
    this.classList.remove('btn-primary');
    this.classList.add('btn-danger');
  } else {
    clearInterval(timer_id);
    this.innerHTML = 'START';
    this.classList.remove('btn-danger');
    this.classList.add('btn-default');
  }
});

