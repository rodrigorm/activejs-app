var ElementsPetsFormView = ActiveView.create(function ElementsPetsFormView() {
	this.set('users', User.find({
		all: true,
		order: 'name', 
		synchronize: true
	}));

	var container;
	with (this.builder) {
		container = form(
			ul(
				li(
					label('Name:'), 
					this.petName = input({type: 'text'})
				), 
				li(
					label('User:'), 
					this.petUserId = select(), 
					button('Save')
				)
			)
		)
	}
	with (this.binding) {
		collect(function petUserIdOption(user) {
			with (ActiveView.Builder) {
				return option(
					{value: user.id}, 
					user.name
				);
			}
		}).from('users').into(this.petUserId)
	}

	if (this.get('name')) {
		this.petName.value = this.get('name');
	}

	$(container).submit(ActiveSupport.bind(function(e) {
		e.preventDefault();

		var params = {
			id: this.get('id'), 
			pet: {
				name: this.petName.value, 
				user_id: this.petUserId.value
			}
		}
		dispatcher.dispatch('/pets/save', params, document.getElementById('pets'));

		this.set('id', null);
		this.petName.value = '';
		this.petName.focus();
	}, this));

	return container;
});