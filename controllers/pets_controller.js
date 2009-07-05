var PetsController = ActiveController.create({
	index: function index() {
		this.render({
			view: PetsIndexView
		});
	}, 

	remove: function remove() {
		var pet = Pet.find(this.params.id);
		pet.destroy();
	}, 

	edit: function edit() {
		this.set('pet', Pet.find(this.params.id));

		this.render({
			view: PetsIndexView
		});
	}, 

	save: function save() {
		if (this.params.id) {
			Pet.update(this.params.id, this.params.pet);
		} else {
			Pet.create(this.params.pet);
		}
	}
});