describe('UserCRUD App', function() {

  describe('Users list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the user list as a user types into the search box', function() {

      var userList = element.all(by.repeater('user in users'));
      var query = element(by.model('query'));

      expect(userList.count()).toBe(3);

      query.sendKeys('George');
      expect(userList.count()).toBe(1);

      query.clear();
      query.sendKeys('G');
      expect(phoneList.count()).toBe(2);


      var userLastNameColumn = element.all(by.repeater('user in users').column('user.last_name'));
      var query = element(by.model('query'));

      function getNames() {
        return userLastNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('Cl'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Cluny"
      ]);

      query.sendKeys('');

      element(by.model('orderProp')).element(by.css('option[value="age"]')).click();

      expect(getNames()).toEqual([
        "Fallon",
        "Obama",
        "Cluny"
      ]);

    });

    it('should display the current filter value in the title bar', function() {
      query.clear();
      expect(browser.getTitle()).toMatch(/Users create, read, update and delete app\s*$/);

      query.sendKeys('nexus');
      expect(browser.getTitle()).toMatch(/Users create, read, update and delete app nexus$/);
    });

    it('should render user specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('Cluny');
      element.all(by.css('.phones li a')).first().click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/users/0001');
      });
    });

  });
});
