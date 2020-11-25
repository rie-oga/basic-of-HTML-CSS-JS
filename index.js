/*
jQueryの基本：＄(セレクタ).メソッド(パラメータ);
$から始まるのがｊQueryの特徴的書式
$=jQuery ほとんどの場合＄でokだが、他ライブラリーで＄という記号がすでに使われていると複数のライブラリーで機能がぶつかってしまう。その際は、プログラムの先頭でjQuery.noConflict();と記述することで、他ライブラリーとのコンフリクトを回避
*/

$('#img_unit').html('ここに、画像リストが表示されます');
$('#img_unit').css('margin-top', '100px');//←ｃｓｓを変更
$('#img_unit').css('marfin-top');//←ｃｓｓを取得
//↓メソッドチェーン
$('img_unit').html('ここに、画像リストが表示されます').css('margin-top', '100px');

/*
alert($('#img_unit').html()); ←html()内を空にすることで、データを取得できる
*/


/*
Ajax getJSONメソッド
*/
$.getJSON('https//:h2o-space.com/htmlbook/images.php'.function(data) {
  for (var i=0; i<data.length; i++) {
    $('<div class="photo"></div>')//＄（要素）：新しい要素を作る＝document.createElementメソッド
    .append('<img src="' + data[i].path + '">')//appendメソッド：要素を追加
    .append('<div class="inner"><p>' + data[i].caption + '<span>' + data[i].name + '</span></p></div>')
    .appendTo('#img_unit');//appendToメソッド：実際に表示　A.append(B);=AにBを追加　A.appendTo(B);=BにAを追加
  }
});

//ｊQteryはwifi環境を使っていないと処理が重くなりがち
