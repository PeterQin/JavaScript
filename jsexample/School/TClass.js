var student = require('./Student');
var teacher = require('./Teacher');

function input(aTeacher, aStudents)
{
	teacher.input(aTeacher);
	aStudents.forEach
	(
		function(item, index)
		{
			student.input(item);
		}
	)
}

exports.input = input;