
var i,j;
var ele;
var type;
var score;
var kuai = new Array(15);
for(i=0;i<19;i++){
	kuai[i] = new Array(3);
}
//changTiao1
kuai[0][0]=0;
kuai[0][1]=-20;
kuai[0][2]=-40;
kuai[0][3]=-60;
//changTiao2
kuai[1][0]=0;
kuai[1][1]=1;
kuai[1][2]=2;
kuai[1][3]=3;
//L xing1
kuai[2][0]=0;
kuai[2][1]=1;
kuai[2][2]=-20;
kuai[2][3]=-40;
//L xing2
kuai[3][0]=0;
kuai[3][1]=1;
kuai[3][2]=2;
kuai[3][3]=20;
//L xing3
kuai[4][0]=0;
kuai[4][1]=-1;
kuai[4][2]=20;
kuai[4][3]=40;
//L xing4
kuai[5][0]=0;
kuai[5][1]=-20;
kuai[5][2]=-2;
kuai[5][3]=-1;
//DL xing1
kuai[6][0]=0;
kuai[6][1]=-20;
kuai[6][2]=-40;
kuai[6][3]=-1;
//DL xing2
kuai[7][0]=0;
kuai[7][1]=-20;
kuai[7][2]=1;
kuai[7][3]=2;
//DL xing3
kuai[8][0]=0;
kuai[8][1]=1;
kuai[8][2]=20;
kuai[8][3]=40;
//DL xing4
kuai[9][0]=0;
kuai[9][1]=20;
kuai[9][2]=-1;
kuai[9][3]=-2;
//Tian
kuai[10][0]=0;
kuai[10][1]=1;
kuai[10][2]=20;
kuai[10][3]=21;
//Z xing1
kuai[11][0]=0;
kuai[11][1]=1;
kuai[11][2]=-19;
kuai[11][3]=20;
//Z xing2
kuai[12][0]=0;
kuai[12][1]=-1;
kuai[12][2]=20;
kuai[12][3]=21;
//DZ xing1
kuai[13][0]=0;
kuai[13][1]=-20;
kuai[13][2]=1;
kuai[13][3]=21;
//DZ xing2
kuai[14][0]=0;
kuai[14][1]=1;
kuai[14][2]=20;
kuai[14][3]=19;
//tu Xing1
kuai[15][0]=0;
kuai[15][1]=-1;
kuai[15][2]=1;
kuai[15][3]=-20;
//tu Xing2
kuai[16][0]=0;
kuai[16][1]=1;
kuai[16][2]=20;
kuai[16][3]=-20;
//tu Xing3
kuai[17][0]=0;
kuai[17][1]=-1;
kuai[17][2]=1;
kuai[17][3]=20;
//tu Xing4
kuai[18][0]=0;
kuai[18][1]=-1;
kuai[18][2]=20;
kuai[18][3]=-20;
var vi = new Array(320);


