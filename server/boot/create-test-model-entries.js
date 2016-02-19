module.exports = function (app)
{
  var TestModel = app.models.TestModel;
  var entries = [{
    name: 'Something',
    description: 'lorem lorem lorem',
    someDate: new Date,
    somethingRequired: 'Required String'
  }, {
    name: 'Something',
    description: 'lorem lorem lorem',
    someDate: new Date,
    somethingRequired: 'Required String'
  }, {
    name: 'Something',
    description: 'lorem lorem lorem',
    someDate: new Date,
    somethingRequired: 'Required String'
  }];


  TestModel.create(entries, function (err)
  {
    if (err) {
      throw err;
    }
  });

};
