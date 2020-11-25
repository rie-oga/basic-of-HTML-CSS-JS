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
alert(images[0].caption)

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

