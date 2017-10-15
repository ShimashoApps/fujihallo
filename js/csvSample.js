$(function() {
    var target = '#csvText';
    var csvList;
    var insert = '';
    var urlParam = location.search.substring(1);
    $.ajax({
        url: './data/huji44.csv',
        success: function(data) {
            
//             // csvを配列に格納
//             csvList = $.csv()(data);
//             
//             // 挿入するHTMLを作成
//             insert=csvList[0][0];
//             
//             // 追加するパターン
//             // $(target).append(insert);
//             
//             // 上書きパターン
//             $(target).html(insert);
//         }
//     });
// });
// csvを配列に格納
           //  csvList = $.csv()(data);
           //  for(var a=0;a<9;a++){
           //  // 挿入するHTMLを作成
           //  insert='<h2>'+csvList[Number(urlParam)][a]+'<h2>';
           //  
           //  // 追加するパターン
           //   $(target).append(insert);
           //  }
           //  Number(urlParam)=0;
           //  // 上書きパターン
           // // $(target).html(insert);
           
           
             csvList = $.csv()(data);
             // 挿入するHTMLを作成
            
              insert='<h4>&nbsp;&nbsp;&nbsp;&nbsp;名前</h4>'+csvList[Number(urlParam)][0]+'</br>';
             insert2='<img src="'+csvList[Number(urlParam)][1]+'"width="100%"></br>';
             insert3='<h4>&nbsp;&nbsp;&nbsp;&nbsp;住所</h4>'+csvList[Number(urlParam)][2]+'';
             insert4='&nbsp;&nbsp;'+csvList[Number(urlParam)][3]+'</br>';
             insert5='<h4>&nbsp;&nbsp;&nbsp;&nbsp;営業時間</h4>'+csvList[Number(urlParam)][4]+'</br>';
             insert6='<h4>&nbsp;&nbsp;&nbsp;&nbsp;定休日</h4>'+csvList[Number(urlParam)][5]+'</br>';
             insert7='<h4>&nbsp;&nbsp;&nbsp;&nbsp;TEL</h4><a href="tel:'+csvList[Number(urlParam)][6]+'">'+csvList[Number(urlParam)][6]+'</a></br>';
             insert8='<h4>&nbsp;&nbsp;&nbsp;&nbsp;HPへ</h4><a href="'+csvList[Number(urlParam)][8]+'">'+csvList[Number(urlParam)][8]+'</a></br>';
             insert9='<h4></h4><!--'+csvList[Number(urlParam)][8]+'</br>-->';
             insert10='<h4>&nbsp;&nbsp;&nbsp;&nbsp;クーポンの有無</h4>'+csvList[Number(urlParam)][9]+'</br>';
             insert11='<h4>&nbsp;&nbsp;&nbsp;&nbsp;コメント</h4>'+csvList[Number(urlParam)][10]+'</br>';
             // 追加するパターン
              $(target).append(insert);
              $(target).append(insert2);
              $(target).append(insert3);
              $(target).append(insert4);
              $(target).append(insert5);
              $(target).append(insert6);
              $(target).append(insert7);
              $(target).append(insert8);
              $(target).append(insert9);
              $(target).append(insert10);
              $(target).append(insert11);
            // Number(urlParam)=0;
             // 上書きパターン
            // $(target).html(insert);
           
        }
    });
});
