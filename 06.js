var url = 'https://pokeapi.co/api/v2/pokemon/';

const capitalize = word => word.replace(/[a-z]/, c => c.toUpperCase() );

$("#search").on('click', () => {
	let pokemon = $("[name='pokemon_name']").val();
	if(pokemon == ""){
		return false;
	}

	$.ajax({
		async : true,
		url : url + pokemon,
		type: 'GET',
		dataType: 'json',
		success : data => {
			let types = "";
			for(type in data.types){
				types += capitalize(data.types[type].type.name) + " <br> ";
			}
			var tr = '<tr>'
			  	   +  '<td>'+ capitalize(data.name)+'</td>'
			       +  '<td>'+data.id+'</td>'
			       +  '<td>'+types+'</td>'
			       +  '<td>'+data.weight+'</td>'
			   	   +  '<td>'+data.height+'</td>'
			  	   +  '<td><img src="'+data.sprites.front_default+'" width="100%" /></td>'
			   	   + '</tr>';			
			$("tbody").html(tr);
		},
		error : response => {
			$("tbody").html('<tr><td colspan="6" class="text-center">No se encontraron datos del pokémon.</td></tr>');
		}
	});

});