// var orange = 100;
// var apple = 120;

// if(orange < apple){
//   alert('みかんの値段がリンゴより安い');
// }
// else if(orange == apple){
//   alert('みかんとリンゴが同じ値段');
// }
// else{
//   alert('みかんの値段がリンゴより高い');
// }

// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2をかけ続けて'+ max + 'を超えるのに必要だった回数は' + count + '回です');

// var i;
// var num = 0;

// for(i = 1;i < 11;i++){
//   num = num + i;
// }

// alert('1から１０まで足し算をした結果は' + num + 'です');

// alert(12+12);
// alert(12-12);
// alert(12*12);
// alert(12/12);

// var alertString;
// alertString = addString("WebCamp");

// alert(alertString);

// function addString(strA){
//   var addStr = "Hello" + strA;
//   return addStr;
// }

// var promptStr = prompt('Please input words which you like.');

// alert(promptStr);

var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}


var js_hand = getJShand();
var judge = winLose(user_hand, js_hand);
if(user_hand != null) {
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は'+ js_hand + 'です。\n結果は' + judge + 'です。');
}else{
  alert("またチャレンジしてね")
}



function getJShand(){
  var js_hand_num = Math.floor(Math.random()*3);
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user,js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
      if(js == "グー"){
        winLoseStr = "負け";
      }else if(js == "チョキ"){
      winLoseStr = "あいこ";
      }else if(js == "パー"){
        winLoseStr = "勝ち";
      }
   }else if(user == "パー"){
      if(js == "グー"){
        winLoseStr = "勝ち";
      }else if(js == "チョキ"){
      winLoseStr = "負け";
      }else if(js == "パー"){
        winLoseStr = "あいこ";
      }
    }

    return winLoseStr;
}