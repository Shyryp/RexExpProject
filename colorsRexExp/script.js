var regex = '\\#([4-9A-C][0-9A-F])\\1{2}|rgb\\(((([6-9][0-9]),\\4,\\4)|((1[0-9][0-9]),\\6,\\6)|((20[0-9]),\\8,\\8))\\)';

function doFunction()
{		
	regex = new RegExp(document.getElementById('regexp').value, 'mi');
	console.log(regex);
	const str = document.getElementById('input_data_color_gray').value;
	var data = str.split("\n");
	let m;
	var output = '';
	for(var color of data)
	{
		if((m = regex.exec(color)) !== null)
		{	
			output += `Входное значение: ${m[0]}\nНайдено совпадение: ${m[0]}\nРезультат теста: Положительный\n\n`;
		}
		else
		{
			output += `Входное значение: ${color}\nРезультат теста: Отрицательный\n\n`;
		}
	}

	document.getElementById('output_data_color_gray').value = output;
}

document.getElementById("clickMe").onclick = doFunction;
document.getElementById("regexp").value = regex;
