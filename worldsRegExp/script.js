var regex = "\\b(\\w|[-\'])+\\b";

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
