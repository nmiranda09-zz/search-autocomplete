var search = 0;
var list_of_names = ["john", "mark", "louie", "paul", "anne", "andy"];
function displaySearch() {
	search+=1;
	if(search %2==0){
		$(".search-button-trigger").css("display", "none");
	}
	else{
		$(".search-button-trigger").css("display", "block");
	}
	
}

function textChange(value) {

	value = value.toLowerCase();

	var res = 0;
	var searched = "<ul>";
	var color = "color-white";

	for(var i=0;i<list_of_names.length;i++){
		var result = list_of_names[i].includes(value);
		if(result){
			if(i % 2 == 0 || i == 1){
				color = "color-white";
			}
			else{
				color="color-grey";
			}

			searched+="<li onclick='popupOpen(\""+list_of_names[i]+"\")' class=\""+color+"\">"+list_of_names[i]+"</li>";			
			$('#content').html(list_of_names[i]);
			$(".search-list").css("display", "block");
			res+=1;
		}
	}

	searched+="</ul>";
	$('.list-result').html(searched);
	if(res == 0 || value.length < 1){
		$(".search-list").css("display", "none");
	}
}

function popupOpen(name) {
	$(".search-list").css("display", "none");
	$('#content').html(name);
	$('#search').val(name);	
	$(".popup").css("display", "block");
}
