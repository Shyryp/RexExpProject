var regex = '\\#([4-9A-C][0-9A-F])\\1{2}|[Rr][Gg][Bb]\\(((([6-9][0-9]),\\4,\\4)|((1[0-9][0-9]),\\6,\\6)|((20[0-7]),\\8,\\8))\\)';

function doFunction()
{	
	regex = new RegExp(document.getElementById('regexp').value, 'gm');
	console.log(regex);
	const str = document.getElementById('input_data_color_gray').value;
	let m;
	var output = '';
	while ((m = regex.exec(str)) !== null) {
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}		
		output += `${m[0]}\n`;
	}

	document.getElementById('output_data_color_gray').value = output;
}

document.getElementById("clickMe").onclick = doFunction;
document.getElementById("regexp").value = regex;
