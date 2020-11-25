var app = new Vue({
  el: '#vue_unit',//el:要素を指定
  data: {//data:Vue.jsで書き換えるプレースホルダーの内容を指定
    message: 'Vue.jsで書き換えました'//messageという箇所を～に書き換え
  }
});


//Ajax通信で受信したJSONデータをVue.jsに渡す
var app = new Vue({
  el: '#img_unit',
  data: {
    Photos: []
  },
  created: function() {//インスタンスが作成されるときに実行されるアクションを記述
    var self = this;　//jQueryとの組み合わせでthisがそのまま使えないため代入。コールバックが呼び出される前に代入することで、値を退避
    $.getJSON('https://h2o-space.com/htmlbook/images.php', function(data) {
      self.Photos = data;
    });
  }
});
