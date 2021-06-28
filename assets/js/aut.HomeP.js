 // demeli sol terefin js i burada baslayir...


 //bu da 1020 den asagi olanda serach icon nun gelmesi ucun yazilmis kod ... media query ni js de yazmaq olurmus. bu gun de bele  kulturlendim...
 
   //bu tweet buttonu ustunde sekil olur, o hisseni yaziram burda...
   var TweetButtonMedia = window.matchMedia("(max-width: 1296px)")
   function ChangeIMGTweetButton(TweetButtonMedia) {
       if (TweetButtonMedia.matches) { // If media query matches
   
          document.getElementById("tweetBTN").innerHTML = '<i style="font-size: 22px;"class="fas fa-feather-alt"></i>';
       } else{
        document.getElementById("tweetBTN").innerHTML = 'Tweet';
       }
     }
     
     ChangeIMGTweetButton(TweetButtonMedia) // Call listener function at run time
     TweetButtonMedia.addListener(ChangeIMGTweetButton) // Attach listener function on state changes

     //.....ve sol teref bitdi ................
     ////////////////////////////////////////////////////////////////////////////////////////////////////////


     // ..........burda ucuncu sutun basliyoreeeee..............

function SearchAreaFocus(){
  $("#search").css("background-color","white");
  $("#searchLabel").css("background-color","white");
  $(".SearchRow").css("border","1px solid #1da1f2");
  $(".fa-search").css("color","#1da1f2");

}
function SearchAreaBlur(){
  $("#search").css("background-color","#eff3f4");
  $("#searchLabel").css("background-color","#eff3f4");
  $(".SearchRow").css("border","none");
  $(".fa-search").css("color","#536471");

}

$("#search").on("focus",SearchAreaFocus);
$("#search").on("blur",SearchAreaBlur);
