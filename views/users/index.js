var UsersIndexView = ActiveView.create(function UsersIndexView() {
	var container;
	with (this.builder) {
		container = div(
			new ElementsUsersFormView(this.get('user')), 
			ElementsUsersListView
		);
	}
	return container;
});