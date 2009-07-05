var ElementsUsersItemView = ActiveView.create(function ElementsUsersItemView() {
	var container;
	with (this.builder) {
		container = li(
			this.id = strong(), 
			' - ', 
			this.name = span(), 
			this.editLink = a({href: '#'}, '[edit]'), 
			this.deleteLink = a({href: '#'}, '[x]'), 
			new ElementsPetsListView({
				pets: this.scope.getPetList({synchronize: true})
			})
		);
	}
	with (this.binding) {
		update(this.id).from('id');
		update(this.name).from('name');
	}

	$(this.editLink).click(ActiveSupport.bind(function(e) {
		e.preventDefault();
		dispatcher.dispatch('/users/edit', {
			id: this.get('id')
		}, document.getElementById('users'));
	}, this));

	$(this.deleteLink).click(ActiveSupport.bind(function(e) {
		if (confirm('Delete ' + this.get('name') + '?')) {
			e.preventDefault();
			dispatcher.dispatch('/users/remove', {
				id: this.get('id')
			}, document.getElementById('users'));
		}
	}, this));

	return container;
});