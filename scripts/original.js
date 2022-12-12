(function (undefined) {
  if (
    !(
      "defineProperty" in Object &&
      (function () {
        try {
          var a = {};
          Object.defineProperty(a, "test", { value: 42 });
          return true;
        } catch (e) {
          return false;
        }
      })()
    )
  ) {
    !(function (e) {
      var t = Object.prototype.hasOwnProperty("__defineGetter__"),
        r = "Getters & setters cannot be defined on this javascript engine",
        n =
          "A property cannot both have accessors and be writable or have a value";
      Object.defineProperty = function (o, i, f) {
        var p = String(i),
          c = "value" in f || "writable" in f,
          a = "get" in f && typeof f.get,
          y = "set" in f && typeof f.set;
        if (null === o || !(o instanceof Object || "object" == typeof o))
          throw new TypeError(
            "Object must be an object (Object.defineProperty polyfill)"
          );
        if (!(f instanceof Object))
          throw new TypeError(
            "Descriptor must be an object (Object.defineProperty polyfill)"
          );
        if (
          e &&
          (o === window ||
            o === document ||
            o === Element.prototype ||
            o instanceof Element)
        )
          return e(o, p, f);
        if (a) {
          if ("function" !== a)
            throw new TypeError(
              "Getter expected a function (Object.defineProperty polyfill)"
            );
          if (!t) throw new TypeError(r);
          if (c) throw new TypeError(n);
          o.__defineGetter__(p, f.get);
        } else o[p] = f.value;
        if (y) {
          if ("function" !== y)
            throw new TypeError(
              "Setter expected a function (Object.defineProperty polyfill)"
            );
          if (!t) throw new TypeError(r);
          if (c) throw new TypeError(n);
          o.__defineSetter__(p, f.set);
        }
        return "value" in f && (o[p] = f.value), o;
      };
    })(Object.defineProperty);
  }
  if (!("isArray" in Array)) {
    !(function (r) {
      Object.defineProperty(Array, "isArray", {
        configurable: !0,
        value: function (t) {
          return "[object Array]" === r.call(t);
        },
        writable: !0,
      });
    })(Object.prototype.toString);
  }
  if (!("every" in Array.prototype)) {
    Array.prototype.every = function (t) {
      if (void 0 === this || null === this)
        throw new TypeError(this + "is not an object");
      if (!(t instanceof Function))
        throw new TypeError(t + " is not a function");
      for (
        var n = Object(this),
          r = arguments[1],
          i = n instanceof String ? n.split("") : n,
          e = Number(i.length) || 0,
          o = -1;
        ++o < e;

      )
        if (o in i && !t.call(r, i[o], o, n)) return !1;
      return !0;
    };
  }
  if (!("filter" in Array.prototype)) {
    Array.prototype.filter = function (t) {
      if (void 0 === this || null === this)
        throw new TypeError(this + "is not an object");
      if (!(t instanceof Function))
        throw new TypeError(t + " is not a function");
      for (
        var n,
          i = Object(this),
          r = arguments[1],
          o = i instanceof String ? i.split("") : i,
          e = Math.max(Math.min(o.length, 9007199254740991), 0) || 0,
          a = -1,
          s = [];
        ++a < e;

      )
        (n = o[a]), a in o && t.call(r, n, a, i) && s.push(n);
      return s;
    };
  }
  if (!("forEach" in Array.prototype)) {
    Array.prototype.forEach = function (t) {
      if (void 0 === this || null === this)
        throw new TypeError(this + "is not an object");
      if (!(t instanceof Function))
        throw new TypeError(t + " is not a function");
      for (
        var n = Object(this),
          i = arguments[1],
          o = n instanceof String ? n.split("") : n,
          r = Math.max(Math.min(o.length, 9007199254740991), 0) || 0,
          a = -1;
        ++a < r;

      )
        a in o && t.call(i, o[a], a, n);
    };
  }
  if (!("indexOf" in Array.prototype)) {
    Array.prototype.indexOf = function (t) {
      if (void 0 === this || null === this)
        throw new TypeError(this + "is not an object");
      var i = this instanceof String ? this.split("") : this,
        n = Math.max(Math.min(i.length, 9007199254740991), 0) || 0,
        r = Number(arguments[1]) || 0;
      for (r = (0 > r ? Math.max(n + r, 0) : r) - 1; ++r < n; )
        if (r in i && i[r] === t) return r;
      return -1;
    };
  }
  if (!("lastIndexOf" in Array.prototype)) {
    Array.prototype.lastIndexOf = function (t) {
      if (void 0 === this || null === this)
        throw new TypeError(this + "is not an object");
      var n = this instanceof String ? this.split("") : this,
        i = Math.max(Math.min(n.length, 9007199254740991), 0) || 0,
        r = Number(arguments[1]) || 0;
      r = 1 in arguments ? (0 > r ? Math.max(i + r, 0) : r) + 1 : i;
      for (; --r >= 0; ) if (r in n && n[r] === t) return r;
      return -1;
    };
  }
  if (!("map" in Array.prototype)) {
    Array.prototype.map = function (t) {
      if (void 0 === this || null === this)
        throw new TypeError(this + "is not an object");
      if (!(t instanceof Function))
        throw new TypeError(t + " is not a function");
      for (
        var n = Object(this),
          i = arguments[1],
          r = n instanceof String ? n.split("") : n,
          o = Math.max(Math.min(r.length, 9007199254740991), 0) || 0,
          a = -1,
          e = [];
        ++a < o;

      )
        a in r && (e[a] = t.call(i, r[a], a, n));
      return e;
    };
  }
  if (!("reduce" in Array.prototype)) {
    Array.prototype.reduce = function (t) {
      if (void 0 === this || null === this)
        throw new TypeError(this + "is not an object");
      if (!(t instanceof Function))
        throw new TypeError(t + " is not a function");
      var n,
        r = Object(this),
        i = (arguments[1], r instanceof String ? r.split("") : r),
        e = Math.max(Math.min(i.length, 9007199254740991), 0) || 0,
        o = -1;
      if (1 in arguments) n = arguments[1];
      else {
        for (; ++o < e && !(o in i); );
        if (o >= e)
          throw new TypeError("Reduce of empty array with no initial value");
        n = i[o];
      }
      for (; ++o < e; ) o in i && (n = t(n, i[o], o, r));
      return n;
    };
  }
  if (!("reduceRight" in Array.prototype)) {
    Array.prototype.reduceRight = function (t) {
      if (void 0 === this || null === this)
        throw new TypeError(this + "is not an object");
      if (!(t instanceof Function))
        throw new TypeError(t + " is not a function");
      var n,
        i = Object(this),
        r = (arguments[1], i instanceof String ? i.split("") : i),
        e = -1,
        o = Math.max(Math.min(r.length, 9007199254740991), 0) || 0;
      if (1 in arguments) n = arguments[1];
      else {
        for (; --o > e && !(o in r); );
        if (e >= o)
          throw new TypeError("Reduce of empty array with no initial value");
        n = r[o];
      }
      for (; --o > e; ) o in r && (n = t(n, r[o], o, i));
      return n;
    };
  }
  if (!("some" in Array.prototype)) {
    Array.prototype.some = function (t) {
      if (void 0 === this || null === this)
        throw new TypeError(this + "is not an object");
      if (!(t instanceof Function))
        throw new TypeError(t + " is not a function");
      for (
        var n = Object(this),
          i = arguments[1],
          r = n instanceof String ? n.split("") : n,
          o = Math.max(Math.min(r.length, 9007199254740991), 0) || 0,
          e = -1;
        ++e < o;

      )
        if (e in r && t.call(i, r[e], e, n)) return !0;
      return !1;
    };
  }
  if (!("Window" in this)) {
    !(function (n) {
      n.constructor
        ? (n.Window = n.constructor)
        : ((n.Window = n.constructor =
            new Function("return function Window() {}")()).prototype = this);
    })(this);
  }
  if (!("Document" in this)) {
    this.HTMLDocument
      ? (this.Document = this.HTMLDocument)
      : ((this.Document =
          this.HTMLDocument =
          document.constructor =
            new Function("return function Document() {}")()),
        (this.Document.prototype = document));
  }
  if (!("Element" in this && "HTMLElement" in this)) {
    !(function () {
      function e(e) {
        return (
          a-- || clearTimeout(t),
          document.body &&
          !document.body.prototype &&
          /(complete|interactive)/.test(document.readyState)
            ? (m(document, !0),
              t && document.body.prototype && clearTimeout(t),
              !!document.body.prototype)
            : !1
        );
      }
      if (window.Element && !window.HTMLElement)
        return void (window.HTMLElement = window.Element);
      window.Element = window.HTMLElement = new Function(
        "return function Element() {}"
      )();
      var t,
        n = document.appendChild(document.createElement("body")),
        o = n.appendChild(document.createElement("iframe")),
        r = o.contentWindow.document,
        c = (Element.prototype = r.appendChild(r.createElement("*"))),
        d = {},
        m = function (e, t) {
          var n,
            o,
            r,
            c = e.childNodes || [],
            u = -1;
          if (1 === e.nodeType && e.constructor !== Element) {
            e.constructor = Element;
            for (n in d) (o = d[n]), (e[n] = o);
          }
          for (; (r = t && c[++u]); ) m(r, t);
          return e;
        },
        u = document.getElementsByTagName("*"),
        i = document.createElement,
        a = 100;
      c.attachEvent("onpropertychange", function (e) {
        for (
          var t,
            n = e.propertyName,
            o = !d.hasOwnProperty(n),
            r = c[n],
            m = d[n],
            i = -1;
          (t = u[++i]);

        )
          1 === t.nodeType && (o || t[n] === m) && (t[n] = r);
        d[n] = r;
      }),
        (c.constructor = Element),
        c.hasAttribute ||
          (c.hasAttribute = function (e) {
            return null !== this.getAttribute(e);
          }),
        e(!0) || ((document.onreadystatechange = e), (t = setInterval(e, 25))),
        (document.createElement = function (e) {
          var t = i(String(e).toLowerCase());
          return m(t);
        }),
        document.removeChild(n);
    })();
  }
  if (
    !(function (global) {
      if (!("Event" in global)) return false;
      if (typeof global.Event === "function") return true;
      try {
        new Event("click");
        return true;
      } catch (e) {
        return false;
      }
    })(this)
  ) {
    !(function () {
      function e(e, t) {
        for (var n = -1, o = e.length; ++n < o; )
          if (n in e && e[n] === t) return n;
        return -1;
      }
      var t = {
        click: 1,
        dblclick: 1,
        keyup: 1,
        keypress: 1,
        keydown: 1,
        mousedown: 1,
        mouseup: 1,
        mousemove: 1,
        mouseover: 1,
        mouseenter: 1,
        mouseleave: 1,
        mouseout: 1,
        storage: 1,
        storagecommit: 1,
        textinput: 1,
      };
      (window.Event = Window.prototype.Event =
        function (e, t) {
          if (!e) throw new Error("Not enough arguments");
          if ("createEvent" in document) {
            var n = document.createEvent("Event"),
              o = t && void 0 !== t.bubbles ? t.bubbles : !1,
              r = t && void 0 !== t.cancelable ? t.cancelable : !1;
            return n.initEvent(e, o, r), n;
          }
          var n = document.createEventObject();
          return (
            (n.type = e),
            (n.bubbles = t && void 0 !== t.bubbles ? t.bubbles : !1),
            (n.cancelable = t && void 0 !== t.cancelable ? t.cancelable : !1),
            n
          );
        }),
        "createEvent" in document ||
          ((window.addEventListener =
            Window.prototype.addEventListener =
            Document.prototype.addEventListener =
            Element.prototype.addEventListener =
              function () {
                var n = this,
                  o = arguments[0],
                  r = arguments[1];
                if (n === window && o in t)
                  throw new Error(
                    "In IE8 the event: " +
                      o +
                      " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information."
                  );
                n._events || (n._events = {}),
                  n._events[o] ||
                    ((n._events[o] = function (t) {
                      var o,
                        r = n._events[t.type].list,
                        i = r.slice(),
                        a = -1,
                        c = i.length;
                      for (
                        t.preventDefault = function () {
                          t.cancelable !== !1 && (t.returnValue = !1);
                        },
                          t.stopPropagation = function () {
                            t.cancelBubble = !0;
                          },
                          t.stopImmediatePropagation = function () {
                            (t.cancelBubble = !0), (t.cancelImmediate = !0);
                          },
                          t.currentTarget = n,
                          t.relatedTarget = t.fromElement || null,
                          t.target = t.target || t.srcElement || n,
                          t.timeStamp = new Date().getTime(),
                          t.clientX &&
                            ((t.pageX =
                              t.clientX + document.documentElement.scrollLeft),
                            (t.pageY =
                              t.clientY + document.documentElement.scrollTop));
                        ++a < c && !t.cancelImmediate;

                      )
                        a in i && ((o = i[a]), -1 !== e(r, o) && o.call(n, t));
                    }),
                    (n._events[o].list = []),
                    n.attachEvent && n.attachEvent("on" + o, n._events[o])),
                  n._events[o].list.push(r);
              }),
          (window.removeEventListener =
            Window.prototype.removeEventListener =
            Document.prototype.removeEventListener =
            Element.prototype.removeEventListener =
              function () {
                var t,
                  n = this,
                  o = arguments[0],
                  r = arguments[1];
                n._events &&
                  n._events[o] &&
                  n._events[o].list &&
                  ((t = e(n._events[o].list, r)),
                  -1 !== t &&
                    (n._events[o].list.splice(t, 1),
                    n._events[o].list.length ||
                      (n.detachEvent && n.detachEvent("on" + o, n._events[o]),
                      delete n._events[o])));
              }),
          (window.dispatchEvent =
            Window.prototype.dispatchEvent =
            Document.prototype.dispatchEvent =
            Element.prototype.dispatchEvent =
              function (e) {
                if (!arguments.length) throw new Error("Not enough arguments");
                if (!e || "string" != typeof e.type)
                  throw new Error("DOM Events Exception 0");
                var t = this,
                  n = e.type;
                try {
                  if (!e.bubbles) {
                    e.cancelBubble = !0;
                    var o = function (e) {
                      (e.cancelBubble = !0),
                        (t || window).detachEvent("on" + n, o);
                    };
                    this.attachEvent("on" + n, o);
                  }
                  this.fireEvent("on" + n, e);
                } catch (r) {
                  e.target = t;
                  do
                    (e.currentTarget = t),
                      "_events" in t &&
                        "function" == typeof t._events[n] &&
                        t._events[n].call(t, e),
                      "function" == typeof t["on" + n] &&
                        t["on" + n].call(t, e),
                      (t = 9 === t.nodeType ? t.parentWindow : t.parentNode);
                  while (t && !e.cancelBubble);
                }
                return !0;
              }));
    })();
  }
  if (
    !(
      "CustomEvent" in this &&
      (typeof this.CustomEvent === "function" ||
        this.CustomEvent.toString().indexOf("CustomEventConstructor") > -1)
    )
  ) {
    (this.CustomEvent = function (e, t) {
      if (!e)
        throw Error(
          'TypeError: Failed to construct "CustomEvent": An event name must be provided.'
        );
      var n;
      if (
        ((t = t || { bubbles: !1, cancelable: !1, detail: null }),
        "createEvent" in document)
      )
        try {
          (n = document.createEvent("CustomEvent")),
            n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
        } catch (l) {
          (n = document.createEvent("Event")),
            n.initEvent(e, t.bubbles, t.cancelable),
            (n.detail = t.detail);
        }
      else (n = new Event(e, t)), (n.detail = (t && t.detail) || null);
      return n;
    }),
      (CustomEvent.prototype = Event.prototype);
  }
  if (
    !(
      "DOMTokenList" in this &&
      (function (x) {
        return "classList" in x
          ? !x.classList.toggle("x", false) && !x.className
          : true;
      })(document.createElement("x"))
    )
  ) {
    !(function (t, n, r) {
      function i(t) {
        if (/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(t)) return String(t);
        throw new Error("InvalidCharacterError: DOM Exception 5");
      }
      function o(t) {
        for (var n, r = -1, i = {}; (n = t[++r]); ) i[n] = !0;
        return i;
      }
      function e(t, n) {
        var i,
          o = [];
        for (i in n) n[i] && o.push(i);
        r.apply(t, [0, t.length].concat(o));
      }
      var a = "DOMTokenList" in t && t.DOMTokenList;
      if (a) {
        var s = a.prototype.toggle;
        a.prototype.toggle = function (t) {
          if (1 in arguments) {
            var n = this.contains(t),
              r = !!arguments[1];
            if ((n && r) || (!n && !r)) return r;
          }
          return s.call(this, t);
        };
      } else
        (t.DOMTokenList = function () {}),
          (t.DOMTokenList.prototype = {
            constructor: DOMTokenList,
            item: function (t) {
              return this[parseFloat(t)] || null;
            },
            length: Array.prototype.length,
            toString: function () {
              return n.call(this, " ");
            },
            add: function () {
              for (var t, n = o(this), r = 0; r in arguments; ++r)
                (t = i(arguments[r])), (n[t] = !0);
              e(this, n);
            },
            contains: function (t) {
              return t in o(this);
            },
            remove: function () {
              for (var t, n = o(this), r = 0; r in arguments; ++r)
                (t = i(arguments[r])), (n[t] = !1);
              e(this, n);
            },
            toggle: function (t) {
              var n = o(this),
                r = 1 in arguments ? !arguments[1] : i(t) in n;
              return (n[t] = !r), e(this, n), !r;
            },
          });
    })(this, Array.prototype.join, Array.prototype.splice);
  }
  if (
    !("Date" in this && "now" in this.Date && "getTime" in this.Date.prototype)
  ) {
    Date.now = function () {
      return new Date().getTime();
    };
  }
  if (!("Date" in this && "toISOString" in Date.prototype)) {
    Date.prototype.toISOString = function () {
      function t(t, e) {
        var n = "0000";
        return (t = "" + t), n.substr(0, e - t.length) + t;
      }
      var e = this,
        n = e.getUTCFullYear(),
        r = t(e.getUTCMonth() + 1, 2),
        g = t(e.getUTCDate(), 2),
        o = t(e.getUTCHours(), 2),
        s = t(e.getUTCMinutes(), 2),
        u = t(e.getUTCSeconds(), 2),
        T = t(e.getUTCMilliseconds(), 3);
      return (
        n + "-" + r + "-" + g + "T" + o + ":" + s + ":" + u + "." + T + "Z"
      );
    };
  }
  if (!("document" in this && "classList" in document.documentElement)) {
    !(function (t, e) {
      Object.defineProperty(Element.prototype, "classList", {
        get: function () {
          function n() {
            var t =
              "object" == typeof r.className
                ? r.className.baseVal
                : r.className;
            e.apply(
              o,
              [0, o.length].concat(
                (t || "").replace(/^\s+|\s+$/g, "").split(/\s+/)
              )
            );
          }
          function a() {
            r.attachEvent && r.detachEvent("onpropertychange", n),
              "object" == typeof r.className
                ? (r.className.baseVal = c.toString.call(o))
                : (r.className = c.toString.call(o)),
              r.attachEvent && r.attachEvent("onpropertychange", n);
          }
          var o,
            r = this,
            p = t.DOMTokenList,
            c = p.prototype,
            s = function () {};
          return (
            (s.prototype = new p()),
            (s.prototype.item = function (t) {
              return n(), c.item.apply(o, arguments);
            }),
            (s.prototype.toString = function () {
              return n(), c.toString.apply(o, arguments);
            }),
            (s.prototype.add = function () {
              return n(), c.add.apply(o, arguments), a();
            }),
            (s.prototype.contains = function (t) {
              return n(), c.contains.apply(o, arguments);
            }),
            (s.prototype.remove = function () {
              return n(), c.remove.apply(o, arguments), a();
            }),
            (s.prototype.toggle = function (t) {
              return n(), (t = c.toggle.apply(o, arguments)), a(), t;
            }),
            (o = new s()),
            r.attachEvent && r.attachEvent("onpropertychange", n),
            o
          );
        },
      });
    })(this, Array.prototype.splice);
  }
  if (
    !(
      "document" in this &&
      "cloneNode" in document.documentElement &&
      (function () {
        var test = document.createElement("input");
        test.checked = true;
        var result = test.cloneNode();
        return !!result.checked;
      })()
    )
  ) {
    Element.prototype.cloneNode = (function (e) {
      return function (t) {
        var c = e.call(this, t);
        return "checked" in this && (c.checked = this.checked), c;
      };
    })(Element.prototype.cloneNode);
  }
  if (!("document" in this && "querySelector" in this.document)) {
    !(function (e) {
      function t(e, t, o) {
        var l,
          u,
          c = document.createElement(),
          i = "qsa" + String(Math.random()).slice(3);
        return (
          (c.innerHTML = "x<style>" + t + "{qsa:" + i + ";}"),
          (l = n.appendChild(c.lastChild)),
          (u = r(e, t, o, i)),
          n.removeChild(l),
          o ? u[0] : u
        );
      }
      function r(e, t, n, o) {
        var l,
          u = /1|9/.test(e.nodeType),
          c = e.childNodes,
          i = [],
          a = -1;
        if (u && e.currentStyle && e.currentStyle.qsa === o && i.push(e) && n)
          return i;
        for (; (l = c[++a]); )
          if (((i = i.concat(r(l, t, n, o))), n && i.length)) return i;
        return i;
      }
      var n = document.getElementsByTagName("head")[0];
      (Document.prototype.querySelector = Element.prototype.querySelector =
        function (e) {
          return t(this, e, !0);
        }),
        (Document.prototype.querySelectorAll =
          Element.prototype.querySelectorAll =
            function (e) {
              return t(this, e, !1);
            });
    })(this);
  }
  if (!("document" in this && "matches" in document.documentElement)) {
    Element.prototype.matches =
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            r = 0;
          o[r] && o[r] !== t;

        )
          ++r;
        return !!o[r];
      };
  }
  if (!("document" in this && "closest" in document.documentElement)) {
    Element.prototype.closest = function (t) {
      for (var e = this; e; ) {
        if (e.matches(t)) return e;
        e = e.parentElement;
      }
      return null;
    };
  }
  if (!("addEventListener" in this)) {
    document.attachEvent("onreadystatechange", function () {
      "complete" === document.readyState &&
        document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: !0 }));
    });
  }
  this.addEventListener(
    "focus",
    function (e) {
      e.target.dispatchEvent(
        new Event("focusin", { bubbles: !0, cancelable: !0 })
      );
    },
    !0
  ),
    this.addEventListener(
      "blur",
      function (e) {
        e.target.dispatchEvent(
          new Event("focusout", { bubbles: !0, cancelable: !0 })
        );
      },
      !0
    );
  if (!("onhashchange" in this && this.onhashchange !== null)) {
    !(function (n) {
      function h() {
        a !== n.location.hash &&
          ((a = n.location.hash), n.dispatchEvent(new Event("hashchange"))),
          setTimeout(h, 500);
      }
      var a = n.location.hash;
      (n.onhashchange = function () {}), h();
    })(this);
  }
  if (!("bind" in Function.prototype)) {
    Object.defineProperty(Function.prototype, "bind", {
      value: function (t) {
        var n,
          r = Array,
          o = Object,
          e = o.prototype,
          i = r.prototype,
          c = function () {},
          p = e.toString,
          a =
            "function" == typeof Symbol &&
            "symbol" == typeof Symbol.toStringTag,
          l = Function.prototype.toString,
          u = function (t) {
            try {
              return l.call(t), !0;
            } catch (n) {
              return !1;
            }
          },
          y = "[object Function]",
          f = "[object GeneratorFunction]";
        n = function (t) {
          if ("function" != typeof t) return !1;
          if (a) return u(t);
          var n = p.call(t);
          return n === y || n === f;
        };
        var s = i.slice,
          b = i.concat,
          h = i.push,
          g = Math.max,
          m = this;
        if (!n(m))
          throw new TypeError(
            "Function.prototype.bind called on incompatible " + m
          );
        for (
          var d,
            v = s.call(arguments, 1),
            F = function () {
              if (this instanceof d) {
                var n = m.apply(this, b.call(v, s.call(arguments)));
                return o(n) === n ? n : this;
              }
              return m.apply(t, b.call(v, s.call(arguments)));
            },
            j = g(0, m.length - v.length),
            S = [],
            w = 0;
          j > w;
          w++
        )
          h.call(S, "$" + w);
        return (
          (d = Function(
            "binder",
            "return function (" +
              S.join(",") +
              "){ return binder.apply(this, arguments); }"
          )(F)),
          m.prototype &&
            ((c.prototype = m.prototype),
            (d.prototype = new c()),
            (c.prototype = null)),
          d
        );
      },
    });
  }
  if (!("JSON" in this)) {
    !(function (e) {
      function t(e) {
        (this.line = 1), (this.col = 1), (this._tokLen = 0), (this._str = e);
      }
      function r(e) {
        this.lex = e;
      }
      function n(e, t, r) {
        return "undefined" == typeof r ? void delete e[t] : void (e[t] = r);
      }
      function i(e, t, r) {
        var o,
          u,
          s = e[t];
        if ("Array" === l.call(s).slice(8, -1))
          for (o = 0, u = s.length; u > o; o++) n(s, o, i(s, o, r));
        else if ("object" == typeof s)
          for (o in s) a.call(s, o) && n(s, o, i(s, o, r));
        return r.call(e, t, s);
      }
      function o(e, t) {
        return (
          (e = String(e)),
          e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
        );
      }
      var l = Object.prototype.toString,
        a = Object.prototype.hasOwnProperty,
        u = "{",
        s = "}",
        c = ":",
        g = "[",
        h = "]",
        f = ",",
        p = { PUNCTUATOR: 1, STRING: 2, NUMBER: 3, BOOLEAN: 4, NULL: 5 },
        v = {
          "{": 1,
          "}": 1,
          "[": 1,
          "]": 1,
          ",": 1,
          ":": 1,
          '"': 2,
          t: 4,
          f: 4,
          n: 5,
        },
        N = {
          b: "\b",
          f: "\f",
          n: "\n",
          r: "\r",
          t: "	",
          '"': '"',
          "\\": "\\",
          "/": "/",
        },
        k =
          /^(?:[{}:,\[\]]|true|false|null|"(?:[^"\\\u0000-\u001F]|\\["\\\/bfnrt]|\\u[0-9A-F]{4})*"|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/,
        T = /^[\t ]+/,
        y = /^\r?\n/;
      (t.prototype = {
        getNextToken: function () {
          var e,
            t,
            r = this._str;
          if (((this.col += this._tokLen), !r.length)) return "END";
          if ((e = k.exec(r))) t = v[e[0].charAt(0)] || p.NUMBER;
          else {
            if ((e = T.exec(r)))
              return (
                (this._tokLen = e[0].length),
                (this._str = r.slice(this._tokLen)),
                this.getNextToken()
              );
            if ((e = y.exec(r)))
              return (
                (this._tokLen = 0),
                (this._str = r.slice(e[0].length)),
                this.line++,
                (this.col = 1),
                this.getNextToken()
              );
            this.error("Invalid token");
          }
          return (
            (this._tokLen = e[0].length),
            (this._str = r.slice(this._tokLen)),
            { type: t, value: e[0] }
          );
        },
        error: function (e, t, r) {
          var n = new SyntaxError(e);
          throw ((n.line = t || this.line), (n.col = r || this.col), n);
        },
      }),
        (r.prototype = {
          parse: function () {
            var e = this.lex,
              t = this.getValue();
            return "END" !== e.getNextToken() && e.error("Illegal token"), t;
          },
          getObject: function () {
            for (var e, t, r, n, i, o = {}, l = this.lex, a = !1; ; ) {
              if (((e = l.getNextToken()), (t = e.value), t === s)) return o;
              a
                ? t === f
                  ? ((n = l.line),
                    (i = l.col - 1),
                    (e = l.getNextToken()),
                    (t = e.value),
                    t === s && l.error("Invalid trailing comma", n, i))
                  : l.error(
                      "Illegal token where expect comma or right curly bracket"
                    )
                : t === f && l.error("Invalid leading comma"),
                e.type != p.STRING &&
                  l.error("Illegal token where expect string property name"),
                (r = this.getString(t)),
                (e = l.getNextToken()),
                (t = e.value),
                t != c && l.error("Illegal token where expect colon"),
                (o[r] = this.getValue()),
                (a = !0);
            }
          },
          getArray: function () {
            for (var e, t, r, n, i = [], o = this.lex, l = !1; ; ) {
              if (((e = o.getNextToken()), (t = e.value), t === h)) return i;
              l
                ? t === f
                  ? ((r = o.line),
                    (n = o.col - 1),
                    (e = o.getNextToken()),
                    (t = e.value),
                    t === h && o.error("Invalid trailing comma", r, n))
                  : o.error(
                      "Illegal token where expect comma or right square bracket"
                    )
                : t === f && o.error("Invalid leading comma"),
                i.push(this.getValue(e)),
                (l = !0);
            }
          },
          getString: function (e) {
            return e
              .slice(1, -1)
              .replace(/\\u?([0-9A-F]{4}|["\\\/bfnrt])/g, function (e, t) {
                return N[t] || String.fromCharCode(parseInt(t, 16));
              });
          },
          getValue: function (e) {
            var t = this.lex,
              r = e || t.getNextToken(),
              n = r.value;
            switch (r.type) {
              case p.PUNCTUATOR:
                if (n === u) return this.getObject();
                if (n === g) return this.getArray();
                t.error("Illegal punctoator");
                break;
              case p.STRING:
                return this.getString(n);
              case p.NUMBER:
                return Number(n);
              case p.BOOLEAN:
                return "true" === n;
              case p.NULL:
                return null;
              default:
                t.error("Invalid value");
            }
          },
        }),
        (e.JSON = {
          parse: function (e, n) {
            var o = new r(new t(e)).parse();
            return "function" == typeof n ? i({ "": o }, "", n) : o;
          },
          stringify: function () {
            var e,
              t,
              r,
              n,
              i,
              u,
              s = arguments[0],
              c = "function" == typeof arguments[1] ? arguments[1] : null,
              g = arguments[2] || "",
              h = g ? " " : "",
              f = g ? "\n" : "",
              p = l.call(s).slice(8, -1);
            if (null === s || "Boolean" === p || "Number" === p) return s;
            if ("Array" === p) {
              for (e = [], i = s.length, n = 0, u; i > n; ++n)
                (u = c ? c(n, s[n]) : s[n]),
                  (u = this.stringify(u, c, g)),
                  (void 0 === u || null === u) && (u = "null"),
                  e.push(u);
              return "[" + f + e.join("," + f).replace(/^/gm, g) + f + "]";
            }
            if ("Date" === p)
              return (
                '"' +
                s.getUTCFullYear() +
                "-" +
                o(s.getUTCMonth() + 1, 2) +
                "-" +
                o(s.getUTCDate(), 2) +
                "T" +
                o(s.getUTCHours(), 2) +
                ":" +
                o(s.getUTCMinutes(), 2) +
                ":" +
                o(s.getUTCSeconds(), 2) +
                "." +
                o(s.getUTCMilliseconds(), 3) +
                'Z"'
              );
            if ("String" === p) return '"' + s.replace(/"/g, '\\"') + '"';
            if ("object" == typeof s) {
              (e = []), (r = !1);
              for (t in s)
                a.call(s, t) &&
                  ((u = c ? c(t, s[t]) : s[t]),
                  (u = this.stringify(u, c, g)),
                  void 0 !== u && ((r = !0), e.push('"' + t + '":' + h + u)));
              return r
                ? "{" + f + e.join("," + f).replace(/^/gm, g) + f + "}"
                : "{}";
            }
          },
        });
    })(this);
  }
  if (!("assign" in Object)) {
    Object.assign = function (r, t) {
      for (var n, e, a = 1; a < arguments.length; ++a) {
        e = arguments[a];
        for (n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
      }
      return r;
    };
  }
  if (!("defineProperties" in Object)) {
    Object.defineProperties = function (e, r) {
      for (var n in r) Object.defineProperty(e, n, r[n]);
      return e;
    };
  }
  if (!("create" in Object)) {
    Object.create = function (e, t) {
      if ("object" != typeof e && null !== e)
        throw TypeError("Object prototype may only be an Object or null");
      var r = new Function(
        "e",
        "function Object() {}Object.prototype=e;return new Object"
      )(e);
      return (
        (r.constructor.prototype = e),
        1 in arguments && Object.defineProperties(r, t),
        r
      );
    };
  }
  if (!("getOwnPropertyNames" in Object)) {
    Object.getOwnPropertyNames = function (e) {
      var n,
        r = [],
        t = [
          "length",
          "name",
          "arguments",
          "caller",
          "prototype",
          "observe",
          "unobserve",
        ];
      if ("undefined" == typeof e || null === e)
        throw new TypeError("Cannot convert undefined or null to object");
      e = Object(e);
      for (n in e) Object.prototype.hasOwnProperty.call(e, n) && r.push(n);
      for (var o = 0, l = t.length; l > o; o++) t[o] in e && r.push(t[o]);
      return r;
    };
  }
  if (!("getPrototypeOf" in Object)) {
    Object.getPrototypeOf = function (t) {
      if (t !== Object(t))
        throw new TypeError("Object.getPrototypeOf called on non-object");
      return t.constructor ? t.constructor.prototype : null;
    };
  }
  if (!("keys" in Object)) {
    Object.keys = (function () {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        r = !{ toString: null }.propertyIsEnumerable("toString"),
        e = [
          "toString",
          "toLocaleString",
          "valueOf",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "constructor",
        ],
        o = e.length;
      return function (n) {
        if ("object" != typeof n && ("function" != typeof n || null === n))
          throw new TypeError("Object.keys called on non-object");
        var c,
          l,
          p = [];
        for (c in n) t.call(n, c) && p.push(c);
        if (r) for (l = 0; o > l; l++) t.call(n, e[l]) && p.push(e[l]);
        return p;
      };
    })();
  }
  if (
    !(
      "document" in this &&
      "hidden" in document &&
      "visibilityState" in document
    )
  ) {
    !(function () {
      function i() {
        (document.hidden = document[t + "Hidden"]),
          (document.visibilityState = document[t + "VisibilityState"]);
      }
      var t = document.webkitVisibilityState
        ? "webkit"
        : document.mozVisibilityState
        ? "moz"
        : null;
      t &&
        (i(),
        document.addEventListener(t + "visibilitychange", function (t) {
          i(), document.dispatchEvent(new CustomEvent("visibilitychange"));
        }));
    })();
  }
  if (!("includes" in String.prototype)) {
    String.prototype.includes = function (t, e) {
      if ("object" == typeof t && t instanceof RegExp)
        throw new TypeError(
          "First argument to String.prototype.includes must not be a regular expression"
        );
      return -1 !== this.indexOf(t, e);
    };
  }
  if (!("trim" in String.prototype)) {
    String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, "");
    };
  }
  if (
    !(
      "XMLHttpRequest" in this &&
      "prototype" in this.XMLHttpRequest &&
      "addEventListener" in this.XMLHttpRequest.prototype
    )
  ) {
    !(function (e, t) {
      e.XMLHttpRequest = function () {
        var e = this,
          n = (e._request = t
            ? new t()
            : new ActiveXObject("MSXML2.XMLHTTP.3.0"));
        (n.onreadystatechange = function () {
          e.readyState = n.readyState;
          var t = 4 === e.readyState;
          (e.response = e.responseText = t ? n.responseText : null),
            (e.status = t ? n.status : null),
            (e.statusText = t ? n.statusText : null),
            e.dispatchEvent(new Event("readystatechange")),
            t && e.dispatchEvent(new Event("load"));
        }),
          "onerror" in n &&
            (n.onerror = function () {
              e.dispatchEvent(new Event("error"));
            });
      };
      var n = e.XMLHttpRequest.prototype;
      (n.addEventListener = e.addEventListener),
        (n.removeEventListener = e.removeEventListener),
        (n.dispatchEvent = e.dispatchEvent),
        (n.abort = function () {
          return this._request();
        }),
        (n.getAllResponseHeaders = function () {
          return this._request.getAllResponseHeaders();
        }),
        (n.getResponseHeader = function (e) {
          return this._request.getResponseHeader(e);
        }),
        (n.open = function (e, t) {
          this._request.open(e, t, arguments[2], arguments[3], arguments[4]);
        }),
        (n.overrideMimeType = function (e) {
          this._request.overrideMimeType(e);
        }),
        (n.send = function () {
          this._request.send(0 in arguments ? arguments[0] : null);
        }),
        (n.setRequestHeader = function (e, t) {
          this._request.setRequestHeader(e, t);
        });
    })(this, this.XMLHttpRequest);
  }
  if (!("atob" in this)) {
    !(function (t) {
      var r =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        a = new RegExp("[^" + r + "]");
      (t.atob = function (t) {
        var n,
          o,
          e,
          h,
          i = [],
          c = 0,
          s = t.length;
        if (a.test(t) || (/=/.test(t) && (/=[^=]/.test(t) || /={3}/.test(t))))
          throw new Error("Invalid base64 data");
        for (
          s % 4 > 0 &&
          ((t += Array(4 - (s % 4) + 1).join("=")), (s = t.length));
          s > c;

        ) {
          for (o = [], h = c; h + 4 > c; ) o.push(r.indexOf(t.charAt(c++)));
          for (
            n = (o[0] << 18) + (o[1] << 12) + ((63 & o[2]) << 6) + (63 & o[3]),
              e = [
                (n & (255 << 16)) >> 16,
                64 === o[2] ? -1 : (65280 & n) >> 8,
                64 === o[3] ? -1 : 255 & n,
              ],
              h = 0;
            3 > h;
            ++h
          )
            (e[h] >= 0 || 0 === h) && i.push(String.fromCharCode(e[h]));
        }
        return i.join("");
      }),
        (t.btoa = function (t) {
          for (var a, n, o = [], e = 0, h = t.length; h > e; )
            (n = [t.charCodeAt(e++), t.charCodeAt(e++), t.charCodeAt(e++)]),
              (a = (n[0] << 16) + ((n[1] || 0) << 8) + (n[2] || 0)),
              o.push(
                r.charAt((a & (63 << 18)) >> 18),
                r.charAt((258048 & a) >> 12),
                r.charAt(isNaN(n[1]) ? 64 : (4032 & a) >> 6),
                r.charAt(isNaN(n[2]) ? 64 : 63 & a)
              );
          return o.join("");
        });
    })(this);
  }
  if (!("performance" in this && "now" in this.performance)) {
    !(function (n) {
      var e = Date.now();
      n.performance || (n.performance = {}),
        (n.performance.now = function () {
          return Date.now() - e;
        });
    })(this);
  }
  if (!("requestAnimationFrame" in this)) {
    !(function (n) {
      if ("mozRequestAnimationFrame" in n)
        (n.requestAnimationFrame = function (n) {
          return mozRequestAnimationFrame(function () {
            n(performance.now());
          });
        }),
          (n.cancelAnimationFrame = mozCancelAnimationFrame);
      else if ("webkitRequestAnimationFrame" in n)
        (n.requestAnimationFrame = function (n) {
          return webkitRequestAnimationFrame(function () {
            n(performance.now());
          });
        }),
          (n.cancelAnimationFrame = webkitCancelAnimationFrame);
      else {
        var e = Date.now();
        (n.requestAnimationFrame = function (n) {
          if ("function" != typeof n)
            throw new TypeError(n + "is not a function");
          var i = Date.now(),
            t = 16 + e - i;
          return (
            0 > t && (t = 0),
            (e = i),
            setTimeout(function () {
              (e = Date.now()), n(performance.now());
            }, t)
          );
        }),
          (n.cancelAnimationFrame = function (n) {
            clearTimeout(n);
          });
      }
    })(this);
  }
  if (
    !(function () {
      var p = document.createElement("p");
      var result = false;
      p.innerHTML = "<section></section>";
      document.documentElement.appendChild(p);
      if (p.firstChild) {
        if ("getComputedStyle" in window) {
          result = getComputedStyle(p.firstChild).display === "block";
        } else if (p.firstChild.currentStyle) {
          result = p.firstChild.currentStyle.display === "block";
        }
      }
      document.documentElement.removeChild(p);
      return result;
    })()
  ) {
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = E.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function a(e, t) {
        var n = E.elements;
        "string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (E.elements = n + " " + e),
          m(t);
      }
      function o(e) {
        var t = y[e[g]];
        return t || ((t = {}), v++, (e[g] = v), (y[v] = t)), t;
      }
      function c(e, n, r) {
        if ((n || (n = t), s)) return n.createElement(e);
        r || (r = o(n));
        var a;
        return (
          (a = r.cache[e]
            ? r.cache[e].cloneNode()
            : p.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !a.canHaveChildren || h.test(e) || a.tagUrn
            ? a
            : r.frag.appendChild(a)
        );
      }
      function i(e, n) {
        if ((e || (e = t), s)) return e.createDocumentFragment();
        n = n || o(e);
        for (
          var a = n.frag.cloneNode(), c = 0, i = r(), l = i.length;
          l > c;
          c++
        )
          a.createElement(i[c]);
        return a;
      }
      function l(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return E.shivMethods ? c(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ");return n}"
          )(E, t.frag));
      }
      function m(e) {
        e || (e = t);
        var r = o(e);
        return (
          !E.shivCSS ||
            u ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          s || l(e, r),
          e
        );
      }
      var u,
        s,
        d = "3.7.3",
        f = e.html5 || {},
        h =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g = "_html5shiv",
        v = 0,
        y = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (u = "hidden" in e),
            (s =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })());
        } catch (n) {
          (u = !0), (s = !0);
        }
      })();
      var E = {
        elements:
          f.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: d,
        shivCSS: f.shivCSS !== !1,
        supportsUnknownElements: s,
        shivMethods: f.shivMethods !== !1,
        type: "default",
        shivDocument: m,
        createElement: c,
        createDocumentFragment: i,
        addElements: a,
      };
      (e.html5 = E),
        m(t),
        "object" == typeof module && module.exports && (module.exports = E);
    })("undefined" != typeof window ? window : this, document);
  }
  if (
    !(
      "from" in Array &&
      (function () {
        try {
          Array.from({ length: -Infinity });
          return true;
        } catch (e) {
          return false;
        }
      })()
    )
  ) {
    Object.defineProperty(Array, "from", {
      configurable: !0,
      value: function (n) {
        if (void 0 === n || null === n)
          throw new TypeError(n + " is not an object");
        if (1 in arguments && !(arguments[1] instanceof Function))
          throw new TypeError(arguments[1] + " is not a function");
        for (
          var r,
            t = "string" == typeof n ? n.split("") : Object(n),
            e = arguments[1],
            a = arguments[2],
            i = [],
            o = -1,
            u = Math.min(Math.max(Number(t.length) || 0, 0), 9007199254740991);
          ++o < u;

        )
          o in t && ((r = t[o]), (i[o] = e ? e.call(a, r, o) : r));
        return (i.length = u), i;
      },
      writable: !0,
    });
  }
  if (!("of" in Array)) {
    !(function (r) {
      Object.defineProperty(Array, "of", {
        configurable: !0,
        value: function () {
          return r.call(arguments);
        },
        writable: !0,
      });
    })(Array.prototype.slice);
  }
  if (!("find" in Array.prototype)) {
    Object.defineProperty(Array.prototype, "find", {
      configurable: !0,
      value: function (t) {
        if (void 0 === this || null === this)
          throw new TypeError(this + "is not an object");
        if (!(t instanceof Function))
          throw new TypeError(t + " is not a function");
        for (
          var n,
            i = Object(this),
            r = arguments[1],
            e = i instanceof String ? i.split("") : i,
            o = Math.max(Math.min(e.length, 9007199254740991), 0) || 0,
            a = -1;
          ++a < o;

        )
          if (a in e && ((n = e[a]), t.call(r, n, a, i))) return n;
      },
      writable: !0,
    });
  }
  if (!("findIndex" in Array.prototype)) {
    Object.defineProperty(Array.prototype, "findIndex", {
      configurable: !0,
      value: function (t) {
        if (void 0 === this || null === this)
          throw new TypeError(this + "is not an object");
        if (!(t instanceof Function))
          throw new TypeError(t + " is not a function");
        for (
          var n = Object(this),
            i = arguments[1],
            r = n instanceof String ? n.split("") : n,
            e = Math.max(Math.min(r.length, 9007199254740991), 0) || 0,
            o = -1;
          ++o < e;

        )
          if (o in r && t.call(i, r[o], o, n)) return o;
        return -1;
      },
      writable: !0,
    });
  }
  if (!("acosh" in Math)) {
    Math.acosh = function (t) {
      return Math.log(t + Math.sqrt(t * t - 1));
    };
  }
  if (!("asinh" in Math)) {
    Math.asinh = function (t) {
      return t === -(1 / 0) ? t : Math.log(t + Math.sqrt(t * t + 1));
    };
  }
  if (!("atanh" in Math)) {
    Math.atanh = function (t) {
      return Math.log((1 + t) / (1 - t)) / 2;
    };
  }
  if (!("cbrt" in Math)) {
    Math.cbrt = function (t) {
      var a = Math.pow(Math.abs(t), 1 / 3);
      return 0 > t ? -a : a;
    };
  }
  if (!("clz32" in Math)) {
    Math.clz32 = function (t) {
      var n = Number(n) >>> 0;
      return n ? 32 - n.toString(2).length : 32;
    };
  }
  if (!("cosh" in Math)) {
    Math.cosh = function (t) {
      var a = Math.exp(t);
      return (a + 1 / a) / 2;
    };
  }
  if (!("expm1" in Math)) {
    Math.expm1 = function (t) {
      return Math.exp(t) - 1;
    };
  }
  if (!("hypot" in Math)) {
    Math.hypot = function () {
      for (
        var t = arguments, a = -1, r = 0;
        ++a in t && Math.abs(r) !== 1 / 0;

      )
        r += t[a] * t[a];
      return Math.abs(r) === 1 / 0 ? 1 / 0 : Math.sqrt(r);
    };
  }
  if (!("imul" in Math)) {
    Math.imul = function (n, r) {
      var t = (n >>> 16) & 65535,
        u = 65535 & n,
        a = (r >>> 16) & 65535,
        i = 65535 & r;
      return (u * i + (((t * i + u * a) << 16) >>> 0)) | 0;
    };
  }
  if (!("log10" in Math)) {
    Math.log10 = function (t) {
      return Math.log(t) / Math.LN10;
    };
  }
  if (!("log1p" in Math)) {
    Math.log1p = function (t) {
      return Math.log(1 + t);
    };
  }
  if (!("log2" in Math)) {
    Math.log2 = function (t) {
      return Math.log(t) / Math.LN2;
    };
  }
  if (!("sign" in Math)) {
    Math.sign = function (n) {
      return (n = Number(n)) ? (n > 0 ? 1 : -1) : n;
    };
  }
  if (!("sinh" in Math)) {
    Math.sinh = function (n) {
      var t = Math.exp(n);
      return (t - 1 / t) / 2;
    };
  }
  if (!("tanh" in Math)) {
    Math.tanh = function (t) {
      var a;
      return t === 1 / 0
        ? 1
        : t === -(1 / 0)
        ? -1
        : ((a = Math.exp(2 * t)), (a - 1) / (a + 1));
    };
  }
  if (!("trunc" in Math)) {
    Math.trunc = function (t) {
      return 0 > t ? Math.ceil(t) : Math.floor(t);
    };
  }
  if (!("is" in Object)) {
    Object.is = function (n, t) {
      return (n === t && (0 !== n || 1 / n === 1 / t)) || (n !== n && t !== t);
    };
  }
  if (!("endsWith" in String.prototype)) {
    String.prototype.endsWith = function (t) {
      var n = arguments.length < 2 ? this.length : arguments[1],
        e = this.lastIndexOf(t);
      return -1 !== e && e === n - t.length;
    };
  }
  if (!("repeat" in String.prototype)) {
    String.prototype.repeat = function (t) {
      "use strict";
      if (void 0 === this || null === this)
        throw new TypeError(this + " is not an object");
      if (0 > t || t === 1 / 0)
        throw new RangeError(t + " is less than zero or equal to infinity");
      return new Array((parseInt(t, 10) || 0) + 1).join(this);
    };
  }
  if (!("startsWith" in String.prototype)) {
    String.prototype.startsWith = function (t) {
      var n = arguments.length < 2 ? 0 : arguments[1];
      return 0 === this.slice(n).indexOf(t);
    };
  }
  if (
    !(function (global) {
      if (!("WeakMap" in global)) return false;
      var o = {};
      var wm = new WeakMap([[o, "test"]]);
      return wm.get(o) === "test";
    })(this)
  ) {
    !(function (t) {
      var e = Object.defineProperty,
        n = Date.now() % 1e9,
        o = function (t) {
          (this.name = "__st" + ((1e9 * Math.random()) >>> 0) + (n++ + "__")),
            t &&
              t.forEach &&
              t.forEach(function (t) {
                this.set.apply(this, t);
              }, this);
        };
      (o.prototype.set = function (t, n) {
        if ("object" != typeof t && "function" != typeof t)
          throw new TypeError("Invalid value used as weak map key");
        var o = t[this.name];
        return (
          o && o[0] === t
            ? (o[1] = n)
            : e(t, this.name, { value: [t, n], writable: !0 }),
          this
        );
      }),
        (o.prototype.get = function (t) {
          var e;
          return (e = t[this.name]) && e[0] === t ? e[1] : void 0;
        }),
        (o.prototype["delete"] = function (t) {
          var e = t[this.name];
          return e && e[0] === t ? ((e[0] = e[1] = void 0), !0) : !1;
        }),
        (o.prototype.has = function (t) {
          var e = t[this.name];
          return e ? e[0] === t : !1;
        }),
        (this.WeakMap = o);
    })(this);
  }
  if (
    !(function (global) {
      if (!("WeakSet" in global)) return false;
      var o = {};
      var ws = new WeakSet([o]);
      return !!ws.has(o);
    })(this)
  ) {
    !(function (t) {
      var e = Date.now() % 1e9,
        n = function (t) {
          (this.name = "__st" + ((1e9 * Math.random()) >>> 0) + (e++ + "__")),
            t && t.forEach && t.forEach(this.add, this);
        };
      (n.prototype.add = function (t) {
        var e = this.name;
        return (
          t[e] || Object.defineProperty(t, e, { value: !0, writable: !0 }), this
        );
      }),
        (n.prototype["delete"] = function (t) {
          return t[this.name] ? ((t[this.name] = void 0), !0) : !1;
        }),
        (n.prototype.has = function (t) {
          return !!t[this.name];
        }),
        (t.WeakSet = n);
    })(this);
  }
}.call(
  ("object" === typeof window && window) ||
    ("object" === typeof self && self) ||
    ("object" === typeof global && global) ||
    {}
));
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    factory();
  }
})(this, function () {
  var domNode = "";
  var maxTweets = 20;
  var parseLinks = true;
  var queue = [];
  var inProgress = false;
  var printTime = true;
  var printUser = true;
  var formatterFunction = null;
  var supportsClassName = true;
  var showRts = true;
  var customCallbackFunction = null;
  var showInteractionLinks = true;
  var showImages = false;
  var targetBlank = true;
  var lang = "en";
  var permalinks = true;
  var dataOnly = false;
  var script = null;
  var scriptAdded = false;
  function handleTweets(tweets) {
    if (customCallbackFunction === null) {
      var x = tweets.length;
      var n = 0;
      var element = document.getElementById(domNode);
      var html = "<ul>";
      while (n < x) {
        html += "<li>" + tweets[n] + "</li>";
        n++;
      }
      html += "</ul>";
      element.innerHTML = html;
    } else {
      customCallbackFunction(tweets);
    }
  }
  function strip(data) {
    return data
      .replace(/<b[^>]*>(.*?)<\/b>/gi, function (a, s) {
        return s;
      })
      .replace(
        /class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,
        ""
      );
  }
  function targetLinksToNewWindow(el) {
    var links = el.getElementsByTagName("a");
    for (var i = links.length - 1; i >= 0; i--) {
      links[i].setAttribute("target", "_blank");
    }
  }
  function getElementsByClassName(node, classname) {
    var a = [];
    var regex = new RegExp("(^| )" + classname + "( |$)");
    var elems = node.getElementsByTagName("*");
    for (var i = 0, j = elems.length; i < j; i++) {
      if (regex.test(elems[i].className)) {
        a.push(elems[i]);
      }
    }
    return a;
  }
  function extractImageUrl(image_data) {
    if (
      image_data !== undefined &&
      image_data.innerHTML.indexOf("data-srcset") >= 0
    ) {
      var data_src = image_data.innerHTML.match(
        /data-srcset="([A-z0-9%_\.-]+)/i
      )[0];
      return decodeURIComponent(data_src).split('"')[1];
    }
  }
  var twitterFetcher = {
    fetch: function (config) {
      if (config.maxTweets === undefined) {
        config.maxTweets = 20;
      }
      if (config.enableLinks === undefined) {
        config.enableLinks = true;
      }
      if (config.showUser === undefined) {
        config.showUser = true;
      }
      if (config.showTime === undefined) {
        config.showTime = true;
      }
      if (config.dateFunction === undefined) {
        config.dateFunction = "default";
      }
      if (config.showRetweet === undefined) {
        config.showRetweet = true;
      }
      if (config.customCallback === undefined) {
        config.customCallback = null;
      }
      if (config.showInteraction === undefined) {
        config.showInteraction = true;
      }
      if (config.showImages === undefined) {
        config.showImages = false;
      }
      if (config.linksInNewWindow === undefined) {
        config.linksInNewWindow = true;
      }
      if (config.showPermalinks === undefined) {
        config.showPermalinks = true;
      }
      if (config.dataOnly === undefined) {
        config.dataOnly = false;
      }
      if (inProgress) {
        queue.push(config);
      } else {
        inProgress = true;
        domNode = config.domId;
        maxTweets = config.maxTweets;
        parseLinks = config.enableLinks;
        printUser = config.showUser;
        printTime = config.showTime;
        showRts = config.showRetweet;
        formatterFunction = config.dateFunction;
        customCallbackFunction = config.customCallback;
        showInteractionLinks = config.showInteraction;
        showImages = config.showImages;
        targetBlank = config.linksInNewWindow;
        permalinks = config.showPermalinks;
        dataOnly = config.dataOnly;
        var head = document.getElementsByTagName("head")[0];
        if (script !== null) {
          head.removeChild(script);
        }
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "https://cdn.syndication.twimg.com/widgets/timelines/" +
          config.id +
          "?&lang=" +
          (config.lang || lang) +
          "&callback=twitterFetcher.callback&" +
          "suppress_response_codes=true&rnd=" +
          Math.random();
        head.appendChild(script);
      }
    },
    callback: function (data) {
      var div = document.createElement("div");
      div.innerHTML = data.body;
      if (typeof div.getElementsByClassName === "undefined") {
        supportsClassName = false;
      }
      function swapDataSrc(element) {
        var avatarImg = element.getElementsByTagName("img")[0];
        avatarImg.src = avatarImg.getAttribute("data-src-2x");
        return element;
      }
      var tweets = [];
      var authors = [];
      var times = [];
      var images = [];
      var rts = [];
      var tids = [];
      var permalinksURL = [];
      var x = 0;
      if (supportsClassName) {
        var tmp = div.getElementsByClassName("timeline-Tweet");
        while (x < tmp.length) {
          if (
            tmp[x].getElementsByClassName("timeline-Tweet-retweetCredit")
              .length > 0
          ) {
            rts.push(true);
          } else {
            rts.push(false);
          }
          if (!rts[x] || (rts[x] && showRts)) {
            tweets.push(
              tmp[x].getElementsByClassName("timeline-Tweet-text")[0]
            );
            tids.push(tmp[x].getAttribute("data-tweet-id"));
            authors.push(
              swapDataSrc(
                tmp[x].getElementsByClassName("timeline-Tweet-author")[0]
              )
            );
            times.push(tmp[x].getElementsByClassName("dt-updated")[0]);
            permalinksURL.push(
              tmp[x].getElementsByClassName("timeline-Tweet-timestamp")[0]
            );
            if (
              tmp[x].getElementsByClassName("timeline-Tweet-media")[0] !==
              undefined
            ) {
              images.push(
                tmp[x].getElementsByClassName("timeline-Tweet-media")[0]
              );
            } else {
              images.push(undefined);
            }
          }
          x++;
        }
      } else {
        var tmp = getElementsByClassName(div, "timeline-Tweet");
        while (x < tmp.length) {
          if (
            getElementsByClassName(tmp[x], "timeline-Tweet-retweetCredit")
              .length > 0
          ) {
            rts.push(true);
          } else {
            rts.push(false);
          }
          if (!rts[x] || (rts[x] && showRts)) {
            tweets.push(
              getElementsByClassName(tmp[x], "timeline-Tweet-text")[0]
            );
            tids.push(tmp[x].getAttribute("data-tweet-id"));
            authors.push(
              swapDataSrc(
                getElementsByClassName(tmp[x], "timeline-Tweet-author")[0]
              )
            );
            times.push(getElementsByClassName(tmp[x], "dt-updated")[0]);
            permalinksURL.push(
              getElementsByClassName(tmp[x], "timeline-Tweet-timestamp")[0]
            );
            if (
              getElementsByClassName(tmp[x], "timeline-Tweet-media")[0] !==
              undefined
            ) {
              images.push(
                getElementsByClassName(tmp[x], "timeline-Tweet-media")[0]
              );
            } else {
              images.push(undefined);
            }
          }
          x++;
        }
      }
      if (tweets.length > maxTweets) {
        tweets.splice(maxTweets, tweets.length - maxTweets);
        authors.splice(maxTweets, authors.length - maxTweets);
        times.splice(maxTweets, times.length - maxTweets);
        rts.splice(maxTweets, rts.length - maxTweets);
        images.splice(maxTweets, images.length - maxTweets);
        permalinksURL.splice(maxTweets, permalinksURL.length - maxTweets);
      }
      var arrayTweets = [];
      var x = tweets.length;
      var n = 0;
      if (dataOnly) {
        while (n < x) {
          arrayTweets.push({
            tweet: tweets[n].innerHTML,
            author: authors[n].innerHTML,
            time: times[n].textContent,
            image: extractImageUrl(images[n]),
            rt: rts[n],
            tid: tids[n],
            permalinkURL:
              permalinksURL[n] === undefined ? "" : permalinksURL[n].href,
          });
          n++;
        }
      } else {
        while (n < x) {
          if (typeof formatterFunction !== "string") {
            var datetimeText = times[n].getAttribute("datetime");
            var newDate = new Date(
              times[n]
                .getAttribute("datetime")
                .replace(/-/g, "/")
                .replace("T", " ")
                .split("+")[0]
            );
            var dateString = formatterFunction(newDate, datetimeText);
            times[n].setAttribute("aria-label", dateString);
            if (tweets[n].textContent) {
              if (supportsClassName) {
                times[n].textContent = dateString;
              } else {
                var h = document.createElement("p");
                var t = document.createTextNode(dateString);
                h.appendChild(t);
                h.setAttribute("aria-label", dateString);
                times[n] = h;
              }
            } else {
              times[n].textContent = dateString;
            }
          }
          var op = "";
          if (parseLinks) {
            if (targetBlank) {
              targetLinksToNewWindow(tweets[n]);
              if (printUser) {
                targetLinksToNewWindow(authors[n]);
              }
            }
            if (printUser) {
              op +=
                '<div class="user">' + strip(authors[n].innerHTML) + "</div>";
            }
            op += '<p class="tweet">' + strip(tweets[n].innerHTML) + "</p>";
            if (printTime) {
              if (permalinks) {
                op +=
                  '<p class="timePosted"><a href="' +
                  permalinksURL[n] +
                  '">' +
                  times[n].getAttribute("aria-label") +
                  "</a></p>";
              } else {
                op +=
                  '<p class="timePosted">' +
                  times[n].getAttribute("aria-label") +
                  "</p>";
              }
            }
          } else {
            if (tweets[n].textContent) {
              if (printUser) {
                op += '<p class="user">' + authors[n].textContent + "</p>";
              }
              op += '<p class="tweet">' + tweets[n].textContent + "</p>";
              if (printTime) {
                op += '<p class="timePosted">' + times[n].textContent + "</p>";
              }
            } else {
              if (printUser) {
                op += '<p class="user">' + authors[n].textContent + "</p>";
              }
              op += '<p class="tweet">' + tweets[n].textContent + "</p>";
              if (printTime) {
                op += '<p class="timePosted">' + times[n].textContent + "</p>";
              }
            }
          }
          if (showInteractionLinks) {
            op +=
              '<p class="interact"><a href="https://twitter.com/intent/' +
              "tweet?in_reply_to=" +
              tids[n] +
              '" class="twitter_reply_icon"' +
              (targetBlank ? ' target="_blank">' : ">") +
              'Reply</a><a href="https://twitter.com/intent/retweet?' +
              "tweet_id=" +
              tids[n] +
              '" class="twitter_retweet_icon"' +
              (targetBlank ? ' target="_blank">' : ">") +
              "Retweet</a>" +
              '<a href="https://twitter.com/intent/favorite?tweet_id=' +
              tids[n] +
              '" class="twitter_fav_icon"' +
              (targetBlank ? ' target="_blank">' : ">") +
              "Favorite</a></p>";
          }
          if (showImages && images[n] !== undefined) {
            op +=
              '<div class="media">' +
              '<img src="' +
              extractImageUrl(images[n]) +
              '" alt="Image from tweet" />' +
              "</div>";
          }
          arrayTweets.push(op);
          n++;
        }
      }
      handleTweets(arrayTweets);
      inProgress = false;
      if (queue.length > 0) {
        twitterFetcher.fetch(queue[0]);
        queue.splice(0, 1);
      }
    },
  };
  window.twitterFetcher = twitterFetcher;
  return twitterFetcher;
});
var GoogleMap = { element: null };
GoogleMap.createMap = function () {
  var position = GoogleMap.element.getAttribute("data-google-map").split(/, */);
  var x = position[0];
  var y = position[1];
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(x, y),
    styles: [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }, { color: "#fcfcfc" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }, { color: "#fcfcfc" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }, { color: "#dddddd" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }, { color: "#dddddd" }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }, { color: "#eeeeee" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }, { color: "#dddddd" }],
      },
    ],
  };
  var map = new google.maps.Map(GoogleMap.element, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(x, y),
    map: map,
  });
};
document.addEventListener("DOMContentLoaded", function () {
  GoogleMap.element = document.querySelector("[data-google-map]");
  if (GoogleMap.element) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCxOwGupzNX4Ad3X5kZHbcx3QK6_zyXdu4" +
      "&signed_in=true&callback=GoogleMap.createMap";
    document.body.appendChild(script);
  }
});
("use strict");
var ajaxify = {
  get: function (url, cb) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        cb(this);
      }
    };
    request.send();
  },
  load: function (opt) {
    document.documentElement.classList.add("ajaxifyLoading");
    var source = opt.source || "body";
    ajaxify.get(opt.url, function (req) {
      var newPage = document.createElement("body");
      newPage.innerHTML = req.responseText;
      var content = newPage.querySelector(source).innerHTML;
      if (!opt.load) document.querySelector(source).innerHTML = content;
      var title = newPage.querySelector("title").innerHTML;
      document.title = title || document.title;
      document.documentElement.classList.remove("ajaxifyLoading");
      if (opt.history && history.pushState) {
        history.pushState({ ajaxify: true }, null, req.responseURL || opt.url);
      }
      if (opt.load) opt.load(content, newPage);
    });
  },
};
document.addEventListener("click", function (ev, link) {
  for (var link = ev.target; link; link = link.parentNode) {
    if (
      link.getAttribute &&
      typeof link.getAttribute("data-ajax") == "string"
    ) {
      ev.preventDefault();
      var opt = link.getAttribute("data-ajax");
      if (opt.match(/:/)) {
        eval("opt={" + link.getAttribute("data-ajax") + "}");
      } else {
        opt = { url: opt };
      }
      opt.url = link.href;
      ajaxify.manageHistory();
      return ajaxify.load(opt);
    }
  }
});
window.addEventListener("popstate", function (event) {
  if (event.state.ajaxify) {
    window.location.reload();
  }
});
window.history.replaceState &&
  window.history.replaceState(true, null, window.location.href);
