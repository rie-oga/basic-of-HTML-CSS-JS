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
var images = [
  {
    "path": "img/img01.jpg",
    "name": "sansaisan",
    "caption": "こっちは貫禄がありすぎ"
  },
  {
    "path": "img/img02.jpg",
    "name": "yukky_13dream",
    "caption": "年明け富士山"
  },
  {
    "path": "img/img03.jpg",
    "name": "maako",
    "caption": "空と大地の境界線って、どのあたり？"
  }
];
alert(images[0].caption)