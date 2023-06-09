function ru_toggle_element( element_id, toggle_class ) {

	var element = document.getElementById(element_id);
	element.classList.toggle(toggle_class);

	if (element.hasAttribute("disable-scroll")) {
		if ( 'true' === element.getAttribute('disable-scroll') ) {
			var body = document.body;
			body.classList.toggle("r-overflow-hidden");
		}
	}

}