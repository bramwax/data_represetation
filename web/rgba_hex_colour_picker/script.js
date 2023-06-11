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
  console.log("Hello Gustaf, you are " + convert(14, 16) + " in hex");
  var red_hex = convert(document.getElementById("red_in").value,16).padStart(2, '0');
  var green_hex = convert(document.getElementById("green_in").value,16).padStart(2, '0');
  var blue_hex = convert(document.getElementById("blue_in").value,16).padStart(2, '0');
  var alpha_hex = convert(document.getElementById("alpha_in").value,16).padStart(2, '0');
  
  var hex = "#" + red_hex + green_hex + blue_hex + alpha_hex;
  document.getElementById("hex_out").value = hex;
  document.getElementById("backdrop").style.backgroundColor = hex;
}
























