this["JST"] = this["JST"] || {};

this["JST"]["footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "";


  return buffer;});

this["JST"]["header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, self=this;

function program1(depth0,data) {
  
  
  return "\n    <li><a class=\"header-link\" href=\"/logout\">LOGOUT</a></li>\n  ";}

function program3(depth0,data) {
  
  
  return "\n    <li><a class=\"login header-link\" href=\"/login\">LOGIN</a></li>\n    <li><a class=\"register header-link\" href=\"/register\">REGISTER</a></li>\n  ";}

  buffer += "<ul class=\"left\">\n  <li class=\"home-container\"><a class=\"home\" href=\"/\">Ghost<span>.phish</span></a></li>\n</ul>\n\n<ul class=\"right\">\n  ";
  stack1 = depth0.loggedIn;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});

this["JST"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, self=this;

function program1(depth0,data) {
  
  
  return "\n  <p>\n    It looks like you're <b>logged in</b>.\n  </p>\n";}

  buffer += "<p>\n  Hello. Welcome to backbone + express + coffee + mongo + handlebars + stylus boostrap.\n</p>\n<p>\n  Stay awhile and listen. Or don't. I don't care.\n</p>\n\n";
  stack1 = depth0.loggedIn;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});

this["JST"]["login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form action=\"/login\" method=\"post\">\n  <input type=hidden value=";
  foundHelper = helpers.csrf;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.csrf; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " name=_csrf />\n  <div>\n    <label for=email>Email:</label>\n    <input class=email type=\"text\" placeholder=\"Email\" name=\"email\"/>\n  </div>\n  <div>\n    <label for=password>Password:</label>\n    <input class=password type=\"password\" placeholder=\"Password\" name=\"password\"/>\n  </div>\n  <div class=forbutton>\n    <input type=\"submit\" value=\"Login\"/>\n  </div>\n</form>\n";
  return buffer;});

this["JST"]["notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "<img src=";
  foundHelper = helpers.img;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.img; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " alt='' />";
  return buffer;}

  buffer += "<div>\n  <a>×</a>\n  ";
  stack1 = depth0.img;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <h3>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\n  <p>";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n</div>";
  return buffer;});

this["JST"]["register"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form action=\"/register\" method=\"post\">\n  <input type=hidden value=\"";
  foundHelper = helpers.csrf;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.csrf; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" name=\"_csrf\" />\n  <div>\n    <label for=email>Email:</label>\n    <input class=email type=\"text\" placeholder=\"Email\" name=\"email\"/>\n    <div class=invalid>✘</div>\n  </div>\n  <div>\n    <label for=password>Password:</label>\n    <input class=password type=\"password\" placeholder=\"Password\" name=\"password\"/>\n    <div class=invalid>✘</div>\n  </div>\n  <div class=forbutton>\n    <sup>Password must be at least 6 characters</sup>\n    <br>\n    <input type=\"submit\" value=\"Register\"/>\n  </div>\n</form>\n";
  return buffer;});

window.App = {
  "Models": {},
  "Collections": {},
  "Views": {},
  "Controllers": {},
  "Router": {},
  "utils": {}
};

$(function() {
  var Tweezer;
  $.getJSON('/api/v1/me/csrf', function(data) {
    return App.csrf = data.csrf;
  });
  Tweezer = new Application().initialize();
  return $(document).ajaxSend(function(e, xhr, options) {
    if (App.csrf) {
      return xhr.setRequestHeader("X-CSRF-Token", App.csrf);
    } else {
      return $.getJSON('/api/v1/me/csrf', function(data) {
        App.csrf = data.csrf;
        return xhr.setRequestHeader("X-CSRF-Token", data.csrf);
      });
    }
  });
});

var Application;