window.browser = {
  isMobile: false,
  isSafari: navigator.userAgent.indexOf("Safari") + 1,
  detect: function () {
    browser.isMobile = window.innerWidth < 800;
  },
};
window.addEventListener("resize", browser.detect);
browser.detect();
(function () {
  "use strict";
  window.ClassSlider = function (el, opt) {
    var self = this;
    this.el = el;
    this.opt = opt || {};
    this.speed = this.opt.speed || 0;
    this.before = this.opt.before || function () {};
    this.after = this.opt.after || function () {};
    this.slides = Array.apply(0, el.children);
    this.current = 0;
    this.show = function (index) {
      var height = 0;
      var old = self.current;
      self.el.style.height = "";
      self.current = (self.slides.length + index) % self.slides.length;
      self.slides.forEach(function (slide, i) {
        slide.style.position = "absolute";
        slide.style.transition = ".3s";
        slide.style.opacity = 0;
        height = Math.max(height, slide.offsetHeight);
      });
      self.el.style.height = height + "px";
      self.slides[self.current].style.opacity = 1;
      if (self.speed) {
        self.timeout && clearTimeout(self.timeout);
        self.timeout = setTimeout(self.next, self.speed);
      }
      if (self.before) self.before(self);
      if (self.after)
        setTimeout(function () {
          self.after(self);
        });
    };
    this.next = function () {
      self.show(self.current + 1);
    };
    this.prev = function () {
      self.show(self.current - 1);
    };
    this.show(-1);
    this.show(0);
  };
  window.ClassSlider.register = function () {
    Array.apply(0, document.querySelectorAll("[data-class-slider]")).forEach(
      function (el) {
        var opt = el.getAttribute("data-class-slider");
        opt && eval("opt = {" + opt + "}");
        var slider = new ClassSlider(el, opt);
      }
    );
  };
  document.addEventListener("DOMContentLoaded", window.ClassSlider.register);
})();
window.addEventListener("load", function (e, i) {
  if (!/Mobi|Tablet|Android/.test(navigator.userAgent)) return;
  e = document.querySelectorAll("*[data-fix-mobile-height]");
  for (i = 0; i < e.length; i++) {
    e[i].style.maxHeight =
      e[i].style.minHeight =
      e[i].style.height =
        e[i].offsetHeight + "px";
  }
});
function isMobile() {
  return /Mobi|Tablet|Android/.test(navigator.userAgent);
}
document.addEventListener("DOMContentLoaded", function () {
  if (!("objectFit" in document.body.style)) {
    var els = document.querySelectorAll("[data-object-fit]");
    for (var i = 0; i < els.length; i++) {
      var style = els[i].getAttribute("data-object-fit");
      var img = els[i].querySelector("img");
      if (img) {
        els[i].style.backgroundImage = "url(" + img.getAttribute("src") + ")";
        els[i].style.backgroundSize = style || "cover";
        img.style.opacity = 0;
      }
    }
  }
});
!(function (_) {
  window.on = function (a, b) {
    a = a.split(" ");
    a[1] &&
      document.addEventListener(a[0], function (e, c) {
        (c = e.target.closest(a[1])) && b.call(c, e);
      });
    (_[a[0]] || (_[a[0]] = [])).push(b);
  };
  on.trigger = function (a, b, c, d) {
    for (d = -1, c = [].concat(_[a]); c[++d]; ) c[d](b);
  };
})({});
(function (t) {
  function draw() {
    on.trigger("draw");
  }
  on("ready", draw);
  window.addEventListener("load", draw);
  window.addEventListener("resize", function () {
    clearTimeout(t);
    t = setTimeout(draw, 100);
  });
  setInterval(draw, 2000);
  document.addEventListener("DOMContentLoaded", function () {
    on.trigger("ready");
  });
})();
function onSwipe(el, dir, cb, w, x, y, z) {
  for (y in { touchend: 0, touchstart: 0 })
    el.addEventListener(y, function (ev) {
      w = ev.changedTouches[0];
      ev.type[5] == "e" &&
        (y = Math.abs)((z = x[0] - w.pageX)) > y(x[1] - w.pageY) &&
        (dir[0] == "l") == z > 0 &&
        y(z) > 42 &&
        cb();
      x = [w.pageX, w.pageY];
    });
}
function query(s, c) {
  return (c || document).querySelector(s);
}
function queryAll(s, c) {
  return Array.apply(0, (c || document).querySelectorAll(s));
}
!(function (a, b, c) {
  "use strict";
  function d(c) {
    if (
      ((e = b.documentElement),
      (f = b.body),
      T(),
      (ha = this),
      (c = c || {}),
      (ma = c.constants || {}),
      c.easing)
    )
      for (var d in c.easing) W[d] = c.easing[d];
    (ta = c.edgeStrategy || "set"),
      (ka = {
        beforerender: c.beforerender,
        render: c.render,
        keyframe: c.keyframe,
      }),
      (la = c.forceHeight !== !1),
      la && (Ka = c.scale || 1),
      (na = c.mobileDeceleration || y),
      (pa = c.smoothScrolling !== !1),
      (qa = c.smoothScrollingDuration || A),
      (ra = { targetTop: ha.getScrollTop() }),
      (Sa = (
        c.mobileCheck ||
        function () {
          return /Android|iPhone|iPad|iPod|BlackBerry/i.test(
            navigator.userAgent || navigator.vendor || a.opera
          );
        }
      )()),
      Sa
        ? ((ja = b.getElementById(c.skrollrBody || z)),
          ja && ga(),
          X(),
          Ea(e, [s, v], [t]))
        : Ea(e, [s, u], [t]),
      ha.refresh(),
      wa(a, "resize orientationchange", function () {
        var a = e.clientWidth,
          b = e.clientHeight;
        (b !== Pa || a !== Oa) && ((Pa = b), (Oa = a), (Qa = !0));
      });
    var g = U();
    return (
      (function h() {
        $(), (va = g(h));
      })(),
      ha
    );
  }
  var e,
    f,
    g = {
      get: function () {
        return ha;
      },
      init: function (a) {
        return ha || new d(a);
      },
      VERSION: "0.6.29",
    },
    h = Object.prototype.hasOwnProperty,
    i = a.Math,
    j = a.getComputedStyle,
    k = "touchstart",
    l = "touchmove",
    m = "touchcancel",
    n = "touchend",
    o = "skrollable",
    p = o + "-before",
    q = o + "-between",
    r = o + "-after",
    s = "skrollr",
    t = "no-" + s,
    u = s + "-desktop",
    v = s + "-mobile",
    w = "linear",
    x = 1e3,
    y = 0.004,
    z = "skrollr-body",
    A = 200,
    B = "start",
    C = "end",
    D = "center",
    E = "bottom",
    F = "___skrollable_id",
    G = /^(?:input|textarea|button|select)$/i,
    H = /^\s+|\s+$/g,
    I =
      /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    K = /^(@?[a-z\-]+)\[(\w+)\]$/,
    L = /-([a-z0-9_])/g,
    M = function (a, b) {
      return b.toUpperCase();
    },
    N = /[\-+]?[\d]*\.?[\d]+/g,
    O = /\{\?\}/g,
    P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    Q = /[a-z\-]+-gradient/g,
    R = "",
    S = "",
    T = function () {
      var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
      if (j) {
        var b = j(f, null);
        for (var c in b)
          if ((R = c.match(a) || (+c == c && b[c].match(a)))) break;
        if (!R) return void (R = S = "");
        (R = R[0]),
          "-" === R.slice(0, 1)
            ? ((S = R),
              (R = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O",
              }[R]))
            : (S = "-" + R.toLowerCase() + "-");
      }
    },
    U = function () {
      var b =
          a.requestAnimationFrame ||
          a[R.toLowerCase() + "RequestAnimationFrame"],
        c = Ha();
      return (
        (Sa || !b) &&
          (b = function (b) {
            var d = Ha() - c,
              e = i.max(0, 1e3 / 60 - d);
            return a.setTimeout(function () {
              (c = Ha()), b();
            }, e);
          }),
        b
      );
    },
    V = function () {
      var b =
        a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
      return (
        (Sa || !b) &&
          (b = function (b) {
            return a.clearTimeout(b);
          }),
        b
      );
    },
    W = {
      begin: function () {
        return 0;
      },
      end: function () {
        return 1;
      },
      linear: function (a) {
        return a;
      },
      quadratic: function (a) {
        return a * a;
      },
      cubic: function (a) {
        return a * a * a;
      },
      swing: function (a) {
        return -i.cos(a * i.PI) / 2 + 0.5;
      },
      sqrt: function (a) {
        return i.sqrt(a);
      },
      outCubic: function (a) {
        return i.pow(a - 1, 3) + 1;
      },
      bounce: function (a) {
        var b;
        if (0.5083 >= a) b = 3;
        else if (0.8489 >= a) b = 9;
        else if (0.96208 >= a) b = 27;
        else {
          if (!(0.99981 >= a)) return 1;
          b = 91;
        }
        return 1 - i.abs((3 * i.cos(a * b * 1.028)) / b);
      },
    };
  (d.prototype.refresh = function (a) {
    var d,
      e,
      f = !1;
    for (
      a === c
        ? ((f = !0), (ia = []), (Ra = 0), (a = b.getElementsByTagName("*")))
        : a.length === c && (a = [a]),
        d = 0,
        e = a.length;
      e > d;
      d++
    ) {
      var g = a[d],
        h = g,
        i = [],
        j = pa,
        k = ta,
        l = !1;
      if ((f && F in g && delete g[F], g.attributes)) {
        for (var m = 0, n = g.attributes.length; n > m; m++) {
          var p = g.attributes[m];
          if ("data-anchor-target" !== p.name)
            if ("data-smooth-scrolling" !== p.name)
              if ("data-edge-strategy" !== p.name)
                if ("data-emit-events" !== p.name) {
                  var q = p.name.match(I);
                  if (null !== q) {
                    var r = {
                      props: p.value,
                      element: g,
                      eventType: p.name.replace(L, M),
                    };
                    i.push(r);
                    var s = q[1];
                    s && (r.constant = s.substr(1));
                    var t = q[2];
                    /p$/.test(t)
                      ? ((r.isPercentage = !0),
                        (r.offset = (0 | t.slice(0, -1)) / 100))
                      : (r.offset = 0 | t);
                    var u = q[3],
                      v = q[4] || u;
                    u && u !== B && u !== C
                      ? ((r.mode = "relative"), (r.anchors = [u, v]))
                      : ((r.mode = "absolute"),
                        u === C
                          ? (r.isEnd = !0)
                          : r.isPercentage || (r.offset = r.offset * Ka));
                  }
                } else l = !0;
              else k = p.value;
            else j = "off" !== p.value;
          else if (((h = b.querySelector(p.value)), null === h))
            throw 'Unable to find anchor target "' + p.value + '"';
        }
        if (i.length) {
          var w, x, y;
          !f && F in g
            ? ((y = g[F]), (w = ia[y].styleAttr), (x = ia[y].classAttr))
            : ((y = g[F] = Ra++), (w = g.style.cssText), (x = Da(g))),
            (ia[y] = {
              element: g,
              styleAttr: w,
              classAttr: x,
              anchorTarget: h,
              keyFrames: i,
              smoothScrolling: j,
              edgeStrategy: k,
              emitEvents: l,
              lastFrameIndex: -1,
            }),
            Ea(g, [o], []);
        }
      }
    }
    for (Aa(), d = 0, e = a.length; e > d; d++) {
      var z = ia[a[d][F]];
      z !== c && (_(z), ba(z));
    }
    return ha;
  }),
    (d.prototype.relativeToAbsolute = function (a, b, c) {
      var d = e.clientHeight,
        f = a.getBoundingClientRect(),
        g = f.top,
        h = f.bottom - f.top;
      return (
        b === E ? (g -= d) : b === D && (g -= d / 2),
        c === E ? (g += h) : c === D && (g += h / 2),
        (g += ha.getScrollTop()),
        (g + 0.5) | 0
      );
    }),
    (d.prototype.animateTo = function (a, b) {
      b = b || {};
      var d = Ha(),
        e = ha.getScrollTop(),
        f = b.duration === c ? x : b.duration;
      return (
        (oa = {
          startTop: e,
          topDiff: a - e,
          targetTop: a,
          duration: f,
          startTime: d,
          endTime: d + f,
          easing: W[b.easing || w],
          done: b.done,
        }),
        oa.topDiff || (oa.done && oa.done.call(ha, !1), (oa = c)),
        ha
      );
    }),
    (d.prototype.stopAnimateTo = function () {
      oa && oa.done && oa.done.call(ha, !0), (oa = c);
    }),
    (d.prototype.isAnimatingTo = function () {
      return !!oa;
    }),
    (d.prototype.isMobile = function () {
      return Sa;
    }),
    (d.prototype.setScrollTop = function (b, c) {
      return (
        (sa = c === !0),
        Sa ? (Ta = i.min(i.max(b, 0), Ja)) : a.scrollTo(0, b),
        ha
      );
    }),
    (d.prototype.getScrollTop = function () {
      return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0;
    }),
    (d.prototype.getMaxScrollTop = function () {
      return Ja;
    }),
    (d.prototype.on = function (a, b) {
      return (ka[a] = b), ha;
    }),
    (d.prototype.off = function (a) {
      return delete ka[a], ha;
    }),
    (d.prototype.destroy = function () {
      var a = V();
      a(va), ya(), Ea(e, [t], [s, u, v]);
      for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
      (e.style.overflow = f.style.overflow = ""),
        (e.style.height = f.style.height = ""),
        ja && g.setStyle(ja, "transform", "none"),
        (ha = c),
        (ja = c),
        (ka = c),
        (la = c),
        (Ja = 0),
        (Ka = 1),
        (ma = c),
        (na = c),
        (La = "down"),
        (Ma = -1),
        (Oa = 0),
        (Pa = 0),
        (Qa = !1),
        (oa = c),
        (pa = c),
        (qa = c),
        (ra = c),
        (sa = c),
        (Ra = 0),
        (ta = c),
        (Sa = !1),
        (Ta = 0),
        (ua = c);
    });
  var X = function () {
      var d, g, h, j, o, p, q, r, s, t, u, v;
      wa(e, [k, l, m, n].join(" "), function (a) {
        var e = a.changedTouches[0];
        for (j = a.target; 3 === j.nodeType; ) j = j.parentNode;
        switch (
          ((o = e.clientY),
          (p = e.clientX),
          (t = a.timeStamp),
          G.test(j.tagName) || a.preventDefault(),
          a.type)
        ) {
          case k:
            d && d.blur(),
              ha.stopAnimateTo(),
              (d = j),
              (g = q = o),
              (h = p),
              (s = t);
            break;
          case l:
            G.test(j.tagName) && b.activeElement !== j && a.preventDefault(),
              (r = o - q),
              (v = t - u),
              ha.setScrollTop(Ta - r, !0),
              (q = o),
              (u = t);
            break;
          default:
          case m:
          case n:
            var f = g - o,
              w = h - p,
              x = w * w + f * f;
            if (49 > x) {
              if (!G.test(d.tagName)) {
                d.focus();
                var y = b.createEvent("MouseEvents");
                y.initMouseEvent(
                  "click",
                  !0,
                  !0,
                  a.view,
                  1,
                  e.screenX,
                  e.screenY,
                  e.clientX,
                  e.clientY,
                  a.ctrlKey,
                  a.altKey,
                  a.shiftKey,
                  a.metaKey,
                  0,
                  null
                ),
                  d.dispatchEvent(y);
              }
              return;
            }
            d = c;
            var z = r / v;
            z = i.max(i.min(z, 3), -3);
            var A = i.abs(z / na),
              B = z * A + 0.5 * na * A * A,
              C = ha.getScrollTop() - B,
              D = 0;
            C > Ja
              ? ((D = (Ja - C) / B), (C = Ja))
              : 0 > C && ((D = -C / B), (C = 0)),
              (A *= 1 - D),
              ha.animateTo((C + 0.5) | 0, { easing: "outCubic", duration: A });
        }
      }),
        a.scrollTo(0, 0),
        (e.style.overflow = f.style.overflow = "hidden");
    },
    Y = function () {
      var a,
        b,
        c,
        d,
        f,
        g,
        h,
        j,
        k,
        l,
        m,
        n = e.clientHeight,
        o = Ba();
      for (j = 0, k = ia.length; k > j; j++)
        for (
          a = ia[j],
            b = a.element,
            c = a.anchorTarget,
            d = a.keyFrames,
            f = 0,
            g = d.length;
          g > f;
          f++
        )
          (h = d[f]),
            (l = h.offset),
            (m = o[h.constant] || 0),
            (h.frame = l),
            h.isPercentage && ((l *= n), (h.frame = l)),
            "relative" === h.mode &&
              (fa(b),
              (h.frame =
                ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l),
              fa(b, !0)),
            (h.frame += m),
            la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
      for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
        for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++)
          (h = d[f]),
            (m = o[h.constant] || 0),
            h.isEnd && (h.frame = Ja - h.offset + m);
        a.keyFrames.sort(Ia);
      }
    },
    Z = function (a, b) {
      for (var c = 0, d = ia.length; d > c; c++) {
        var e,
          f,
          i = ia[c],
          j = i.element,
          k = i.smoothScrolling ? a : b,
          l = i.keyFrames,
          m = l.length,
          n = l[0],
          s = l[l.length - 1],
          t = k < n.frame,
          u = k > s.frame,
          v = t ? n : s,
          w = i.emitEvents,
          x = i.lastFrameIndex;
        if (t || u) {
          if ((t && -1 === i.edge) || (u && 1 === i.edge)) continue;
          switch (
            (t
              ? (Ea(j, [p], [r, q]),
                w &&
                  x > -1 &&
                  (za(j, n.eventType, La), (i.lastFrameIndex = -1)))
              : (Ea(j, [r], [p, q]),
                w && m > x && (za(j, s.eventType, La), (i.lastFrameIndex = m))),
            (i.edge = t ? -1 : 1),
            i.edgeStrategy)
          ) {
            case "reset":
              fa(j);
              continue;
            case "ease":
              k = v.frame;
              break;
            default:
            case "set":
              var y = v.props;
              for (e in y)
                h.call(y, e) &&
                  ((f = ea(y[e].value)),
                  0 === e.indexOf("@")
                    ? j.setAttribute(e.substr(1), f)
                    : g.setStyle(j, e, f));
              continue;
          }
        } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), (i.edge = 0));
        for (var z = 0; m - 1 > z; z++)
          if (k >= l[z].frame && k <= l[z + 1].frame) {
            var A = l[z],
              B = l[z + 1];
            for (e in A.props)
              if (h.call(A.props, e)) {
                var C = (k - A.frame) / (B.frame - A.frame);
                (C = A.props[e].easing(C)),
                  (f = da(A.props[e].value, B.props[e].value, C)),
                  (f = ea(f)),
                  0 === e.indexOf("@")
                    ? j.setAttribute(e.substr(1), f)
                    : g.setStyle(j, e, f);
              }
            w &&
              x !== z &&
              ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La),
              (i.lastFrameIndex = z));
            break;
          }
      }
    },
    $ = function () {
      Qa && ((Qa = !1), Aa());
      var a,
        b,
        d = ha.getScrollTop(),
        e = Ha();
      if (oa)
        e >= oa.endTime
          ? ((d = oa.targetTop), (a = oa.done), (oa = c))
          : ((b = oa.easing((e - oa.startTime) / oa.duration)),
            (d = (oa.startTop + b * oa.topDiff) | 0)),
          ha.setScrollTop(d, !0);
      else if (!sa) {
        var f = ra.targetTop - d;
        f &&
          (ra = {
            startTop: Ma,
            topDiff: d - Ma,
            targetTop: d,
            startTime: Na,
            endTime: Na + qa,
          }),
          e <= ra.endTime &&
            ((b = W.sqrt((e - ra.startTime) / qa)),
            (d = (ra.startTop + b * ra.topDiff) | 0));
      }
      if (sa || Ma !== d) {
        (La = d > Ma ? "down" : Ma > d ? "up" : La), (sa = !1);
        var h = { curTop: d, lastTop: Ma, maxTop: Ja, direction: La },
          i = ka.beforerender && ka.beforerender.call(ha, h);
        i !== !1 &&
          (Z(d, ha.getScrollTop()),
          Sa &&
            ja &&
            g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua),
          (Ma = d),
          ka.render && ka.render.call(ha, h)),
          a && a.call(ha, !1);
      }
      Na = e;
    },
    _ = function (a) {
      for (var b = 0, c = a.keyFrames.length; c > b; b++) {
        for (
          var d, e, f, g, h = a.keyFrames[b], i = {};
          null !== (g = J.exec(h.props));

        )
          (f = g[1]),
            (e = g[2]),
            (d = f.match(K)),
            null !== d ? ((f = d[1]), (d = d[2])) : (d = w),
            (e = e.indexOf("!") ? aa(e) : [e.slice(1)]),
            (i[f] = { value: e, easing: W[d] });
        h.props = i;
      }
    },
    aa = function (a) {
      var b = [];
      return (
        (P.lastIndex = 0),
        (a = a.replace(P, function (a) {
          return a.replace(N, function (a) {
            return (a / 255) * 100 + "%";
          });
        })),
        S &&
          ((Q.lastIndex = 0),
          (a = a.replace(Q, function (a) {
            return S + a;
          }))),
        (a = a.replace(N, function (a) {
          return b.push(+a), "{?}";
        })),
        b.unshift(a),
        b
      );
    },
    ba = function (a) {
      var b,
        c,
        d = {};
      for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
      for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--)
        ca(a.keyFrames[b], d);
    },
    ca = function (a, b) {
      var c;
      for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
      for (c in a.props) b[c] = a.props[c];
    },
    da = function (a, b, c) {
      var d,
        e = a.length;
      if (e !== b.length)
        throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
      var f = [a[0]];
      for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
      return f;
    },
    ea = function (a) {
      var b = 1;
      return (
        (O.lastIndex = 0),
        a[0].replace(O, function () {
          return a[b++];
        })
      );
    },
    fa = function (a, b) {
      a = [].concat(a);
      for (var c, d, e = 0, f = a.length; f > e; e++)
        (d = a[e]),
          (c = ia[d[F]]),
          c &&
            (b
              ? ((d.style.cssText = c.dirtyStyleAttr), Ea(d, c.dirtyClassAttr))
              : ((c.dirtyStyleAttr = d.style.cssText),
                (c.dirtyClassAttr = Da(d)),
                (d.style.cssText = c.styleAttr),
                Ea(d, c.classAttr)));
    },
    ga = function () {
      (ua = "translateZ(0)"), g.setStyle(ja, "transform", ua);
      var a = j(ja),
        b = a.getPropertyValue("transform"),
        c = a.getPropertyValue(S + "transform"),
        d = (b && "none" !== b) || (c && "none" !== c);
      d || (ua = "");
    };
  g.setStyle = function (a, b, c) {
    var d = a.style;
    if (((b = b.replace(L, M).replace("-", "")), "zIndex" === b))
      isNaN(c) ? (d[b] = c) : (d[b] = "" + (0 | c));
    else if ("float" === b) d.styleFloat = d.cssFloat = c;
    else
      try {
        R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), (d[b] = c);
      } catch (e) {}
  };
  var ha,
    ia,
    ja,
    ka,
    la,
    ma,
    na,
    oa,
    pa,
    qa,
    ra,
    sa,
    ta,
    ua,
    va,
    wa = (g.addEvent = function (b, c, d) {
      var e = function (b) {
        return (
          (b = b || a.event),
          b.target || (b.target = b.srcElement),
          b.preventDefault ||
            (b.preventDefault = function () {
              (b.returnValue = !1), (b.defaultPrevented = !0);
            }),
          d.call(this, b)
        );
      };
      c = c.split(" ");
      for (var f, g = 0, h = c.length; h > g; g++)
        (f = c[g]),
          b.addEventListener
            ? b.addEventListener(f, d, !1)
            : b.attachEvent("on" + f, e),
          Ua.push({ element: b, name: f, listener: d });
    }),
    xa = (g.removeEvent = function (a, b, c) {
      b = b.split(" ");
      for (var d = 0, e = b.length; e > d; d++)
        a.removeEventListener
          ? a.removeEventListener(b[d], c, !1)
          : a.detachEvent("on" + b[d], c);
    }),
    ya = function () {
      for (var a, b = 0, c = Ua.length; c > b; b++)
        (a = Ua[b]), xa(a.element, a.name, a.listener);
      Ua = [];
    },
    za = function (a, b, c) {
      ka.keyframe && ka.keyframe.call(ha, a, b, c);
    },
    Aa = function () {
      var a = ha.getScrollTop();
      (Ja = 0),
        la && !Sa && (f.style.height = ""),
        Y(),
        la && !Sa && (f.style.height = Ja + e.clientHeight + "px"),
        Sa
          ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja))
          : ha.setScrollTop(a, !0),
        (sa = !0);
    },
    Ba = function () {
      var a,
        b,
        c = e.clientHeight,
        d = {};
      for (a in ma)
        (b = ma[a]),
          "function" == typeof b
            ? (b = b.call(ha))
            : /p$/.test(b) && (b = (b.slice(0, -1) / 100) * c),
          (d[a] = b);
      return d;
    },
    Ca = function () {
      var a,
        b = 0;
      return (
        ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)),
        (a = i.max(
          b,
          f.scrollHeight,
          f.offsetHeight,
          e.scrollHeight,
          e.offsetHeight,
          e.clientHeight
        )),
        a - e.clientHeight
      );
    },
    Da = function (b) {
      var c = "className";
      return (
        a.SVGElement &&
          b instanceof a.SVGElement &&
          ((b = b[c]), (c = "baseVal")),
        b[c]
      );
    },
    Ea = function (b, d, e) {
      var f = "className";
      if (
        (a.SVGElement &&
          b instanceof a.SVGElement &&
          ((b = b[f]), (f = "baseVal")),
        e === c)
      )
        return void (b[f] = d);
      for (var g = b[f], h = 0, i = e.length; i > h; h++)
        g = Ga(g).replace(Ga(e[h]), " ");
      g = Fa(g);
      for (var j = 0, k = d.length; k > j; j++)
        -1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
      b[f] = Fa(g);
    },
    Fa = function (a) {
      return a.replace(H, "");
    },
    Ga = function (a) {
      return " " + a + " ";
    },
    Ha =
      Date.now ||
      function () {
        return +new Date();
      },
    Ia = function (a, b) {
      return a.frame - b.frame;
    },
    Ja = 0,
    Ka = 1,
    La = "down",
    Ma = -1,
    Na = Ha(),
    Oa = 0,
    Pa = 0,
    Qa = !1,
    Ra = 0,
    Sa = !1,
    Ta = 0,
    Ua = [];
  "function" == typeof define && define.amd
    ? define([], function () {
        return g;
      })
    : "undefined" != typeof module && module.exports
    ? (module.exports = g)
    : (a.skrollr = g);
})(window, document);
!(function () {
  function q(s) {
    return Array.apply(0, s + "" === s ? document.querySelectorAll(s) : s);
  }
  window.Slider = function (el, opt) {
    opt = opt || {};
    if (opt.name) window[opt.name] = this;
    el.style.overflow = "hidden";
    var self = this;
    el.innerHTML = "<div>" + el.innerHTML;
    var wrapper = (this.wrapper = el.firstChild);
    this.slides = q(wrapper.children);
    q(this.slides).forEach(function (el) {
      el.style.float = "left";
      el.style.width = 100.0 / self.slides.length + "%";
    });
    wrapper.style.width = this.slides.length * 100 + "%";
    this.show = function (index) {
      this.current = (this.slides.length + index) % this.slides.length;
      var position = (100.0 / this.slides.length) * this.current;
      wrapper.style.transition = ".3s";
      wrapper.style.transform =
        wrapper.style.webkitTransform =
        wrapper.style.msTransform =
          "translateX(-" + position + "%)";
      clearTimeout(this.timeout);
      opt.before && opt.before(this);
      opt.after &&
        setTimeout(function () {
          opt.after(self);
        }, 400);
      if (opt.speed) this.timeout = setTimeout(this.next, opt.speed);
    };
    this.next = function () {
      self.show(self.current + 1);
    };
    this.prev = function () {
      self.show(self.current - 1);
    };
    this.show((this.current = 0));
    var startTouch;
    for (i in { touchmove: 1, touchend: 1 }) {
      el.addEventListener(i, function (ev) {
        var touch = ev.changedTouches ? ev.changedTouches[0] : ev;
        var width = self.wrapper.parentNode.clientWidth;
        if (
          startTouch &&
          Math.abs(touch.pageX - startTouch[0]) >
            Math.abs(touch.pageY - startTouch[1])
        ) {
          var move = touch.pageX - startTouch[0];
          var position = (100.0 / self.slides.length) * self.current;
          self.wrapper.style.transition = "";
          self.wrapper.style.transform =
            "translateX(calc(" + move + "px - " + position + "%))";
          ev.preventDefault();
        } else {
          var move = 0;
          self.show(self.current);
          startTouch = null;
        }
        if (ev.type == "touchend") {
          if (Math.abs(move) > 32) {
            self.show(self.current + (move > 0 ? -1 : 1));
          } else {
            self.show(self.current);
          }
        }
      });
    }
    el.addEventListener("touchstart", function (ev) {
      var t = ev.changedTouches[0];
      startTouch = [t.pageX, t.pageY];
    });
  };
  function createSliders() {
    q("*[data-slider]").forEach(function (el) {
      var opt = el.getAttribute("data-slider");
      opt && eval("var opt = {" + opt + "}");
      new Slider(el, opt);
    });
  }
  document.addEventListener("DOMContentLoaded", createSliders);
})();
function template(a, b) {
  return function (c, d) {
    return a.replace(/#{([^}]*)}/g, function (a, e) {
      return Function("x", "with(x)return " + e).call(c, d || b || {});
    });
  };
}
function middle() {
  [].forEach.call(
    document.querySelectorAll("*[data-middle]"),
    function (e, s, m) {
      (s = e.parentNode.style).paddingTop = "";
      s.paddingTop =
        (e.parentNode.clientHeight -
          e.offsetHeight -
          parseFloat((m = window.getComputedStyle(e)).marginTop) -
          parseFloat(m.marginBottom)) /
          2 +
        "px";
    }
  );
}
function sameHeight(e, a, i, t) {
  a = t = {};
  e = document.querySelectorAll("*[data-same-height]>*");
  for (i = 0; i < e.length; i++) {
    e[i].style.height = "";
    t[i] = e[i].getBoundingClientRect().top;
    if (window.getComputedStyle(e[i]).getPropertyValue("float") != "none") {
      a[t[i]] = Math.max(e[i].clientHeight, a[t[i]] || 0);
    }
  }
  for (i = 0; i < e.length; i++) {
    if (a[t[i]]) {
      e[i].style.height = a[t[i]] + "px";
    }
  }
}
on("draw", sameHeight);
on("draw", middle);
function baseline(reset) {
  var els = document.querySelectorAll("[data-baseline]");
  var style = window.getComputedStyle(document.body);
  var lineHeight = parseInt(style.getPropertyValue("line-height"));
  function resize(el, round) {
    el.style.height = "";
    el.style.minHeight = "";
    if (reset !== true) {
      el.style.minHeight = "";
      var m = round ? "round" : "ceil";
      var height = lineHeight * Math[m](el.offsetHeight / lineHeight);
      el.style.height = height + "px";
      el.style.minHeight = "0";
    }
  }
  for (var i = 0; i < els.length; ++i) {
    var isImage = els[i].nodeName == "IMG";
    if (isImage && !els[i].complete) {
      els[i].addEventListener("load", resize.bind(0, els[i], isImage));
    } else {
      resize(els[i], isImage);
    }
  }
}
(function (t) {
  document.addEventListener("DOMContentLoaded", baseline);
  window.addEventListener("load", baseline);
  window.addEventListener("resize", function () {
    clearTimeout(t);
    t = setTimeout(baseline.bind(null, true), 20);
  });
})();
document.addEventListener("click", function (ev) {
  var button = document.querySelector(".burgerButton");
  if (ev.target == button || ev.target.parentNode == button) {
    ev.preventDefault();
    button.parentNode.classList.toggle("isBurgerOpen");
  }
});
on("ready", function () {
  queryAll("*[data-clickable]").forEach(function (el) {
    var link = el.querySelector("a");
    var url = el.getAttribute("data-clickable");
    if (url || link) {
      el.style.cursor = "pointer";
      el.addEventListener("click", function (ev) {
        if (!ev.target.closest("a")) {
          ev.preventDefault();
          if (url) {
            location.href = url;
          } else {
            link.click();
          }
        }
      });
    }
  });
});
on("ready", function (s) {
  s = document.body.style;
  ua = window.navigator.userAgent;
  "webkitBoxReflect" in s && document.body.classList.add("cssReflect");
  ua.indexOf("MSIE ") && document.body.classList.add("isIE");
});
on("click a", function (ev) {
  if (
    this.href &&
    !(
      this.href.indexOf(location.protocol + "//" + location.hostname) === 0 ||
      this.href.match(/^[#\/\.]/)
    )
  ) {
    window.open(this.href);
    ev.preventDefault();
  }
});
function homeSliderAfter(slider) {
  var dots = queryAll(".jumboDots>*");
  dots.forEach(function (dot, i) {
    dot.classList[i == slider.current ? "add" : "remove"]("isJumboDotActive");
  });
}
on("ready", function () {
  var slider = query(".jumboSlider");
  if (slider) {
    window.jumboSlider = new ClassSlider(slider, {
      speed: 4000,
      after: homeSliderAfter,
    });
  }
});
on("click .jumboDots>*", function (ev) {
  var n = Array.apply(0, this.parentNode.children).indexOf(this);
  jumboSlider.show(n);
});
(function () {
  var s;
  document.addEventListener("DOMContentLoaded", function () {
    if (!isMobile()) {
      s = window.skrollr.init({
        forceHeight: false,
        smoothScrollingDuration: 80,
      });
    }
  });
  window.addEventListener("load", function () {
    s.refresh();
  });
})();
window.smoothScroll = (function () {
  if (
    document.querySelectorAll === void 0 ||
    window.pageYOffset === void 0 ||
    history.pushState === void 0
  ) {
    return;
  }
  var getTop = function (element) {
    if (element.nodeName === "HTML") return -window.pageYOffset;
    return element.getBoundingClientRect().top + window.pageYOffset;
  };
  var easeInOutCubic = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  var position = function (start, end, elapsed, duration) {
    if (elapsed > duration) return end;
    return start + (end - start) * easeInOutCubic(elapsed / duration);
  };
  var smoothScroll = function (el, duration, callback) {
    duration = duration || 500;
    var start = window.pageYOffset;
    if (typeof el === "number") {
      var end = parseInt(el);
    } else {
      var end = getTop(el);
    }
    var clock = Date.now();
    var requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (fn) {
        window.setTimeout(fn, 15);
      };
    var step = function () {
      var elapsed = Date.now() - clock;
      window.scroll(0, position(start, end, elapsed, duration));
      if (elapsed > duration) {
        if (typeof callback === "function") {
          callback(el);
        }
      } else {
        requestAnimationFrame(step);
      }
    };
    step();
  };
  var linkHandler = function (ev) {
    ev.preventDefault();
    var button = document.querySelector(".burgerButton");
    button.parentNode.classList.toggle("isBurgerOpen");
    if (location.hash !== this.hash)
      window.history.pushState(null, null, this.hash);
    smoothScroll(
      document.getElementById(this.hash.substring(1)),
      900,
      function (el) {
        location.replace("#" + el.id);
      }
    );
  };
  document.addEventListener("DOMContentLoaded", function () {
    var internal = document.querySelectorAll('a[href^="#"]:not([href="#"])'),
      a;
    for (var i = internal.length; (a = internal[--i]); ) {
      a.addEventListener("click", linkHandler, false);
    }
  });
  return smoothScroll;
})();
on("click *[data-toggle]", function (ev) {
  document.documentElement.classList.toggle(this.getAttribute("data-toggle"));
});
document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  var el = query("#tweets");
  var config = {
    id: "708315523059154946",
    maxTweets: 4,
    dataOnly: true,
    customCallback: function (tweets) {
      var out = "";
      tweets.forEach(function (tweet) {
        var author = document.createElement("p");
        author.innerHTML = tweet.author;
        author = author.querySelector(".TweetAuthor-screenName");
        tweet.nick = author ? author.textContent : tweet.name;
        out += template(
          '<div class=tweet><a href="#{this.permalinkURL}" class=tweetTitle><span class=tweetName>#{this.nick}</span> / #{this.time}</a><div  class=tweetText>#{this.tweet}' +
            "</div></div>"
        )(tweet);
      });
      el.innerHTML = out;
      var els = el.children;
      Array.apply(0, el.children).forEach(function (el) {
        el.style.cursor = "pointer";
        el.addEventListener("click", function (ev) {
          el.querySelector("a").click();
        });
      });
      new ClassSlider(el, { speed: 4000 });
    },
  };
  twitterFetcher.fetch(config);
});
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var style = window.getComputedStyle(document.body);
    var base = parseInt(style.getPropertyValue("line-height"));
    var color = "rgba(255, 170, 238, 0.3)";
    var style =
      'body.baselineDebugOn { position: relative }\
            body.baselineDebugOn:after {\
                position: absolute;\
                width: auto;\
                height: auto;\
                z-index: 9999;\
                content: "";\
                display: block;\
                pointer-events: none;\
                top: 0;\
                right: 0;\
                bottom: 0;\
                left: 0;\
                background: repeating-linear-gradient(to bottom, transparent 0, transparent ' +
      (base - 1) +
      "px, " +
      color +
      " " +
      (base - 1) +
      "px, " +
      color +
      " " +
      base +
      "px);\
            }";
    var el = document.createElement("style");
    el.textContent = style;
    document.head.appendChild(el);
    if (
      window.localStorage &&
      window.localStorage.getItem("baselineDebugOn") == "1"
    ) {
      document.body.classList.add("baselineDebugOn");
    }
    if (window.baseline) {
    }
  });
  document.addEventListener("keydown", function (ev) {
    var tag = ev.target.tagName.toLowerCase();
    if (ev.key === "g" && tag != "input" && tag != "textarea") {
      document.body.classList.toggle("baselineDebugOn");
      if (window.localStorage) {
        var on = document.body.classList.contains("baselineDebugOn");
        window.localStorage.setItem("baselineDebugOn", on ? "1" : "");
        if (on) {
          baseline();
        }
      }
    }
  });
})();
