var map;
var marker=[];
var infoWindow=[];
var markerData = [
    //ファッション1,6
    {name:'<a href="syosai.html?23">村田石材</a>',
     lat:34.839221,
     lng:138.133923
     },
    {name:'<a href="syosai.html?13">オーケイコーポレーション</a>',
     lat:34.974847,
     lng:138.381140
     },
      {name:'<a href="syosai.html?1">B-WORLD</a>',
     lat: 34.853113, 
     lng:  138.257743
     },
      {name:'<a href="syosai.html?18">ドンキホーテ</a>',
     lat: 34.856573,
     lng: 138.242659
     },
      {name:'<a href="syosai.html?3">chees pige</a>',
     lat: 34.859619,
     lng: 138.310407
     },
      {name:'<a href="syosai.html?7">ＫＡＮＮＡ</a>',
     lat: 34.857759, 
     lng: 138.261356
     },
      {name:'<a href="syosai.html?9">ナノミック</a>',
    lat: 34.905288,
    lng: 138.232309
     },
      {name:'<a href="syosai.html?24">山田組</a>',
     lat:34.870056,
     lng: 138.229214
     },
      {name:'<a href="syosai.html?2">Calme et compose</a>',
     lat: 34.839036,lng: 138.256192
     },
      {name:'<a href="syosai.html?14">共同メディア</a>',
     lat: 35.204246,lng: 136.869936
     },
      {name:'<a href="syosai.html?12">あおいそら</a>',
     lat: 34.854338,lng: 138.254843
     },
      {name:'<a href="syosai.html?4">居酒屋　Go-Bowごぼう</a>',
     lat: 34.851465,lng: 138.251264
     },
      {name:'<a href="syosai.html?15">島田眼科クリニック</a>',
     lat: 34.830857,lng: 138.175088
     }, 
     {name:'<a href="syosai.html?19">事務器　本社</a>',
     lat: 34.865205,lng: 138.265695
     },
      {name:'<a href="syosai.html?11">Sense of Fun</a>',
     lat: 34.736899,lng:138.224244
     },
      {name:'<a href="syosai.html?5">GreenVillage</a>',
     lat:34.8522188,
     lng:138.2484653
     },
      {name:'<a href="syosai.html?6">James English House</a>',
     lat:34.940554,
     lng:138.2098873
     },
     {name:'<a href="syosai.html?8">Matsuge　Salon　julio</a>',
     lat:34.8516728,
     lng:138.2493584
     },
     {name:'<a href="syosai.html?16">島屋寝具</a>',
     lat:34.833635,
     lng:138.2642253
     },
     {name:'<a href="syosai.html?20">ホビヨン</a>',
     lat:34.8585537,
     lng:138.2697974
     },
     {name:'<a href="syosai.html?21">マスヤシート</a>',
     lat:34.854449,
     lng:138.2479453
     },
     {name:'<a href="syosai.html?22">マグファリア</a>',
     lat:34.8524254,
     lng:138.2484957
     },
     {name:'<a href="syosai.html?25">ポメゾン</a>',
     lat:34.806859,
     lng:138.26497
     },
     {name:'<a href="syosai.html?26">すぎ多</a>',
     lat:34.866475,
     lng:138.2551398
     },
     {name:'<a href="syosai.html?27">内山不動産</a>',
     lat:34.8786611,
     lng:138.2581278
     },
     {name:'<a href="syosai.html?28">しんのう鍼灸</a>',
     lat:34.8675343,
     lng:138.2563974
     },
     {name:'<a href="syosai.html?29">ネイルアリス</a>',
     lat:34.8499545,
     lng:138.2515382
     },
     {name:'<a href="syosai.html?30">PETZ</a>',
     lat:34.838527,
     lng:138.3239877
     },
     {name:'<a href="syosai.html?31">フリーエース美容学校</a>',
     lat:34.8473357,
     lng:138.2528679
     },
     {name:'<a href="syosai.html?32">Vsound</a>',
     lat:34.8525118,
     lng:138.2499411
     },
     {name:'<a href="syosai.html?33">アイコーポレーション</a>',
     lat:34.8698262,
     lng:138.3198676
     },
     {name:'<a href="syosai.html?34">おもひで横丁</a>',
     lat:34.85137752,
     lng:138.2517415
     },
     {name:'<a href="syosai.html?35">飛鳥エンタープライズ</a>',
     lat:34.905714,
     lng:138.2513935
     },
     {name:'<a href="syosai.html?36">焼津信用金庫</a>',
     lat:34.8617,
     lng:138.2935465
     },
     {name:'<a href="syosai.html?37">静岡東急スクエア</a>',
     lat:34.9744347,
     lng:138.3874255
     },
     {name:'<a href="syosai.html?38">安藤製餡所</a>',
     lat:34.85249,
     lng:138.2500612
     },
     {name:'<a href="syosai.html?39">合同司法書士事務所</a>',
     lat:34.867045,
     lng:138.2556779
     },
     {name:'<a href="syosai.html?40">湊や</a>',
     lat:34.8507403,
     lng:138.25109
     },
     {name:'<a href="syosai.html?41">三枝商店</a>',
     lat:34.850208,
     lng:138.251075
     },
     {name:'<a href="syosai.html?42">ジョイプラザ　焼津インター店</a>',
     lat:34.88362,
     lng:138.30604
     },
     {name:'<a href="syosai.html?43">No2</a>',
     lat:34.85031,
     lng:138.2526045
     },
     {name:'<a href="syosai.html?44">ふみほぐし</a>',
     lat:34.8478653,
     lng:138.2525333
     },
     {name:'<a href="syosai.html?45">兼次郎</a>',
     lat:34.8500498,
     lng:138.2514502
     },
     {name:'<a href="syosai.html?46">第一興商</a>',
     lat:34.9537869,
     lng:138.4215314
     },
     {name:'<a href="syosai.html?47">Pomme</a>',
     lat:34.851298,
     lng:138.251079
     },
     {name:'<a href="syosai.html?48">STUDIO　WORKS</a>',
     lat:34.845951,
     lng:138.254964
     },
     {name:'<a href="syosai.html?49">ふじ田</a>',
     lat:34.834599,
     lng:138.179021
     },
     {name:'<a href="syosai.html?50">小川商店</a>',
     lat:34.840776,
     lng:138.246028
     },
     {name:'<a href="syosai.html?52">LIFE　SERVICE</a>',
     lat:34.9915578,
     lng:138.420869
     },
     
     
    ];

function initMap(ja) {
 // 地図の作成
    var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']}); // 緯度経度のデータ作成
   map = new google.maps.Map(document.getElementById('map'), 
   { // #sampleに地図を埋め込む
     center: {lat:34.8671704,lng:138.2569602}, // 地図の中心を指定
      zoom: 13 ,// 地図のズームを指定
   });
 for (var i = 0; i < 50; i++) {
               markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
               marker[i] = new google.maps.Marker({ // マーカーの追加
               position: markerLatLng, // マーカーを立てる位置を指定
               map: map // マーカーを立てる地図を指定
            });
            infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
        markerEvent(i); // マーカーにクリックイベントを追加
    }



 
// マーカーにクリックイベントを追加
function markerEvent(i) {
    marker[i].addListener('click', function() { // マーカーをクリックしたとき
      infoWindow[i].open(map, marker[i]); // 吹き出しの表示
  });
}
}
   