window.onload = function(){
	init();
	oScore = document.getElementById("score_pan");
	//var oMain = document.getElementById("main");
	// nodes = oMain.childNodes;
	// Xiao(2);
	// Xiao(15);
	score=0;
	oScore.innerHTML="Score:<br/>"+score;
	start();
	document.onkeydown=operate;
}
function init(){
	var oMain = document.getElementById("main");
	while(oMain.childNodes.length!=0){
		oMain.removeChild(oMain.childNodes[0]);
	}
	for(i = 0;i<16;i++){
		for(j = 0;j<20;j++){
			var z = document.createElement('div');
			z.style.width="48px";
			z.style.position="absolute";
			z.style.top=i*50+"px";
			z.style.height="48px";
			
			z.style["background-color"]="grey";
			//z.style["background-color"]="orange";
			
			z.style.border="1px solid grey";
			z.style.left=j*50+"px";
			oMain.appendChild(z);
			vi[i*20+j]=0;
			if(i==15){
				vi[i*20+j]=1;
			}
		}
	}
	

}
function mark(ele,type){
	for(i=0;i<4;i++){
		vi[ele+kuai[type][i]] = 2;
	}
	if(type == 0){
		vi[ele-80]=1;
	}
	else if(type == 1){
		for(i=0;i<4;i++){
			vi[ele+kuai[type][i]-20]=1;
		}
	}
	else if(type == 2){
		vi[ele-60]=1;
		vi[ele-19]=1;
	}
	else if(type == 3){
		vi[ele-20]=1;
		vi[ele-19]=1;
		vi[ele-18]=1;
	}
	else if(type == 4){
		vi[ele-20]=1;
		vi[ele-21]=1;
	}
	else if(type == 5){
		vi[ele-40]=1;
		vi[ele-21]=1;
		vi[ele-22]=1;
	}
	else if(type == 6){
		vi[ele-60]=1;
		vi[ele-21]=1;
	}
	else if(type == 7){
		vi[ele-40]=1;
		vi[ele-19]=1;
		vi[ele-18]=1;
	}
	else if(type == 8){
		vi[ele-20]=1;
		vi[ele-19]=1;
	}
	else if(type == 9){
		vi[ele-20]=1;
		vi[ele-21]=1;
		vi[ele-22]=1;
	}
	else if(type == 10){
		vi[ele-20]=1;
		vi[ele-19]=1;
	}
	else if(type == 11){
		vi[ele-20]=1;
		vi[ele-39]=1;
	}
	else if(type == 12){
		vi[ele-21]=1;
		vi[ele-20]=1;
		vi[ele+1]=1;
	}
	else if(type == 13){
		vi[ele-40]=1;
		vi[ele-19]=1;
	}
	else if(type == 14){
		vi[ele-20]=1;
		vi[ele-19]=1;
		vi[ele-1]=1;
	}
	else if(type == 15){
		vi[ele-21]=1;
		vi[ele-40]=1;
		vi[ele-19]=1;
	}
	else if(type == 16){
		vi[ele-40]=1;
		vi[ele-19]=1;
	}
	else if(type == 17){
		vi[ele-21]=1;
		vi[ele-20]=1;
		vi[ele-19]=1;
	}
	else if(type == 18){
		vi[ele-40]=1;
		vi[ele-21]=1;
	}
}
function start(){
	var oMain = document.getElementById("main");
	nodes = oMain.childNodes;
	
	//选取基点染色
	
	
	var suiJi = parseInt(Math.random()*15);
		
	
	type = suiJi;
	ele = 9;

	if(vi[ele]==2){

		alert("You lose!!");
		
		 init();
		 start();
	}
	else{
		
		for(i = 0;i<4;i++){
			if(ele+kuai[type][i]>=0 && ele+kuai[type][i]<320)  
				nodes[ele+kuai[type][i]].style["background-color"]="orange";
		}
		flag = false;
		var timer;
		timer = setInterval(function(){
			check();
			if(flag){
				var bei = 0;
				clearInterval(timer);
				mark(ele,type);
				var row = check3();
				while(row!=-1){
					Xiao(row);
					bei++;
					row = check3();
				}
				if(bei!=0)score+=(Math.pow(2,bei)*100);
				oScore.innerHTML="Score:<br/>"+score;
				start();
			}
			else{
				
				for(i = 0;i<4;i++){		
					if(ele+kuai[type][i]>=0 && ele+kuai[type][i]<320)
						nodes[ele+kuai[type][i]].style["background-color"]="grey";
				}
				//alert(dian.length+" "+dian[0]+" "+dian[1]+" "+dian[2]+" "+dian[3]);
				ele+=20;
				for(i = 0;i<4;i++){
					if(ele+kuai[type][i]>=0 && ele+kuai[type][i]<320)
						nodes[ele+kuai[type][i]].style["background-color"]="orange";
				}
			}
			
		},500);

	}
}
function operate(e){
  	//alert(e.keyCode);
  	for(i = 0;i<4;i++){		
		if(ele+kuai[type][i]>=0 && ele+kuai[type][i]<320)
			nodes[ele+kuai[type][i]].style["background-color"]="grey";
	}
  	if(e.keyCode == 65){
  		ele-=1;
  		if(check2()) ele++;
  	}
  	else if(e.keyCode == 68){
  		ele+=1;
  		if(check2()) ele--;
  	}
  	else if(e.keyCode == 83){
  		ele+=20;
  		if(check2()) ele-=20;
  	}
  	else if(e.keyCode == 87){
 		var c=type;
  		if(type<2){
  			type=1-type;
  		}
  		else if(type<6){
  			type++;
  			if(type==6) type=2;
  		}
  		else if(type<10){
  			type++;
  			if(type==10) type=6;
  		}
  		else if(type==10){}
  		else if(type<13){
  			type++;
  			if(type==13) type=11;
  		}
  		else if(type<15){
  			type++;
  			if(type==15) type=13;
  		}
  		else if(type<19){
  			type++;
  			if(type==19) type=15;
  		}
  		if(check2()) type=c;
  	}
	for(i = 0;i<4;i++){
		if(ele+kuai[type][i]>=0 && ele+kuai[type][i]<320)
			nodes[ele+kuai[type][i]].style["background-color"]="orange";
	}
	
}
function check(){
	for(i = 0;i<4;i++){
		if(ele+kuai[type][i]>=0 && ele+kuai[type][i]<320){
			if(vi[ele+kuai[type][i]]==1){
				flag=true;
			}
		}
	}
	return flag;
}
function check2(){
	for(i = 0;i<4;i++){		
		if(ele+kuai[type][i]>=0 && ele+kuai[type][i]<320){
			if(vi[ele+kuai[type][i]]==2){
				return true;
			}
		}
		else{
			return true;
		}
	}
}
function check3(){
	var tot;
	for(i=15;i>=0;i--){
		tot=0;
		for(j=0;j<20;j++){
			if(vi[i*20+j]==2)
				tot++;
		}
		if(tot==20) return i; 
	}
	return -1;
}
function Xiao(row){
	for(i=row;i>0;i--){
		for(j=0;j<20;j++){
			nodes[i*20+j].style["background-color"]=nodes[(i-1)*20+j].style["background-color"];
			vi[i*20+j]=vi[(i-1)*20+j];
		}
	}
	for(j=0;j<20;j++){
		nodes[j].style["background-color"]="grey";
		vi[j]=0;
	}
}