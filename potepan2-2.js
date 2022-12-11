let total = 0;	// 計算中の数字用。
let num = "0";	// 押された数字キーの記録。ピリオドが入るので文字列として扱う。
let key = "";	// 1つ前に押されたキーの記録。直前に押されたキーと比較する。
let symbol = "";	// 記号キーの記録。
 	
//押されたボタンが数値か文字かの判定。
function pushValue(btn) {
  if(!isNaN(btn)) {
    if(symbol == "=") { //=押した後に計算を引き継ぐためのコード
      total = 0;
      symbol = "";
    }
    if(!isNaN(key)) {
      if(num == "0") {
        num = "" + btn;
      } else {
        num += "" + btn; //連続して数字が押された場合→""を挟むことで文字列をnumに足す動作になる。
      }
    } else {
      num = "" + btn; //記号の後に数値が押された場合、""を挟んで文字列として代入。
    }
    document.getElementById("screenDisplay").innerHTML = num;
    console.log(num);
} else {
    //計算部分
    if(!isNaN(key)) {
      if(symbol == "") {
        total = num;
      } else {
        total = eval(total + symbol + num);
      }
      num = 0;
      document.getElementById("screenDisplay").innerHTML = total;
    }
    symbol = btn;
    document.getElementById("symbolDisplay").innerHTML = symbol;
  }
  key = btn;
}

//ピリオドの設定
function pushPeriod() {
  if(num.indexOf(".") < 0) num += "."; //0より小さい数字が入る時のみ入るようにする。
  key = 0;
  document.getElementById("screenDisplay").innerHTML = num;
}

//イコールの設定
function pushEqual() {
   if(symbol == "=") {
    total = num;
  } else {
    total = eval(total + symbol +num);
    key = "=";
  }
  num = "0";
  symbol = key;
  document.getElementById("screenDisplay").innerHTML = total;
  document.getElementById("symbolDisplay").innerHTML = key;
}

//クリアの設定
function pushClear() {
  total = 0;
  num = 0;
  key = "+";
  symbol = "";
  document.getElementById("screenDisplay").innerHTML = 0;
  document.getElementById("symbolDisplay").innerHTML = "";
}