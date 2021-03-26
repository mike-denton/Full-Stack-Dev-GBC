
const condition = {
  occupation: /nwo/,
  'name.first': 'Razor',
  age: { $gt: 30, $lt: 55 },
  likes: { $in: ['razor edge', 'powerbomb'] }
};
// With a JSON doc
Person.
  find(condition).
  limit(10).
  sort({ occupation: -1 }).
  select({ name: 1, occupation: 1 }).
  exec(callback);

// Using query builder
Person.
    find({ occupation: /now/ }).
    where('name.first')
      .equals('Razor')
    .where('age')
        .gt(30)
        .lt(55)
    .where('likes')
      .in(['razor edge', 'powerbomb']).
    limit(10).
    sort('-occupation').
    select('name occupation').
    exec(callback);

  