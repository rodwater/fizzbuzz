

for (var i = 1; i < 101; i++) {
	if (i % 15 == 0)
		document.write("FizzBuzz" + "<p>")
	
	else if (i % 3 == 0) 
		document.write("fizz" + "<p>")
	
	else if (i % 5 == 0 )
		document.write("buzz" + "<p>")
	
	else
		document.write(i + "<p>")
}


