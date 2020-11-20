var now = new Date(); //Dateオブジェクトのインスタンスを作る
var seconds = now.getSeconds(); //getSecondsメソッド：現在の秒を取得

//秒数が一桁なら数字の前に0を付ける
if (seconds < 10) {
  seconds = '0' + seconds;
}

var minutes = now.getMinutes(); //分を取得
if (minutes < 10) {
  minutes = '0' + minutes;
}

var hours = now.getHours();
if (hours < 10) {
  hours = '0' + hours;
}

// ↑　何度も同じような記述がでてくるため、以下のように整理　この効率の悪さを改善するのがFunction(機能の意味)＝関数と呼ぶ
var addZero = function(value) {
  if (value < 10) {
    value = '0' + value;
  }
  return value; //返す値
};
var now = new Date();
var seconds = now.getSeconds();
seconds = addZero(seconds);

var minutes = now.getMinutes();
minutes = addZero(minutes);

var hours = now.getHours();
hours = addZero(hours);

document.getElementById('timer').innerHTML = hours + ':' +　minutes + ':' + seconds;



//パラメータや返り値は省略できる
var outputSeconds = function() {
  var now new Date();
  document.write(now.getSeconds());
};//→現在の秒を画面に表示するだけのfunction
//↓利用する場合
outputSeconds();

//パラメータが複数ある場合
var addition = function(a,b) {
  return a + b;
};
//↓利用するとき
document.write(addition(1,2))




/*
比較演算子
A > B
A >= B
A === B
A <= B
A < B
A !== B
*/