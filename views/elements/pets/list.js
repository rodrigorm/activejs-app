var ElementsPetsListView = ActiveView.create(function ElementsPetsListView() {
	var container;
	with (this.builder) {
		container = ul();
	}
	with (this.binding) {
		collect(ElementsPetsItemView).from('pets').into(container);
	}
	return container;
});