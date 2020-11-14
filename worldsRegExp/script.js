var regex = "\\b(\\w|[-\'])+\\b";

function doFunction()
{	
	regex = new RegExp(document.getElementById('regexp').value, 'gm');
	console.log(regex);
	const str = document.getElementById('input_data_color_gray').value;
	let m;
	var output = '';
	var dict = new Object();
	while ((m = regex.exec(str)) !== null) {
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}	
		if(`${m[0].toLowerCase(}` in dict)	
		{
			dict[`${m[0].toLowerCase(})`] += 1;
		}
		else
		{	
			dict[`${m[0].toLowerCase(}`] = 1;
		}
	}
	
	var sortable = [];
	
	for(var word  in dict)
	{
		sortable.push([word, dict[word]]);
	}
	
	sortable.sort(
		function(a,b){
			return b[1] - a[1];
		}
	)
	
	for(var word of sortable)
	{
		output += `${word[0]}:${word[1]}\n`;
	}

	document.getElementById('output_data_color_gray').value = output;
}

document.getElementById("clickMe").onclick = doFunction;
document.getElementById("regexp").value = regex;
