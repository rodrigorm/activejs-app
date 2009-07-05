var UsersController = ActiveController.create({
	index: function index() {
		this.set('users', User.find({
			all: true, 
			order: 'name', 
			synchronize: true
		}));

		this.render({
			view: UsersIndexView
		});
	}, 

	remove: function remove() {
		var user = User.find(this.params.id);
		user.destroy();
	}, 

	edit: function edit() {
		this.set('user', User.find(this.params.id));

		this.set('users', User.find({
			all: true, 
			order: 'name', 
			synchronize: true
		}));

		this.render({
			view: UsersIndexView
		});
	}, 

	save: function save() {
		if (this.params.id) {
			User.update(this.params.id, this.params.user);
		} else {
			User.create(this.params.user);
		}
	}
});