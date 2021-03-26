

// find each person with a first name matching 'Razor'
var query = Person.findOne({ 'name.first': 'Razor' });

// selecting the `name` and `occupation` fields
query.select('name occupation');


// execute the query at a later time
query.exec(function (err, person) {
  if (err) return handleError(err);
  // Prints "Razor Ramon is a member of the NWO."
  console.log('%s %s is a %s.', person.name.first, person.name.last,
    person.occupation);
});


