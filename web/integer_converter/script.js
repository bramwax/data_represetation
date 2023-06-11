function convert(integer, base) {
  var lookup = "0123456789ABCDEF";
  var conversion = "";
  while (integer > 0) {
    conversion = lookup[integer % base] + conversion;
    integer = parseInt(integer / base);
  }
  return conversion
}

function update() {
  var integer_in = document.getElementById("integer_in").value;
  document.getElementById("bin_out").value = convert(integer_in, 2);
  document.getElementById("oct_out").value = convert(integer_in, 8);
  document.getElementById("hex_out").value = convert(integer_in, 16);
}