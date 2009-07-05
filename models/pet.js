var Pet = ActiveRecord.create('pets', {
	name: '', 
	user_id: ''
});

Pet.belongsTo('User');

Pet.validatesPresenceOf('name');
Pet.validatesPresenceOf('user_id');