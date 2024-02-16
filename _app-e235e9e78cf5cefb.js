(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        242: function(e, t, n) {
            var r = {
                "./ar/common": [1389, 111],
                "./ar/common.json": [1389, 111],
                "./ar/home": [609, 609],
                "./ar/home.json": [609, 609],
                "./en/common": [464, 464],
                "./en/common.json": [464, 464],
                "./en/home": [2482, 482],
                "./en/home.json": [2482, 482],
                "./es/common": [357, 357],
                "./es/common.json": [357, 357],
                "./es/home": [6891, 891],
                "./es/home.json": [6891, 891],
                "./fr/common": [5167, 167],
                "./fr/common.json": [5167, 167],
                "./fr/home": [1660, 660],
                "./fr/home.json": [1660, 660]
            };

            function o(e) {
                if (!n.o(r, e)) return Promise.resolve().then(function() {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                });
                var t = r[e],
                    o = t[0];
                return n.e(t[1]).then(function() {
                    return n.t(o, 19)
                })
            }
            o.keys = function() {
                return Object.keys(r)
            }, o.id = 242, e.exports = o
        },
        6580: function(e, t, n) {
            "use strict";
            var r = n(2466);
            t.Z = (0, r.createContext)({
                t: function(e) {
                    return Array.isArray(e) ? e[0] : e
                },
                lang: ""
            })
        },
        8082: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(2466),
                o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                a = n(6580),
                i = function() {
                    return (i = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function l(e) {
                var t = (0, r.useContext)(a.Z);
                return (0, r.useMemo)(function() {
                    var n;
                    return i(i({}, t), {
                        t: (n = t.t, "string" != typeof e ? n : function(t, r, a) {
                            return n(t, r, o({
                                ns: e
                            }, a))
                        })
                    })
                }, [t, e])
            }
        },
        4926: function(e, t, n) {
            e.exports = n(9138)
        },
        2493: function(e, t, n) {
            e.exports = n(14)
        },
        6731: function(e, t, n) {
            e.exports = n(3441)
        },
        1395: function(e, t, n) {
            e.exports = n(5670)
        },
        7859: function(e) {
            var t, n, r, o = e.exports = {};

            function a() {
                throw Error("setTimeout has not been defined")
            }

            function i() {
                throw Error("clearTimeout has not been defined")
            }

            function l(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (r) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : a
                } catch (e) {
                    t = a
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : i
                } catch (r) {
                    n = i
                }
            }();
            var c = [],
                s = !1,
                u = -1;

            function f() {
                s && r && (s = !1, r.length ? c = r.concat(c) : u = -1, c.length && d())
            }

            function d() {
                if (!s) {
                    var e = l(f);
                    s = !0;
                    for (var t = c.length; t;) {
                        for (r = c, c = []; ++u < t;) r && r[u].run();
                        u = -1, t = c.length
                    }
                    r = null, s = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (r) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function p(e, t) {
                this.fun = e, this.array = t
            }

            function m() {}
            o.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new p(e, t)), 1 !== c.length || s || l(d)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
                return []
            }, o.binding = function(e) {
                throw Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(e) {
                throw Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        },
        9773: function(e, t, n) {
            "use strict";
            n.d(t, {
                pm: function() {
                    return d
                },
                xX: function() {
                    return p
                }
            });
            var r, o = n(2466),
                a = n(7859),
                i = function() {
                    return (i = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                l = function(e) {
                    var t;
                    e ? function(e) {
                        if (e)
                            for (; e.lastChild;) e.lastChild.remove()
                    }("string" == typeof e ? document.getElementById(e) : e) : (t = document.querySelector(".grecaptcha-badge")) && t.parentNode && document.body.removeChild(t.parentNode)
                },
                c = function(e, t) {
                    l(t), window.___grecaptcha_cfg = void 0;
                    var n, r = document.querySelector("#" + e);
                    r && r.remove(), (n = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]')) && n.remove()
                },
                s = function(e) {
                    var t = e.render,
                        n = e.onLoadCallbackName,
                        r = e.language,
                        o = e.onLoad,
                        a = e.useRecaptchaNet,
                        i = e.useEnterprise,
                        l = e.scriptProps,
                        c = void 0 === l ? {} : l,
                        s = c.nonce,
                        u = void 0 === s ? "" : s,
                        f = c.defer,
                        d = c.async,
                        p = c.id,
                        m = c.appendTo,
                        h = (void 0 === p ? "" : p) || "google-recaptcha-v3";
                    if (document.querySelector("#" + h)) o();
                    else {
                        var g, v = "https://www." + ((g = {
                                useEnterprise: i,
                                useRecaptchaNet: a
                            }).useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (g.useEnterprise ? "enterprise.js" : "api.js"),
                            y = document.createElement("script");
                        y.id = h, y.src = v + "?render=" + t + ("explicit" === t ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), u && (y.nonce = u), y.defer = !!(void 0 !== f && f), y.async = !!(void 0 !== d && d), y.onload = o, ("body" === m ? document.body : document.getElementsByTagName("head")[0]).appendChild(y)
                    }
                },
                u = function(e) {
                    void 0 === a || a.env, console.warn(e)
                };
            (r || (r = {})).SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
            var f = (0, o.createContext)({
                executeRecaptcha: function() {
                    throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")
                }
            });

            function d(e) {
                var t = e.reCaptchaKey,
                    n = e.useEnterprise,
                    a = void 0 !== n && n,
                    l = e.useRecaptchaNet,
                    d = void 0 !== l && l,
                    p = e.scriptProps,
                    m = e.language,
                    h = e.container,
                    g = e.children,
                    v = (0, o.useState)(null),
                    y = v[0],
                    x = v[1],
                    b = (0, o.useRef)(t),
                    w = JSON.stringify(p),
                    A = JSON.stringify(null == h ? void 0 : h.parameters);
                (0, o.useEffect)(function() {
                    if (t) {
                        var e = (null == p ? void 0 : p.id) || "google-recaptcha-v3",
                            n = (null == p ? void 0 : p.onLoadCallbackName) || "onRecaptchaLoadCallback";
                        return window[n] = function() {
                                var e = a ? window.grecaptcha.enterprise : window.grecaptcha,
                                    n = i({
                                        badge: "inline",
                                        size: "invisible",
                                        sitekey: t
                                    }, (null == h ? void 0 : h.parameters) || {});
                                b.current = e.render(null == h ? void 0 : h.element, n)
                            }, s({
                                render: (null == h ? void 0 : h.element) ? "explicit" : t,
                                onLoadCallbackName: n,
                                useEnterprise: a,
                                useRecaptchaNet: d,
                                scriptProps: p,
                                language: m,
                                onLoad: function() {
                                    if (window && window.grecaptcha) {
                                        var e = a ? window.grecaptcha.enterprise : window.grecaptcha;
                                        e.ready(function() {
                                            x(e)
                                        })
                                    } else u("<GoogleRecaptchaProvider /> " + r.SCRIPT_NOT_AVAILABLE)
                                },
                                onError: function() {
                                    u("Error loading google recaptcha script")
                                }
                            }),
                            function() {
                                c(e, null == h ? void 0 : h.element)
                            }
                    }
                    u("<GoogleReCaptchaProvider /> recaptcha key not provided")
                }, [a, d, w, A, m, t, null == h ? void 0 : h.element]);
                var j = (0, o.useCallback)(function(e) {
                        if (!y || !y.execute) throw Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
                        return y.execute(b.current, {
                            action: e
                        })
                    }, [y, b]),
                    C = (0, o.useMemo)(function() {
                        return {
                            executeRecaptcha: y ? j : void 0,
                            container: null == h ? void 0 : h.element
                        }
                    }, [j, y, null == h ? void 0 : h.element]);
                return o.createElement(f.Provider, {
                    value: C
                }, g)
            }
            f.Consumer;
            var p = function() {
                return (0, o.useContext)(f)
            };

            function m(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports;
                /** @license React v16.13.1
                 * react-is.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
            }
            var h = "function" == typeof Symbol && Symbol.for,
                g = h ? Symbol.for("react.element") : 60103,
                v = h ? Symbol.for("react.portal") : 60106,
                y = h ? Symbol.for("react.fragment") : 60107,
                x = h ? Symbol.for("react.strict_mode") : 60108,
                b = h ? Symbol.for("react.profiler") : 60114,
                w = h ? Symbol.for("react.provider") : 60109,
                A = h ? Symbol.for("react.context") : 60110,
                j = h ? Symbol.for("react.async_mode") : 60111,
                C = h ? Symbol.for("react.concurrent_mode") : 60111,
                E = h ? Symbol.for("react.forward_ref") : 60112,
                k = h ? Symbol.for("react.suspense") : 60113,
                N = h ? Symbol.for("react.suspense_list") : 60120,
                _ = h ? Symbol.for("react.memo") : 60115,
                S = h ? Symbol.for("react.lazy") : 60116,
                O = h ? Symbol.for("react.block") : 60121,
                P = h ? Symbol.for("react.fundamental") : 60117,
                R = h ? Symbol.for("react.responder") : 60118,
                M = h ? Symbol.for("react.scope") : 60119;

            function L(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case g:
                            switch (e = e.type) {
                                case j:
                                case C:
                                case y:
                                case b:
                                case x:
                                case k:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case A:
                                        case E:
                                        case S:
                                        case _:
                                        case w:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case v:
                            return t
                    }
                }
            }

            function T(e) {
                return L(e) === C
            }
            var z = {
                    AsyncMode: j,
                    ConcurrentMode: C,
                    ContextConsumer: A,
                    ContextProvider: w,
                    Element: g,
                    ForwardRef: E,
                    Fragment: y,
                    Lazy: S,
                    Memo: _,
                    Portal: v,
                    Profiler: b,
                    StrictMode: x,
                    Suspense: k,
                    isAsyncMode: function(e) {
                        return T(e) || L(e) === j
                    },
                    isConcurrentMode: T,
                    isContextConsumer: function(e) {
                        return L(e) === A
                    },
                    isContextProvider: function(e) {
                        return L(e) === w
                    },
                    isElement: function(e) {
                        return "object" == typeof e && null !== e && e.$$typeof === g
                    },
                    isForwardRef: function(e) {
                        return L(e) === E
                    },
                    isFragment: function(e) {
                        return L(e) === y
                    },
                    isLazy: function(e) {
                        return L(e) === S
                    },
                    isMemo: function(e) {
                        return L(e) === _
                    },
                    isPortal: function(e) {
                        return L(e) === v
                    },
                    isProfiler: function(e) {
                        return L(e) === b
                    },
                    isStrictMode: function(e) {
                        return L(e) === x
                    },
                    isSuspense: function(e) {
                        return L(e) === k
                    },
                    isValidElementType: function(e) {
                        return "string" == typeof e || "function" == typeof e || e === y || e === C || e === b || e === x || e === k || e === N || "object" == typeof e && null !== e && (e.$$typeof === S || e.$$typeof === _ || e.$$typeof === w || e.$$typeof === A || e.$$typeof === E || e.$$typeof === P || e.$$typeof === R || e.$$typeof === M || e.$$typeof === O)
                    },
                    typeOf: L
                },
                I = m(function(e, t) {}),
                B = (I.AsyncMode, I.ConcurrentMode, I.ContextConsumer, I.ContextProvider, I.Element, I.ForwardRef, I.Fragment, I.Lazy, I.Memo, I.Portal, I.Profiler, I.StrictMode, I.Suspense, I.isAsyncMode, I.isConcurrentMode, I.isContextConsumer, I.isContextProvider, I.isElement, I.isForwardRef, I.isFragment, I.isLazy, I.isMemo, I.isPortal, I.isProfiler, I.isStrictMode, I.isSuspense, I.isValidElementType, I.typeOf, m(function(e) {
                    e.exports = z
                })),
                D = {};
            D[B.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, D[B.Memo] = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            }
        },
        1024: function(e, t, n) {
            "use strict";
            n.d(t, {
                w_: function() {
                    return c
                }
            });
            var r = n(2466),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                a = r.createContext && r.createContext(o),
                i = function() {
                    return (i = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                l = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                    return n
                };

            function c(e) {
                return function(t) {
                    return r.createElement(s, i({
                        attr: i({}, e.attr)
                    }, t), function e(t) {
                        return t && t.map(function(t, n) {
                            return r.createElement(t.tag, i({
                                key: n
                            }, t.attr), e(t.child))
                        })
                    }(e.child))
                }
            }

            function s(e) {
                var t = function(t) {
                    var n, o = e.attr,
                        a = e.size,
                        c = e.title,
                        s = l(e, ["attr", "size", "title"]),
                        u = a || t.size || "1em";
                    return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), r.createElement("svg", i({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, o, s, {
                        className: n,
                        style: i(i({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: u,
                        width: u,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), c && r.createElement("title", null, c), e.children)
                };
                return void 0 !== a ? r.createElement(a.Consumer, null, function(e) {
                    return t(e)
                }) : t(o)
            }
        },
        9177: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(2466);

            function o(e, t, n) {
                void 0 === t && (t = 0), void 0 === n && (n = []);
                var o, a, i, l, c, s, u, f = (void 0 === (o = t) && (o = 0), a = (0, r.useRef)(!1), i = (0, r.useRef)(), l = (0, r.useRef)(e), c = (0, r.useCallback)(function() {
                        return a.current
                    }, []), s = (0, r.useCallback)(function() {
                        a.current = !1, i.current && clearTimeout(i.current), i.current = setTimeout(function() {
                            a.current = !0, l.current()
                        }, o)
                    }, [o]), u = (0, r.useCallback)(function() {
                        a.current = null, i.current && clearTimeout(i.current)
                    }, []), (0, r.useEffect)(function() {
                        l.current = e
                    }, [e]), (0, r.useEffect)(function() {
                        return s(), u
                    }, [o]), [c, u, s]),
                    d = f[0],
                    p = f[1],
                    m = f[2];
                return (0, r.useEffect)(m, n), [d, p]
            }
        },
        6840: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(9940)
            }])
        },
        4166: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/flag-france.885fb77f.png",
                height: 160,
                width: 160,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEWodp4AGJD29PBUa7TsLDwEJpXtHi7yLDxUbLbsbXjr9PTsb3kBIJXwHS/v9/f69/PzcXy5qsKPAAAADHRSTlMG29bUsbHb/v791tS57Fg8AAAACXBIWXMAAKf7AACn+wE8Q2ENAAAAJklEQVR4nGNggAFWRmYmLm42FgYeHg5+PgFedgiDE4MBkoIrhgEAQKEBy/HyfE8AAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        3890: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/flag-saudi-arabia.1ad742e8.png",
                height: 160,
                width: 160,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUTbDkAbTQAZSxmmWYAbDQAajJmmZl+tJl0r5EGcToYe0g2jmFBlmuiMhMZAAAACXRSTlMD78wFm9MF/v4PryVQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nEXKuRHAMAwDQZDQB5D91+uxEl20wQHkWiQwZmbmHAh1dzkQ2vucC9nWD1eV4s3gDR8wOAFQTWf6zQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        8110: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/flag-spain.b96d8d4a.png",
                height: 160,
                width: 160,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEXjTCX+ygDCAB3DAB7BAB/qcGLotTXfpVLvvBbhTBPfRRzURR9rGsWTAAAACXRSTlMG/tbbsf7+/v5+CzMCAAAACXBIWXMAAKf7AACn+wE8Q2ENAAAAMUlEQVR4nD3KWQ4AIAgD0ZZNgfvf12iC72uSFhimIiJqyKy8wO1BkmD4epFd/aZ/HgciMwDyo1wEeAAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        4879: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/flag-united-kingdom.6f17e4c8.png",
                height: 160,
                width: 160,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEVjZ4vnjpPRKznJS1vSLz2ambgxWZ/aW2bPUV/TU2DpnaIwVZyOUHbqoqeGdqDQ3OnGnrCOps3tu74NwS44AAAADXRSTlMHr/79/trU/v3WsNTa6DSEsQAAAAlwSFlzAACn+wAAp/sBPENhDQAAADlJREFUeJw9yzkCwCAMBLElHGNzw/8fmypRL+kTcnFvvWqOBfsemZEeiIrwJMx07oY1pmpv7iWHf789CAGxIAfq+QAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        583: function(e, t, n) {
            "use strict";
            var r = n(3288);
            n(2466);
            let o = e => {
                let {
                    children: t,
                    clickFn: n,
                    primary: o = !0,
                    size: a = "md",
                    className: i,
                    ariaLabel: l
                } = e, c = "";
                switch (a) {
                    case "lg":
                        c += "px-[52.5px] py-[40px] ";
                        break;
                    case "md":
                        c += "px-[30px] py-[10px] md:px-[52.5px] md:py-[14px] ";
                        break;
                    case "sm":
                        c += "p-2 md:p-3 "
                }
                return c += o ? "bg-maxiphy-blue-500 text-white" : "bg-maxiphy-gray-500 text-maxiphy-black-500 ", (0, r.jsx)("button", {
                    className: "rounded-[8px] md:rounded-[12px] p-3 ".concat(c, " lg:w-fit  ").concat(i, "  z-10"),
                    onClick: n,
                    "aria-label": l,
                    children: t
                })
            };
            t.Z = o
        },
        6737: function(e, t, n) {
            "use strict";
            var r = n(3288);
            n(2466);
            var o = n(2493),
                a = n.n(o),
                i = n(6731),
                l = n.n(i),
                c = n(1395);
            let s = e => {
                let {
                    title: t,
                    titlePrefix: n,
                    position: o,
                    hasPadding: i,
                    classNames: s,
                    imageClassNames: u,
                    titleClassNames: f,
                    hasLinkToHome: d,
                    id: p
                } = e, {
                    pathname: m
                } = (0, c.useRouter)();
                return (0, r.jsxs)("div", {
                    className: "flex items-center gap-[12px] sm:gap-[14px] md:gap-[16px] ".concat(i ? "pb-[56px] pt-[120px] md:pb-[75px] md:pt-[200px]" : null, " ").concat({
                        start: "md:justify-start justify-center",
                        middle: "md:justify-center",
                        end: "md:justify-end justify-center"
                    }[null != o ? o : "start"], " ").concat(s, " "),
                    id: p,
                    children: [d ? (0, r.jsx)(l(), {
                        href: "/",
                        "aria-label": "go to home",
                        children: (0, r.jsx)(a(), {
                            className: "md:w-[32px] w-[24px] min-w-[24px] sm:w-[28px] sm:min-w-[28px] md:min-w-[32px] ".concat(u, " "),
                            alt: "Logo Picture",
                            src: "/logo.svg",
                            width: 40,
                            height: 40
                        })
                    }) : (0, r.jsx)(a(), {
                        className: "md:w-[32px] w-[24px] min-w-[24px] sm:w-[28px] sm:min-w-[28px] md:min-w-[32px] ".concat(u, " "),
                        alt: "Logo Picture",
                        src: "/logo.svg",
                        width: 40,
                        height: 40
                    }), (0, r.jsxs)("h1", {
                        className: " text-[24px] sm:text-[28px] whitespace-nowrap translate-y-[-1px] sm:translate-y-[-2px] md:translate-y-[-3px] leading-none md:text-[32px] font-extrabold dark:text-white text-maxiphy-black-500 text-center ".concat(f, " "),
                        children: [(0, r.jsx)("span", {
                            className: "!font-english",
                            children: (null == n ? void 0 : n.length) ? n : m.includes("/dbc") ? "digital business cards" : "maxiphy"
                        }), t ? (0, r.jsxs)("span", {
                            className: "!font-light",
                            children: [" | ", t, " "]
                        }) : null]
                    })]
                })
            };
            s.defaultProps = {
                position: "start",
                title: "",
                hasPadding: !0,
                classNames: "",
                id: void 0,
                hasLinkToHome: !1
            }, t.Z = s
        },
        6319: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return M
                },
                n: function() {
                    return P
                }
            });
            var r = n(3288),
                o = n(2466),
                a = n(1024);

            function i(e) {
                return (0, a.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 320 512"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        }
                    }]
                })(e)
            }

            function l(e) {
                return (0, a.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 448 512"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        }
                    }]
                })(e)
            }
            var c = n(8082),
                s = n(6731),
                u = n.n(s),
                f = n(1395),
                d = n(7642),
                p = n(4105);

            function m(e) {
                return (0, a.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 1024 1024"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
                        }
                    }]
                })(e)
            }
            var h = n(6737);
            let g = {
                    className: "cursor-pointer"
                },
                v = () => {
                    let {
                        t: e
                    } = (0, c.Z)(), t = (0, f.useRouter)(), n = () => {
                        (0, p.B)({
                            action: "linkedIn-clicked",
                            category: "social-media",
                            label: "linkedIn clicked",
                            value: "linkedIn-clicked"
                        })
                    }, o = () => {
                        (0, p.B)({
                            action: "facebook-clicked",
                            category: "social-media",
                            label: "facebook-clicked",
                            value: "facebook-clicked"
                        })
                    }, a = () => {
                        (0, p.B)({
                            action: "instagram-clicked",
                            category: "social-media",
                            label: "instagram clicked",
                            value: "instagram-clicked"
                        })
                    };
                    return (0, r.jsx)("section", {
                        className: "pb-[100px] text-white lg:pt-[200px] pt-[100px]",
                        children: (0, r.jsxs)("footer", {
                            className: "flex md:flex-row flex-col-reverse gap-4 md:gap-0 justify-between",
                            children: [(0, r.jsxs)("div", {
                                className: "flex flex-col gap-4 text-[18px] pt-[64px] md:pt-0 items-center text-center ltr:md:text-left rtl:md:text-right md:items-start",
                                children: [(0, r.jsx)("p", {
                                    className: "font-extrabold",
                                    children: e("common:footer.siteMap")
                                }), "/" === t.pathname ? (0, r.jsxs)("ol", {
                                    className: "flex flex-col md:text-base text-sm",
                                    children: [(0, r.jsx)("li", { ...g,
                                        children: (0, r.jsx)(u(), {
                                            href: "/",
                                            "aria-label": "Go to home page",
                                            children: e("common:footer.home")
                                        })
                                    }), (0, r.jsx)("li", { ...g,
                                        onClick: () => {
                                            (0, d.E)("services")
                                        },
                                        children: e("common:footer.services")
                                    }), (0, r.jsx)("li", { ...g,
                                        onClick: () => {
                                            (0, d.E)("keyCustomers")
                                        },
                                        children: e("common:footer.keyCustomers")
                                    }), (0, r.jsx)("li", { ...g,
                                        onClick: () => {
                                            (0, d.E)("contact")
                                        },
                                        children: e("common:footer.contactUs")
                                    })]
                                }) : (0, r.jsxs)("ol", {
                                    className: "flex flex-col md:text-base text-sm",
                                    children: [(0, r.jsx)("li", { ...g,
                                        children: (0, r.jsx)(u(), {
                                            href: "/",
                                            "aria-label": "Go to home page",
                                            children: e("common:footer.home")
                                        })
                                    }), (0, r.jsx)("li", { ...g,
                                        children: (0, r.jsx)(u(), {
                                            href: "/#services",
                                            "aria-label": "Go to home page",
                                            children: e("common:footer.services")
                                        })
                                    }), (0, r.jsx)("li", { ...g,
                                        children: (0, r.jsx)(u(), {
                                            href: "/#keyCustomers",
                                            "aria-label": "Go to home page",
                                            children: e("common:footer.keyCustomers")
                                        })
                                    }), (0, r.jsx)("li", { ...g,
                                        children: (0, r.jsx)(u(), {
                                            href: "/#contact",
                                            "aria-label": "Go to home page",
                                            children: e("common:footer.contactUs")
                                        })
                                    })]
                                }), (0, r.jsx)("ol", {
                                    className: "flex flex-col md:text-base text-sm",
                                    children: (0, r.jsx)("li", { ...g,
                                        children: (0, r.jsx)(u(), {
                                            href: "/privacy-policy",
                                            "aria-label": "Go to privacy policy",
                                            children: e("common:footer.privacy")
                                        })
                                    })
                                }), (0, r.jsxs)("p", {
                                    className: "md:mt-24 mt-12 w-full text-center text-[14px] md:text-[18px]",
                                    children: ["\xa9 ", e("common:footer.rights"), " ", (0, r.jsx)("span", {
                                        className: "font-extrabold !font-english",
                                        children: "maxiphy"
                                    })]
                                }), (0, r.jsx)(h.Z, {
                                    hasPadding: !1,
                                    classNames: "md:hidden block pt-[64px]"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col md:gap-0 gap-4 justify-between md:items-end items-center",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex gap-6",
                                    children: [(0, r.jsx)(u(), {
                                        href: "https://www.linkedin.com/company/maxiphy",
                                        className: "block p-4 bg-maxiphy-black-500 rounded-2xl",
                                        "aria-label": "Go to LinkedIn",
                                        onClick: n,
                                        children: (0, r.jsx)(l, {
                                            className: "w-[20px] h-[20px] md:w-[32px] md:h-[32px]",
                                            color: "#fff"
                                        })
                                    }), (0, r.jsx)(u(), {
                                        href: "https://www.facebook.com/Maxiphy/",
                                        className: "block p-4 bg-maxiphy-black-500 rounded-2xl",
                                        "aria-label": "Go to Facebook",
                                        onClick: o,
                                        children: (0, r.jsx)(i, {
                                            className: "w-[20px] h-[20px] md:w-[32px] md:h-[32px]",
                                            color: "#fff"
                                        })
                                    }), (0, r.jsx)(u(), {
                                        href: "https://www.instagram.com/maxiphy.official/",
                                        className: "block p-4 bg-maxiphy-black-500 rounded-2xl",
                                        "aria-label": "Go to Twitter",
                                        onClick: a,
                                        children: (0, r.jsx)(m, {
                                            className: "w-[20px] h-[20px] md:w-[32px] md:h-[32px]",
                                            color: "#fff"
                                        })
                                    })]
                                }), (0, r.jsx)(h.Z, {
                                    hasPadding: !1,
                                    classNames: "hidden md:flex",
                                    hasLinkToHome: !0
                                })]
                            })]
                        })
                    })
                };
            var y = n(4926),
                x = n.n(y),
                b = n(2493),
                w = n.n(b),
                A = n(583),
                j = n(4879),
                C = n(3890),
                E = n(8110),
                k = n(4166),
                N = n(6810);
            let _ = {
                    en: (0, r.jsx)(w(), {
                        src: j.Z,
                        className: " md:w-[30px] md:min-w-[30px] w-[20px] min-w-[20px] ",
                        width: 32,
                        alt: "united kingdom flag"
                    }),
                    fr: (0, r.jsx)(w(), {
                        src: k.Z,
                        className: " md:w-[30px] md:min-w-[30px] w-[20px] min-w-[20px] ",
                        width: 32,
                        alt: "france flag"
                    }),
                    es: (0, r.jsx)(w(), {
                        src: E.Z,
                        className: " md:w-[30px] md:min-w-[30px] w-[20px] min-w-[20px] ",
                        width: 32,
                        alt: "spain flag"
                    }),
                    ar: (0, r.jsx)(w(), {
                        src: C.Z,
                        className: " md:w-[30px] md:min-w-[30px] w-[20px] min-w-[20px] ",
                        width: 32,
                        alt: "saudi arabia flag"
                    })
                },
                S = {
                    "privacy-policy": "privacy policy"
                },
                O = () => {
                    var e;
                    let t = (0, f.useRouter)(),
                        {
                            pathname: n
                        } = t,
                        [a, i] = o.useState(!1),
                        [l, c] = o.useState(!1),
                        {
                            width: s
                        } = (0, N.d)(),
                        d = () => {
                            i(e => !e)
                        },
                        m = () => {
                            c(e => !e)
                        };
                    (0, o.useEffect)(() => {
                        let e = e => {
                            var t, n, r;
                            (null == e ? void 0 : null === (t = e.target) || void 0 === t ? void 0 : t.tagName) !== "IMG" && (null == e ? void 0 : null === (n = e.target) || void 0 === n ? void 0 : n.tagName) !== "BUTTON" && (null == e ? void 0 : null === (r = e.target) || void 0 === r ? void 0 : r.tagName) !== "svg" && (l && m(), a && d())
                        };
                        return document.body.addEventListener("click", e), () => document.body.removeEventListener("click", e)
                    }, [l, a]);
                    let g = e => () => {
                            (0, p.B)({
                                action: "locale-switch-".concat(e),
                                category: "locale-switch",
                                label: "locale-switch-".concat(e),
                                value: "locale-switch-".concat(e)
                            }), m()
                        },
                        v = null == n ? void 0 : n.split("/"),
                        y = null !== (e = null == S ? void 0 : S[null == v ? void 0 : v[v.length - 1]]) && void 0 !== e ? e : null == v ? void 0 : v[v.length - 1];
                    return (0, r.jsx)("nav", {
                        className: "p-[34px] md:p-0 py-[34px] md:pt-[64px] md:pb-[64px]",
                        children: (0, r.jsxs)("ul", {
                            className: "flex justify-between items-center lg:gap-0 gap-[10px]",
                            children: [(0, r.jsx)("li", {
                                className: "flex items-center gap-[10px]",
                                children: (0, r.jsx)(h.Z, {
                                    hasPadding: !1,
                                    title: "/dbc" === n ? (s || 400) > 500 ? "digital business cards" : "dbc" : "/" !== n ? y : null,
                                    titlePrefix: "/dbc" === n ? "maxiphy" : void 0,
                                    hasLinkToHome: !0
                                })
                            }), (0, r.jsx)("li", {
                                className: "flex gap-5 basis-[30%] justify-end self-end",
                                children: (0, r.jsxs)("div", {
                                    className: "relative",
                                    children: ["/dbc" !== n && (0, r.jsx)(A.Z, {
                                        primary: !1,
                                        clickFn: m,
                                        size: "sm",
                                        ariaLabel: "Change Language",
                                        className: " p-1 md:p-3 w-[40px] h-[40px] md:w-[54px] md:h-[54px] flex items-center justify-center bg-[rgba(255,255,255,0.3)] backdrop-blur-[5px]",
                                        children: _[t.locale]
                                    }), l ? (0, r.jsx)("div", {
                                        className: "absolute top-[135%] right-0 bg-gray-50 p-2 rounded w-20 justify-center flex z-[999]",
                                        children: (0, r.jsx)("ul", {
                                            children: ["en", "ar"].map(e => (0, r.jsx)("li", {
                                                children: (0, r.jsx)(u(), {
                                                    href: t.asPath,
                                                    locale: e,
                                                    onClick: g(e),
                                                    children: (0, r.jsxs)("div", {
                                                        className: "flex items-center justify-between gap-2 font-bold",
                                                        children: [e.toUpperCase(), _[e]]
                                                    })
                                                })
                                            }, e))
                                        })
                                    }) : null]
                                })
                            })]
                        })
                    })
                },
                P = (0, o.createContext)("themeContext"),
                {
                    Provider: R
                } = null != P ? P : {},
                M = e => {
                    let {
                        children: t,
                        router: n
                    } = e, a = "dark", {
                        pathname: i,
                        locale: l
                    } = null != n ? n : {};
                    return (0, o.useEffect)(() => {
                        let e = null == document ? void 0 : document.querySelector("body");
                        null == e || e.classList.add("bg-maxiphy-d-black")
                    }, []), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(x(), {
                            children: (0, r.jsx)("title", {
                                children: "maxiphy"
                            })
                        }), (0, r.jsx)(R, {
                            value: a,
                            children: (0, r.jsx)("div", {
                                className: "".concat(a, " ").concat("ar" === l ? "font-arabic" : "font-english"),
                                children: (0, r.jsxs)("div", {
                                    className: " dark:bg-maxiphy-d-black bg-white min-h-screen",
                                    children: ["/" === i ? null : (0, r.jsx)("div", {
                                        className: "container mx-auto md:px-[90px] px-4",
                                        children: (0, r.jsx)(O, {})
                                    }), (0, r.jsx)("div", {
                                        className: "/" === i || "/dbc" === i ? "" : "container mx-auto md:px-[90px] px-4",
                                        children: (0, r.jsx)("main", {
                                            className: "",
                                            children: t
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "container mx-auto md:px-[90px] px-4",
                                        children: (0, r.jsx)(v, {})
                                    })]
                                })
                            })
                        })]
                    })
                }
        },
        8261: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, r, o) {
                {
                    let a = n(892).normalizeLocalePath,
                        i = n(474).detectDomainLocale,
                        l = t || a(e, r).detectedLocale,
                        c = i(o, void 0, l);
                    if (c) {
                        let s = "http".concat(c.http ? "" : "s", "://"),
                            u = l === c.defaultLocale ? "" : "/".concat(l);
                        return "".concat(s).concat(c.domain).concat("").concat(u).concat(e)
                    }
                    return !1
                }
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        14: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(4119).Z,
                o = n(1107).Z,
                a = n(8292).Z,
                i = n(844).Z,
                l = a(n(2466)),
                c = o(n(9138)),
                s = n(4586),
                u = n(5586),
                f = n(6035);
            n(841);
            var d = o(n(7575));
            let p = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            };

            function m(e) {
                return void 0 !== e.default
            }

            function h(e) {
                return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function g(e, t, n, o, a, i, l) {
                if (!e || e["data-loaded-src"] === t) return;
                e["data-loaded-src"] = t;
                let c = "decode" in e ? e.decode() : Promise.resolve();
                c.catch(() => {}).then(() => {
                    if (e.parentNode) {
                        if ("blur" === n && i(!0), null == o ? void 0 : o.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let l = !1,
                                c = !1;
                            o.current(r({}, t, {
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => l,
                                isPropagationStopped: () => c,
                                persist: () => {},
                                preventDefault: () => {
                                    l = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    c = !0, t.stopPropagation()
                                }
                            }))
                        }(null == a ? void 0 : a.current) && a.current(e)
                    }
                })
            }
            let v = l.forwardRef((e, t) => {
                    var {
                        imgAttributes: n,
                        heightInt: o,
                        widthInt: a,
                        qualityInt: c,
                        className: s,
                        imgStyle: u,
                        blurStyle: f,
                        isLazy: d,
                        fill: p,
                        placeholder: m,
                        loading: h,
                        srcString: v,
                        config: y,
                        unoptimized: x,
                        loader: b,
                        onLoadRef: w,
                        onLoadingCompleteRef: A,
                        setBlurComplete: j,
                        setShowAltText: C,
                        onLoad: E,
                        onError: k
                    } = e, N = i(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                    return h = d ? "lazy" : h, l.default.createElement(l.default.Fragment, null, l.default.createElement("img", Object.assign({}, N, n, {
                        width: a,
                        height: o,
                        decoding: "async",
                        "data-nimg": p ? "fill" : "1",
                        className: s,
                        loading: h,
                        style: r({}, u, f),
                        ref: l.useCallback(e => {
                            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (k && (e.src = e.src), e.complete && g(e, v, m, w, A, j, x))
                        }, [v, m, w, A, j, k, x, t]),
                        onLoad: e => {
                            let t = e.currentTarget;
                            g(t, v, m, w, A, j, x)
                        },
                        onError: e => {
                            C(!0), "blur" === m && j(!0), k && k(e)
                        }
                    })))
                }),
                y = l.forwardRef((e, t) => {
                    let n, o;
                    var a, {
                            src: g,
                            sizes: y,
                            unoptimized: x = !1,
                            priority: b = !1,
                            loading: w,
                            className: A,
                            quality: j,
                            width: C,
                            height: E,
                            fill: k,
                            style: N,
                            onLoad: _,
                            onLoadingComplete: S,
                            placeholder: O = "empty",
                            blurDataURL: P,
                            layout: R,
                            objectFit: M,
                            objectPosition: L,
                            lazyBoundary: T,
                            lazyRoot: z
                        } = e,
                        I = i(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
                    let B = l.useContext(f.ImageConfigContext),
                        D = l.useMemo(() => {
                            let e = p || B || u.imageConfigDefault,
                                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                                n = e.deviceSizes.sort((e, t) => e - t);
                            return r({}, e, {
                                allSizes: t,
                                deviceSizes: n
                            })
                        }, [B]),
                        U = I,
                        Z = U.loader || d.default;
                    delete U.loader;
                    let G = "__next_img_default" in Z;
                    if (G) {
                        if ("custom" === D.loader) throw Error('Image with src "'.concat(g, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                    } else {
                        let F = Z;
                        Z = e => {
                            let {
                                config: t
                            } = e, n = i(e, ["config"]);
                            return F(n)
                        }
                    }
                    if (R) {
                        "fill" === R && (k = !0);
                        let V = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        }[R];
                        V && (N = r({}, N, V));
                        let H = {
                            responsive: "100vw",
                            fill: "100vw"
                        }[R];
                        H && !y && (y = H)
                    }
                    let W = "",
                        $ = h(C),
                        q = h(E);
                    if ("object" == typeof(a = g) && (m(a) || void 0 !== a.src)) {
                        let J = m(g) ? g.default : g;
                        if (!J.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));
                        if (!J.height || !J.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));
                        if (n = J.blurWidth, o = J.blurHeight, P = P || J.blurDataURL, W = J.src, !k) {
                            if ($ || q) {
                                if ($ && !q) {
                                    let K = $ / J.width;
                                    q = Math.round(J.height * K)
                                } else if (!$ && q) {
                                    let Q = q / J.height;
                                    $ = Math.round(J.width * Q)
                                }
                            } else $ = J.width, q = J.height
                        }
                    }
                    let X = !b && ("lazy" === w || void 0 === w);
                    ((g = "string" == typeof g ? g : W).startsWith("data:") || g.startsWith("blob:")) && (x = !0, X = !1), D.unoptimized && (x = !0), G && g.endsWith(".svg") && !D.dangerouslyAllowSVG && (x = !0);
                    let [Y, ee] = l.useState(!1), [et, en] = l.useState(!1), er = h(j), eo = Object.assign(k ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: M,
                        objectPosition: L
                    } : {}, et ? {} : {
                        color: "transparent"
                    }, N), ea = "blur" === O && P && !Y ? {
                        backgroundSize: eo.objectFit || "cover",
                        backgroundPosition: eo.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({
                            widthInt: $,
                            heightInt: q,
                            blurWidth: n,
                            blurHeight: o,
                            blurDataURL: P
                        }), '")')
                    } : {}, ei = function(e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: o,
                            quality: a,
                            sizes: i,
                            loader: l
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: c,
                            kind: s
                        } = function(e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: o
                            } = e;
                            if (n) {
                                let a = /(^|\s)(1?\d?\d)vw/g,
                                    i = [];
                                for (let l; l = a.exec(n); l) i.push(parseInt(l[2]));
                                if (i.length) {
                                    let c = .01 * Math.min(...i);
                                    return {
                                        widths: o.filter(e => e >= r[0] * c),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: r,
                                kind: "w"
                            };
                            let s = [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))];
                            return {
                                widths: s,
                                kind: "x"
                            }
                        }(t, o, i), u = c.length - 1;
                        return {
                            sizes: i || "w" !== s ? i : "100vw",
                            srcSet: c.map((e, r) => "".concat(l({
                                config: t,
                                src: n,
                                quality: a,
                                width: e
                            }), " ").concat("w" === s ? e : r + 1).concat(s)).join(", "),
                            src: l({
                                config: t,
                                src: n,
                                quality: a,
                                width: c[u]
                            })
                        }
                    }({
                        config: D,
                        src: g,
                        unoptimized: x,
                        width: $,
                        quality: er,
                        sizes: y,
                        loader: Z
                    }), el = g, ec = {
                        imageSrcSet: ei.srcSet,
                        imageSizes: ei.sizes,
                        crossOrigin: U.crossOrigin
                    }, es = l.useRef(_);
                    l.useEffect(() => {
                        es.current = _
                    }, [_]);
                    let eu = l.useRef(S);
                    l.useEffect(() => {
                        eu.current = S
                    }, [S]);
                    let ef = r({
                        isLazy: X,
                        imgAttributes: ei,
                        heightInt: q,
                        widthInt: $,
                        qualityInt: er,
                        className: A,
                        imgStyle: eo,
                        blurStyle: ea,
                        loading: w,
                        config: D,
                        fill: k,
                        unoptimized: x,
                        placeholder: O,
                        loader: Z,
                        srcString: el,
                        onLoadRef: es,
                        onLoadingCompleteRef: eu,
                        setBlurComplete: ee,
                        setShowAltText: en
                    }, U);
                    return l.default.createElement(l.default.Fragment, null, l.default.createElement(v, Object.assign({}, ef, {
                        ref: t
                    })), b ? l.default.createElement(c.default, null, l.default.createElement("link", Object.assign({
                        key: "__nimg-" + ei.src + ei.srcSet + ei.sizes,
                        rel: "preload",
                        as: "image",
                        href: ei.srcSet ? void 0 : ei.src
                    }, ec))) : null)
                });
            t.default = y, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3441: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(1107).Z,
                o = n(844).Z,
                a = r(n(2466)),
                i = n(7012),
                l = n(2446),
                c = n(540),
                s = n(1417),
                u = n(4469),
                f = n(9037),
                d = n(8261),
                p = n(7987);
            let m = new Set;

            function h(e, t, n, r) {
                if (i.isLocalURL(t)) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0,
                            a = t + "%" + n + "%" + o;
                        if (m.has(a)) return;
                        m.add(a)
                    }
                    Promise.resolve(e.prefetch(t, n, r)).catch(e => {})
                }
            }

            function g(e) {
                return "string" == typeof e ? e : l.formatUrl(e)
            }
            let v = a.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: l,
                    as: m,
                    children: v,
                    prefetch: y,
                    passHref: x,
                    replace: b,
                    shallow: w,
                    scroll: A,
                    locale: j,
                    onClick: C,
                    onMouseEnter: E,
                    onTouchStart: k,
                    legacyBehavior: N = !1
                } = e, _ = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = v, N && ("string" == typeof n || "number" == typeof n) && (n = a.default.createElement("a", null, n));
                let S = !1 !== y,
                    O = a.default.useContext(s.RouterContext),
                    P = a.default.useContext(u.AppRouterContext),
                    R = null != O ? O : P,
                    M = !O,
                    {
                        href: L,
                        as: T
                    } = a.default.useMemo(() => {
                        if (!O) {
                            let e = g(l);
                            return {
                                href: e,
                                as: m ? g(m) : e
                            }
                        }
                        let [t, n] = i.resolveHref(O, l, !0);
                        return {
                            href: t,
                            as: m ? i.resolveHref(O, m) : n || t
                        }
                    }, [O, l, m]),
                    z = a.default.useRef(L),
                    I = a.default.useRef(T);
                N && (r = a.default.Children.only(n));
                let B = N ? r && "object" == typeof r && r.ref : t,
                    [D, U, Z] = f.useIntersection({
                        rootMargin: "200px"
                    }),
                    G = a.default.useCallback(e => {
                        (I.current !== T || z.current !== L) && (Z(), I.current = T, z.current = L), D(e), B && ("function" == typeof B ? B(e) : "object" == typeof B && (B.current = e))
                    }, [T, B, L, Z, D]);
                a.default.useEffect(() => {
                    R && U && S && h(R, L, T, {
                        locale: j
                    })
                }, [T, L, U, j, S, null == O ? void 0 : O.locale, R]);
                let F = {
                    ref: G,
                    onClick(e) {
                        N || "function" != typeof C || C(e), N && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), R && !e.defaultPrevented && function(e, t, n, r, o, l, c, s, u, f) {
                            let {
                                nodeName: d
                            } = e.currentTarget, p = "A" === d.toUpperCase();
                            if (p && (function(e) {
                                    let {
                                        target: t
                                    } = e.currentTarget;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !i.isLocalURL(n))) return;
                            e.preventDefault();
                            let m = () => {
                                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: l,
                                    locale: s,
                                    scroll: c
                                }) : t[o ? "replace" : "push"](r || n, {
                                    forceOptimisticNavigation: !f
                                })
                            };
                            u ? a.default.startTransition(m) : m()
                        }(e, R, L, T, b, w, A, j, M, S)
                    },
                    onMouseEnter(e) {
                        N || "function" != typeof E || E(e), N && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), R && (S || !M) && h(R, L, T, {
                            locale: j,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    },
                    onTouchStart(e) {
                        N || "function" != typeof k || k(e), N && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), R && (S || !M) && h(R, L, T, {
                            locale: j,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    }
                };
                if (!N || x || "a" === r.type && !("href" in r.props)) {
                    let V = void 0 !== j ? j : null == O ? void 0 : O.locale,
                        H = (null == O ? void 0 : O.isLocaleDomain) && d.getDomainLocale(T, V, null == O ? void 0 : O.locales, null == O ? void 0 : O.domainLocales);
                    F.href = H || p.addBasePath(c.addLocale(T, V, null == O ? void 0 : O.defaultLocale))
                }
                return N ? a.default.cloneElement(r, F) : a.default.createElement("a", Object.assign({}, _, F), n)
            });
            t.default = v, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        892: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.normalizeLocalePath = void 0;
            let r = (e, t) => n(6099).normalizeLocalePath(e, t);
            t.normalizeLocalePath = r, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9037: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: c
                } = e, s = c || !a, [u, f] = r.useState(!1), [d, p] = r.useState(null);
                r.useEffect(() => {
                    if (a) {
                        if (!s && !u && d && d.tagName) {
                            let e = function(e, t, n) {
                                let {
                                    id: r,
                                    observer: o,
                                    elements: a
                                } = function(e) {
                                    let t;
                                    let n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = l.find(e => e.root === n.root && e.margin === n.margin);
                                    if (r && (t = i.get(r))) return t;
                                    let o = new Map,
                                        a = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            })
                                        }, e);
                                    return t = {
                                        id: n,
                                        observer: a,
                                        elements: o
                                    }, l.push(n), i.set(n, t), t
                                }(n);
                                return a.set(e, t), o.observe(e),
                                    function() {
                                        if (a.delete(e), o.unobserve(e), 0 === a.size) {
                                            o.disconnect(), i.delete(r);
                                            let t = l.findIndex(e => e.root === r.root && e.margin === r.margin);
                                            t > -1 && l.splice(t, 1)
                                        }
                                    }
                            }(d, e => e && f(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            });
                            return e
                        }
                    } else if (!u) {
                        let r = o.requestIdleCallback(() => f(!0));
                        return () => o.cancelIdleCallback(r)
                    }
                }, [d, s, n, t, u]);
                let m = r.useCallback(() => {
                    f(!1)
                }, []);
                return [p, u, m]
            };
            var r = n(2466),
                o = n(8894);
            let a = "function" == typeof IntersectionObserver,
                i = new Map,
                l = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        4586: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getImageBlurSvg = function(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: o,
                    blurDataURL: a
                } = e, i = r || t, l = o || n, c = a.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return i && l ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i, " ").concat(l, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r && o ? "1" : "20", "'/%3E").concat(c, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a, "'/%3E%3C/svg%3E")
            }
        },
        7575: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    config: t,
                    src: n,
                    width: r,
                    quality: o
                } = e;
                return "".concat(t.path, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n.__next_img_default = !0, t.default = n
        },
        9940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n(3288),
                o = JSON.parse('{"locales":["en","fr","ar","es"],"defaultLocale":"en","pages":{"*":["common"],"/":["home"]}}'),
                a = n(2466),
                i = n(1395),
                l = n(6580),
                c = function() {
                    return (c = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function s(e, t, n, r) {
                void 0 === t && (t = ""), void 0 === r && (r = {
                    returnObjects: !1
                });
                var o = (n || {}).keySeparator,
                    a = void 0 === o ? "." : o,
                    i = a ? t.split(a) : [t];
                if (t === a && r.returnObjects) return e;
                var l = i.reduce(function(e, t) {
                    if ("string" == typeof e) return {};
                    var n = e[t];
                    return n || ("string" == typeof n ? n : {})
                }, e);
                if ("string" == typeof l || l instanceof Object && r.returnObjects) return l
            }

            function u(e) {
                var t = e.text,
                    n = e.query,
                    r = e.config,
                    o = e.lang;
                if (!t || !n) return t || "";
                var a = function(e) {
                        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                    },
                    i = r.interpolation || {},
                    l = i.format,
                    c = void 0 === l ? null : l,
                    s = i.prefix,
                    u = void 0 === s ? "{{" : s,
                    f = i.suffix,
                    d = void 0 === f ? "}}" : f,
                    p = "" === d ? "" : "(?:[\\s,]+([\\w-]*))?\\s*".concat(a(d));
                return Object.keys(n).reduce(function(e, t) {
                    if ("string" != typeof e) return e;
                    var r = RegExp("".concat(a(u), "\\s*").concat(t).concat(p), "gm");
                    return e.replace(r, function(e, r) {
                        return r && c ? c(n[t], r, o) : n[t]
                    })
                }, t)
            }

            function f(e) {
                e.namespace, e.i18nKey
            }
            var d = n(8082),
                p = function() {
                    return (p = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                m = (0, a.createContext)({
                    ns: {},
                    config: {}
                });

            function h(e) {
                var t, n, r, o, h, g, v, y, x, b, w = e.lang,
                    A = e.namespaces,
                    j = e.children,
                    C = e.config,
                    E = (0, d.Z)().lang,
                    k = (0, i.useRouter)() || {},
                    N = k.locale,
                    _ = k.defaultLocale,
                    S = (0, a.useContext)(m),
                    O = p(p(p({}, "undefined" == typeof window ? {} : (null === (n = null === (t = window.__NEXT_DATA__) || void 0 === t ? void 0 : t.props) || void 0 === n ? void 0 : n.__namespaces) || {}), S.ns), void 0 === A ? {} : A),
                    P = w || E || N || _ || "",
                    R = p(p({}, S.config), void 0 === C ? {} : C),
                    M = (R.localesToIgnore || ["default"]).includes(P),
                    L = (o = (r = {
                        config: R,
                        allNamespaces: O,
                        pluralRules: new Intl.PluralRules(M ? void 0 : P),
                        lang: P
                    }).config, h = r.allNamespaces, g = r.pluralRules, v = r.lang, x = void 0 === (y = o.logger) ? f : y, b = function(e, t, n) {
                        void 0 === e && (e = "");
                        var r, a = Array.isArray(e) ? e[0] : e,
                            i = o.nsSeparator,
                            l = o.loggerEnvironment,
                            f = void 0 === l ? "browser" : l,
                            d = function(e, t) {
                                if (!t) return {
                                    i18nKey: e
                                };
                                var n = e.indexOf(t);
                                return n < 0 ? {
                                    i18nKey: e
                                } : {
                                    namespace: e.slice(0, n),
                                    i18nKey: e.slice(n + t.length)
                                }
                            }(a, void 0 === i ? ":" : i),
                            p = d.i18nKey,
                            m = d.namespace,
                            y = void 0 === m ? null !== (r = null == n ? void 0 : n.ns) && void 0 !== r ? r : o.defaultNS : m,
                            w = y && h[y] || {},
                            A = function(e, t, n, r, o) {
                                if (!o || "number" != typeof o.count) return n;
                                var a = "".concat(n, "_").concat(o.count);
                                if (void 0 !== s(t, a, r)) return a;
                                var i = "".concat(n, "_").concat(e.select(o.count));
                                if (void 0 !== s(t, i, r)) return i;
                                var l = "".concat(n, ".").concat(o.count);
                                if (void 0 !== s(t, l, r)) return l;
                                var c = "".concat(n, ".").concat(e.select(o.count));
                                return void 0 !== s(t, c, r) ? c : n
                            }(g, w, p, o, t),
                            j = s(w, A, o, n),
                            C = void 0 === j || "object" == typeof j && !Object.keys(j).length,
                            E = "string" == typeof(null == n ? void 0 : n.fallback) ? [n.fallback] : (null == n ? void 0 : n.fallback) || [];
                        if (C && ("both" === f || f === ("undefined" == typeof window ? "node" : "browser")) && x({
                                namespace: y,
                                i18nKey: p
                            }), C && Array.isArray(E) && E.length) {
                            var k = E[0],
                                N = E.slice(1);
                            if ("string" == typeof k) return b(k, t, c(c({}, n), {
                                fallback: N
                            }))
                        }
                        return C && (null == n ? void 0 : n.default) && (null == E ? void 0 : E.length) == 0 ? u({
                            text: null == n ? void 0 : n.default,
                            query: t,
                            config: o,
                            lang: v
                        }) : C ? a : j instanceof Object ? function e(t) {
                            var n = t.obj,
                                r = t.query,
                                o = t.config,
                                a = t.lang;
                            return r && 0 !== Object.keys(r).length && Object.keys(n).forEach(function(t) {
                                n[t] instanceof Object && e({
                                    obj: n[t],
                                    query: r,
                                    config: o,
                                    lang: a
                                }), "string" == typeof n[t] && (n[t] = u({
                                    text: n[t],
                                    query: r,
                                    config: o,
                                    lang: a
                                }))
                            }), n
                        }({
                            obj: j,
                            query: t,
                            config: o,
                            lang: v
                        }) : u({
                            text: j,
                            query: t,
                            config: o,
                            lang: v
                        })
                    });
                return a.createElement(l.Z.Provider, {
                    value: {
                        lang: P,
                        t: L
                    }
                }, a.createElement(m.Provider, {
                    value: {
                        ns: O,
                        config: R
                    }
                }, j))
            }
            var g = function(e, t, n, r) {
                    return new(n || (n = Promise))(function(o, a) {
                        function i(e) {
                            try {
                                c(r.next(e))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function l(e) {
                            try {
                                c(r.throw(e))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                e(t)
                            })).then(i, l)
                        }
                        c((r = r.apply(e, t || [])).next())
                    })
                },
                v = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (l) {
                                    a = [6, l], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                y = function(e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                };

            function x(e) {
                return e.reduce(function(e, t) {
                    return e.concat(t)
                }, [])
            }
            var b = n(7859),
                w = function() {
                    return (w = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                A = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (l) {
                                    a = [6, l], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                j = null == b.env.NODE_DISABLE_COLORS && null == b.env.NO_COLOR && "dumb" !== b.env.TERM && "0" !== b.env.FORCE_COLOR,
                C = function() {
                    return (C = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                E = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (l) {
                                    a = [6, l], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                k = n(9773),
                N = n(6319),
                _ = n(4105);
            n(4744);
            var S = function(e, t) {
                var r = this;

                function o(n) {
                    var r, o, i = t.defaultLocale;
                    return a.createElement(h, {
                        lang: (null === (r = n.pageProps) || void 0 === r ? void 0 : r.__lang) || n.__lang || i,
                        namespaces: (null === (o = n.pageProps) || void 0 === o ? void 0 : o.__namespaces) || n.__namespaces,
                        config: t
                    }, a.createElement(e, C({}, n)))
                }
                return void 0 === t && (t = {}), t.isLoader || !1 === t.loader || console.warn('\uD83D\uDEA8 [next-translate] You can remove the "appWithI18n" HoC on the _app.js, unless you set "loader: false" in your i18n config file.'), "function" == typeof t.staticsHoc && t.staticsHoc(o, e), "undefined" == typeof window ? n.g.i18nConfig = t : window.i18nConfig = t, t.skipInitialProps || (o.getInitialProps = function(o) {
                    var a, i, l;
                    return a = void 0, i = void 0, l = function() {
                        var r, a, i;
                        return E(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    if (r = C(C({}, o.ctx || {}), o || {}), a = {
                                            pageProps: {}
                                        }, !e.getInitialProps) return [3, 2];
                                    return [4, e.getInitialProps(o)];
                                case 1:
                                    a = l.sent() || {}, l.label = 2;
                                case 2:
                                    return i = [C({}, a)], [4, function(e) {
                                        var t, r, o, a, i, l;
                                        return void 0 === e && (e = {}), o = this, a = void 0, i = void 0, l = function() {
                                            var o, a, i, l, c, s, u;
                                            return A(this, function(f) {
                                                switch (f.label) {
                                                    case 0:
                                                        var d;
                                                        if (a = (o = w(w({}, ("undefined" == typeof window ? n.g : window).i18nConfig), e)).localesToIgnore || ["default"], i = (null === (t = o.req) || void 0 === t ? void 0 : t.locale) || o.locale || (null === (r = o.router) || void 0 === r ? void 0 : r.locale) || o.defaultLocale || "", !o.pathname) return console.warn('\uD83D\uDEA8 [next-translate] You forgot to pass the "pathname" inside "loadNamespaces" configuration'), [2, {
                                                            __lang: i
                                                        }];
                                                        if (a.includes(i)) return [2, {
                                                            __lang: i
                                                        }];
                                                        return o.loaderName || !1 === o.loader || console.warn('\uD83D\uDEA8 [next-translate] You can remove the "loadNamespaces" helper, unless you set "loader: false" in your i18n config file.'), void 0 === (d = o.pathname.replace(/\/index$/, "")) && (d = ""), [4, function(e, t, n) {
                                                            var r = e.pages,
                                                                o = void 0 === r ? {} : r;
                                                            return g(this, void 0, void 0, function() {
                                                                var e, r, a, i, l, c, s, u = this;
                                                                return v(this, function(f) {
                                                                    switch (f.label) {
                                                                        case 0:
                                                                            return e = "rgx:", r = function(e) {
                                                                                return g(u, void 0, void 0, function() {
                                                                                    return v(this, function(t) {
                                                                                        return [2, "function" == typeof e ? e(n) : e || []]
                                                                                    })
                                                                                })
                                                                            }, a = Object.keys(o).reduce(function(n, a) {
                                                                                return a.substring(0, e.length) === e && RegExp(a.replace(e, "")).test(t) && n.push(r(o[a])), n
                                                                            }, []), i = [
                                                                                []
                                                                            ], [4, r(o["*"])];
                                                                        case 1:
                                                                            return l = [y.apply(void 0, i.concat([f.sent(), !0]))], [4, r(o[t])];
                                                                        case 2:
                                                                            return c = [y.apply(void 0, l.concat([f.sent(), !0]))], s = x, [4, Promise.all(a)];
                                                                        case 3:
                                                                            return [2, y.apply(void 0, c.concat([s.apply(void 0, [f.sent()]), !0]))]
                                                                    }
                                                                })
                                                            })
                                                        }(o, l = (d.length > 1 && d.endsWith("/") ? d.slice(0, -1) : d) || "/", o)];
                                                    case 1:
                                                        return [4, Promise.all((c = f.sent()).map(function(e) {
                                                            return "function" == typeof o.loadLocaleFrom ? o.loadLocaleFrom(i, e).catch(function() {
                                                                return {}
                                                            }) : Promise.resolve({})
                                                        }))];
                                                    case 2:
                                                        return s = f.sent() || [], !1 !== o.logBuild && "undefined" == typeof window && console.log((u = function(e) {
                                                            return j ? "\x1b[36m".concat(e, "\x1b[0m") : e
                                                        })("next-translate"), "- compiled page:", u(l), "- locale:", u(i), "- namespaces:", u(c.join(", ")), "- used loader:", u(o.loaderName || "-")), [2, {
                                                            __lang: i,
                                                            __namespaces: c.reduce(function(e, t, n) {
                                                                return e[t] = s[n] || null, e
                                                            }, {})
                                                        }]
                                                }
                                            })
                                        }, new(i || (i = Promise))(function(e, t) {
                                            function n(e) {
                                                try {
                                                    c(l.next(e))
                                                } catch (n) {
                                                    t(n)
                                                }
                                            }

                                            function r(e) {
                                                try {
                                                    c(l.throw(e))
                                                } catch (n) {
                                                    t(n)
                                                }
                                            }

                                            function c(t) {
                                                var o;
                                                t.done ? e(t.value) : ((o = t.value) instanceof i ? o : new i(function(e) {
                                                    e(o)
                                                })).then(n, r)
                                            }
                                            c((l = l.apply(o, a || [])).next())
                                        })
                                    }(C(C(C({}, r), t), {
                                        loaderName: "getInitialProps"
                                    }))];
                                case 3:
                                    return [2, C.apply(void 0, i.concat([l.sent()]))]
                            }
                        })
                    }, new(i || (i = Promise))(function(e, t) {
                        function n(e) {
                            try {
                                c(l.next(e))
                            } catch (n) {
                                t(n)
                            }
                        }

                        function o(e) {
                            try {
                                c(l.throw(e))
                            } catch (n) {
                                t(n)
                            }
                        }

                        function c(t) {
                            var r;
                            t.done ? e(t.value) : ((r = t.value) instanceof i ? r : new i(function(e) {
                                e(r)
                            })).then(n, o)
                        }
                        c((l = l.apply(r, a || [])).next())
                    })
                }), o
            }(function(e) {
                let {
                    Component: t,
                    pageProps: n
                } = e, o = (0, i.useRouter)(), {
                    locale: l
                } = o;
                return (0, a.useEffect)(() => {
                    let e = e => {
                        (0, _.tN)(e)
                    };
                    return o.events.on("routeChangeComplete", e), () => {
                        o.events.off("routeChangeComplete", e)
                    }
                }, [o.events]), (0, r.jsx)(k.pm, {
                    reCaptchaKey: "6LdFdRMkAAAAADoEkQVCuvZaMqDH-jvxFLCErjgJ",
                    scriptProps: {
                        defer: !0
                    },
                    children: (0, r.jsx)("div", {
                        dir: "ar" === l ? "rtl" : "ltr",
                        children: (0, r.jsx)(N.A, {
                            router: o,
                            children: (0, r.jsx)(t, { ...n
                            })
                        })
                    })
                })
            }, { ...o,
                isLoader: !0,
                skipInitialProps: !0,
                loadLocaleFrom: (e, t) => n(242)("./".concat(e, "/").concat(t)).then(e => e.default)
            })
        },
        4105: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return o
                },
                tN: function() {
                    return r
                }
            });
            let r = e => {
                    window.gtag && window.gtag("config", "G-V6NYD6YRBW", {
                        page_path: e
                    })
                },
                o = e => {
                    let {
                        action: t,
                        category: n,
                        label: r,
                        value: o
                    } = e;
                    window.gtag && (null == window || window.gtag("event", t, {
                        event_category: n,
                        event_label: r,
                        value: o
                    }))
                }
        },
        6810: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return i
                }
            });
            var r = n(2466),
                o = n(9177),
                a = function(e) {
                    (0, r.useEffect)(e, [])
                };
            let i = () => {
                let [e, t] = (0, r.useState)(), [n, i] = (0, r.useState)(!1);
                return (0, o.Z)(() => {
                    let {
                        innerWidth: e,
                        innerHeight: n
                    } = null != window ? window : {};
                    t({
                        width: e,
                        height: n
                    })
                }, 50, [n]), a(() => {
                    (() => {
                        let {
                            innerWidth: e,
                            innerHeight: n
                        } = null != window ? window : {};
                        t({
                            width: e,
                            height: n
                        })
                    })(), window.addEventListener("resize", () => {
                        i(e => !e)
                    })
                }), { ...e
                }
            }
        },
        7642: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return r
                }
            });
            let r = e => {
                let t = document.getElementById(e);
                t.scrollIntoView({
                    behavior: "smooth"
                })
            }
        },
        4744: function() {}
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(6840), t(5670)
        }), _N_E = e.O()
    }
]);