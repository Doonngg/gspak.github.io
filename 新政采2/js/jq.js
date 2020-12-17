 $(function(){
      //1、实现页面初始化效果
      $(".banner_on .boxMenu a:not(:first)").hide();
	  //实现页码效果
	  var num = $(".boxMenu a").size();
      var i;//表示页码1-num
      for(i=1;i<=num;i++){
	      $(".List").append("<li>"+"</li>");
	   }   
	$(".List li").eq(0).addClass("selected");
	//2、鼠标进过页码进行切换
	 $(".List li").mouseover(function(){
         $(this).addClass("selected").siblings().removeClass("selected");
		 var index=$(this).index();
		 $(".boxMenu a").eq(index).show().siblings('a').hide();	 	 
	 }); 
	 //3、自动切换效果
	 auto = setInterval(function(){
		 var next//下一页索引值
		 var now = $(".selected").index(); //当前页索引值
		 if((now+1)<num){
			 next=now+1;
			 }else{
				next=0; 
				 }
		 $(".List li").eq(next).trigger("mouseover");
		},4000); 
		//4、鼠标经过图片，停止自动切换
	  $(".boxMenu a").mouseover(function(){
		    clearInterval(auto);
		  }).mouseout(function(){
			auto = setInterval(function(){
		 var next//下一页索引值
		 var now = $(".selected").index(); //当前页索引值
		 if((now+1)<num){
			 next=now+1;
			 }else{
				next=0; 
				 }
		 $(".List li").eq(next).trigger("mouseover");	
		},4000);
	});	
  })