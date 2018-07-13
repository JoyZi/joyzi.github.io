// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("我的仙女再考虑一下呗");
	   }else if(Dianji==2){
		   		alert("什么都依你");
		   		
	   }else if(Dianji==3){
		   		alert("余生都爱你");
		   		
	   }else if(Dianji==4){
		   		alert("家务我全干");
		   		
	  }else if(Dianji==5){
		   		alert("不藏私房钱");
	  }else if(Dianji==6){
		   		alert("房子写你名");
	  }else if(Dianji==7){
		   		alert("工资全上交");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("哈哈哈，快打我电话1520466337");
	}
	

}