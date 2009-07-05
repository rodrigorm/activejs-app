var PetsIndexView = ActiveView.create(function PetsIndexView() {
	var container;
	with (this.builder) {
		container = div(
			new ElementsPetsFormView(this.get('pet'))
		);
	}
	return container;
});