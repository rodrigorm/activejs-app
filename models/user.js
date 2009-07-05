var User = ActiveRecord.create('users', {
	name: ''
});

User.hasMany('Pets');

User.validatesPresenceOf('name');