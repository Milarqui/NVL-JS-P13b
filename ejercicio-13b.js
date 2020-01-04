var palabra = "Someto votemos";

function transforma(pal0) {
  var pal1 = pal0.toLowerCase();
  var pal2 = pal1.replace(" ","");
}

function palindromo(pal0) {
  var pal1 = transforma(pal0);
  var l;
  var i;
  var n = pal1.length;
  for (i = 0; i < n/2; i++) {
    if(c[i] != c[n-i]) {
      return False;
    }
  }
  return True;
}

function resultado(pal0) {
  var r = palindromo(pal0);
  var p = pal0;
  if(!r) {
    p += " no";
  }
  p += " es un palindromo");
  return p;
}

alert(resultado(palabra));
