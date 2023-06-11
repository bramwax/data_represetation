function convert(integer, base) {
  var lookup = "0123456789ABCDEF";
  var conversion = "";
  while(integer) {
    conversion = lookup[integer % base] + conversion;
    integer = parseInt(integer / base);
  }
  return conversion
}

function change(){

  var red_hex = convert(document.getElementById("red_in").value,16).padStart(2, '0');
  var green_hex = convert(document.getElementById("green_in").value,16).padStart(2, '0');
  var blue_hex = convert(document.getElementById("blue_in").value,16).padStart(2, '0');
  var hex = "#" + red_hex + green_hex + blue_hex;   
  /*
  var rgb = []
  rgb.push(document.getElementById("red_in").value);
  rgb.push(document.getElementById("green_in").value);
  rgb.push(document.getElementById("blue_in").value);
  
  var hex = "#"; 
  for(let i = 0; i < rgb.length; i++){
    tmp_hex = convert(rgb[i],16);
    
    if(tmp_hex < 10){
      tmp_hex = "0" + tmp_hex;
    }
    
    hex = hex + tmp_hex;
  }
  */
  document.getElementById("hex_out").value = hex;
  document.getElementById("backdrop").style.backgroundColor = hex;
}
























