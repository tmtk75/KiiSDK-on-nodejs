require("jquery-xhr");
var KiiSDK = require("./KiiSDK.js");
var root = KiiSDK.create();
["Kii", "KiiUser", "KiiSite"].map(function(e) { eval(e + " = root." + e) });

var app_id = process.env.APP_ID,
    app_key = process.env.APP_KEY;

Kii.initializeWithSite(app_id, app_key, KiiSite.CN);

var username = "user123456";
var password = "123abc";
var user = KiiUser.userWithUsername(username, password);
user.register({
  success: function(u) {
    console.log("uuid: ", u.getUUID());
  },
  failure: function(u, errstr) {
    console.log("error: " + errstr);
  }
});
