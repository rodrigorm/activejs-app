var ElementsUsersFormView = ActiveView.create(function ElementsUsersFormView() {
	var container;
	with (this.builder) {
		container = form(
			ul(
				li(
					label('Name:'), 
					this.userName = input({type: 'text'}), 
					button('Save')
				)
			)
		)
	}

	if (this.get('name')) {
		this.userName.value = this.get('name');
	}

	$(container).submit(ActiveSupport.bind(function(e) {
		e.preventDefault();

		var params = {
			id: this.get('id'), 
			user: {
				name: this.userName.value
			}
		}
		UsersController.save(params);

		this.set('id', null);
		this.userName.value = '';
		this.userName.focus();
	}, this));

	return container;
});