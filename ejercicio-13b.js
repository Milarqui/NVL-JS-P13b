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
  if(n % 2 == 0) {
    l = n / 2;
  }
  else {
    l = 0.5 + n / 2;
  }
  for (i = 0; i < l; i++) {
    if(c[i] != c[n-i]) {
      return False;
    }
  }
  return True;
}

function resultado(pal0) {
  var r = palindromo(pal0);
  if(r) {
    return (pal0 + " es un palíndromo");
  }
  else {
    return (pal0 + " no es un palíndromo");
  }
}

alert(resultado(palabra));
