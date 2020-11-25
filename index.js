//写真データの元となるJSONというデータ
/*
JSON書式
[
  {
    キー：値,
    キー：値,
    ・・・
  },
  ・・・
]
*/

/* imagesはArrayというオブジェクトで「配列」と呼ばれる。複数の値をひとまとめにして管理できる */
var images = [
  {
    "path": "img/genre.jpg",
    "name": "sansaisan",
    "caption": "こっちは貫禄がありすぎ"
  },
  {
    "path": "img/hannba-ga-.jpg",
    "name": "yukky_13dream",
    "caption": "年明け富士山"
  },
  {
    "path": "img/itigo2.jpg",
    "name": "maako",
    "caption": "空と大地の境界線って、どのあたり？"
  }
];
//alert(images[0].caption)

/*
var pref1 = "北海道"
var pref2 = " 青森"
var pref3 = "岩手"
↓
var pref = new Array('北海道','青森','岩手');
or
var pref = ['北海道','青森','岩手'];

pref[0]→北海道  この数字はインデックス（添え字）と呼ばれる
*/

/*
配列の操作　用意されているメソッド、プロパティー
var pref = ['北海道','青森','岩手'];
pref.push('宮城県'); //末尾に　宮城県　を追加
pref.pop(''); //末尾（宮城県）を取り出して配列から削除
pref.shift(''); //先頭（北海道）を削除
pref.unshift('北海道'); //先頭に北海道を追加

spliceメソッドで指定した場所の値をまとめて消す
pref.splice(1,2); //1番目のインデックス（青森）から2件を削除

配列のlengthプロパティー：値の数が入っている
var pref = ['北海道','青森','岩手'];
alert(pref.length); //3 lengthは個数のため、最大のインデックス番号+１となる

indexOf:値を指定して、配列の何番目に入っているかを調べる
var pref = ['北海道','青森','岩手']
alert(pref.indexOf('青森'))　//1

slice:配列をコピー
var prefCopy = pref.slice();
*/

var img;
//document.createElementは、新しく要素を作成するためのメソッド。パラメータに要素名を指定するとElementオブジェクトが作成される
//document.createElement(作成する要素);
img = document.createElement('img');//imgという変数に代入
img.setAttribute('src',images[0].path);//setAttributeメソッドでimgnに対いてsrc属性を追加。src属性の値としてJSONから取得した画像ファイルへのpathを指定すれば、画像要素の完成
document.getElementById('img_unit').appendChild(img);//document.createElementメソッドでつくった要素をdocument.appendChildメソッドで画面上の要素に追加することで表示できる


/*
<div class="phote">
  <img src="img/img01.jpg">
  <div class="inner"><p>こっちは貫禄ありすぎ<span>sansaisan</span></p></div>
</div>
以下、ｈｔｍｌのこれをｊｓで作る
*/
var img;
var caption;
var div;

img = document.createElement('img');
img.setAttribute('src',images[0].path);

caption = document.createElement('div');
caption.className = 'inner';
caption.innerHTML = '<p>' + images[0].caption + '<span>' + images[0].name + '</span></p>';

div = document.createElement('div');
div.className = 'photo',
div.appendChild(img);
div.appendChild(caption);

document.getElementById('img_unit').appendChild(div);

/*
繰り返し処理を行うfor構文 上の記述に足していく↓
*/
var img;
var caption;
var div;

for (var i=0; i<images.length; i++) {//ここを追加

img = document.createElement('img');
img.setAttribute('src',images[i].path);

caption = document.createElement('div');
caption.className = 'inner';
caption.innerHTML = '<p>' + images[i].caption + '<span>' + images[i].name + '</span></p>';

div = document.createElement('div');
div.className = 'photo',
div.appendChild(img);
div.appendChild(caption);

document.getElementById('img_unit').appendChild(div);
}
/*
for (初期化処理；　終了条件；　更新処理) {
  繰り返したい処理
}
var i = 0; 変数名はなんでもいいが、iが良く使われる、今回は、最初のデータ（０番目）を初期値とする
i<images.length ここではiの最大値２、images.lengthの最大値３
更新処理は、繰り返しのたびに変える内容を指定。今回はiを１ずつ加算したい　表現方法→ i=i+1,i+=1,i++
*/


//for構文を複数使う場合、j,k.lなどと続く