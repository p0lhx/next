var ð = "q$Ymq5mq\r9G6ñ/96<K95|£tXÇqVhQ,sE2[*ñ/?Wn=ugOmn@6Y3V>{:pP=s7¬$áVb[*ñE>cG";
document.write(ð+"<br>");

// a = ð.charCodeAt(0);
// document.write(a);
// e = a ^ "4".charCodeAt(1 % 1);
// document.write("Hola: "+e+"<br>");

function name5(x, y) {
  y = y % 8;
  Ï = ___(y);
  Ï = (x & Ï) >> 8 - y;
  return Ï + (x << y) & 255;
}

function ___(y) {
  var z = 0;
  for (var i = 8 - y; i < 8; i++) {
    z += Math.pow(2, i);
  }
  return z;
}

function name(vari9, key){
  key="abcdefghijklmnopqrstuvxyz";

  vacio = "";
  for(var i = 0; i < vari9.length; i++) {
    c = vari9.charCodeAt(i);
    if(i != 0) {
      t = vacio.charCodeAt(i - 1) % 2;
      if (t===0) {
          cr = c ^ key.charCodeAt(i % key.length);      
      }else if(t===1){
        cr = name5(c, key.charCodeAt(i % key.length));
      }  
    }else {
      cr = c ^ key.charCodeAt(i % key.length);
    }
    //document.write("Soy vacio: "+vacio+"<br>");
    vacio += String.fromCharCode(cr);
  } 
  return vacio;
}

function __________(þ) {
  var ŋ = 0;
  for (var i = 0; i < þ.length; i++) {
    ŋ += þ.charCodeAt(i);
  }
  document.write("Soy n: "+ŋ);
  if (ŋ == 8932) {
    var ç = window.open("", "", "width=300,height=2 0");
    ç.document.write(þ);
  } else {
    alert("Mauvais mot de passe!");
  }
}
__________(name(ð, prompt("Mot de passe?")));