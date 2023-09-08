
var Pic1 = {
  url: "https://www.gothicz.net/images/fanart/wallpapery/alleyrat/56_1920x1200.jpg",
  heading: "JavaScript Basics:",
  text: "n statically typed programming languages a Dictionary (Key/Value pair collection) object can be very useful at times. While JavaScript doesn’t natively include a type called “Dictionary”, it does contain a very flexible type called “Object”. "
};


var Pic2 = {
  url: "https://www.gothicz.net/images/fanart/wallpapery/alleyrat/57_1920x1200.jpg",
  heading: "Java 17",
  text: "In Java 17, many changes are to be had, for one, sealed class, to protect your secrets, for another record class to send data as simply as possibly with this ancient beast. "
};

var Pic3 = {
  url: "https://www.gothicz.net/images/fanart/wallpapery/pivl/38_1920x1200.jpg",
  heading: "Magie",
  text: "Vztahu magie a živlů bylo věnováno mnoho výzkumného úsilí. Lze prohlásit, že magie představuje dokonalý živel. Je to síla, která veškeré živly dokáže transformovat a tvarovat, což znamená, že jim je nadřazená. Každý živel, je-li viděn ve své nejryzejší podobě, v sobě nese spojení s magií. "
};


var Pic4 = {
  url: "https://www.gothicz.net/images/fanart/wallpapery/el-kamil/2_1024x768.jpg",
  heading: "Herbaria",
  text: "Ve světě je k nalezení spousta květinek, hub a podobných věcí. Některé rostou na každém kroku a jiné jsou naopak velmi těžce k mání a rostou třeba jen na jednom místě. "
};

var Pic5 = {
  url: "https://www.gothicz.net/images/fanart/wallpapery/milhaus/36_1920x1080.jpg",
  heading: "Díry v kopci",
  text: "Jiné takové místo v celé kolonii nenajdete. Kopec a v něm 3 zcela jasně zřetelné díry. Toto místo se nachází v lesíku nedaleko od Starého tábora. Já si myslím, že to jsou hnízda pro krvavé mouchy, proč jsou ale jen tyto díry na jednom místě v kolonii? Když jsou mouchy prakticky všude. "
};


var Pic6 = {
  url: "https://www.gothicz.net/images/fanart/wallpapery/oficialni/41_1920x1200.jpg",
  heading: "Maják",
  text: "Na první pohled obyčejný maják, avšak při vstupu dovnitř objevíte točité schody, které vás zavedou do spletitých katakomb hlídaných kostlivci. Přibližně ve středu chodeb je velká místnost s kostlivcovým mágem, kterého když porazíte získáte knihu Chromanin, respektive její první díl.  "
};



let col = 0;

function NextImage(){
  col += 1;
    if (col == 1){
      $("#Image").css('background-image', "url(" + Pic1.url +")");
      $("h3").html(Pic1.heading);
      $("p").html(Pic1.text);
    }else if(col == 2){
      $("#Image").css('background-image', "url(" + Pic2.url +")");
      $("h3").html(Pic2.heading);
      $("p").html(Pic2.text);
    }else if(col == 3){
      $("#Image").css('background-image', "url(" + Pic3.url +")");
      $("h3").html(Pic3.heading);
      $("p").html(Pic3.text);
    }else if(col == 4){
      $("#Image").css('background-image', "url(" + Pic4.url +")");
      $("h3").html(Pic4.heading);
      $("p").html(Pic4.text);
    }else if(col == 5){
      $("#Image").css('background-image', "url(" + Pic5.url +")");
      $("h3").html(Pic5.heading);
      $("p").html(Pic5.text);
    }else if(col == 6){
      $("#Image").css('background-image', "url(" + Pic6.url +")");
      $("h3").html(Pic6.heading);
      $("p").html(Pic6.text);
      col = 0
    }


  };

  function FormerImage(){
    col -= 1;
      if (col == 1){
        $("#Image").css('background-image', "url(" + Pic1.url +")");
        $("h3").html(Pic1.heading);
        $("p").html(Pic1.text);
        col = 7;
      }else if(col == 2){
        $("#Image").css('background-image', "url(" + Pic2.url +")");
        $("h3").html(Pic2.heading);
        $("p").html(Pic2.text);
      }else if(col == 3){
        $("#Image").css('background-image', "url(" + Pic3.url +")");
        $("h3").html(Pic3.heading);
        $("p").html(Pic3.text);
      }else if(col == 4){
        $("#Image").css('background-image', "url(" + Pic4.url +")");
        $("h3").html(Pic4.heading);
        $("p").html(Pic4.text);
      }else if(col == 5){
        $("#Image").css('background-image', "url(" + Pic5.url +")");
        $("h3").html(Pic5.heading);
        $("p").html(Pic5.text);
      }else if(col == 6){
        $("#Image").css('background-image', "url(" + Pic6.url +")");
        $("h3").html(Pic6.heading);
        $("p").html(Pic6.text);
        
      }
  
  
    };


 







$("#Gallery").find('.thumbnail:nth-child(1)').click(function(){
  $("#Image").css('background-image', "url(" + Pic1.url +")");
  $("h3").html(Pic1.heading);
  $("p").html(Pic1.text);
  col = 1;

});

$("#Gallery").find('.thumbnail:nth-child(2)').click(function(){
  $("#Image").css('background-image', "url(" + Pic2.url +")");
  $("h3").html(Pic2.heading);
  $("p").html(Pic2.text);
  col = 2;

});

$("#Gallery").find('.thumbnail:nth-child(3)').click(function(){
  $("#Image").css('background-image', "url(" + Pic3.url +")");
  $("h3").html(Pic3.heading);
  $("p").html(Pic3.text);
  col = 3;

});

$("#Gallery").find('.thumbnail:nth-child(4)').click(function(){
  $("#Image").css('background-image', "url(" + Pic4.url +")");
  $("h3").html(Pic4.heading);
  $("p").html(Pic4.text);
  col = 4;

});


$("#Gallery").find('.thumbnail:nth-child(5)').click(function(){
  $("#Image").css('background-image', "url(" + Pic5.url +")");
  $("h3").html(Pic5.heading);
  $("p").html(Pic5.text);
  col = 5;

});

$("#Gallery").find('.thumbnail:nth-child(6)').click(function(){
  $("#Image").css('background-image', "url(" + Pic6.url +")");
  $("h3").html(Pic6.heading);
  $("p").html(Pic6.text);
  col = 6;


});




$("#Forward").click(NextImage);
$("#Backward").click(FormerImage);

/* Collection.forEach($("#Image").css('background-image', url)) */