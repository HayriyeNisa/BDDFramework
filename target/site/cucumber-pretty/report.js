$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginPage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter \u003cusername\u003e into username field on the login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \u003cpassword\u003e into password field on the login page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on (login button|create account) on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "hayriye@gmail.com",
        "test1234"
      ],
      "line": 16,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "jilly@gmail.com",
        "test12345"
      ],
      "line": 17,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "jelly@gmail.com",
        "test123467"
      ],
      "line": 18,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4803514805,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on Facebook home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginPage"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter hayriye@gmail.com into username field on the login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter test1234 into password field on the login page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on (login button|create account) on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hayriye@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 31
    }
  ],
  "location": "LoginSD.enterDataandPass(String,String)"
});
formatter.result({
  "duration": 763141171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginSD.enterDataandPass(String,String)"
});
formatter.result({
  "duration": 67746,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 170901661,
  "status": "passed"
});
formatter.before({
  "duration": 2792557340,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on Facebook home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginPage"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter jilly@gmail.com into username field on the login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter test12345 into password field on the login page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on (login button|create account) on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "jilly@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 29
    }
  ],
  "location": "LoginSD.enterDataandPass(String,String)"
});
formatter.result({
  "duration": 169340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test12345",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "LoginSD.enterDataandPass(String,String)"
});
formatter.result({
  "duration": 191593,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 262233698,
  "status": "passed"
});
formatter.before({
  "duration": 2865497317,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on Facebook home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginPage"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter jelly@gmail.com into username field on the login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter test123467 into password field on the login page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on (login button|create account) on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "jelly@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 29
    }
  ],
  "location": "LoginSD.enterDataandPass(String,String)"
});
formatter.result({
  "duration": 193406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123467",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 24
    }
  ],
  "location": "LoginSD.enterDataandPass(String,String)"
});
formatter.result({
  "duration": 93819,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 210444158,
  "status": "passed"
});
});