Application = (function() {

  function Application() {}

  Application.prototype.title = 'Tweezer';

  Application.prototype.initialize = function() {
    App.user = new App.Models.User(user);
    if (window.csrf) {
      App.csrf = csrf;
    }
    this.initViews();
    App.router = new App.Router();
    Backbone.history.start({
      pushState: true
    });
    return this.pushAnchors();
  };

  Application.prototype.initViews = function() {
    App.notify = new App.Views.Notifications();
    this.header = new App.Views.Header();
    return this.footer = new App.Views.Footer();
  };

  Application.prototype.pushAnchors = function() {
    return $(document).on("click", "a[href^='/']", function(event) {
      var href, passThrough, url;
      href = $(event.currentTarget).attr('href');
      passThrough = /logout|auth/.test(href);
      if (!passThrough && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        event.preventDefault();
        url = href.replace(/^\//, '').replace('\#\!\/', '');
        App.router.navigate(url, {
          trigger: true
        });
        return false;
      }
    });
  };

  return Application;

})();

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Router = (function(_super) {

  __extends(Router, _super);

  function Router() {
    this.changeView = __bind(this.changeView, this);
    return Router.__super__.constructor.apply(this, arguments);
  }

  Router.prototype.routes = {
    '': 'index',
    'login': 'login',
    'register': 'register',
    ':notFound': 'notFound'
  };

  Router.prototype.initialize = function() {
    this.$container = $('#page-container');
    return this.bind('all', this._trackPageview);
  };

  Router.prototype.index = function() {
    return this.changeView(new App.Views.HomePage());
  };

  Router.prototype.login = function() {
    return this.changeView(new App.Views.LoginPage());
  };

  Router.prototype.register = function() {
    return this.changeView(new App.Views.RegisterPage());
  };

  Router.prototype.clearActive = function($current) {
    $('header ul.right a').removeClass('active');
    if ($current) {
      return $current.addClass('active');
    }
  };

  Router.prototype.changeView = function(view, render) {
    if (render == null) {
      render = true;
    }
    this.$container.hide();
    if (this.currentView) {
      this.currentView.close();
    }
    if (render) {
      view.render();
    }
    this.currentView = view;
    return this.$container.html(view.el).fadeIn('fast');
  };

  Router.prototype.notFound = function() {
    return this.navigate('/', {
      trigger: true
    });
  };

  Router.prototype._trackPageview = function() {
    var url;
    url = Backbone.history.getFragment();
    return _gaq.push(['_trackPageview', "/" + url]);
  };

  return Router;

})(Backbone.Router);

var cookie, createCookie, deleteCookie, readCookie;

cookie = function(name, value, days) {
  if (value) {
    return createCookie(name, value, days);
  } else {
    return readCookie(name);
  }
};

createCookie = function(name, value, days) {
  var date, expires;
  if (days == null) {
    days = 7;
  }
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  return document.cookie = name + "=" + value + expires + "; path=/";
};

readCookie = function(name) {
  var c, ca, nameEQ, result, _i, _len;
  nameEQ = name + "=";
  ca = document.cookie.split(';');
  for (_i = 0, _len = ca.length; _i < _len; _i++) {
    c = ca[_i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      result = c.substring(nameEQ.length, c.length);
    }
  }
  return result;
};

deleteCookie = function(name) {
  return createCookie(name, "", -1);
};

App.utils.cookie = {
  cookie: cookie,
  createCookie: createCookie,
  readCookie: readCookie,
  deleteCookie: deleteCookie
};


$.fn.getCursorPosition = function() {
  var input, sel, selLen;
  input = this.get(0);
  if (!input) {
    return;
  }
  if ("selectionStart" in input) {
    return input.selectionStart;
  } else if (document.selection) {
    input.focus();
    sel = document.selection.createRange();
    selLen = document.selection.createRange().text.length;
    sel.moveStart("character", -input.value.length);
    return sel.text.length - selLen;
  }
};

$.fn.setCursorPosition = function(pos) {
  var range;
  if ($(this).get(0).setSelectionRange) {
    return $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    return range.select();
  }
};

$.fn.setCursorRange = function(start, end) {
  return this.each(function() {
    var range;
    if (this.setSelectionRange) {
      this.focus();
      return this.setSelectionRange(start, end);
    } else if (this.createTextRange) {
      range = this.createTextRange();
      range.collapse(true);
      range.moveEnd("character", end);
      range.moveStart("character", start);
      return range.select();
    }
  });
};


App.utils.getURLParameters = function(url) {
  var obj;
  obj = {};
  _.each(url.split('?')[1].split('&'), function(param) {
    var split;
    split = param.split('=');
    return obj[split[0]] = split[1];
  });
  return obj;
};

var EMAIL_REGEX, validateEmail;

EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

validateEmail = function(email) {
  return EMAIL_REGEX.test(email);
};

App.utils.validate = {
  validateEmail: validateEmail
};

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Model = (function(_super) {

  __extends(Model, _super);

  function Model() {
    return Model.__super__.constructor.apply(this, arguments);
  }

  Model.prototype.idAttribute = '_id';

  return Model;

})(Backbone.Model);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.User = (function(_super) {

  __extends(User, _super);

  function User() {
    return User.__super__.constructor.apply(this, arguments);
  }

  User.prototype.url = function() {
    return '/api/v1/me';
  };

  User.prototype.loggedIn = function() {
    return !!this.get('email');
  };

  User.prototype.reset = function() {
    if (this.loggedIn()) {
      return App.router.navigate('/', {
        trigger: true
      });
    }
  };

  return User;

})(App.Models.Model);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Collections.Collection = (function(_super) {

  __extends(Collection, _super);

  function Collection() {
    return Collection.__super__.constructor.apply(this, arguments);
  }

  return Collection;

})(Backbone.Collection);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.View = (function(_super) {

  __extends(View, _super);

  function View() {
    return View.__super__.constructor.apply(this, arguments);
  }

  View.prototype.initialize = function() {
    if (this.autoRender) {
      return this.render();
    }
  };

  View.prototype.render = function() {
    if (this.$el && this.template) {
      return this.$el.html(this.template());
    }
  };

  View.prototype.close = function() {
    this.remove();
    return this.unbind();
  };

  return View;

})(Backbone.View);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Footer = (function(_super) {

  __extends(Footer, _super);

  function Footer() {
    return Footer.__super__.constructor.apply(this, arguments);
  }

  Footer.prototype.autoRender = true;

  Footer.prototype.el = 'footer';

  Footer.prototype.template = JST['footer'];

  return Footer;

})(App.Views.View);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Header = (function(_super) {

  __extends(Header, _super);

  function Header() {
    return Header.__super__.constructor.apply(this, arguments);
  }

  Header.prototype.autoRender = true;

  Header.prototype.el = 'header';

  Header.prototype.template = JST['header'];

  Header.prototype.initialize = function() {
    return Header.__super__.initialize.apply(this, arguments);
  };

  Header.prototype.render = function() {
    return this.$el.html(this.template({
      loggedIn: App.user.loggedIn()
    }));
  };

  return Header;

})(App.Views.View);

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.HomePage = (function(_super) {

  __extends(HomePage, _super);

  function HomePage() {
    this.render = __bind(this.render, this);
    return HomePage.__super__.constructor.apply(this, arguments);
  }

  HomePage.prototype.className = 'home-page';

  HomePage.prototype.template = JST['home'];

  HomePage.prototype.render = function() {
    this.checkErr();
    App.router.clearActive();
    this.$el.html(this.template({
      loggedIn: App.user.loggedIn()
    }));
    return this;
  };

  HomePage.prototype.checkErr = function() {
    var params;
    if (window.location.search) {
      params = App.utils.getURLParameters(window.location.search);
      switch (params.err) {
        case "maxProviders":
          return App.notify.send('Error', "This is how you send an error notification.", false, 4000);
      }
    }
  };

  return HomePage;

})(App.Views.View);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.LoginPage = (function(_super) {

  __extends(LoginPage, _super);

  function LoginPage() {
    return LoginPage.__super__.constructor.apply(this, arguments);
  }

  LoginPage.prototype.className = 'login-page';

  LoginPage.prototype.template = JST['login'];

  LoginPage.prototype.render = function() {
    this.checkErr();
    this.$el.html(this.template({
      csrf: App.csrf
    }));
    return App.router.clearActive($('header .login'));
  };

  LoginPage.prototype.checkErr = function() {
    var params;
    if (window.location.search) {
      params = App.utils.getURLParameters(window.location.search);
      switch (params.err) {
        case "0":
          return App.notify.send('Error', "No User Found", false, 4000);
        case "1":
          return App.notify.send('Error', "Password Incorrect", false, 4000);
        case "2":
          return App.notify.send('Error', "Logged in too many times, try again later.", false, 4000);
      }
    }
  };

  return LoginPage;

})(App.Views.View);

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Notification = (function(_super) {

  __extends(Notification, _super);

  function Notification() {
    this.close = __bind(this.close, this);
    return Notification.__super__.constructor.apply(this, arguments);
  }

  Notification.prototype.autoRender = true;

  Notification.prototype.tagName = "li";

  Notification.prototype.events = {
    "click a": "close"
  };

  Notification.prototype.template = JST['notification'];

  Notification.prototype.initialize = function(_arg) {
    this.message = _arg.message, this.title = _arg.title, this.type = _arg.type, this.sticky = _arg.sticky, this.time = _arg.time, this.img = _arg.img;
    Notification.__super__.initialize.apply(this, arguments);
    return this;
  };

  Notification.prototype.render = function() {
    this.$el.hide().html(this.template({
      message: this.message,
      title: this.title,
      img: this.img
    })).addClass(this.type).show().attr("data-view", "App.Views.Notification");
    if (!this.sticky) {
      setTimeout(this.close, this.time);
    }
    return this;
  };

  Notification.prototype.close = function() {
    return $(this.el).slideUp("slow");
  };

  return Notification;

})(App.Views.View);

App.Views.Notifications = (function(_super) {

  __extends(Notifications, _super);

  function Notifications() {
    this.send = __bind(this.send, this);
    return Notifications.__super__.constructor.apply(this, arguments);
  }

  Notifications.prototype.el = '#notifications';

  Notifications.prototype.send = function(title, message, sticky, time, img) {
    var notificationEl, type;
    if (sticky == null) {
      sticky = false;
    }
    if (time == null) {
      time = 3000;
    }
    type = "notify";
    notificationEl = new App.Views.Notification({
      title: title,
      message: message,
      type: type,
      sticky: sticky,
      time: time,
      img: img
    }).el;
    this.$el.append(notificationEl);
    return notificationEl;
  };

  Notifications.prototype.render = function() {
    this.$el.attr("data-view", "App.Views.Notifications");
    return this;
  };

  return Notifications;

})(App.Views.View);

var validateEmail,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

validateEmail = App.utils.validate.validateEmail;

App.Views.RegisterPage = (function(_super) {

  __extends(RegisterPage, _super);

  function RegisterPage() {
    return RegisterPage.__super__.constructor.apply(this, arguments);
  }

  RegisterPage.prototype.className = 'register-page';

  RegisterPage.prototype.template = JST['register'];

  RegisterPage.prototype.events = {
    'keyup input.email': 'email',
    'keyup input.password': 'password'
  };

  RegisterPage.prototype.render = function() {
    var params;
    App.router.clearActive($('header .register'));
    if (window.location.search) {
      params = App.utils.getURLParameters(window.location.search);
      switch (params.err) {
        case 'emailexists':
          App.notify.send('Error', "This email is already in use. But you knew that already, didn't you?");
          break;
        case 'pleaseregister':
          App.notify.send('Please Register', "Or don't. I don't care.");
      }
    }
    this.$el.html(this.template({
      csrf: App.csrf
    }));
    this.$email = this.$el.find('.email');
    this.$password = this.$el.find('.password');
    return this.submitButton = this.$el.find('form input[type="submit"]');
  };

  RegisterPage.prototype.email = function(e) {
    if (!validateEmail(this.$email.val())) {
      this.button(true);
      return this.$email.siblings('.invalid').show();
    }
    this.button();
    return this.$email.siblings('.invalid').hide();
  };

  RegisterPage.prototype.password = function(e) {
    if (this.$password.val().length < 6) {
      this.button(true);
      return this.$password.siblings('.invalid').show();
    }
    this.button();
    return this.$password.siblings('.invalid').hide();
  };

  RegisterPage.prototype.button = function(hide) {
    var disabled;
    disabled = 'disabled';
    if (!hide) {
      disabled = false;
    }
    return this.submitButton.attr('disabled', disabled);
  };

  return RegisterPage;

})(App.Views.View);
