var ElementsUsersListView = ActiveView.create(function ElementsUsersListView() {
	var container;
	with (this.builder) {
		container = ul();
	}
	with (this.binding) {
		collect(ElementsUsersItemView).from('users').into(container);
	}
	return container;
});