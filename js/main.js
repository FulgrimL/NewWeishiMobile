window.onload=function(){
    // 蒙层控制
    $(".fixnav").click(function  () {


      $(this).css("display","none");
      var a = f_IsFullScreen();
      console.log("aaa");
      console.log(a);
    })







      $(".v-share-icon").click(function(){
      	console.log("share");
      $(this).css("display","none");
      $(this).next().css("display","block");
       $(this).next().find("li").eq(0).animate({

          left:'0'
       });
       $(this).next().find("li").eq(1).animate({
      left:'1.52rem'
       });
       $(this).next().find("li").eq(2).animate({
      left:'3.08rem'
       });
       $(this).next().find("li").eq(3).animate({
      left:'4.56rem'
       });
       $(this).next().find("li").eq(4).animate({
      left:'6.08rem'
       });

    });

    $(".pp-ti").click(function(){

      $(".v-share-icon").next().css("display","none");

       $(".v-share-icon").next().find("li").eq(0).animate({
          left:'6.6rem'
       });
       $(".v-share-icon").next().find("li").eq(1).animate({
      	  left:'6.6rem'
       });
       $(".v-share-icon").next().find("li").eq(2).animate({
      	left:'6.6rem'

       });
       $(".v-share-icon").next().find("li").eq(3).animate({
     left:'6.6rem'
       });
       $(".v-share-icon").next().find("li").eq(4).animate({
      left:'6.6rem'
       });
    	$(".v-share-icon").css("display","block");

    });
      $(".hp-ti").click(function(){

      $(".v-share-icon").next().css("display","none");

       $(".v-share-icon").next().find("li").eq(0).animate({
          left:'6.6rem'

       });
       $(".v-share-icon").next().find("li").eq(1).animate({
      	  left:'6.6rem'
       });
       $(".v-share-icon").next().find("li").eq(2).animate({
      	left:'6.6rem'

       });
       $(".v-share-icon").next().find("li").eq(3).animate({
     left:'6.6rem'
       });
       $(".v-share-icon").next().find("li").eq(4).animate({
      left:'6.6rem'
       });
    	$(".v-share-icon").css("display","block");

    });
    $(".up-ti").click(function(){

      $(".v-share-icon").next().css("display","none");

       $(".v-share-icon").next().find("li").eq(0).animate({
          left:'6.6rem'

       });
       $(".v-share-icon").next().find("li").eq(1).animate({
      	  left:'6.6rem'
       });
       $(".v-share-icon").next().find("li").eq(2).animate({
      	left:'6.6rem'

       });
       $(".v-share-icon").next().find("li").eq(3).animate({
     left:'6.6rem'
       });
       $(".v-share-icon").next().find("li").eq(4).animate({
      left:'6.6rem'
       });
    	$(".v-share-icon").css("display","block");

    });

       $(".v-author").click(function(){

      $(".v-share-icon").next().css("display","none");

       $(".v-share-icon").next().find("li").eq(0).animate({
          left:'6.6rem'

       });
       $(".v-share-icon").next().find("li").eq(1).animate({
      	  left:'6.6rem'
       });
       $(".v-share-icon").next().find("li").eq(2).animate({
      	left:'6.6rem'

       });
       $(".v-share-icon").next().find("li").eq(3).animate({
     left:'6.6rem'
       });
       $(".v-share-icon").next().find("li").eq(4).animate({
      left:'6.6rem'
       });
    	$(".v-share-icon").css("display","block");

    });



      $(".v-add").click(function() {
        $(this).css("display","none");
        $(".v-bingo").css('display', 'block');
      });

      $(".v-bingo").click(function() {
        $(this).css("display","none");
        $(".v-add").css('display', 'block');
      });
//homepage-user
			$(".up-switch2").find("span").css("color","#fff").end().find("em").css("display","none");
		$(".hp-live").css("display","none");
		$(".up-switch1").click(function(){
			$(this).find("span").css("color","#fdd000").end().find("em").css("display","inline-block");
			$(".up-switch2").find("span").css("color","#fff").end().find("em").css("display","none");
			$(".hp-vedio").css("display","block");
			$(".hp-live").css("display","none");

		});
		$(".up-switch2").click(function(){
			$(this).find("span").css("color","#fdd000").end().find("em").css("display","inline-block");
			$(".up-switch1").find("span").css("color","#fff").end().find("em").css("display","none");
			$(".hp-live").css("display","block");
			$(".hp-vedio").css("display","none");

		});
			var upadd = false;
		$(".up-add").click(function(){
			if (!upadd) {
				$(this).css("background-image","url(../img/success-icon.png)").css("width","1.2rem");
				upadd = true;

			}else{
				$(this).css("background-image","url(../img/add.png)").css("width","0.96rem");
				upadd = false;


			}

		})
//homepage-my页面
		$(".hp-cut").find("span").click(function(){
			$(this).css("color","#fff");
			$(this).siblings().css("color","#FDD000");
			$(".hp-vedio").css("display","block");
			$(".hp-live").css("display","none");
		})
		$(".hp-cut").find("em").click(function(){
			$(this).css("color","#fff");
			$(this).siblings().css("color","#FDD000");
			$(".hp-vedio").css("display","none");
			$(".hp-live").css("display","block");
		})

// home-prop页面
			$(".pp-switch2").find("span").css("color","#fff").end().find("em").css("display","none");
		$(".swiper-container2").css("display","none");
		$(".pp-switch1").click(function(){
			$(this).find("span").css("color","#fdd000").end().find("em").css("display","inline-block");
			$(".pp-switch2").find("span").css("color","#fff").end().find("em").css("display","none");
			$(".pp-v").css("display","block");
			$(".swiper-container2").css("display","none");

		});
		$(".pp-switch2").click(function(){
			$(this).find("span").css("color","#fdd000").end().find("em").css("display","inline-block");
			$(".pp-switch1").find("span").css("color","#fff").end().find("em").css("display","none");
			$(".swiper-container2").css("display","block");
			$(".pp-v").css("display","none");

		});
		var ppadd = false;
		$(".pp-add").click(function(){
			if (!ppadd) {
				$(this).css("background-image","url(../img/success-icon.png)").css("width","1.2rem");
				ppadd = true;
				console.log(ppadd);
			}else{
				$(this).css("background-image","url(../img/add.png)").css("width","0.96rem");
				ppadd = false;
				console.log(ppadd);

			}

		});
    //prop-list页面
$(".pl-add").click(function() {
        $(this).css("display","none");
        $(this).next().css('display', 'block');
      });

      $(".pl-bingo").click(function() {
        $(this).css("display","none");
        $(this).prev().css('display', 'block');
      });


//启动页
    $("body").swipe({
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == "right") {
          	window.location.href="../html/homepage-vedio.html"
          }
        },
      });

//全屏
  $(".vcp-fullscreen-toggle").click(function() {
    if(f_IsFullScreen()){
      $(".willesPlay").css("height","9rem");
      console.log("full");
    }else{
      var he = window.screen.height;
      $(".willesPlay").css("height",he);
      console.log("normal");    }
  })

}
// home-prop页面
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView :1.7,
    freeMode : true,
    loop:false,
});

var mySwiper2 = new Swiper('.swiper-container2', {
    slidesPerView :3,
    freeMode : true,
    loop:false,
});

function f_IsFullScreen() {
return (document.body.scrollHeight == window.screen.height && document.body.scrollWidth == window.screen.width);
}




