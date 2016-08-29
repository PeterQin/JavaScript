var should = require('should');

var creater = require('./creater');

describe('test loading should', function(){
	it('has class', function(){
		var Person = new creater.create();
		var o = new Person();
		o.should.be.ok;
	});

	it('has function', function(){

		var Person = new creater.create({
			say:function(){}
		});
		

		var obj2 = new Person();
		obj2.should.have.property('say');
	});

	it('has reuse', function(){

		var Person = new creater.create({
			say:function(){}
		});
		Person.extend = function(){
			var tc = function(){};
			return tc;
		};
		
		var User = Person.extend({
			say2:function(){}
		});

		var jobs = new User();
		jobs.say = function(){};
		jobs.say2 = function(){};
		jobs.should.have.properties('say', 'say2');
	});
});

