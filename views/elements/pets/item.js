var ElementsPetsItemView = ActiveView.create(function ElementsPetsItemView() {
	var container;
	with (this.builder) {
		container = li(
			this.id = strong(), 
			' - ', 
			this.name = span(), 
			this.editLink = a({href: '#'}, '[edit]'), 
			this.deleteLink = a({href: '#'}, '[x]')
		);
	}
	with (this.binding) {
		update(this.id).from('id');
		update(this.name).from('name');
	}

	$(this.editLink).click(ActiveSupport.bind(function(e) {
		e.preventDefault();
		PetsController.edit({
			id: this.get('id')
		});
	}, this));

	$(this.deleteLink).click(ActiveSupport.bind(function(e) {
		if (confirm('Delete ' + this.get('name') + '?')) {
			e.preventDefault();
			PetsController.remove({
				id: this.get('id')
			});
		}
	}, this));

	return container;
});