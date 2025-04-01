(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
})();
var Ks = {
        exports: {}
    },
    tl = {},
    Ys = {
        exports: {}
    },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn = Symbol.for("react.element"),
    uc = Symbol.for("react.portal"),
    ac = Symbol.for("react.fragment"),
    cc = Symbol.for("react.strict_mode"),
    dc = Symbol.for("react.profiler"),
    fc = Symbol.for("react.provider"),
    pc = Symbol.for("react.context"),
    mc = Symbol.for("react.forward_ref"),
    hc = Symbol.for("react.suspense"),
    yc = Symbol.for("react.memo"),
    gc = Symbol.for("react.lazy"),
    Io = Symbol.iterator;

function vc(e) {
    return e === null || typeof e != "object" ? null : (e = Io && e[Io] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Xs = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Gs = Object.assign,
    Zs = {};

function on(e, t, n) {
    this.props = e, this.context = t, this.refs = Zs, this.updater = n || Xs
}
on.prototype.isReactComponent = {};
on.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
on.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Js() {}
Js.prototype = on.prototype;

function Ui(e, t, n) {
    this.props = e, this.context = t, this.refs = Zs, this.updater = n || Xs
}
var Ai = Ui.prototype = new Js;
Ai.constructor = Ui;
Gs(Ai, on.prototype);
Ai.isPureReactComponent = !0;
var Oo = Array.isArray,
    qs = Object.prototype.hasOwnProperty,
    Bi = {
        current: null
    },
    bs = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function eu(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) qs.call(t, r) && !bs.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var a = Array(u), d = 0; d < u; d++) a[d] = arguments[d + 2];
        l.children = a
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: Gn,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Bi.current
    }
}

function xc(e, t) {
    return {
        $$typeof: Gn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Vi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Gn
}

function wc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Fo = /\/+/g;

function wl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? wc("" + e.key) : t.toString(36)
}

function xr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Gn:
                case uc:
                    o = !0
            }
    }
    if (o) return o = e, l = l(o), e = r === "" ? "." + wl(o, 0) : r, Oo(l) ? (n = "", e != null && (n = e.replace(Fo, "$&/") + "/"), xr(l, t, n, "", function(d) {
        return d
    })) : l != null && (Vi(l) && (l = xc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Fo, "$&/") + "/") + e)), t.push(l)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Oo(e))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var a = r + wl(i, u);
            o += xr(i, t, n, a, l)
        } else if (a = vc(e), typeof a == "function")
            for (e = a.call(e), u = 0; !(i = e.next()).done;) i = i.value, a = r + wl(i, u++), o += xr(i, t, n, a, l);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function nr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return xr(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }), r
}

function kc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ae = {
        current: null
    },
    wr = {
        transition: null
    },
    Sc = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: wr,
        ReactCurrentOwner: Bi
    };

function tu() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: nr,
    forEach: function(e, t, n) {
        nr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return nr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return nr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Vi(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
L.Component = on;
L.Fragment = ac;
L.Profiler = dc;
L.PureComponent = Ui;
L.StrictMode = cc;
L.Suspense = hc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
L.act = tu;
L.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Gs({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, o = Bi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (a in t) qs.call(t, a) && !bs.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        u = Array(a);
        for (var d = 0; d < a; d++) u[d] = arguments[d + 2];
        r.children = u
    }
    return {
        $$typeof: Gn,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
};
L.createContext = function(e) {
    return e = {
        $$typeof: pc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: fc,
        _context: e
    }, e.Consumer = e
};
L.createElement = eu;
L.createFactory = function(e) {
    var t = eu.bind(null, e);
    return t.type = e, t
};
L.createRef = function() {
    return {
        current: null
    }
};
L.forwardRef = function(e) {
    return {
        $$typeof: mc,
        render: e
    }
};
L.isValidElement = Vi;
L.lazy = function(e) {
    return {
        $$typeof: gc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: kc
    }
};
L.memo = function(e, t) {
    return {
        $$typeof: yc,
        type: e,
        compare: t === void 0 ? null : t
    }
};
L.startTransition = function(e) {
    var t = wr.transition;
    wr.transition = {};
    try {
        e()
    } finally {
        wr.transition = t
    }
};
L.unstable_act = tu;
L.useCallback = function(e, t) {
    return ae.current.useCallback(e, t)
};
L.useContext = function(e) {
    return ae.current.useContext(e)
};
L.useDebugValue = function() {};
L.useDeferredValue = function(e) {
    return ae.current.useDeferredValue(e)
};
L.useEffect = function(e, t) {
    return ae.current.useEffect(e, t)
};
L.useId = function() {
    return ae.current.useId()
};
L.useImperativeHandle = function(e, t, n) {
    return ae.current.useImperativeHandle(e, t, n)
};
L.useInsertionEffect = function(e, t) {
    return ae.current.useInsertionEffect(e, t)
};
L.useLayoutEffect = function(e, t) {
    return ae.current.useLayoutEffect(e, t)
};
L.useMemo = function(e, t) {
    return ae.current.useMemo(e, t)
};
L.useReducer = function(e, t, n) {
    return ae.current.useReducer(e, t, n)
};
L.useRef = function(e) {
    return ae.current.useRef(e)
};
L.useState = function(e) {
    return ae.current.useState(e)
};
L.useSyncExternalStore = function(e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n)
};
L.useTransition = function() {
    return ae.current.useTransition()
};
L.version = "18.3.1";
Ys.exports = L;
var T = Ys.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nc = T,
    jc = Symbol.for("react.element"),
    Cc = Symbol.for("react.fragment"),
    Ec = Object.prototype.hasOwnProperty,
    _c = Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Pc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function nu(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) Ec.call(t, r) && !Pc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: jc,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: _c.current
    }
}
tl.Fragment = Cc;
tl.jsx = nu;
tl.jsxs = nu;
Ks.exports = tl;
var s = Ks.exports,
    ru = {
        exports: {}
    },
    we = {},
    lu = {
        exports: {}
    },
    iu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, P) {
        var z = E.length;
        E.push(P);
        e: for (; 0 < z;) {
            var Q = z - 1 >>> 1,
                Z = E[Q];
            if (0 < l(Z, P)) E[Q] = P, E[z] = Z, z = Q;
            else break e
        }
    }

    function n(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var P = E[0],
            z = E.pop();
        if (z !== P) {
            E[0] = z;
            e: for (var Q = 0, Z = E.length, er = Z >>> 1; Q < er;) {
                var gt = 2 * (Q + 1) - 1,
                    xl = E[gt],
                    vt = gt + 1,
                    tr = E[vt];
                if (0 > l(xl, z)) vt < Z && 0 > l(tr, xl) ? (E[Q] = tr, E[vt] = z, Q = vt) : (E[Q] = xl, E[gt] = z, Q = gt);
                else if (vt < Z && 0 > l(tr, z)) E[Q] = tr, E[vt] = z, Q = vt;
                else break e
            }
        }
        return P
    }

    function l(E, P) {
        var z = E.sortIndex - P.sortIndex;
        return z !== 0 ? z : E.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date,
            u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var a = [],
        d = [],
        y = 1,
        h = null,
        m = 3,
        v = !1,
        x = !1,
        S = !1,
        D = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function f(E) {
        for (var P = n(d); P !== null;) {
            if (P.callback === null) r(d);
            else if (P.startTime <= E) r(d), P.sortIndex = P.expirationTime, t(a, P);
            else break;
            P = n(d)
        }
    }

    function g(E) {
        if (S = !1, f(E), !x)
            if (n(a) !== null) x = !0, gl(N);
            else {
                var P = n(d);
                P !== null && vl(g, P.startTime - E)
            }
    }

    function N(E, P) {
        x = !1, S && (S = !1, p(_), _ = -1), v = !0;
        var z = m;
        try {
            for (f(P), h = n(a); h !== null && (!(h.expirationTime > P) || E && !Pe());) {
                var Q = h.callback;
                if (typeof Q == "function") {
                    h.callback = null, m = h.priorityLevel;
                    var Z = Q(h.expirationTime <= P);
                    P = e.unstable_now(), typeof Z == "function" ? h.callback = Z : h === n(a) && r(a), f(P)
                } else r(a);
                h = n(a)
            }
            if (h !== null) var er = !0;
            else {
                var gt = n(d);
                gt !== null && vl(g, gt.startTime - P), er = !1
            }
            return er
        } finally {
            h = null, m = z, v = !1
        }
    }
    var k = !1,
        j = null,
        _ = -1,
        F = 5,
        M = -1;

    function Pe() {
        return !(e.unstable_now() - M < F)
    }

    function an() {
        if (j !== null) {
            var E = e.unstable_now();
            M = E;
            var P = !0;
            try {
                P = j(!0, E)
            } finally {
                P ? cn() : (k = !1, j = null)
            }
        } else k = !1
    }
    var cn;
    if (typeof c == "function") cn = function() {
        c(an)
    };
    else if (typeof MessageChannel < "u") {
        var Do = new MessageChannel,
            sc = Do.port2;
        Do.port1.onmessage = an, cn = function() {
            sc.postMessage(null)
        }
    } else cn = function() {
        D(an, 0)
    };

    function gl(E) {
        j = E, k || (k = !0, cn())
    }

    function vl(E, P) {
        _ = D(function() {
            E(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
        E.callback = null
    }, e.unstable_continueExecution = function() {
        x || v || (x = !0, gl(N))
    }, e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return m
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(E) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var P = 3;
                break;
            default:
                P = m
        }
        var z = m;
        m = P;
        try {
            return E()
        } finally {
            m = z
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, P) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var z = m;
        m = E;
        try {
            return P()
        } finally {
            m = z
        }
    }, e.unstable_scheduleCallback = function(E, P, z) {
        var Q = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, E) {
            case 1:
                var Z = -1;
                break;
            case 2:
                Z = 250;
                break;
            case 5:
                Z = 1073741823;
                break;
            case 4:
                Z = 1e4;
                break;
            default:
                Z = 5e3
        }
        return Z = z + Z, E = {
            id: y++,
            callback: P,
            priorityLevel: E,
            startTime: z,
            expirationTime: Z,
            sortIndex: -1
        }, z > Q ? (E.sortIndex = z, t(d, E), n(a) === null && E === n(d) && (S ? (p(_), _ = -1) : S = !0, vl(g, z - Q))) : (E.sortIndex = Z, t(a, E), x || v || (x = !0, gl(N))), E
    }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(E) {
        var P = m;
        return function() {
            var z = m;
            m = P;
            try {
                return E.apply(this, arguments)
            } finally {
                m = z
            }
        }
    }
})(iu);
lu.exports = iu;
var zc = lu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc = T,
    xe = zc;

function w(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ou = new Set,
    Mn = {};

function Tt(e, t) {
    qt(e, t), qt(e + "Capture", t)
}

function qt(e, t) {
    for (Mn[e] = t, e = 0; e < t.length; e++) ou.add(t[e])
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Kl = Object.prototype.hasOwnProperty,
    Tc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    $o = {},
    Uo = {};

function Mc(e) {
    return Kl.call(Uo, e) ? !0 : Kl.call($o, e) ? !1 : Tc.test(e) ? Uo[e] = !0 : ($o[e] = !0, !1)
}

function Rc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Dc(e, t, n, r) {
    if (t === null || typeof t > "u" || Rc(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ce(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ce(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    te[t] = new ce(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Wi = /[\-:]([a-z])/g;

function Hi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Wi, Hi);
    te[t] = new ce(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Wi, Hi);
    te[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Wi, Hi);
    te[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
te.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Qi(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Dc(t, n, l, r) && (n = null), r || l === null ? Mc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ze = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    rr = Symbol.for("react.element"),
    Dt = Symbol.for("react.portal"),
    It = Symbol.for("react.fragment"),
    Ki = Symbol.for("react.strict_mode"),
    Yl = Symbol.for("react.profiler"),
    su = Symbol.for("react.provider"),
    uu = Symbol.for("react.context"),
    Yi = Symbol.for("react.forward_ref"),
    Xl = Symbol.for("react.suspense"),
    Gl = Symbol.for("react.suspense_list"),
    Xi = Symbol.for("react.memo"),
    qe = Symbol.for("react.lazy"),
    au = Symbol.for("react.offscreen"),
    Ao = Symbol.iterator;

function dn(e) {
    return e === null || typeof e != "object" ? null : (e = Ao && e[Ao] || e["@@iterator"], typeof e == "function" ? e : null)
}
var W = Object.assign,
    kl;

function xn(e) {
    if (kl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        kl = t && t[1] || ""
    }
    return `
` + kl + e
}
var Sl = !1;

function Nl(e, t) {
    if (!e || Sl) return "";
    Sl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u];) u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--, u--, 0 > u || l[o] !== i[u]) {
                                var a = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            } while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        Sl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? xn(e) : ""
}

function Ic(e) {
    switch (e.tag) {
        case 5:
            return xn(e.type);
        case 16:
            return xn("Lazy");
        case 13:
            return xn("Suspense");
        case 19:
            return xn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Nl(e.type, !1), e;
        case 11:
            return e = Nl(e.type.render, !1), e;
        case 1:
            return e = Nl(e.type, !0), e;
        default:
            return ""
    }
}

function Zl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case It:
            return "Fragment";
        case Dt:
            return "Portal";
        case Yl:
            return "Profiler";
        case Ki:
            return "StrictMode";
        case Xl:
            return "Suspense";
        case Gl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case uu:
            return (e.displayName || "Context") + ".Consumer";
        case su:
            return (e._context.displayName || "Context") + ".Provider";
        case Yi:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Xi:
            return t = e.displayName || null, t !== null ? t : Zl(e.type) || "Memo";
        case qe:
            t = e._payload, e = e._init;
            try {
                return Zl(e(t))
            } catch {}
    }
    return null
}

function Oc(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Zl(t);
        case 8:
            return t === Ki ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ft(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function cu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Fc(e) {
    var t = cu(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, i.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function lr(e) {
    e._valueTracker || (e._valueTracker = Fc(e))
}

function du(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = cu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Tr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Jl(e, t) {
    var n = t.checked;
    return W({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Bo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ft(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function fu(e, t) {
    t = t.checked, t != null && Qi(e, "checked", t, !1)
}

function ql(e, t) {
    fu(e, t);
    var n = ft(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? bl(e, t.type, n) : t.hasOwnProperty("defaultValue") && bl(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Vo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function bl(e, t, n) {
    (t !== "number" || Tr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var wn = Array.isArray;

function Kt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function ei(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
    return W({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Wo(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(w(92));
            if (wn(n)) {
                if (1 < n.length) throw Error(w(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ft(n)
    }
}

function pu(e, t) {
    var n = ft(t.value),
        r = ft(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ho(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function mu(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ti(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? mu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ir, hu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ir = ir || document.createElement("div"), ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ir.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Rn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Nn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    $c = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function(e) {
    $c.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Nn[t] = Nn[e]
    })
});

function yu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px"
}

function gu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = yu(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Uc = W({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function ni(e, t) {
    if (t) {
        if (Uc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(w(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(w(62))
    }
}

function ri(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var li = null;

function Gi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ii = null,
    Yt = null,
    Xt = null;

function Qo(e) {
    if (e = qn(e)) {
        if (typeof ii != "function") throw Error(w(280));
        var t = e.stateNode;
        t && (t = ol(t), ii(e.stateNode, e.type, t))
    }
}

function vu(e) {
    Yt ? Xt ? Xt.push(e) : Xt = [e] : Yt = e
}

function xu() {
    if (Yt) {
        var e = Yt,
            t = Xt;
        if (Xt = Yt = null, Qo(e), t)
            for (e = 0; e < t.length; e++) Qo(t[e])
    }
}

function wu(e, t) {
    return e(t)
}

function ku() {}
var jl = !1;

function Su(e, t, n) {
    if (jl) return e(t, n);
    jl = !0;
    try {
        return wu(e, t, n)
    } finally {
        jl = !1, (Yt !== null || Xt !== null) && (ku(), xu())
    }
}

function Dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ol(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(w(231, t, typeof n));
    return n
}
var oi = !1;
if (Ke) try {
    var fn = {};
    Object.defineProperty(fn, "passive", {
        get: function() {
            oi = !0
        }
    }), window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn)
} catch {
    oi = !1
}

function Ac(e, t, n, r, l, i, o, u, a) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (y) {
        this.onError(y)
    }
}
var jn = !1,
    Mr = null,
    Rr = !1,
    si = null,
    Bc = {
        onError: function(e) {
            jn = !0, Mr = e
        }
    };

function Vc(e, t, n, r, l, i, o, u, a) {
    jn = !1, Mr = null, Ac.apply(Bc, arguments)
}

function Wc(e, t, n, r, l, i, o, u, a) {
    if (Vc.apply(this, arguments), jn) {
        if (jn) {
            var d = Mr;
            jn = !1, Mr = null
        } else throw Error(w(198));
        Rr || (Rr = !0, si = d)
    }
}

function Mt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Nu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Ko(e) {
    if (Mt(e) !== e) throw Error(w(188))
}

function Hc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Mt(e), t === null) throw Error(w(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i;) {
                if (i === n) return Ko(l), e;
                if (i === r) return Ko(l), t;
                i = i.sibling
            }
            throw Error(w(188))
        }
        if (n.return !== r.return) n = l, r = i;
        else {
            for (var o = !1, u = l.child; u;) {
                if (u === n) {
                    o = !0, n = l, r = i;
                    break
                }
                if (u === r) {
                    o = !0, r = l, n = i;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = i.child; u;) {
                    if (u === n) {
                        o = !0, n = i, r = l;
                        break
                    }
                    if (u === r) {
                        o = !0, r = i, n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!o) throw Error(w(189))
            }
        }
        if (n.alternate !== r) throw Error(w(190))
    }
    if (n.tag !== 3) throw Error(w(188));
    return n.stateNode.current === n ? e : t
}

function ju(e) {
    return e = Hc(e), e !== null ? Cu(e) : null
}

function Cu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Cu(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Eu = xe.unstable_scheduleCallback,
    Yo = xe.unstable_cancelCallback,
    Qc = xe.unstable_shouldYield,
    Kc = xe.unstable_requestPaint,
    K = xe.unstable_now,
    Yc = xe.unstable_getCurrentPriorityLevel,
    Zi = xe.unstable_ImmediatePriority,
    _u = xe.unstable_UserBlockingPriority,
    Dr = xe.unstable_NormalPriority,
    Xc = xe.unstable_LowPriority,
    Pu = xe.unstable_IdlePriority,
    nl = null,
    Ue = null;

function Gc(e) {
    if (Ue && typeof Ue.onCommitFiberRoot == "function") try {
        Ue.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : qc,
    Zc = Math.log,
    Jc = Math.LN2;

function qc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Zc(e) / Jc | 0) | 0
}
var or = 64,
    sr = 4194304;

function kn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Ir(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? r = kn(u) : (i &= o, i !== 0 && (r = kn(i)))
    } else o = n & ~l, o !== 0 ? r = kn(o) : i !== 0 && (r = kn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Re(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function bc(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function ed(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var o = 31 - Re(i),
            u = 1 << o,
            a = l[o];
        a === -1 ? (!(u & n) || u & r) && (l[o] = bc(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u
    }
}

function ui(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function zu() {
    var e = or;
    return or <<= 1, !(or & 4194240) && (or = 64), e
}

function Cl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Zn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Re(t), e[t] = n
}

function td(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Re(n),
            i = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
    }
}

function Ji(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Re(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var I = 0;

function Lu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Tu, qi, Mu, Ru, Du, ai = !1,
    ur = [],
    lt = null,
    it = null,
    ot = null,
    In = new Map,
    On = new Map,
    et = [],
    nd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Xo(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            lt = null;
            break;
        case "dragenter":
        case "dragleave":
            it = null;
            break;
        case "mouseover":
        case "mouseout":
            ot = null;
            break;
        case "pointerover":
        case "pointerout":
            In.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            On.delete(t.pointerId)
    }
}

function pn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    }, t !== null && (t = qn(t), t !== null && qi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function rd(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return lt = pn(lt, e, t, n, r, l), !0;
        case "dragenter":
            return it = pn(it, e, t, n, r, l), !0;
        case "mouseover":
            return ot = pn(ot, e, t, n, r, l), !0;
        case "pointerover":
            var i = l.pointerId;
            return In.set(i, pn(In.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return i = l.pointerId, On.set(i, pn(On.get(i) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Iu(e) {
    var t = kt(e.target);
    if (t !== null) {
        var n = Mt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Nu(n), t !== null) {
                    e.blockedOn = t, Du(e.priority, function() {
                        Mu(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            li = r, n.target.dispatchEvent(r), li = null
        } else return t = qn(n), t !== null && qi(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Go(e, t, n) {
    kr(e) && n.delete(t)
}

function ld() {
    ai = !1, lt !== null && kr(lt) && (lt = null), it !== null && kr(it) && (it = null), ot !== null && kr(ot) && (ot = null), In.forEach(Go), On.forEach(Go)
}

function mn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ai || (ai = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, ld)))
}

function Fn(e) {
    function t(l) {
        return mn(l, e)
    }
    if (0 < ur.length) {
        mn(ur[0], e);
        for (var n = 1; n < ur.length; n++) {
            var r = ur[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && mn(lt, e), it !== null && mn(it, e), ot !== null && mn(ot, e), In.forEach(t), On.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0], n.blockedOn === null);) Iu(n), n.blockedOn === null && et.shift()
}
var Gt = Ze.ReactCurrentBatchConfig,
    Or = !0;

function id(e, t, n, r) {
    var l = I,
        i = Gt.transition;
    Gt.transition = null;
    try {
        I = 1, bi(e, t, n, r)
    } finally {
        I = l, Gt.transition = i
    }
}

function od(e, t, n, r) {
    var l = I,
        i = Gt.transition;
    Gt.transition = null;
    try {
        I = 4, bi(e, t, n, r)
    } finally {
        I = l, Gt.transition = i
    }
}

function bi(e, t, n, r) {
    if (Or) {
        var l = ci(e, t, n, r);
        if (l === null) Il(e, t, r, Fr, n), Xo(e, r);
        else if (rd(l, e, t, n, r)) r.stopPropagation();
        else if (Xo(e, r), t & 4 && -1 < nd.indexOf(e)) {
            for (; l !== null;) {
                var i = qn(l);
                if (i !== null && Tu(i), i = ci(e, t, n, r), i === null && Il(e, t, r, Fr, n), i === l) break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else Il(e, t, r, null, n)
    }
}
var Fr = null;

function ci(e, t, n, r) {
    if (Fr = null, e = Gi(r), e = kt(e), e !== null)
        if (t = Mt(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Nu(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Fr = e, null
}

function Ou(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Yc()) {
                case Zi:
                    return 1;
                case _u:
                    return 4;
                case Dr:
                case Xc:
                    return 16;
                case Pu:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var nt = null,
    eo = null,
    Sr = null;

function Fu() {
    if (Sr) return Sr;
    var e, t = eo,
        n = t.length,
        r, l = "value" in nt ? nt.value : nt.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return Sr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Nr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ar() {
    return !0
}

function Zo() {
    return !1
}

function ke(e) {
    function t(n, r, l, i, o) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ar : Zo, this.isPropagationStopped = Zo, this
    }
    return W(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ar)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ar)
        },
        persist: function() {},
        isPersistent: ar
    }), t
}
var sn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    to = ke(sn),
    Jn = W({}, sn, {
        view: 0,
        detail: 0
    }),
    sd = ke(Jn),
    El, _l, hn, rl = W({}, Jn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: no,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== hn && (hn && e.type === "mousemove" ? (El = e.screenX - hn.screenX, _l = e.screenY - hn.screenY) : _l = El = 0, hn = e), El)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : _l
        }
    }),
    Jo = ke(rl),
    ud = W({}, rl, {
        dataTransfer: 0
    }),
    ad = ke(ud),
    cd = W({}, Jn, {
        relatedTarget: 0
    }),
    Pl = ke(cd),
    dd = W({}, sn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    fd = ke(dd),
    pd = W({}, sn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    md = ke(pd),
    hd = W({}, sn, {
        data: 0
    }),
    qo = ke(hd),
    yd = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    gd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    vd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function xd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vd[e]) ? !!t[e] : !1
}

function no() {
    return xd
}
var wd = W({}, Jn, {
        key: function(e) {
            if (e.key) {
                var t = yd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Nr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gd[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: no,
        charCode: function(e) {
            return e.type === "keypress" ? Nr(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Nr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    kd = ke(wd),
    Sd = W({}, rl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    bo = ke(Sd),
    Nd = W({}, Jn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: no
    }),
    jd = ke(Nd),
    Cd = W({}, sn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Ed = ke(Cd),
    _d = W({}, rl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Pd = ke(_d),
    zd = [9, 13, 27, 32],
    ro = Ke && "CompositionEvent" in window,
    Cn = null;
Ke && "documentMode" in document && (Cn = document.documentMode);
var Ld = Ke && "TextEvent" in window && !Cn,
    $u = Ke && (!ro || Cn && 8 < Cn && 11 >= Cn),
    es = " ",
    ts = !1;

function Uu(e, t) {
    switch (e) {
        case "keyup":
            return zd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Au(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Ot = !1;

function Td(e, t) {
    switch (e) {
        case "compositionend":
            return Au(t);
        case "keypress":
            return t.which !== 32 ? null : (ts = !0, es);
        case "textInput":
            return e = t.data, e === es && ts ? null : e;
        default:
            return null
    }
}

function Md(e, t) {
    if (Ot) return e === "compositionend" || !ro && Uu(e, t) ? (e = Fu(), Sr = eo = nt = null, Ot = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return $u && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Rd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rd[e.type] : t === "textarea"
}

function Bu(e, t, n, r) {
    vu(r), t = $r(t, "onChange"), 0 < t.length && (n = new to("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var En = null,
    $n = null;

function Dd(e) {
    qu(e, 0)
}

function ll(e) {
    var t = Ut(e);
    if (du(t)) return e
}

function Id(e, t) {
    if (e === "change") return t
}
var Vu = !1;
if (Ke) {
    var zl;
    if (Ke) {
        var Ll = "oninput" in document;
        if (!Ll) {
            var rs = document.createElement("div");
            rs.setAttribute("oninput", "return;"), Ll = typeof rs.oninput == "function"
        }
        zl = Ll
    } else zl = !1;
    Vu = zl && (!document.documentMode || 9 < document.documentMode)
}

function ls() {
    En && (En.detachEvent("onpropertychange", Wu), $n = En = null)
}

function Wu(e) {
    if (e.propertyName === "value" && ll($n)) {
        var t = [];
        Bu(t, $n, e, Gi(e)), Su(Dd, t)
    }
}

function Od(e, t, n) {
    e === "focusin" ? (ls(), En = t, $n = n, En.attachEvent("onpropertychange", Wu)) : e === "focusout" && ls()
}

function Fd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ll($n)
}

function $d(e, t) {
    if (e === "click") return ll(t)
}

function Ud(e, t) {
    if (e === "input" || e === "change") return ll(t)
}

function Ad(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ie = typeof Object.is == "function" ? Object.is : Ad;

function Un(e, t) {
    if (Ie(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Kl.call(t, l) || !Ie(e[l], t[l])) return !1
    }
    return !0
}

function is(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function os(e, t) {
    var n = is(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = is(n)
    }
}

function Hu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Qu() {
    for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Tr(e.document)
    }
    return t
}

function lo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Bd(e) {
    var t = Qu(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Hu(n.ownerDocument.documentElement, n)) {
        if (r !== null && lo(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = os(n, i);
                var o = os(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Vd = Ke && "documentMode" in document && 11 >= document.documentMode,
    Ft = null,
    di = null,
    _n = null,
    fi = !1;

function ss(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi || Ft == null || Ft !== Tr(r) || (r = Ft, "selectionStart" in r && lo(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), _n && Un(_n, r) || (_n = r, r = $r(di, "onSelect"), 0 < r.length && (t = new to("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Ft)))
}

function cr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var $t = {
        animationend: cr("Animation", "AnimationEnd"),
        animationiteration: cr("Animation", "AnimationIteration"),
        animationstart: cr("Animation", "AnimationStart"),
        transitionend: cr("Transition", "TransitionEnd")
    },
    Tl = {},
    Ku = {};
Ke && (Ku = document.createElement("div").style, "AnimationEvent" in window || (delete $t.animationend.animation, delete $t.animationiteration.animation, delete $t.animationstart.animation), "TransitionEvent" in window || delete $t.transitionend.transition);

function il(e) {
    if (Tl[e]) return Tl[e];
    if (!$t[e]) return e;
    var t = $t[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ku) return Tl[e] = t[n];
    return e
}
var Yu = il("animationend"),
    Xu = il("animationiteration"),
    Gu = il("animationstart"),
    Zu = il("transitionend"),
    Ju = new Map,
    us = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function mt(e, t) {
    Ju.set(e, t), Tt(t, [e])
}
for (var Ml = 0; Ml < us.length; Ml++) {
    var Rl = us[Ml],
        Wd = Rl.toLowerCase(),
        Hd = Rl[0].toUpperCase() + Rl.slice(1);
    mt(Wd, "on" + Hd)
}
mt(Yu, "onAnimationEnd");
mt(Xu, "onAnimationIteration");
mt(Gu, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Zu, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));

function as(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Wc(r, t, void 0, e), e.currentTarget = null
}

function qu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o],
                        a = u.instance,
                        d = u.currentTarget;
                    if (u = u.listener, a !== i && l.isPropagationStopped()) break e;
                    as(l, u, d), i = a
                } else
                    for (o = 0; o < r.length; o++) {
                        if (u = r[o], a = u.instance, d = u.currentTarget, u = u.listener, a !== i && l.isPropagationStopped()) break e;
                        as(l, u, d), i = a
                    }
        }
    }
    if (Rr) throw e = si, Rr = !1, si = null, e
}

function $(e, t) {
    var n = t[gi];
    n === void 0 && (n = t[gi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (bu(t, e, 2, !1), n.add(r))
}

function Dl(e, t, n) {
    var r = 0;
    t && (r |= 4), bu(n, e, r, t)
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);

function An(e) {
    if (!e[dr]) {
        e[dr] = !0, ou.forEach(function(n) {
            n !== "selectionchange" && (Qd.has(n) || Dl(n, !1, e), Dl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[dr] || (t[dr] = !0, Dl("selectionchange", !1, t))
    }
}

function bu(e, t, n, r) {
    switch (Ou(t)) {
        case 1:
            var l = id;
            break;
        case 4:
            l = od;
            break;
        default:
            l = bi
    }
    n = l.bind(null, t, n, e), l = void 0, !oi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Il(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var a = o.tag;
                    if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
                    o = o.return
                }
            for (; u !== null;) {
                if (o = kt(u), o === null) return;
                if (a = o.tag, a === 5 || a === 6) {
                    r = i = o;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    Su(function() {
        var d = i,
            y = Gi(n),
            h = [];
        e: {
            var m = Ju.get(e);
            if (m !== void 0) {
                var v = to,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (Nr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = kd;
                        break;
                    case "focusin":
                        x = "focus", v = Pl;
                        break;
                    case "focusout":
                        x = "blur", v = Pl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = Pl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = Jo;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = ad;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = jd;
                        break;
                    case Yu:
                    case Xu:
                    case Gu:
                        v = fd;
                        break;
                    case Zu:
                        v = Ed;
                        break;
                    case "scroll":
                        v = sd;
                        break;
                    case "wheel":
                        v = Pd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = md;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = bo
                }
                var S = (t & 4) !== 0,
                    D = !S && e === "scroll",
                    p = S ? m !== null ? m + "Capture" : null : m;
                S = [];
                for (var c = d, f; c !== null;) {
                    f = c;
                    var g = f.stateNode;
                    if (f.tag === 5 && g !== null && (f = g, p !== null && (g = Dn(c, p), g != null && S.push(Bn(c, g, f)))), D) break;
                    c = c.return
                }
                0 < S.length && (m = new v(m, x, null, n, y), h.push({
                    event: m,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== li && (x = n.relatedTarget || n.fromElement) && (kt(x) || x[Ye])) break e;
                if ((v || m) && (m = y.window === y ? y : (m = y.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (x = n.relatedTarget || n.toElement, v = d, x = x ? kt(x) : null, x !== null && (D = Mt(x), x !== D || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null, x = d), v !== x)) {
                    if (S = Jo, g = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (S = bo, g = "onPointerLeave", p = "onPointerEnter", c = "pointer"), D = v == null ? m : Ut(v), f = x == null ? m : Ut(x), m = new S(g, c + "leave", v, n, y), m.target = D, m.relatedTarget = f, g = null, kt(y) === d && (S = new S(p, c + "enter", x, n, y), S.target = f, S.relatedTarget = D, g = S), D = g, v && x) t: {
                        for (S = v, p = x, c = 0, f = S; f; f = Rt(f)) c++;
                        for (f = 0, g = p; g; g = Rt(g)) f++;
                        for (; 0 < c - f;) S = Rt(S),
                        c--;
                        for (; 0 < f - c;) p = Rt(p),
                        f--;
                        for (; c--;) {
                            if (S === p || p !== null && S === p.alternate) break t;
                            S = Rt(S), p = Rt(p)
                        }
                        S = null
                    }
                    else S = null;
                    v !== null && cs(h, m, v, S, !1), x !== null && D !== null && cs(h, D, x, S, !0)
                }
            }
            e: {
                if (m = d ? Ut(d) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file") var N = Id;
                else if (ns(m))
                    if (Vu) N = Ud;
                    else {
                        N = Fd;
                        var k = Od
                    }
                else(v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = $d);
                if (N && (N = N(e, d))) {
                    Bu(h, N, n, y);
                    break e
                }
                k && k(e, m, d),
                e === "focusout" && (k = m._wrapperState) && k.controlled && m.type === "number" && bl(m, "number", m.value)
            }
            switch (k = d ? Ut(d) : window, e) {
                case "focusin":
                    (ns(k) || k.contentEditable === "true") && (Ft = k, di = d, _n = null);
                    break;
                case "focusout":
                    _n = di = Ft = null;
                    break;
                case "mousedown":
                    fi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    fi = !1, ss(h, n, y);
                    break;
                case "selectionchange":
                    if (Vd) break;
                case "keydown":
                case "keyup":
                    ss(h, n, y)
            }
            var j;
            if (ro) e: {
                switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                }
                _ = void 0
            }
            else Ot ? Uu(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");_ && ($u && n.locale !== "ko" && (Ot || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Ot && (j = Fu()) : (nt = y, eo = "value" in nt ? nt.value : nt.textContent, Ot = !0)), k = $r(d, _), 0 < k.length && (_ = new qo(_, e, null, n, y), h.push({
                event: _,
                listeners: k
            }), j ? _.data = j : (j = Au(n), j !== null && (_.data = j)))),
            (j = Ld ? Td(e, n) : Md(e, n)) && (d = $r(d, "onBeforeInput"), 0 < d.length && (y = new qo("onBeforeInput", "beforeinput", null, n, y), h.push({
                event: y,
                listeners: d
            }), y.data = j))
        }
        qu(h, t)
    })
}

function Bn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = Dn(e, n), i != null && r.unshift(Bn(e, i, l)), i = Dn(e, t), i != null && r.push(Bn(e, i, l))), e = e.return
    }
    return r
}

function Rt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function cs(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
        var u = n,
            a = u.alternate,
            d = u.stateNode;
        if (a !== null && a === r) break;
        u.tag === 5 && d !== null && (u = d, l ? (a = Dn(n, i), a != null && o.unshift(Bn(n, a, u))) : l || (a = Dn(n, i), a != null && o.push(Bn(n, a, u)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Kd = /\r\n?/g,
    Yd = /\u0000|\uFFFD/g;

function ds(e) {
    return (typeof e == "string" ? e : "" + e).replace(Kd, `
`).replace(Yd, "")
}

function fr(e, t, n) {
    if (t = ds(t), ds(e) !== t && n) throw Error(w(425))
}

function Ur() {}
var pi = null,
    mi = null;

function hi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var yi = typeof setTimeout == "function" ? setTimeout : void 0,
    Xd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fs = typeof Promise == "function" ? Promise : void 0,
    Gd = typeof queueMicrotask == "function" ? queueMicrotask : typeof fs < "u" ? function(e) {
        return fs.resolve(null).then(e).catch(Zd)
    } : yi;

function Zd(e) {
    setTimeout(function() {
        throw e
    })
}

function Ol(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Fn(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Fn(t)
}

function st(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function ps(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var un = Math.random().toString(36).slice(2),
    $e = "__reactFiber$" + un,
    Vn = "__reactProps$" + un,
    Ye = "__reactContainer$" + un,
    gi = "__reactEvents$" + un,
    Jd = "__reactListeners$" + un,
    qd = "__reactHandles$" + un;

function kt(e) {
    var t = e[$e];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ye] || n[$e]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ps(e); e !== null;) {
                    if (n = e[$e]) return n;
                    e = ps(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function qn(e) {
    return e = e[$e] || e[Ye], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Ut(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(w(33))
}

function ol(e) {
    return e[Vn] || null
}
var vi = [],
    At = -1;

function ht(e) {
    return {
        current: e
    }
}

function U(e) {
    0 > At || (e.current = vi[At], vi[At] = null, At--)
}

function O(e, t) {
    At++, vi[At] = e.current, e.current = t
}
var pt = {},
    oe = ht(pt),
    pe = ht(!1),
    Et = pt;

function bt(e, t) {
    var n = e.type.contextTypes;
    if (!n) return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function me(e) {
    return e = e.childContextTypes, e != null
}

function Ar() {
    U(pe), U(oe)
}

function ms(e, t, n) {
    if (oe.current !== pt) throw Error(w(168));
    O(oe, t), O(pe, n)
}

function ea(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(w(108, Oc(e) || "Unknown", l));
    return W({}, n, r)
}

function Br(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt, Et = oe.current, O(oe, e), O(pe, pe.current), !0
}

function hs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(w(169));
    n ? (e = ea(e, t, Et), r.__reactInternalMemoizedMergedChildContext = e, U(pe), U(oe), O(oe, e)) : U(pe), O(pe, n)
}
var Ve = null,
    sl = !1,
    Fl = !1;

function ta(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}

function bd(e) {
    sl = !0, ta(e)
}

function yt() {
    if (!Fl && Ve !== null) {
        Fl = !0;
        var e = 0,
            t = I;
        try {
            var n = Ve;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Ve = null, sl = !1
        } catch (l) {
            throw Ve !== null && (Ve = Ve.slice(e + 1)), Eu(Zi, yt), l
        } finally {
            I = t, Fl = !1
        }
    }
    return null
}
var Bt = [],
    Vt = 0,
    Vr = null,
    Wr = 0,
    Se = [],
    Ne = 0,
    _t = null,
    We = 1,
    He = "";

function xt(e, t) {
    Bt[Vt++] = Wr, Bt[Vt++] = Vr, Vr = e, Wr = t
}

function na(e, t, n) {
    Se[Ne++] = We, Se[Ne++] = He, Se[Ne++] = _t, _t = e;
    var r = We;
    e = He;
    var l = 32 - Re(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - Re(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, We = 1 << 32 - Re(t) + l | n << l | r, He = i + e
    } else We = 1 << i | n << l | r, He = e
}

function io(e) {
    e.return !== null && (xt(e, 1), na(e, 1, 0))
}

function oo(e) {
    for (; e === Vr;) Vr = Bt[--Vt], Bt[Vt] = null, Wr = Bt[--Vt], Bt[Vt] = null;
    for (; e === _t;) _t = Se[--Ne], Se[Ne] = null, He = Se[--Ne], Se[Ne] = null, We = Se[--Ne], Se[Ne] = null
}
var ve = null,
    ge = null,
    A = !1,
    Me = null;

function ra(e, t) {
    var n = je(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ys(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ve = e, ge = st(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ve = e, ge = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _t !== null ? {
                id: We,
                overflow: He
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ve = e, ge = null, !0) : !1;
        default:
            return !1
    }
}

function xi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function wi(e) {
    if (A) {
        var t = ge;
        if (t) {
            var n = t;
            if (!ys(e, t)) {
                if (xi(e)) throw Error(w(418));
                t = st(n.nextSibling);
                var r = ve;
                t && ys(e, t) ? ra(r, n) : (e.flags = e.flags & -4097 | 2, A = !1, ve = e)
            }
        } else {
            if (xi(e)) throw Error(w(418));
            e.flags = e.flags & -4097 | 2, A = !1, ve = e
        }
    }
}

function gs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ve = e
}

function pr(e) {
    if (e !== ve) return !1;
    if (!A) return gs(e), A = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hi(e.type, e.memoizedProps)), t && (t = ge)) {
        if (xi(e)) throw la(), Error(w(418));
        for (; t;) ra(e, t), t = st(t.nextSibling)
    }
    if (gs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ge = st(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ge = null
        }
    } else ge = ve ? st(e.stateNode.nextSibling) : null;
    return !0
}

function la() {
    for (var e = ge; e;) e = st(e.nextSibling)
}

function en() {
    ge = ve = null, A = !1
}

function so(e) {
    Me === null ? Me = [e] : Me.push(e)
}
var ef = Ze.ReactCurrentBatchConfig;

function yn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(w(309));
                var r = n.stateNode
            }
            if (!r) throw Error(w(147, e));
            var l = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var u = l.refs;
                o === null ? delete u[i] : u[i] = o
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(w(284));
        if (!n._owner) throw Error(w(290, e))
    }
    return e
}

function mr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function vs(e) {
    var t = e._init;
    return t(e._payload)
}

function ia(e) {
    function t(p, c) {
        if (e) {
            var f = p.deletions;
            f === null ? (p.deletions = [c], p.flags |= 16) : f.push(c)
        }
    }

    function n(p, c) {
        if (!e) return null;
        for (; c !== null;) t(p, c), c = c.sibling;
        return null
    }

    function r(p, c) {
        for (p = new Map; c !== null;) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
        return p
    }

    function l(p, c) {
        return p = dt(p, c), p.index = 0, p.sibling = null, p
    }

    function i(p, c, f) {
        return p.index = f, e ? (f = p.alternate, f !== null ? (f = f.index, f < c ? (p.flags |= 2, c) : f) : (p.flags |= 2, c)) : (p.flags |= 1048576, c)
    }

    function o(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function u(p, c, f, g) {
        return c === null || c.tag !== 6 ? (c = Hl(f, p.mode, g), c.return = p, c) : (c = l(c, f), c.return = p, c)
    }

    function a(p, c, f, g) {
        var N = f.type;
        return N === It ? y(p, c, f.props.children, g, f.key) : c !== null && (c.elementType === N || typeof N == "object" && N !== null && N.$$typeof === qe && vs(N) === c.type) ? (g = l(c, f.props), g.ref = yn(p, c, f), g.return = p, g) : (g = Lr(f.type, f.key, f.props, null, p.mode, g), g.ref = yn(p, c, f), g.return = p, g)
    }

    function d(p, c, f, g) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Ql(f, p.mode, g), c.return = p, c) : (c = l(c, f.children || []), c.return = p, c)
    }

    function y(p, c, f, g, N) {
        return c === null || c.tag !== 7 ? (c = Ct(f, p.mode, g, N), c.return = p, c) : (c = l(c, f), c.return = p, c)
    }

    function h(p, c, f) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = Hl("" + c, p.mode, f), c.return = p, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case rr:
                    return f = Lr(c.type, c.key, c.props, null, p.mode, f), f.ref = yn(p, null, c), f.return = p, f;
                case Dt:
                    return c = Ql(c, p.mode, f), c.return = p, c;
                case qe:
                    var g = c._init;
                    return h(p, g(c._payload), f)
            }
            if (wn(c) || dn(c)) return c = Ct(c, p.mode, f, null), c.return = p, c;
            mr(p, c)
        }
        return null
    }

    function m(p, c, f, g) {
        var N = c !== null ? c.key : null;
        if (typeof f == "string" && f !== "" || typeof f == "number") return N !== null ? null : u(p, c, "" + f, g);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case rr:
                    return f.key === N ? a(p, c, f, g) : null;
                case Dt:
                    return f.key === N ? d(p, c, f, g) : null;
                case qe:
                    return N = f._init, m(p, c, N(f._payload), g)
            }
            if (wn(f) || dn(f)) return N !== null ? null : y(p, c, f, g, null);
            mr(p, f)
        }
        return null
    }

    function v(p, c, f, g, N) {
        if (typeof g == "string" && g !== "" || typeof g == "number") return p = p.get(f) || null, u(c, p, "" + g, N);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case rr:
                    return p = p.get(g.key === null ? f : g.key) || null, a(c, p, g, N);
                case Dt:
                    return p = p.get(g.key === null ? f : g.key) || null, d(c, p, g, N);
                case qe:
                    var k = g._init;
                    return v(p, c, f, k(g._payload), N)
            }
            if (wn(g) || dn(g)) return p = p.get(f) || null, y(c, p, g, N, null);
            mr(c, g)
        }
        return null
    }

    function x(p, c, f, g) {
        for (var N = null, k = null, j = c, _ = c = 0, F = null; j !== null && _ < f.length; _++) {
            j.index > _ ? (F = j, j = null) : F = j.sibling;
            var M = m(p, j, f[_], g);
            if (M === null) {
                j === null && (j = F);
                break
            }
            e && j && M.alternate === null && t(p, j), c = i(M, c, _), k === null ? N = M : k.sibling = M, k = M, j = F
        }
        if (_ === f.length) return n(p, j), A && xt(p, _), N;
        if (j === null) {
            for (; _ < f.length; _++) j = h(p, f[_], g), j !== null && (c = i(j, c, _), k === null ? N = j : k.sibling = j, k = j);
            return A && xt(p, _), N
        }
        for (j = r(p, j); _ < f.length; _++) F = v(j, p, _, f[_], g), F !== null && (e && F.alternate !== null && j.delete(F.key === null ? _ : F.key), c = i(F, c, _), k === null ? N = F : k.sibling = F, k = F);
        return e && j.forEach(function(Pe) {
            return t(p, Pe)
        }), A && xt(p, _), N
    }

    function S(p, c, f, g) {
        var N = dn(f);
        if (typeof N != "function") throw Error(w(150));
        if (f = N.call(f), f == null) throw Error(w(151));
        for (var k = N = null, j = c, _ = c = 0, F = null, M = f.next(); j !== null && !M.done; _++, M = f.next()) {
            j.index > _ ? (F = j, j = null) : F = j.sibling;
            var Pe = m(p, j, M.value, g);
            if (Pe === null) {
                j === null && (j = F);
                break
            }
            e && j && Pe.alternate === null && t(p, j), c = i(Pe, c, _), k === null ? N = Pe : k.sibling = Pe, k = Pe, j = F
        }
        if (M.done) return n(p, j), A && xt(p, _), N;
        if (j === null) {
            for (; !M.done; _++, M = f.next()) M = h(p, M.value, g), M !== null && (c = i(M, c, _), k === null ? N = M : k.sibling = M, k = M);
            return A && xt(p, _), N
        }
        for (j = r(p, j); !M.done; _++, M = f.next()) M = v(j, p, _, M.value, g), M !== null && (e && M.alternate !== null && j.delete(M.key === null ? _ : M.key), c = i(M, c, _), k === null ? N = M : k.sibling = M, k = M);
        return e && j.forEach(function(an) {
            return t(p, an)
        }), A && xt(p, _), N
    }

    function D(p, c, f, g) {
        if (typeof f == "object" && f !== null && f.type === It && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case rr:
                    e: {
                        for (var N = f.key, k = c; k !== null;) {
                            if (k.key === N) {
                                if (N = f.type, N === It) {
                                    if (k.tag === 7) {
                                        n(p, k.sibling), c = l(k, f.props.children), c.return = p, p = c;
                                        break e
                                    }
                                } else if (k.elementType === N || typeof N == "object" && N !== null && N.$$typeof === qe && vs(N) === k.type) {
                                    n(p, k.sibling), c = l(k, f.props), c.ref = yn(p, k, f), c.return = p, p = c;
                                    break e
                                }
                                n(p, k);
                                break
                            } else t(p, k);
                            k = k.sibling
                        }
                        f.type === It ? (c = Ct(f.props.children, p.mode, g, f.key), c.return = p, p = c) : (g = Lr(f.type, f.key, f.props, null, p.mode, g), g.ref = yn(p, c, f), g.return = p, p = g)
                    }
                    return o(p);
                case Dt:
                    e: {
                        for (k = f.key; c !== null;) {
                            if (c.key === k)
                                if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                                    n(p, c.sibling), c = l(c, f.children || []), c.return = p, p = c;
                                    break e
                                } else {
                                    n(p, c);
                                    break
                                }
                            else t(p, c);
                            c = c.sibling
                        }
                        c = Ql(f, p.mode, g),
                        c.return = p,
                        p = c
                    }
                    return o(p);
                case qe:
                    return k = f._init, D(p, c, k(f._payload), g)
            }
            if (wn(f)) return x(p, c, f, g);
            if (dn(f)) return S(p, c, f, g);
            mr(p, f)
        }
        return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(p, c.sibling), c = l(c, f), c.return = p, p = c) : (n(p, c), c = Hl(f, p.mode, g), c.return = p, p = c), o(p)) : n(p, c)
    }
    return D
}
var tn = ia(!0),
    oa = ia(!1),
    Hr = ht(null),
    Qr = null,
    Wt = null,
    uo = null;

function ao() {
    uo = Wt = Qr = null
}

function co(e) {
    var t = Hr.current;
    U(Hr), e._currentValue = t
}

function ki(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Zt(e, t) {
    Qr = e, uo = Wt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null)
}

function Ee(e) {
    var t = e._currentValue;
    if (uo !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Wt === null) {
            if (Qr === null) throw Error(w(308));
            Wt = e, Qr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Wt = Wt.next = e;
    return t
}
var St = null;

function fo(e) {
    St === null ? St = [e] : St.push(e)
}

function sa(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, fo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Xe(e, r)
}

function Xe(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var be = !1;

function po(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function ua(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Qe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, R & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Xe(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, fo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Xe(e, n)
}

function jr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ji(e, n)
    }
}

function xs(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o, n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Kr(e, t, n, r) {
    var l = e.updateQueue;
    be = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var a = u,
            d = a.next;
        a.next = null, o === null ? i = d : o.next = d, o = a;
        var y = e.alternate;
        y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== o && (u === null ? y.firstBaseUpdate = d : u.next = d, y.lastBaseUpdate = a))
    }
    if (i !== null) {
        var h = l.baseState;
        o = 0, y = d = a = null, u = i;
        do {
            var m = u.lane,
                v = u.eventTime;
            if ((r & m) === m) {
                y !== null && (y = y.next = {
                    eventTime: v,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var x = e,
                        S = u;
                    switch (m = t, v = n, S.tag) {
                        case 1:
                            if (x = S.payload, typeof x == "function") {
                                h = x.call(v, h, m);
                                break e
                            }
                            h = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = S.payload, m = typeof x == "function" ? x.call(v, h, m) : x, m == null) break e;
                            h = W({}, h, m);
                            break e;
                        case 2:
                            be = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u))
            } else v = {
                eventTime: v,
                lane: m,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, y === null ? (d = y = v, a = h) : y = y.next = v, o |= m;
            if (u = u.next, u === null) {
                if (u = l.shared.pending, u === null) break;
                m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null
            }
        } while (!0);
        if (y === null && (a = h), l.baseState = a, l.firstBaseUpdate = d, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
            l = t;
            do o |= l.lane, l = l.next; while (l !== t)
        } else i === null && (l.shared.lanes = 0);
        zt |= o, e.lanes = o, e.memoizedState = h
    }
}

function ws(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
                l.call(r)
            }
        }
}
var bn = {},
    Ae = ht(bn),
    Wn = ht(bn),
    Hn = ht(bn);

function Nt(e) {
    if (e === bn) throw Error(w(174));
    return e
}

function mo(e, t) {
    switch (O(Hn, t), O(Wn, e), O(Ae, bn), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ti(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ti(t, e)
    }
    U(Ae), O(Ae, t)
}

function nn() {
    U(Ae), U(Wn), U(Hn)
}

function aa(e) {
    Nt(Hn.current);
    var t = Nt(Ae.current),
        n = ti(t, e.type);
    t !== n && (O(Wn, e), O(Ae, n))
}

function ho(e) {
    Wn.current === e && (U(Ae), U(Wn))
}
var B = ht(0);

function Yr(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var $l = [];

function yo() {
    for (var e = 0; e < $l.length; e++) $l[e]._workInProgressVersionPrimary = null;
    $l.length = 0
}
var Cr = Ze.ReactCurrentDispatcher,
    Ul = Ze.ReactCurrentBatchConfig,
    Pt = 0,
    V = null,
    X = null,
    J = null,
    Xr = !1,
    Pn = !1,
    Qn = 0,
    tf = 0;

function re() {
    throw Error(w(321))
}

function go(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ie(e[n], t[n])) return !1;
    return !0
}

function vo(e, t, n, r, l, i) {
    if (Pt = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Cr.current = e === null || e.memoizedState === null ? of : sf, e = n(r, l), Pn) {
        i = 0;
        do {
            if (Pn = !1, Qn = 0, 25 <= i) throw Error(w(301));
            i += 1, J = X = null, t.updateQueue = null, Cr.current = uf, e = n(r, l)
        } while (Pn)
    }
    if (Cr.current = Gr, t = X !== null && X.next !== null, Pt = 0, J = X = V = null, Xr = !1, t) throw Error(w(300));
    return e
}

function xo() {
    var e = Qn !== 0;
    return Qn = 0, e
}

function Fe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return J === null ? V.memoizedState = J = e : J = J.next = e, J
}

function _e() {
    if (X === null) {
        var e = V.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = X.next;
    var t = J === null ? V.memoizedState : J.next;
    if (t !== null) J = t, X = e;
    else {
        if (e === null) throw Error(w(310));
        X = e, e = {
            memoizedState: X.memoizedState,
            baseState: X.baseState,
            baseQueue: X.baseQueue,
            queue: X.queue,
            next: null
        }, J === null ? V.memoizedState = J = e : J = J.next = e
    }
    return J
}

function Kn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Al(e) {
    var t = _e(),
        n = t.queue;
    if (n === null) throw Error(w(311));
    n.lastRenderedReducer = e;
    var r = X,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next, i.next = o
        }
        r.baseQueue = l = i, n.pending = null
    }
    if (l !== null) {
        i = l.next, r = r.baseState;
        var u = o = null,
            a = null,
            d = i;
        do {
            var y = d.lane;
            if ((Pt & y) === y) a !== null && (a = a.next = {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var h = {
                    lane: y,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                a === null ? (u = a = h, o = r) : a = a.next = h, V.lanes |= y, zt |= y
            }
            d = d.next
        } while (d !== null && d !== i);
        a === null ? o = r : a.next = u, Ie(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do i = l.lane, V.lanes |= i, zt |= i, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Bl(e) {
    var t = _e(),
        n = t.queue;
    if (n === null) throw Error(w(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do i = e(i, o.action), o = o.next; while (o !== l);
        Ie(i, t.memoizedState) || (fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function ca() {}

function da(e, t) {
    var n = V,
        r = _e(),
        l = t(),
        i = !Ie(r.memoizedState, l);
    if (i && (r.memoizedState = l, fe = !0), r = r.queue, wo(ma.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || J !== null && J.memoizedState.tag & 1) {
        if (n.flags |= 2048, Yn(9, pa.bind(null, n, r, l, t), void 0, null), q === null) throw Error(w(349));
        Pt & 30 || fa(n, t, l)
    }
    return l
}

function fa(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = V.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function pa(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ha(t) && ya(e)
}

function ma(e, t, n) {
    return n(function() {
        ha(t) && ya(e)
    })
}

function ha(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ie(e, n)
    } catch {
        return !0
    }
}

function ya(e) {
    var t = Xe(e, 1);
    t !== null && De(t, e, 1, -1)
}

function ks(e) {
    var t = Fe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kn,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = lf.bind(null, V, e), [t.memoizedState, e]
}

function Yn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = V.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function ga() {
    return _e().memoizedState
}

function Er(e, t, n, r) {
    var l = Fe();
    V.flags |= e, l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r)
}

function ul(e, t, n, r) {
    var l = _e();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (X !== null) {
        var o = X.memoizedState;
        if (i = o.destroy, r !== null && go(r, o.deps)) {
            l.memoizedState = Yn(t, n, i, r);
            return
        }
    }
    V.flags |= e, l.memoizedState = Yn(1 | t, n, i, r)
}

function Ss(e, t) {
    return Er(8390656, 8, e, t)
}

function wo(e, t) {
    return ul(2048, 8, e, t)
}

function va(e, t) {
    return ul(4, 2, e, t)
}

function xa(e, t) {
    return ul(4, 4, e, t)
}

function wa(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function ka(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ul(4, 4, wa.bind(null, t, e), n)
}

function ko() {}

function Sa(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Na(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && go(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function ja(e, t, n) {
    return Pt & 21 ? (Ie(n, t) || (n = zu(), V.lanes |= n, zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n)
}

function nf(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ul.transition;
    Ul.transition = {};
    try {
        e(!1), t()
    } finally {
        I = n, Ul.transition = r
    }
}

function Ca() {
    return _e().memoizedState
}

function rf(e, t, n) {
    var r = ct(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ea(e)) _a(t, n);
    else if (n = sa(e, t, n, r), n !== null) {
        var l = ue();
        De(n, e, r, l), Pa(n, t, r)
    }
}

function lf(e, t, n) {
    var r = ct(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Ea(e)) _a(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var o = t.lastRenderedState,
                u = i(o, n);
            if (l.hasEagerState = !0, l.eagerState = u, Ie(u, o)) {
                var a = t.interleaved;
                a === null ? (l.next = l, fo(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = sa(e, t, l, r), n !== null && (l = ue(), De(n, e, r, l), Pa(n, t, r))
    }
}

function Ea(e) {
    var t = e.alternate;
    return e === V || t !== null && t === V
}

function _a(e, t) {
    Pn = Xr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Pa(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ji(e, n)
    }
}
var Gr = {
        readContext: Ee,
        useCallback: re,
        useContext: re,
        useEffect: re,
        useImperativeHandle: re,
        useInsertionEffect: re,
        useLayoutEffect: re,
        useMemo: re,
        useReducer: re,
        useRef: re,
        useState: re,
        useDebugValue: re,
        useDeferredValue: re,
        useTransition: re,
        useMutableSource: re,
        useSyncExternalStore: re,
        useId: re,
        unstable_isNewReconciler: !1
    },
    of = {
        readContext: Ee,
        useCallback: function(e, t) {
            return Fe().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ee,
        useEffect: Ss,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Er(4194308, 4, wa.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Er(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Er(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Fe();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Fe();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = rf.bind(null, V, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Fe();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: ks,
        useDebugValue: ko,
        useDeferredValue: function(e) {
            return Fe().memoizedState = e
        },
        useTransition: function() {
            var e = ks(!1),
                t = e[0];
            return e = nf.bind(null, e[1]), Fe().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = V,
                l = Fe();
            if (A) {
                if (n === void 0) throw Error(w(407));
                n = n()
            } else {
                if (n = t(), q === null) throw Error(w(349));
                Pt & 30 || fa(r, t, n)
            }
            l.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return l.queue = i, Ss(ma.bind(null, r, i, e), [e]), r.flags |= 2048, Yn(9, pa.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Fe(),
                t = q.identifierPrefix;
            if (A) {
                var n = He,
                    r = We;
                n = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = tf++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    sf = {
        readContext: Ee,
        useCallback: Sa,
        useContext: Ee,
        useEffect: wo,
        useImperativeHandle: ka,
        useInsertionEffect: va,
        useLayoutEffect: xa,
        useMemo: Na,
        useReducer: Al,
        useRef: ga,
        useState: function() {
            return Al(Kn)
        },
        useDebugValue: ko,
        useDeferredValue: function(e) {
            var t = _e();
            return ja(t, X.memoizedState, e)
        },
        useTransition: function() {
            var e = Al(Kn)[0],
                t = _e().memoizedState;
            return [e, t]
        },
        useMutableSource: ca,
        useSyncExternalStore: da,
        useId: Ca,
        unstable_isNewReconciler: !1
    },
    uf = {
        readContext: Ee,
        useCallback: Sa,
        useContext: Ee,
        useEffect: wo,
        useImperativeHandle: ka,
        useInsertionEffect: va,
        useLayoutEffect: xa,
        useMemo: Na,
        useReducer: Bl,
        useRef: ga,
        useState: function() {
            return Bl(Kn)
        },
        useDebugValue: ko,
        useDeferredValue: function(e) {
            var t = _e();
            return X === null ? t.memoizedState = e : ja(t, X.memoizedState, e)
        },
        useTransition: function() {
            var e = Bl(Kn)[0],
                t = _e().memoizedState;
            return [e, t]
        },
        useMutableSource: ca,
        useSyncExternalStore: da,
        useId: Ca,
        unstable_isNewReconciler: !1
    };

function Le(e, t) {
    if (e && e.defaultProps) {
        t = W({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Si(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var al = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Mt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue(),
            l = ct(e),
            i = Qe(r, l);
        i.payload = t, n != null && (i.callback = n), t = ut(e, i, l), t !== null && (De(t, e, l, r), jr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue(),
            l = ct(e),
            i = Qe(r, l);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ut(e, i, l), t !== null && (De(t, e, l, r), jr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue(),
            r = ct(e),
            l = Qe(n, r);
        l.tag = 2, t != null && (l.callback = t), t = ut(e, l, r), t !== null && (De(t, e, r, n), jr(t, e, r))
    }
};

function Ns(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Un(n, r) || !Un(l, i) : !0
}

function za(e, t, n) {
    var r = !1,
        l = pt,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ee(i) : (l = me(t) ? Et : oe.current, r = t.contextTypes, i = (r = r != null) ? bt(e, l) : pt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function js(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null)
}

function Ni(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, po(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = Ee(i) : (i = me(t) ? Et : oe.current, l.context = bt(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Si(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && al.enqueueReplaceState(l, l.state, null), Kr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function rn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Ic(r), r = r.return; while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Vl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function ji(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var af = typeof WeakMap == "function" ? WeakMap : Map;

function La(e, t, n) {
    n = Qe(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Jr || (Jr = !0, Di = r), ji(e, t)
    }, n
}

function Ta(e, t, n) {
    n = Qe(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            ji(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ji(e, t), typeof r != "function" && (at === null ? at = new Set([this]) : at.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function Cs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new af;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Nf.bind(null, e, t, n), t.then(e, e))
}

function Es(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function _s(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, ut(n, t, 1))), n.lanes |= 1), e)
}
var cf = Ze.ReactCurrentOwner,
    fe = !1;

function se(e, t, n, r) {
    t.child = e === null ? oa(t, null, n, r) : tn(t, e.child, n, r)
}

function Ps(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Zt(t, l), r = vo(e, t, n, r, i, l), n = xo(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (A && n && io(t), t.flags |= 1, se(e, t, r, l), t.child)
}

function zs(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !zo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ma(e, t, i, r, l)) : (e = Lr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Un, n(o, r) && e.ref === t.ref) return Ge(e, t, l)
    }
    return t.flags |= 1, e = dt(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ma(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Un(i, r) && e.ref === t.ref)
            if (fe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
            else return t.lanes = e.lanes, Ge(e, t, l)
    }
    return Ci(e, t, n, r, l)
}

function Ra(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, O(Qt, ye), ye |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, O(Qt, ye), ye |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, O(Qt, ye), ye |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, O(Qt, ye), ye |= r;
    return se(e, t, l, n), t.child
}

function Da(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ci(e, t, n, r, l) {
    var i = me(n) ? Et : oe.current;
    return i = bt(t, i), Zt(t, l), n = vo(e, t, n, r, i, l), r = xo(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (A && r && io(t), t.flags |= 1, se(e, t, n, l), t.child)
}

function Ls(e, t, n, r, l) {
    if (me(n)) {
        var i = !0;
        Br(t)
    } else i = !1;
    if (Zt(t, l), t.stateNode === null) _r(e, t), za(t, n, r), Ni(t, n, r, l), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            u = t.memoizedProps;
        o.props = u;
        var a = o.context,
            d = n.contextType;
        typeof d == "object" && d !== null ? d = Ee(d) : (d = me(n) ? Et : oe.current, d = bt(t, d));
        var y = n.getDerivedStateFromProps,
            h = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== d) && js(t, o, r, d), be = !1;
        var m = t.memoizedState;
        o.state = m, Kr(t, r, o, l), a = t.memoizedState, u !== r || m !== a || pe.current || be ? (typeof y == "function" && (Si(t, n, y, r), a = t.memoizedState), (u = be || Ns(t, n, u, r, m, a, d)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = d, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, ua(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : Le(t.type, u), o.props = d, h = t.pendingProps, m = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ee(a) : (a = me(n) ? Et : oe.current, a = bt(t, a));
        var v = n.getDerivedStateFromProps;
        (y = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || m !== a) && js(t, o, r, a), be = !1, m = t.memoizedState, o.state = m, Kr(t, r, o, l);
        var x = t.memoizedState;
        u !== h || m !== x || pe.current || be ? (typeof v == "function" && (Si(t, n, v, r), x = t.memoizedState), (d = be || Ns(t, n, d, r, m, x, a) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = a, r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Ei(e, t, n, r, i, l)
}

function Ei(e, t, n, r, l, i) {
    Da(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && hs(t, n, !1), Ge(e, t, i);
    r = t.stateNode, cf.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = tn(t, e.child, null, i), t.child = tn(t, null, u, i)) : se(e, t, u, i), t.memoizedState = r.state, l && hs(t, n, !0), t.child
}

function Ia(e) {
    var t = e.stateNode;
    t.pendingContext ? ms(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ms(e, t.context, !1), mo(e, t.containerInfo)
}

function Ts(e, t, n, r, l) {
    return en(), so(l), t.flags |= 256, se(e, t, n, r), t.child
}
var _i = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Pi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Oa(e, t, n) {
    var r = t.pendingProps,
        l = B.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), O(B, l & 1), e === null) return wi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = fl(o, r, 0, null), e = Ct(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Pi(n), t.memoizedState = _i, e) : So(t, o));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return df(e, t, o, r, u, l, n);
    if (i) {
        i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = dt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = dt(u, i) : (i = Ct(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Pi(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = _i, r
    }
    return i = e.child, e = i.sibling, r = dt(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function So(e, t) {
    return t = fl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function hr(e, t, n, r) {
    return r !== null && so(r), tn(t, e.child, null, n), e = So(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function df(e, t, n, r, l, i, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Vl(Error(w(422))), hr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = fl({
        mode: "visible",
        children: r.children
    }, l, 0, null), i = Ct(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && tn(t, e.child, null, o), t.child.memoizedState = Pi(o), t.memoizedState = _i, i);
    if (!(t.mode & 1)) return hr(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
        return r = u, i = Error(w(419)), r = Vl(i, r, void 0), hr(e, t, o, r)
    }
    if (u = (o & e.childLanes) !== 0, fe || u) {
        if (r = q, r !== null) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Xe(e, l), De(r, e, l, -1))
        }
        return Po(), r = Vl(Error(w(421))), hr(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = jf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ge = st(l.nextSibling), ve = t, A = !0, Me = null, e !== null && (Se[Ne++] = We, Se[Ne++] = He, Se[Ne++] = _t, We = e.id, He = e.overflow, _t = t), t = So(t, r.children), t.flags |= 4096, t)
}

function Ms(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ki(e.return, t, n)
}

function Wl(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
}

function Fa(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if (se(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Ms(e, n, t);
            else if (e.tag === 19) Ms(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (O(B, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Yr(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Wl(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Yr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Wl(t, !0, n, null, i);
            break;
        case "together":
            Wl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function _r(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ge(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), zt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(w(153));
    if (t.child !== null) {
        for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function ff(e, t, n) {
    switch (t.tag) {
        case 3:
            Ia(t), en();
            break;
        case 5:
            aa(t);
            break;
        case 1:
            me(t.type) && Br(t);
            break;
        case 4:
            mo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            O(Hr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (O(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Oa(e, t, n) : (O(B, B.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
            O(B, B.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Fa(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), O(B, B.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Ra(e, t, n)
    }
    return Ge(e, t, n)
}
var $a, zi, Ua, Aa;
$a = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
zi = function() {};
Ua = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, Nt(Ae.current);
        var i = null;
        switch (n) {
            case "input":
                l = Jl(e, l), r = Jl(e, r), i = [];
                break;
            case "select":
                l = W({}, l, {
                    value: void 0
                }), r = W({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                l = ei(e, l), r = ei(e, r), i = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ur)
        }
        ni(n, r);
        var o;
        n = null;
        for (d in l)
            if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                    var u = l[d];
                    for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Mn.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
        for (d in r) {
            var a = r[d];
            if (u = l != null ? l[d] : void 0, r.hasOwnProperty(d) && a !== u && (a != null || u != null))
                if (d === "style")
                    if (u) {
                        for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o])
                    } else n || (i || (i = []), i.push(d, n)), n = a;
            else d === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(d, a)) : d === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(d, "" + a) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Mn.hasOwnProperty(d) ? (a != null && d === "onScroll" && $("scroll", e), i || u === a || (i = [])) : (i = i || []).push(d, a))
        }
        n && (i = i || []).push("style", n);
        var d = i;
        (t.updateQueue = d) && (t.flags |= 4)
    }
};
Aa = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function gn(e, t) {
    if (!A) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function pf(e, t, n) {
    var r = t.pendingProps;
    switch (oo(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return le(t), null;
        case 1:
            return me(t.type) && Ar(), le(t), null;
        case 3:
            return r = t.stateNode, nn(), U(pe), U(oe), yo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (Fi(Me), Me = null))), zi(e, t), le(t), null;
        case 5:
            ho(t);
            var l = Nt(Hn.current);
            if (n = t.type, e !== null && t.stateNode != null) Ua(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(w(166));
                    return le(t), null
                }
                if (e = Nt(Ae.current), pr(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[$e] = t, r[Vn] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            $("cancel", r), $("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            $("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Sn.length; l++) $(Sn[l], r);
                            break;
                        case "source":
                            $("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            $("error", r), $("load", r);
                            break;
                        case "details":
                            $("toggle", r);
                            break;
                        case "input":
                            Bo(r, i), $("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, $("invalid", r);
                            break;
                        case "textarea":
                            Wo(r, i), $("invalid", r)
                    }
                    ni(n, i), l = null;
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var u = i[o];
                            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && fr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && fr(r.textContent, u, e), l = ["children", "" + u]) : Mn.hasOwnProperty(o) && u != null && o === "onScroll" && $("scroll", r)
                        } switch (n) {
                        case "input":
                            lr(r), Vo(r, i, !0);
                            break;
                        case "textarea":
                            lr(r), Ho(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Ur)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = mu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[$e] = t, e[Vn] = r, $a(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = ri(n, r), n) {
                            case "dialog":
                                $("cancel", e), $("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                $("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Sn.length; l++) $(Sn[l], e);
                                l = r;
                                break;
                            case "source":
                                $("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $("error", e), $("load", e), l = r;
                                break;
                            case "details":
                                $("toggle", e), l = r;
                                break;
                            case "input":
                                Bo(e, r), l = Jl(e, r), $("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = W({}, r, {
                                    value: void 0
                                }), $("invalid", e);
                                break;
                            case "textarea":
                                Wo(e, r), l = ei(e, r), $("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        ni(n, l),
                        u = l;
                        for (i in u)
                            if (u.hasOwnProperty(i)) {
                                var a = u[i];
                                i === "style" ? gu(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && hu(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Rn(e, a) : typeof a == "number" && Rn(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Mn.hasOwnProperty(i) ? a != null && i === "onScroll" && $("scroll", e) : a != null && Qi(e, i, a, o))
                            } switch (n) {
                            case "input":
                                lr(e), Vo(e, r, !1);
                                break;
                            case "textarea":
                                lr(e), Ho(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ft(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Kt(e, !!r.multiple, i, !1) : r.defaultValue != null && Kt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Ur)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return le(t), null;
        case 6:
            if (e && t.stateNode != null) Aa(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
                if (n = Nt(Hn.current), Nt(Ae.current), pr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[$e] = t, (i = r.nodeValue !== n) && (e = ve, e !== null)) switch (e.tag) {
                        case 3:
                            fr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && fr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$e] = t, t.stateNode = r
            }
            return le(t), null;
        case 13:
            if (U(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (A && ge !== null && t.mode & 1 && !(t.flags & 128)) la(), en(), t.flags |= 98560, i = !1;
                else if (i = pr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(w(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(w(317));
                        i[$e] = t
                    } else en(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    le(t), i = !1
                } else Me !== null && (Fi(Me), Me = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? G === 0 && (G = 3) : Po())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
        case 4:
            return nn(), zi(e, t), e === null && An(t.stateNode.containerInfo), le(t), null;
        case 10:
            return co(t.type._context), le(t), null;
        case 17:
            return me(t.type) && Ar(), le(t), null;
        case 19:
            if (U(B), i = t.memoizedState, i === null) return le(t), null;
            if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
                if (r) gn(i, !1);
                else {
                    if (G !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = Yr(e), o !== null) {
                                for (t.flags |= 128, gn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return O(B, B.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && K() > ln && (t.flags |= 128, r = !0, gn(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Yr(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), gn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !A) return le(t), null
                    } else 2 * K() - i.renderingStartTime > ln && n !== 1073741824 && (t.flags |= 128, r = !0, gn(i, !1), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = K(), t.sibling = null, n = B.current, O(B, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
        case 22:
        case 23:
            return _o(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ye & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(w(156, t.tag))
}

function mf(e, t) {
    switch (oo(t), t.tag) {
        case 1:
            return me(t.type) && Ar(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return nn(), U(pe), U(oe), yo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ho(t), null;
        case 13:
            if (U(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(w(340));
                en()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return U(B), null;
        case 4:
            return nn(), null;
        case 10:
            return co(t.type._context), null;
        case 22:
        case 23:
            return _o(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var yr = !1,
    ie = !1,
    hf = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;

function Ht(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            H(e, t, r)
        } else n.current = null
}

function Li(e, t, n) {
    try {
        n()
    } catch (r) {
        H(e, t, r)
    }
}
var Rs = !1;

function yf(e, t) {
    if (pi = Or, e = Qu(), lo(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    u = -1,
                    a = -1,
                    d = 0,
                    y = 0,
                    h = e,
                    m = null;
                t: for (;;) {
                    for (var v; h !== n || l !== 0 && h.nodeType !== 3 || (u = o + l), h !== i || r !== 0 && h.nodeType !== 3 || (a = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (v = h.firstChild) !== null;) m = h, h = v;
                    for (;;) {
                        if (h === e) break t;
                        if (m === n && ++d === l && (u = o), m === i && ++y === r && (a = o), (v = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode
                    }
                    h = v
                }
                n = u === -1 || a === -1 ? null : {
                    start: u,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (mi = {
            focusedElem: e,
            selectionRange: n
        }, Or = !1, C = t; C !== null;)
        if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
        else
            for (; C !== null;) {
                t = C;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var S = x.memoizedProps,
                                    D = x.memoizedState,
                                    p = t.stateNode,
                                    c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Le(t.type, S), D);
                                p.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var f = t.stateNode.containerInfo;
                            f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(w(163))
                    }
                } catch (g) {
                    H(t, t.return, g)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, C = e;
                    break
                }
                C = t.return
            }
    return x = Rs, Rs = !1, x
}

function zn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0, i !== void 0 && Li(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}

function cl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ti(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Ba(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ba(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[Vn], delete t[gi], delete t[Jd], delete t[qd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Va(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Ds(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Va(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Mi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ur));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Mi(e, t, n), e = e.sibling; e !== null;) Mi(e, t, n), e = e.sibling
}

function Ri(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ri(e, t, n), e = e.sibling; e !== null;) Ri(e, t, n), e = e.sibling
}
var b = null,
    Te = !1;

function Je(e, t, n) {
    for (n = n.child; n !== null;) Wa(e, t, n), n = n.sibling
}

function Wa(e, t, n) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function") try {
        Ue.onCommitFiberUnmount(nl, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ie || Ht(n, t);
        case 6:
            var r = b,
                l = Te;
            b = null, Je(e, t, n), b = r, Te = l, b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
            break;
        case 18:
            b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? Ol(e.parentNode, n) : e.nodeType === 1 && Ol(e, n), Fn(e)) : Ol(b, n.stateNode));
            break;
        case 4:
            r = b, l = Te, b = n.stateNode.containerInfo, Te = !0, Je(e, t, n), b = r, Te = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    i = i.tag, o !== void 0 && (i & 2 || i & 4) && Li(n, t, o), l = l.next
                } while (l !== r)
            }
            Je(e, t, n);
            break;
        case 1:
            if (!ie && (Ht(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (u) {
                H(n, t, u)
            }
            Je(e, t, n);
            break;
        case 21:
            Je(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ie = (r = ie) || n.memoizedState !== null, Je(e, t, n), ie = r) : Je(e, t, n);
            break;
        default:
            Je(e, t, n)
    }
}

function Is(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new hf), t.forEach(function(r) {
            var l = Cf.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    u = o;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            b = u.stateNode, Te = !1;
                            break e;
                        case 3:
                            b = u.stateNode.containerInfo, Te = !0;
                            break e;
                        case 4:
                            b = u.stateNode.containerInfo, Te = !0;
                            break e
                    }
                    u = u.return
                }
                if (b === null) throw Error(w(160));
                Wa(i, o, l), b = null, Te = !1;
                var a = l.alternate;
                a !== null && (a.return = null), l.return = null
            } catch (d) {
                H(l, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Ha(t, e), t = t.sibling
}

function Ha(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ze(t, e), Oe(e), r & 4) {
                try {
                    zn(3, e, e.return), cl(3, e)
                } catch (S) {
                    H(e, e.return, S)
                }
                try {
                    zn(5, e, e.return)
                } catch (S) {
                    H(e, e.return, S)
                }
            }
            break;
        case 1:
            ze(t, e), Oe(e), r & 512 && n !== null && Ht(n, n.return);
            break;
        case 5:
            if (ze(t, e), Oe(e), r & 512 && n !== null && Ht(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Rn(l, "")
                } catch (S) {
                    H(e, e.return, S)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    u = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    u === "input" && i.type === "radio" && i.name != null && fu(l, i), ri(u, o);
                    var d = ri(u, i);
                    for (o = 0; o < a.length; o += 2) {
                        var y = a[o],
                            h = a[o + 1];
                        y === "style" ? gu(l, h) : y === "dangerouslySetInnerHTML" ? hu(l, h) : y === "children" ? Rn(l, h) : Qi(l, y, h, d)
                    }
                    switch (u) {
                        case "input":
                            ql(l, i);
                            break;
                        case "textarea":
                            pu(l, i);
                            break;
                        case "select":
                            var m = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!i.multiple;
                            var v = i.value;
                            v != null ? Kt(l, !!i.multiple, v, !1) : m !== !!i.multiple && (i.defaultValue != null ? Kt(l, !!i.multiple, i.defaultValue, !0) : Kt(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Vn] = i
                } catch (S) {
                    H(e, e.return, S)
                }
            }
            break;
        case 6:
            if (ze(t, e), Oe(e), r & 4) {
                if (e.stateNode === null) throw Error(w(162));
                l = e.stateNode, i = e.memoizedProps;
                try {
                    l.nodeValue = i
                } catch (S) {
                    H(e, e.return, S)
                }
            }
            break;
        case 3:
            if (ze(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Fn(t.containerInfo)
            } catch (S) {
                H(e, e.return, S)
            }
            break;
        case 4:
            ze(t, e), Oe(e);
            break;
        case 13:
            ze(t, e), Oe(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Co = K())), r & 4 && Is(e);
            break;
        case 22:
            if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (ie = (d = ie) || y, ze(t, e), ie = d) : ze(t, e), Oe(e), r & 8192) {
                if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !y && e.mode & 1)
                    for (C = e, y = e.child; y !== null;) {
                        for (h = C = y; C !== null;) {
                            switch (m = C, v = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    zn(4, m, m.return);
                                    break;
                                case 1:
                                    Ht(m, m.return);
                                    var x = m.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                                        } catch (S) {
                                            H(r, n, S)
                                        }
                                    }
                                    break;
                                case 5:
                                    Ht(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Fs(h);
                                        continue
                                    }
                            }
                            v !== null ? (v.return = m, C = v) : Fs(h)
                        }
                        y = y.sibling
                    }
                e: for (y = null, h = e;;) {
                    if (h.tag === 5) {
                        if (y === null) {
                            y = h;
                            try {
                                l = h.stateNode, d ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode, a = h.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = yu("display", o))
                            } catch (S) {
                                H(e, e.return, S)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (y === null) try {
                            h.stateNode.nodeValue = d ? "" : h.memoizedProps
                        } catch (S) {
                            H(e, e.return, S)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        y === h && (y = null), h = h.return
                    }
                    y === h && (y = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            ze(t, e), Oe(e), r & 4 && Is(e);
            break;
        case 21:
            break;
        default:
            ze(t, e), Oe(e)
    }
}

function Oe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Va(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(w(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Rn(l, ""), r.flags &= -33);
                    var i = Ds(e);
                    Ri(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        u = Ds(e);
                    Mi(e, u, o);
                    break;
                default:
                    throw Error(w(161))
            }
        }
        catch (a) {
            H(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function gf(e, t, n) {
    C = e, Qa(e)
}

function Qa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null;) {
        var l = C,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || yr;
            if (!o) {
                var u = l.alternate,
                    a = u !== null && u.memoizedState !== null || ie;
                u = yr;
                var d = ie;
                if (yr = o, (ie = a) && !d)
                    for (C = l; C !== null;) o = C, a = o.child, o.tag === 22 && o.memoizedState !== null ? $s(l) : a !== null ? (a.return = o, C = a) : $s(l);
                for (; i !== null;) C = i, Qa(i), i = i.sibling;
                C = l, yr = u, ie = d
            }
            Os(e)
        } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, C = i) : Os(e)
    }
}

function Os(e) {
    for (; C !== null;) {
        var t = C;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ie || cl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ie)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var i = t.updateQueue;
                        i !== null && ws(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            ws(t, o, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var y = d.memoizedState;
                                if (y !== null) {
                                    var h = y.dehydrated;
                                    h !== null && Fn(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(w(163))
                }
                ie || t.flags & 512 && Ti(t)
            } catch (m) {
                H(t, t.return, m)
            }
        }
        if (t === e) {
            C = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, C = n;
            break
        }
        C = t.return
    }
}

function Fs(e) {
    for (; C !== null;) {
        var t = C;
        if (t === e) {
            C = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, C = n;
            break
        }
        C = t.return
    }
}

function $s(e) {
    for (; C !== null;) {
        var t = C;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        cl(4, t)
                    } catch (a) {
                        H(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            H(t, l, a)
                        }
                    }
                    var i = t.return;
                    try {
                        Ti(t)
                    } catch (a) {
                        H(t, i, a)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Ti(t)
                    } catch (a) {
                        H(t, o, a)
                    }
            }
        } catch (a) {
            H(t, t.return, a)
        }
        if (t === e) {
            C = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return, C = u;
            break
        }
        C = t.return
    }
}
var vf = Math.ceil,
    Zr = Ze.ReactCurrentDispatcher,
    No = Ze.ReactCurrentOwner,
    Ce = Ze.ReactCurrentBatchConfig,
    R = 0,
    q = null,
    Y = null,
    ee = 0,
    ye = 0,
    Qt = ht(0),
    G = 0,
    Xn = null,
    zt = 0,
    dl = 0,
    jo = 0,
    Ln = null,
    de = null,
    Co = 0,
    ln = 1 / 0,
    Be = null,
    Jr = !1,
    Di = null,
    at = null,
    gr = !1,
    rt = null,
    qr = 0,
    Tn = 0,
    Ii = null,
    Pr = -1,
    zr = 0;

function ue() {
    return R & 6 ? K() : Pr !== -1 ? Pr : Pr = K()
}

function ct(e) {
    return e.mode & 1 ? R & 2 && ee !== 0 ? ee & -ee : ef.transition !== null ? (zr === 0 && (zr = zu()), zr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ou(e.type)), e) : 1
}

function De(e, t, n, r) {
    if (50 < Tn) throw Tn = 0, Ii = null, Error(w(185));
    Zn(e, n, r), (!(R & 2) || e !== q) && (e === q && (!(R & 2) && (dl |= n), G === 4 && tt(e, ee)), he(e, r), n === 1 && R === 0 && !(t.mode & 1) && (ln = K() + 500, sl && yt()))
}

function he(e, t) {
    var n = e.callbackNode;
    ed(e, t);
    var r = Ir(e, e === q ? ee : 0);
    if (r === 0) n !== null && Yo(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Yo(n), t === 1) e.tag === 0 ? bd(Us.bind(null, e)) : ta(Us.bind(null, e)), Gd(function() {
            !(R & 6) && yt()
        }), n = null;
        else {
            switch (Lu(r)) {
                case 1:
                    n = Zi;
                    break;
                case 4:
                    n = _u;
                    break;
                case 16:
                    n = Dr;
                    break;
                case 536870912:
                    n = Pu;
                    break;
                default:
                    n = Dr
            }
            n = ba(n, Ka.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Ka(e, t) {
    if (Pr = -1, zr = 0, R & 6) throw Error(w(327));
    var n = e.callbackNode;
    if (Jt() && e.callbackNode !== n) return null;
    var r = Ir(e, e === q ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
    else {
        t = r;
        var l = R;
        R |= 2;
        var i = Xa();
        (q !== e || ee !== t) && (Be = null, ln = K() + 500, jt(e, t));
        do try {
            kf();
            break
        } catch (u) {
            Ya(e, u)
        }
        while (!0);
        ao(), Zr.current = i, R = l, Y !== null ? t = 0 : (q = null, ee = 0, t = G)
    }
    if (t !== 0) {
        if (t === 2 && (l = ui(e), l !== 0 && (r = l, t = Oi(e, l))), t === 1) throw n = Xn, jt(e, 0), tt(e, r), he(e, K()), n;
        if (t === 6) tt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !xf(l) && (t = br(e, r), t === 2 && (i = ui(e), i !== 0 && (r = i, t = Oi(e, i))), t === 1)) throw n = Xn, jt(e, 0), tt(e, r), he(e, K()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(w(345));
                case 2:
                    wt(e, de, Be);
                    break;
                case 3:
                    if (tt(e, r), (r & 130023424) === r && (t = Co + 500 - K(), 10 < t)) {
                        if (Ir(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            ue(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = yi(wt.bind(null, e, de, Be), t);
                        break
                    }
                    wt(e, de, Be);
                    break;
                case 4:
                    if (tt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - Re(r);
                        i = 1 << o, o = t[o], o > l && (l = o), r &= ~i
                    }
                    if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vf(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = yi(wt.bind(null, e, de, Be), r);
                        break
                    }
                    wt(e, de, Be);
                    break;
                case 5:
                    wt(e, de, Be);
                    break;
                default:
                    throw Error(w(329))
            }
        }
    }
    return he(e, K()), e.callbackNode === n ? Ka.bind(null, e) : null
}

function Oi(e, t) {
    var n = Ln;
    return e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256), e = br(e, t), e !== 2 && (t = de, de = n, t !== null && Fi(t)), e
}

function Fi(e) {
    de === null ? de = e : de.push.apply(de, e)
}

function xf(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ie(i(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function tt(e, t) {
    for (t &= ~jo, t &= ~dl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Re(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Us(e) {
    if (R & 6) throw Error(w(327));
    Jt();
    var t = Ir(e, 0);
    if (!(t & 1)) return he(e, K()), null;
    var n = br(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ui(e);
        r !== 0 && (t = r, n = Oi(e, r))
    }
    if (n === 1) throw n = Xn, jt(e, 0), tt(e, t), he(e, K()), n;
    if (n === 6) throw Error(w(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wt(e, de, Be), he(e, K()), null
}

function Eo(e, t) {
    var n = R;
    R |= 1;
    try {
        return e(t)
    } finally {
        R = n, R === 0 && (ln = K() + 500, sl && yt())
    }
}

function Lt(e) {
    rt !== null && rt.tag === 0 && !(R & 6) && Jt();
    var t = R;
    R |= 1;
    var n = Ce.transition,
        r = I;
    try {
        if (Ce.transition = null, I = 1, e) return e()
    } finally {
        I = r, Ce.transition = n, R = t, !(R & 6) && yt()
    }
}

function _o() {
    ye = Qt.current, U(Qt)
}

function jt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Xd(n)), Y !== null)
        for (n = Y.return; n !== null;) {
            var r = n;
            switch (oo(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ar();
                    break;
                case 3:
                    nn(), U(pe), U(oe), yo();
                    break;
                case 5:
                    ho(r);
                    break;
                case 4:
                    nn();
                    break;
                case 13:
                    U(B);
                    break;
                case 19:
                    U(B);
                    break;
                case 10:
                    co(r.type._context);
                    break;
                case 22:
                case 23:
                    _o()
            }
            n = n.return
        }
    if (q = e, Y = e = dt(e.current, null), ee = ye = t, G = 0, Xn = null, jo = dl = zt = 0, de = Ln = null, St !== null) {
        for (t = 0; t < St.length; t++)
            if (n = St[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l, r.next = o
                }
                n.pending = r
            } St = null
    }
    return e
}

function Ya(e, t) {
    do {
        var n = Y;
        try {
            if (ao(), Cr.current = Gr, Xr) {
                for (var r = V.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Xr = !1
            }
            if (Pt = 0, J = X = V = null, Pn = !1, Qn = 0, No.current = null, n === null || n.return === null) {
                G = 1, Xn = t, Y = null;
                break
            }
            e: {
                var i = e,
                    o = n.return,
                    u = n,
                    a = t;
                if (t = ee, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var d = a,
                        y = u,
                        h = y.tag;
                    if (!(y.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = y.alternate;
                        m ? (y.updateQueue = m.updateQueue, y.memoizedState = m.memoizedState, y.lanes = m.lanes) : (y.updateQueue = null, y.memoizedState = null)
                    }
                    var v = Es(o);
                    if (v !== null) {
                        v.flags &= -257, _s(v, o, u, i, t), v.mode & 1 && Cs(i, d, t), t = v, a = d;
                        var x = t.updateQueue;
                        if (x === null) {
                            var S = new Set;
                            S.add(a), t.updateQueue = S
                        } else x.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Cs(i, d, t), Po();
                            break e
                        }
                        a = Error(w(426))
                    }
                } else if (A && u.mode & 1) {
                    var D = Es(o);
                    if (D !== null) {
                        !(D.flags & 65536) && (D.flags |= 256), _s(D, o, u, i, t), so(rn(a, u));
                        break e
                    }
                }
                i = a = rn(a, u),
                G !== 4 && (G = 2),
                Ln === null ? Ln = [i] : Ln.push(i),
                i = o;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var p = La(i, a, t);
                            xs(i, p);
                            break e;
                        case 1:
                            u = a;
                            var c = i.type,
                                f = i.stateNode;
                            if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (at === null || !at.has(f)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var g = Ta(i, u, t);
                                xs(i, g);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Za(n)
        } catch (N) {
            t = N, Y === n && n !== null && (Y = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Xa() {
    var e = Zr.current;
    return Zr.current = Gr, e === null ? Gr : e
}

function Po() {
    (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(zt & 268435455) && !(dl & 268435455) || tt(q, ee)
}

function br(e, t) {
    var n = R;
    R |= 2;
    var r = Xa();
    (q !== e || ee !== t) && (Be = null, jt(e, t));
    do try {
        wf();
        break
    } catch (l) {
        Ya(e, l)
    }
    while (!0);
    if (ao(), R = n, Zr.current = r, Y !== null) throw Error(w(261));
    return q = null, ee = 0, G
}

function wf() {
    for (; Y !== null;) Ga(Y)
}

function kf() {
    for (; Y !== null && !Qc();) Ga(Y)
}

function Ga(e) {
    var t = qa(e.alternate, e, ye);
    e.memoizedProps = e.pendingProps, t === null ? Za(e) : Y = t, No.current = null
}

function Za(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = mf(n, t), n !== null) {
                n.flags &= 32767, Y = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                G = 6, Y = null;
                return
            }
        } else if (n = pf(n, t, ye), n !== null) {
            Y = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Y = t;
            return
        }
        Y = t = e
    } while (t !== null);
    G === 0 && (G = 5)
}

function wt(e, t, n) {
    var r = I,
        l = Ce.transition;
    try {
        Ce.transition = null, I = 1, Sf(e, t, n, r)
    } finally {
        Ce.transition = l, I = r
    }
    return null
}

function Sf(e, t, n, r) {
    do Jt(); while (rt !== null);
    if (R & 6) throw Error(w(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (td(e, i), e === q && (Y = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || gr || (gr = !0, ba(Dr, function() {
            return Jt(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = Ce.transition, Ce.transition = null;
        var o = I;
        I = 1;
        var u = R;
        R |= 4, No.current = null, yf(e, n), Ha(n, e), Bd(mi), Or = !!pi, mi = pi = null, e.current = n, gf(n), Kc(), R = u, I = o, Ce.transition = i
    } else e.current = n;
    if (gr && (gr = !1, rt = e, qr = l), i = e.pendingLanes, i === 0 && (at = null), Gc(n.stateNode), he(e, K()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (Jr) throw Jr = !1, e = Di, Di = null, e;
    return qr & 1 && e.tag !== 0 && Jt(), i = e.pendingLanes, i & 1 ? e === Ii ? Tn++ : (Tn = 0, Ii = e) : Tn = 0, yt(), null
}

function Jt() {
    if (rt !== null) {
        var e = Lu(qr),
            t = Ce.transition,
            n = I;
        try {
            if (Ce.transition = null, I = 16 > e ? 16 : e, rt === null) var r = !1;
            else {
                if (e = rt, rt = null, qr = 0, R & 6) throw Error(w(331));
                var l = R;
                for (R |= 4, C = e.current; C !== null;) {
                    var i = C,
                        o = i.child;
                    if (C.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var a = 0; a < u.length; a++) {
                                var d = u[a];
                                for (C = d; C !== null;) {
                                    var y = C;
                                    switch (y.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zn(8, y, i)
                                    }
                                    var h = y.child;
                                    if (h !== null) h.return = y, C = h;
                                    else
                                        for (; C !== null;) {
                                            y = C;
                                            var m = y.sibling,
                                                v = y.return;
                                            if (Ba(y), y === d) {
                                                C = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = v, C = m;
                                                break
                                            }
                                            C = v
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var S = x.child;
                                if (S !== null) {
                                    x.child = null;
                                    do {
                                        var D = S.sibling;
                                        S.sibling = null, S = D
                                    } while (S !== null)
                                }
                            }
                            C = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) o.return = i, C = o;
                    else e: for (; C !== null;) {
                        if (i = C, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                zn(9, i, i.return)
                        }
                        var p = i.sibling;
                        if (p !== null) {
                            p.return = i.return, C = p;
                            break e
                        }
                        C = i.return
                    }
                }
                var c = e.current;
                for (C = c; C !== null;) {
                    o = C;
                    var f = o.child;
                    if (o.subtreeFlags & 2064 && f !== null) f.return = o, C = f;
                    else e: for (o = c; C !== null;) {
                        if (u = C, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    cl(9, u)
                            }
                        } catch (N) {
                            H(u, u.return, N)
                        }
                        if (u === o) {
                            C = null;
                            break e
                        }
                        var g = u.sibling;
                        if (g !== null) {
                            g.return = u.return, C = g;
                            break e
                        }
                        C = u.return
                    }
                }
                if (R = l, yt(), Ue && typeof Ue.onPostCommitFiberRoot == "function") try {
                    Ue.onPostCommitFiberRoot(nl, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            I = n, Ce.transition = t
        }
    }
    return !1
}

function As(e, t, n) {
    t = rn(n, t), t = La(e, t, 1), e = ut(e, t, 1), t = ue(), e !== null && (Zn(e, 1, t), he(e, t))
}

function H(e, t, n) {
    if (e.tag === 3) As(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                As(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (at === null || !at.has(r))) {
                    e = rn(n, e), e = Ta(t, e, 1), t = ut(t, e, 1), e = ue(), t !== null && (Zn(t, 1, e), he(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Nf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > K() - Co ? jt(e, 0) : jo |= n), he(e, t)
}

function Ja(e, t) {
    t === 0 && (e.mode & 1 ? (t = sr, sr <<= 1, !(sr & 130023424) && (sr = 4194304)) : t = 1);
    var n = ue();
    e = Xe(e, t), e !== null && (Zn(e, t, n), he(e, n))
}

function jf(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Ja(e, n)
}

function Cf(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(w(314))
    }
    r !== null && r.delete(t), Ja(e, n)
}
var qa;
qa = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, ff(e, t, n);
            fe = !!(e.flags & 131072)
        }
    else fe = !1, A && t.flags & 1048576 && na(t, Wr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            _r(e, t), e = t.pendingProps;
            var l = bt(t, oe.current);
            Zt(t, n), l = vo(null, t, r, e, l, n);
            var i = xo();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, me(r) ? (i = !0, Br(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, po(t), l.updater = al, t.stateNode = l, l._reactInternals = t, Ni(t, r, e, n), t = Ei(null, t, r, !0, i, n)) : (t.tag = 0, A && i && io(t), se(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (_r(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = _f(r), e = Le(r, e), l) {
                    case 0:
                        t = Ci(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ls(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ps(null, t, r, e, n);
                        break e;
                    case 14:
                        t = zs(null, t, r, Le(r.type, e), n);
                        break e
                }
                throw Error(w(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Ci(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Ls(e, t, r, l, n);
        case 3:
            e: {
                if (Ia(t), e === null) throw Error(w(387));r = t.pendingProps,
                i = t.memoizedState,
                l = i.element,
                ua(e, t),
                Kr(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        l = rn(Error(w(423)), t), t = Ts(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = rn(Error(w(424)), t), t = Ts(e, t, r, n, l);
                    break e
                } else
                    for (ge = st(t.stateNode.containerInfo.firstChild), ve = t, A = !0, Me = null, n = oa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (en(), r === l) {
                        t = Ge(e, t, n);
                        break e
                    }
                    se(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return aa(t), e === null && wi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, hi(r, l) ? o = null : i !== null && hi(r, i) && (t.flags |= 32), Da(e, t), se(e, t, o, n), t.child;
        case 6:
            return e === null && wi(t), null;
        case 13:
            return Oa(e, t, n);
        case 4:
            return mo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tn(t, null, r, n) : se(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Ps(e, t, r, l, n);
        case 7:
            return se(e, t, t.pendingProps, n), t.child;
        case 8:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, O(Hr, r._currentValue), r._currentValue = o, i !== null)
                    if (Ie(i.value, o)) {
                        if (i.children === l.children && !pe.current) {
                            t = Ge(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var u = i.dependencies;
                            if (u !== null) {
                                o = i.child;
                                for (var a = u.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (i.tag === 1) {
                                            a = Qe(-1, n & -n), a.tag = 2;
                                            var d = i.updateQueue;
                                            if (d !== null) {
                                                d = d.shared;
                                                var y = d.pending;
                                                y === null ? a.next = a : (a.next = y.next, y.next = a), d.pending = a
                                            }
                                        }
                                        i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), ki(i.return, n, t), u.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (o = i.return, o === null) throw Error(w(341));
                                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), ki(o, n, t), o = i.sibling
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (i = o.sibling, i !== null) {
                                        i.return = o.return, o = i;
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                se(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, Zt(t, n), l = Ee(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), zs(e, t, r, l, n);
        case 15:
            return Ma(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), _r(e, t), t.tag = 1, me(r) ? (e = !0, Br(t)) : e = !1, Zt(t, n), za(t, r, l), Ni(t, r, l, n), Ei(null, t, r, !0, e, n);
        case 19:
            return Fa(e, t, n);
        case 22:
            return Ra(e, t, n)
    }
    throw Error(w(156, t.tag))
};

function ba(e, t) {
    return Eu(e, t)
}

function Ef(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function je(e, t, n, r) {
    return new Ef(e, t, n, r)
}

function zo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function _f(e) {
    if (typeof e == "function") return zo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Yi) return 11;
        if (e === Xi) return 14
    }
    return 2
}

function dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Lr(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") zo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case It:
            return Ct(n.children, l, i, t);
        case Ki:
            o = 8, l |= 8;
            break;
        case Yl:
            return e = je(12, n, t, l | 2), e.elementType = Yl, e.lanes = i, e;
        case Xl:
            return e = je(13, n, t, l), e.elementType = Xl, e.lanes = i, e;
        case Gl:
            return e = je(19, n, t, l), e.elementType = Gl, e.lanes = i, e;
        case au:
            return fl(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case su:
                    o = 10;
                    break e;
                case uu:
                    o = 9;
                    break e;
                case Yi:
                    o = 11;
                    break e;
                case Xi:
                    o = 14;
                    break e;
                case qe:
                    o = 16, r = null;
                    break e
            }
            throw Error(w(130, e == null ? e : typeof e, ""))
    }
    return t = je(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
}

function Ct(e, t, n, r) {
    return e = je(7, e, r, t), e.lanes = n, e
}

function fl(e, t, n, r) {
    return e = je(22, e, r, t), e.elementType = au, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Hl(e, t, n) {
    return e = je(6, e, null, t), e.lanes = n, e
}

function Ql(e, t, n) {
    return t = je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Pf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cl(0), this.expirationTimes = Cl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Lo(e, t, n, r, l, i, o, u, a) {
    return e = new Pf(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = je(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, po(i), e
}

function zf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Dt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function ec(e) {
    if (!e) return pt;
    e = e._reactInternals;
    e: {
        if (Mt(e) !== e || e.tag !== 1) throw Error(w(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (me(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(w(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (me(n)) return ea(e, n, t)
    }
    return t
}

function tc(e, t, n, r, l, i, o, u, a) {
    return e = Lo(n, r, !0, e, l, i, o, u, a), e.context = ec(null), n = e.current, r = ue(), l = ct(n), i = Qe(r, l), i.callback = t ?? null, ut(n, i, l), e.current.lanes = l, Zn(e, l, r), he(e, r), e
}

function pl(e, t, n, r) {
    var l = t.current,
        i = ue(),
        o = ct(l);
    return n = ec(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(i, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ut(l, t, o), e !== null && (De(e, l, o, i), jr(e, l, o)), o
}

function el(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Bs(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function To(e, t) {
    Bs(e, t), (e = e.alternate) && Bs(e, t)
}

function Lf() {
    return null
}
var nc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Mo(e) {
    this._internalRoot = e
}
ml.prototype.render = Mo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(w(409));
    pl(e, t, null, null)
};
ml.prototype.unmount = Mo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Lt(function() {
            pl(null, e, null, null)
        }), t[Ye] = null
    }
};

function ml(e) {
    this._internalRoot = e
}
ml.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ru();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
        et.splice(n, 0, e), n === 0 && Iu(e)
    }
};

function Ro(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Vs() {}

function Tf(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var d = el(o);
                i.call(d)
            }
        }
        var o = tc(t, r, e, 0, null, !1, !1, "", Vs);
        return e._reactRootContainer = o, e[Ye] = o.current, An(e.nodeType === 8 ? e.parentNode : e), Lt(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var d = el(a);
            u.call(d)
        }
    }
    var a = Lo(e, 0, !1, null, null, !1, !1, "", Vs);
    return e._reactRootContainer = a, e[Ye] = a.current, An(e.nodeType === 8 ? e.parentNode : e), Lt(function() {
        pl(t, a, n, r)
    }), a
}

function yl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var a = el(o);
                u.call(a)
            }
        }
        pl(t, o, e, l)
    } else o = Tf(n, t, e, l, r);
    return el(o)
}
Tu = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = kn(t.pendingLanes);
                n !== 0 && (Ji(t, n | 1), he(t, K()), !(R & 6) && (ln = K() + 500, yt()))
            }
            break;
        case 13:
            Lt(function() {
                var r = Xe(e, 1);
                if (r !== null) {
                    var l = ue();
                    De(r, e, 1, l)
                }
            }), To(e, 1)
    }
};
qi = function(e) {
    if (e.tag === 13) {
        var t = Xe(e, 134217728);
        if (t !== null) {
            var n = ue();
            De(t, e, 134217728, n)
        }
        To(e, 134217728)
    }
};
Mu = function(e) {
    if (e.tag === 13) {
        var t = ct(e),
            n = Xe(e, t);
        if (n !== null) {
            var r = ue();
            De(n, e, t, r)
        }
        To(e, t)
    }
};
Ru = function() {
    return I
};
Du = function(e, t) {
    var n = I;
    try {
        return I = e, t()
    } finally {
        I = n
    }
};
ii = function(e, t, n) {
    switch (t) {
        case "input":
            if (ql(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = ol(r);
                        if (!l) throw Error(w(90));
                        du(r), ql(r, l)
                    }
                }
            }
            break;
        case "textarea":
            pu(e, n);
            break;
        case "select":
            t = n.value, t != null && Kt(e, !!n.multiple, t, !1)
    }
};
wu = Eo;
ku = Lt;
var Mf = {
        usingClientEntryPoint: !1,
        Events: [qn, Ut, ol, vu, xu, Eo]
    },
    vn = {
        findFiberByHostInstance: kt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Rf = {
        bundleType: vn.bundleType,
        version: vn.version,
        rendererPackageName: vn.rendererPackageName,
        rendererConfig: vn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ze.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = ju(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: vn.findFiberByHostInstance || Lf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vr.isDisabled && vr.supportsFiber) try {
        nl = vr.inject(Rf), Ue = vr
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mf;
we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ro(t)) throw Error(w(200));
    return zf(e, t, null, n)
};
we.createRoot = function(e, t) {
    if (!Ro(e)) throw Error(w(299));
    var n = !1,
        r = "",
        l = nc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Lo(e, 1, !1, null, null, n, !1, r, l), e[Ye] = t.current, An(e.nodeType === 8 ? e.parentNode : e), new Mo(t)
};
we.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
    return e = ju(t), e = e === null ? null : e.stateNode, e
};
we.flushSync = function(e) {
    return Lt(e)
};
we.hydrate = function(e, t, n) {
    if (!hl(t)) throw Error(w(200));
    return yl(null, e, t, !0, n)
};
we.hydrateRoot = function(e, t, n) {
    if (!Ro(e)) throw Error(w(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        i = "",
        o = nc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = tc(t, null, e, 1, n ?? null, l, !1, i, o), e[Ye] = t.current, An(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new ml(t)
};
we.render = function(e, t, n) {
    if (!hl(t)) throw Error(w(200));
    return yl(null, e, t, !1, n)
};
we.unmountComponentAtNode = function(e) {
    if (!hl(e)) throw Error(w(40));
    return e._reactRootContainer ? (Lt(function() {
        yl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ye] = null
        })
    }), !0) : !1
};
we.unstable_batchedUpdates = Eo;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!hl(n)) throw Error(w(200));
    if (e == null || e._reactInternals === void 0) throw Error(w(38));
    return yl(e, t, n, !1, r)
};
we.version = "18.3.1-next-f1338f8080-20240426";

function rc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)
    } catch (e) {
        console.error(e)
    }
}
rc(), ru.exports = we;
var Df = ru.exports,
    lc, Ws = Df;
lc = Ws.createRoot, Ws.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var If = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Of = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    ne = (e, t) => {
        const n = T.forwardRef(({
            color: r = "currentColor",
            size: l = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: o,
            className: u = "",
            children: a,
            ...d
        }, y) => T.createElement("svg", {
            ref: y,
            ...If,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? Number(i) * 24 / Number(l) : i,
            className: ["lucide", `lucide-${Of(e)}`, u].join(" "),
            ...d
        }, [...t.map(([h, m]) => T.createElement(h, m)), ...Array.isArray(a) ? a : [a]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = ne("ArrowDownCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M12 8v8",
        key: "napkw2"
    }],
    ["path", {
        d: "m8 12 4 4 4-4",
        key: "k98ssh"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = ne("ArrowUpCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "m16 12-4-4-4 4",
        key: "177agl"
    }],
    ["path", {
        d: "M12 16V8",
        key: "1sbj14"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $f = ne("Award", [
    ["circle", {
        cx: "12",
        cy: "8",
        r: "6",
        key: "1vp47v"
    }],
    ["path", {
        d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
        key: "em7aur"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = ne("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Af = ne("Coins", [
    ["circle", {
        cx: "8",
        cy: "8",
        r: "6",
        key: "3yglwk"
    }],
    ["path", {
        d: "M18.09 10.37A6 6 0 1 1 10.34 18",
        key: "t5s6rm"
    }],
    ["path", {
        d: "M7 6h1v4",
        key: "1obek4"
    }],
    ["path", {
        d: "m16.71 13.88.7.71-2.82 2.82",
        key: "1rbuyh"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = ne("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = ne("CreditCard", [
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        key: "ynyp8z"
    }],
    ["line", {
        x1: "2",
        x2: "22",
        y1: "10",
        y2: "10",
        key: "1b3vmo"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $i = ne("History", [
    ["path", {
        d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "1357e3"
    }],
    ["path", {
        d: "M3 3v5h5",
        key: "1xhq8a"
    }],
    ["path", {
        d: "M12 7v5l4 2",
        key: "1fdv2h"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = ne("IndianRupee", [
    ["path", {
        d: "M6 3h12",
        key: "ggurg9"
    }],
    ["path", {
        d: "M6 8h12",
        key: "6g4wlu"
    }],
    ["path", {
        d: "m6 13 8.5 8",
        key: "u1kupk"
    }],
    ["path", {
        d: "M6 13h3",
        key: "wdp6ag"
    }],
    ["path", {
        d: "M9 13c6.667 0 6.667-10 0-10",
        key: "1nkvk2"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wf = ne("LogOut", [
    ["path", {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
        key: "1uf3rs"
    }],
    ["polyline", {
        points: "16 17 21 12 16 7",
        key: "1gabdz"
    }],
    ["line", {
        x1: "21",
        x2: "9",
        y1: "12",
        y2: "12",
        key: "1uyos4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hf = ne("QrCode", [
    ["rect", {
        width: "5",
        height: "5",
        x: "3",
        y: "3",
        rx: "1",
        key: "1tu5fj"
    }],
    ["rect", {
        width: "5",
        height: "5",
        x: "16",
        y: "3",
        rx: "1",
        key: "1v8r4q"
    }],
    ["rect", {
        width: "5",
        height: "5",
        x: "3",
        y: "16",
        rx: "1",
        key: "1x03jg"
    }],
    ["path", {
        d: "M21 16h-3a2 2 0 0 0-2 2v3",
        key: "177gqh"
    }],
    ["path", {
        d: "M21 21v.01",
        key: "ents32"
    }],
    ["path", {
        d: "M12 7v3a2 2 0 0 1-2 2H7",
        key: "8crl2c"
    }],
    ["path", {
        d: "M3 12h.01",
        key: "nlz23k"
    }],
    ["path", {
        d: "M12 3h.01",
        key: "n36tog"
    }],
    ["path", {
        d: "M12 16v.01",
        key: "133mhm"
    }],
    ["path", {
        d: "M16 12h1",
        key: "1slzba"
    }],
    ["path", {
        d: "M21 12v.01",
        key: "1lwtk9"
    }],
    ["path", {
        d: "M12 21v-1",
        key: "1880an"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = ne("RotateCw", [
    ["path", {
        d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        key: "1p45f6"
    }],
    ["path", {
        d: "M21 3v5h-5",
        key: "1q7to0"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qf = ne("Search", [
    ["circle", {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u"
    }],
    ["path", {
        d: "m21 21-4.3-4.3",
        key: "1qie3q"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = ne("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = ne("Smartphone", [
    ["rect", {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3"
    }],
    ["path", {
        d: "M12 18h.01",
        key: "mhygvu"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = ne("User", [
    ["path", {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
    }],
    ["circle", {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = ne("Wallet", [
        ["path", {
            d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
            key: "195gfw"
        }],
        ["path", {
            d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
            key: "195n9w"
        }],
        ["path", {
            d: "M18 12a2 2 0 0 0 0 4h4v-4Z",
            key: "vllfpd"
        }]
    ]),
    Gf = ({
        isSpinning: e,
        result: t,
        selectedNumber: n
    }) => {
        const r = T.useRef(null),
            l = T.useRef(null),
            i = T.useRef(),
            o = T.useRef(0),
            u = T.useRef(0),
            a = T.useRef(0),
            d = T.useRef(!1),
            y = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#C9CBCF", "#7BC043", "#F37735", "#FFC425"];
        return T.useEffect(() => {
            const h = r.current;
            if (!h) return;
            const m = h.getContext("2d");
            if (!m) return;
            h.width = 500, h.height = 500;
            const v = h.width / 2,
                x = h.height / 2,
                S = Math.min(v, x) - 10;
            return (() => {
                m.clearRect(0, 0, h.width, h.height);
                const c = 2 * Math.PI / 10;
                for (let f = 0; f < 10; f++) {
                    const g = f * c,
                        N = (f + 1) * c;
                    m.beginPath(), m.moveTo(v, x), m.arc(v, x, S, g, N), m.closePath(), m.fillStyle = y[f], m.fill(), m.strokeStyle = "#333", m.lineWidth = 2, m.stroke(), m.save(), m.translate(v, x);
                    const k = g + c / 2,
                        j = S * .75,
                        _ = j * Math.cos(k),
                        F = j * Math.sin(k);
                    m.translate(_, F), m.rotate(k + Math.PI / 2), m.fillStyle = "#fff", m.font = "bold 30px Arial", m.textAlign = "center", m.textBaseline = "middle", m.fillText(f.toString(), 0, 0), m.restore()
                }
                m.beginPath(), m.arc(v, x, S * .15, 0, 2 * Math.PI), m.fillStyle = "#333", m.fill(), m.beginPath(), m.arc(v, x, S, 0, 2 * Math.PI), m.strokeStyle = "#333", m.lineWidth = 5, m.stroke()
            })(), (() => {
                m.beginPath(), m.moveTo(v, x - S - 10), m.lineTo(v - 15, x - S + 20), m.lineTo(v + 15, x - S + 20), m.closePath(), m.fillStyle = "#FF0000", m.fill(), m.strokeStyle = "#333", m.lineWidth = 2, m.stroke()
            })(), () => {
                i.current && cancelAnimationFrame(i.current)
            }
        }, []), T.useEffect(() => {
            if (e && t !== null) {
                const h = 2 * Math.PI / 10,
                    m = h * (9 - t) + h / 2;
                a.current = 5 * 2 * Math.PI + m, u.current = .3, d.current = !0;
                const v = () => {
                    if (!d.current) return;
                    o.current += u.current;
                    const x = a.current - o.current;
                    x <= 0 ? (d.current = !1, o.current = a.current % (2 * Math.PI)) : u.current = Math.max(.001, x * .002), l.current && (l.current.style.transform = `rotate(${o.current}rad)`), i.current = requestAnimationFrame(v)
                };
                o.current = 0, l.current && (l.current.style.transform = "rotate(0rad)"), i.current = requestAnimationFrame(v)
            }
        }, [e, t]), s.jsxs("div", {
            className: "flex flex-col items-center",
            children: [s.jsx("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Spin The Wheel"
            }), s.jsxs("div", {
                className: "relative",
                children: [s.jsx("div", {
                    className: "absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 z-10",
                    children: s.jsx("div", {
                        className: "w-0 h-0 border-l-[15px] border-r-[15px] border-t-[30px] border-l-transparent border-r-transparent border-t-red-600"
                    })
                }), s.jsx("div", {
                    ref: l,
                    className: "transition-transform duration-100 ease-linear",
                    style: {
                        transformOrigin: "center"
                    },
                    children: s.jsx("canvas", {
                        ref: r,
                        className: "max-w-full h-auto"
                    })
                })]
            }), s.jsx("div", {
                className: "mt-6 text-center",
                children: n !== null ? s.jsxs("p", {
                    className: "text-xl",
                    children: ["You selected: ", s.jsx("span", {
                        className: "font-bold text-yellow-400",
                        children: n
                    })]
                }) : s.jsx("p", {
                    className: "text-xl",
                    children: "Select a number to place your bet"
                })
            })]
        })
    },
    Zf = ({
        selectedNumber: e,
        onNumberSelect: t,
        betAmount: n,
        onBetAmountChange: r,
        onSpin: l,
        isSpinning: i,
        balance: o
    }) => {
        const u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            a = [10, 50, 100, 500, 1e3];
        return s.jsxs("div", {
            className: "bg-black bg-opacity-30 rounded-xl p-6 shadow-xl",
            children: [s.jsx("h2", {
                className: "text-xl font-bold mb-4",
                children: "Place Your Bet"
            }), s.jsxs("div", {
                className: "mb-6",
                children: [s.jsx("h3", {
                    className: "text-lg font-medium mb-2",
                    children: "Select a Number"
                }), s.jsx("div", {
                    className: "grid grid-cols-5 gap-2",
                    children: u.map(d => s.jsx("button", {
                        onClick: () => t(d),
                        className: `h-12 w-12 rounded-full font-bold text-lg flex items-center justify-center transition-all ${e===d?"bg-yellow-500 text-black scale-110 shadow-lg":"bg-gray-800 hover:bg-gray-700"}`,
                        children: d
                    }, d))
                })]
            }), s.jsxs("div", {
                className: "mb-6",
                children: [s.jsx("h3", {
                    className: "text-lg font-medium mb-2",
                    children: "Bet Amount"
                }), s.jsx("div", {
                    className: "flex flex-wrap gap-2 mb-3",
                    children: a.map(d => s.jsxs("button", {
                        onClick: () => r(d),
                        className: `px-3 py-1 rounded-full font-medium transition-all ${n===d?"bg-yellow-500 text-black":"bg-gray-800 hover:bg-gray-700"}`,
                        children: ["$", d]
                    }, d))
                }), s.jsxs("div", {
                    className: "flex items-center",
                    children: [s.jsx("span", {
                        className: "text-lg mr-2",
                        children: "$"
                    }), s.jsx("input", {
                        type: "number",
                        value: n,
                        onChange: d => r(Math.max(1, parseInt(d.target.value) || 0)),
                        className: "w-full bg-gray-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500",
                        min: "1",
                        max: o
                    })]
                }), s.jsxs("div", {
                    className: "mt-2 text-sm",
                    children: [s.jsx("span", {
                        className: "text-gray-400",
                        children: "Potential win: "
                    }), s.jsxs("span", {
                        className: "text-green-400 font-bold",
                        children: ["$", (n * 9).toFixed(2)]
                    })]
                })]
            }), s.jsx("button", {
                onClick: l,
                disabled: i || e === null || n <= 0 || n > o,
                className: `w-full py-3 rounded-lg font-bold text-lg flex items-center justify-center transition-all ${i||e===null||n<=0||n>o?"bg-gray-700 cursor-not-allowed":"bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black"}`,
                children: i ? s.jsxs(s.Fragment, {
                    children: [s.jsx(oc, {
                        className: "h-5 w-5 mr-2 animate-spin"
                    }), "Spinning..."]
                }) : "SPIN NOW"
            }), s.jsxs("div", {
                className: "mt-4 text-center text-sm text-gray-400",
                children: [s.jsx("p", {
                    children: "Select a number and place your bet to play."
                }), s.jsx("p", {
                    children: "Win 9x your bet if the wheel stops on your number!"
                })]
            })]
        })
    },
    Jf = ({
        transactions: e
    }) => {
        const [t, n] = T.useState("all"), [r, l] = T.useState(""), i = e.filter(o => {
            if (t === "deposits" && o.type !== "deposit" || t === "bets" && o.type !== "bet" || t === "wins" && (o.type !== "bet" || o.result !== "win") || t === "losses" && (o.type !== "bet" || o.result !== "loss")) return !1;
            if (r) {
                const u = r.toLowerCase();
                return o.type.toLowerCase().includes(u) || o.result && o.result.toLowerCase().includes(u) || o.amount.toString().includes(u) || new Date(o.timestamp).toLocaleString().toLowerCase().includes(u)
            }
            return !0
        });
        return s.jsxs("div", {
            className: "bg-black bg-opacity-30 rounded-xl p-6 shadow-xl",
            children: [s.jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [s.jsxs("h2", {
                    className: "text-2xl font-bold flex items-center",
                    children: [s.jsx($i, {
                        className: "h-6 w-6 mr-2"
                    }), "Transaction History"]
                }), s.jsxs("div", {
                    className: "relative",
                    children: [s.jsx("input", {
                        type: "text",
                        placeholder: "Search transactions...",
                        value: r,
                        onChange: o => l(o.target.value),
                        className: "bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 w-64"
                    }), s.jsx(Qf, {
                        className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    })]
                })]
            }), s.jsxs("div", {
                className: "flex flex-wrap gap-2 mb-6",
                children: [s.jsx("button", {
                    onClick: () => n("all"),
                    className: `px-4 py-2 rounded-lg font-medium transition-all ${t==="all"?"bg-yellow-500 text-black":"bg-gray-800 hover:bg-gray-700"}`,
                    children: "All"
                }), s.jsx("button", {
                    onClick: () => n("deposits"),
                    className: `px-4 py-2 rounded-lg font-medium transition-all ${t==="deposits"?"bg-yellow-500 text-black":"bg-gray-800 hover:bg-gray-700"}`,
                    children: "Deposits"
                }), s.jsx("button", {
                    onClick: () => n("bets"),
                    className: `px-4 py-2 rounded-lg font-medium transition-all ${t==="bets"?"bg-yellow-500 text-black":"bg-gray-800 hover:bg-gray-700"}`,
                    children: "All Bets"
                }), s.jsx("button", {
                    onClick: () => n("wins"),
                    className: `px-4 py-2 rounded-lg font-medium transition-all ${t==="wins"?"bg-yellow-500 text-black":"bg-gray-800 hover:bg-gray-700"}`,
                    children: "Wins"
                }), s.jsx("button", {
                    onClick: () => n("losses"),
                    className: `px-4 py-2 rounded-lg font-medium transition-all ${t==="losses"?"bg-yellow-500 text-black":"bg-gray-800 hover:bg-gray-700"}`,
                    children: "Losses"
                })]
            }), i.length === 0 ? s.jsxs("div", {
                className: "text-center py-10 text-gray-400",
                children: [s.jsx("p", {
                    className: "text-xl",
                    children: "No transactions found"
                }), s.jsx("p", {
                    className: "mt-2",
                    children: "Try changing your filters or search term"
                })]
            }) : s.jsx("div", {
                className: "overflow-x-auto",
                children: s.jsxs("table", {
                    className: "w-full",
                    children: [s.jsx("thead", {
                        children: s.jsxs("tr", {
                            className: "border-b border-gray-700",
                            children: [s.jsx("th", {
                                className: "text-left py-3 px-4",
                                children: "Type"
                            }), s.jsx("th", {
                                className: "text-left py-3 px-4",
                                children: "Date & Time"
                            }), s.jsx("th", {
                                className: "text-right py-3 px-4",
                                children: "Amount"
                            }), s.jsx("th", {
                                className: "text-right py-3 px-4",
                                children: "Balance"
                            })]
                        })
                    }), s.jsx("tbody", {
                        children: i.map(o => s.jsxs("tr", {
                            className: "border-b border-gray-800 hover:bg-gray-800",
                            children: [s.jsx("td", {
                                className: "py-4 px-4",
                                children: s.jsxs("div", {
                                    className: "flex items-center",
                                    children: [o.type === "deposit" ? s.jsx(Ff, {
                                        className: "h-5 w-5 text-green-400 mr-2"
                                    }) : o.result === "win" ? s.jsx(Hs, {
                                        className: "h-5 w-5 text-yellow-400 mr-2"
                                    }) : s.jsx(Hs, {
                                        className: "h-5 w-5 text-red-400 mr-2"
                                    }), s.jsxs("div", {
                                        children: [s.jsx("p", {
                                            className: "font-medium",
                                            children: o.type === "deposit" ? "Deposit" : o.result === "win" ? "Win" : "Loss"
                                        }), o.type === "bet" && s.jsx("p", {
                                            className: "text-xs text-gray-400",
                                            children: "Bet on wheel spin"
                                        })]
                                    })]
                                })
                            }), s.jsx("td", {
                                className: "py-4 px-4 text-gray-300",
                                children: new Date(o.timestamp).toLocaleString()
                            }), s.jsxs("td", {
                                className: `py-4 px-4 text-right font-bold ${o.type==="deposit"||o.result==="win"?"text-green-400":"text-red-400"}`,
                                children: [o.type === "deposit" || o.result === "win" ? "+" : "-", "$", o.amount.toFixed(2)]
                            }), s.jsxs("td", {
                                className: "py-4 px-4 text-right font-medium",
                                children: ["$", o.balance.toFixed(2)]
                            })]
                        }, o.id))
                    })]
                })
            })]
        })
    },
    qf = ({
        onDeposit: e
    }) => {
        const [t, n] = T.useState(500), [r, l] = T.useState("upi"), [i, o] = T.useState(""), [u, a] = T.useState(""), [d, y] = T.useState(""), [h, m] = T.useState(""), [v, x] = T.useState(!1), [S, D] = T.useState(!1), p = [100, 500, 1e3, 2e3, 5e3], c = f => {
            if (f.preventDefault(), t <= 0) {
                alert("Please enter a valid amount");
                return
            }
            if (r === "upi" && !i) {
                alert("Please enter your UPI ID");
                return
            }
            if (r === "card") {
                if (!u || u.length < 16) {
                    alert("Please enter a valid card number");
                    return
                }
                if (!d) {
                    alert("Please enter card expiry date");
                    return
                }
                if (!h || h.length < 3) {
                    alert("Please enter a valid CVV");
                    return
                }
            }
            x(!0), setTimeout(() => {
                x(!1), D(!0), e(t), setTimeout(() => {
                    D(!1), o(""), a(""), y(""), m("")
                }, 3e3)
            }, 2e3)
        };
        return s.jsxs("div", {
            className: "max-w-2xl mx-auto",
            children: [s.jsxs("div", {
                className: "bg-black bg-opacity-30 rounded-xl p-6 shadow-xl",
                children: [s.jsxs("h2", {
                    className: "text-2xl font-bold mb-6 flex items-center",
                    children: [s.jsx(ic, {
                        className: "h-6 w-6 mr-2 text-green-400"
                    }), "Add Money"]
                }), S ? s.jsxs("div", {
                    className: "text-center py-10",
                    children: [s.jsx("div", {
                        className: "inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-500 mb-6",
                        children: s.jsx(Uf, {
                            className: "h-12 w-12 text-white"
                        })
                    }), s.jsx("h3", {
                        className: "text-2xl font-bold mb-2",
                        children: "Payment Successful!"
                    }), s.jsxs("p", {
                        className: "text-gray-300 mb-6",
                        children: ["$", t.toFixed(2), " has been added to your account."]
                    }), s.jsx("button", {
                        onClick: () => D(!1),
                        className: "px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-colors",
                        children: "Make Another Deposit"
                    })]
                }) : s.jsxs("form", {
                    onSubmit: c,
                    children: [s.jsxs("div", {
                        className: "mb-6",
                        children: [s.jsx("h3", {
                            className: "text-lg font-medium mb-3",
                            children: "Select Amount"
                        }), s.jsx("div", {
                            className: "flex flex-wrap gap-3 mb-4",
                            children: p.map(f => s.jsxs("button", {
                                type: "button",
                                onClick: () => n(f),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${t===f?"bg-yellow-500 text-black":"bg-gray-800 hover:bg-gray-700"}`,
                                children: ["$", f]
                            }, f))
                        }), s.jsxs("div", {
                            className: "flex items-center",
                            children: [s.jsx("span", {
                                className: "text-lg mr-2",
                                children: "$"
                            }), s.jsx("input", {
                                type: "number",
                                value: t,
                                onChange: f => n(Math.max(1, parseInt(f.target.value) || 0)),
                                className: "w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                min: "1",
                                placeholder: "Enter amount"
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "mb-6",
                        children: [s.jsx("h3", {
                            className: "text-lg font-medium mb-3",
                            children: "Payment Method"
                        }), s.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                            children: [s.jsxs("button", {
                                type: "button",
                                onClick: () => l("upi"),
                                className: `flex items-center justify-center p-4 rounded-lg border-2 transition-all ${r==="upi"?"border-yellow-500 bg-yellow-500 bg-opacity-10":"border-gray-700 hover:border-gray-600"}`,
                                children: [s.jsx(Kf, {
                                    className: "h-6 w-6 mr-2"
                                }), s.jsx("span", {
                                    children: "UPI"
                                })]
                            }), s.jsxs("button", {
                                type: "button",
                                onClick: () => l("card"),
                                className: `flex items-center justify-center p-4 rounded-lg border-2 transition-all ${r==="card"?"border-yellow-500 bg-yellow-500 bg-opacity-10":"border-gray-700 hover:border-gray-600"}`,
                                children: [s.jsx(Vf, {
                                    className: "h-6 w-6 mr-2"
                                }), s.jsx("span", {
                                    children: "Card"
                                })]
                            }), s.jsxs("button", {
                                type: "button",
                                onClick: () => l("qr"),
                                className: `flex items-center justify-center p-4 rounded-lg border-2 transition-all ${r==="qr"?"border-yellow-500 bg-yellow-500 bg-opacity-10":"border-gray-700 hover:border-gray-600"}`,
                                children: [s.jsx(Hf, {
                                    className: "h-6 w-6 mr-2"
                                }), s.jsx("span", {
                                    children: "QR Code"
                                })]
                            })]
                        })]
                    }), r === "upi" && s.jsxs("div", {
                        className: "mb-6",
                        children: [s.jsx("label", {
                            className: "block text-lg font-medium mb-2",
                            children: "UPI ID"
                        }), s.jsx("input", {
                            type: "text",
                            value: i,
                            onChange: f => o(f.target.value),
                            className: "w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500",
                            placeholder: "yourname@upi"
                        }), s.jsx("p", {
                            className: "mt-2 text-sm text-gray-400",
                            children: "Enter your UPI ID (e.g., name@bank)"
                        })]
                    }), r === "card" && s.jsxs("div", {
                        className: "space-y-4 mb-6",
                        children: [s.jsxs("div", {
                            children: [s.jsx("label", {
                                className: "block text-lg font-medium mb-2",
                                children: "Card Number"
                            }), s.jsx("input", {
                                type: "text",
                                value: u,
                                onChange: f => a(f.target.value.replace(/\D/g, "").slice(0, 16)),
                                className: "w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                placeholder: "1234 5678 9012 3456",
                                maxLength: 16
                            })]
                        }), s.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [s.jsxs("div", {
                                children: [s.jsx("label", {
                                    className: "block text-lg font-medium mb-2",
                                    children: "Expiry Date"
                                }), s.jsx("input", {
                                    type: "text",
                                    value: d,
                                    onChange: f => {
                                        const g = f.target.value.replace(/\D/g, "");
                                        if (g.length <= 4) {
                                            let N = g;
                                            g.length > 2 && (N = g.slice(0, 2) + "/" + g.slice(2)), y(N)
                                        }
                                    },
                                    className: "w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                    placeholder: "MM/YY",
                                    maxLength: 5
                                })]
                            }), s.jsxs("div", {
                                children: [s.jsx("label", {
                                    className: "block text-lg font-medium mb-2",
                                    children: "CVV"
                                }), s.jsx("input", {
                                    type: "password",
                                    value: h,
                                    onChange: f => m(f.target.value.replace(/\D/g, "").slice(0, 3)),
                                    className: "w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                    placeholder: "123",
                                    maxLength: 3
                                })]
                            })]
                        })]
                    }), r === "qr" && s.jsxs("div", {
                        className: "mb-6 text-center",
                        children: [s.jsx("div", {
                            className: "bg-white p-4 inline-block rounded-lg mb-4",
                            children: s.jsx("img", {
                                src: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
                                alt: "Payment QR Code",
                                className: "w-64 h-64 object-cover"
                            })
                        }), s.jsx("p", {
                            className: "text-gray-300",
                            children: "Scan this QR code with your UPI app to make payment"
                        })]
                    }), s.jsx("button", {
                        type: "submit",
                        disabled: v,
                        className: `w-full py-4 rounded-lg font-bold text-lg transition-all ${v?"bg-gray-700 cursor-not-allowed":"bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"}`,
                        children: v ? "Processing..." : `Pay $${t.toFixed(2)}`
                    }), s.jsxs("div", {
                        className: "mt-4 text-center text-sm text-gray-400",
                        children: [s.jsx("p", {
                            children: "All transactions are secure and encrypted."
                        }), s.jsx("p", {
                            children: "By proceeding, you agree to our Terms of Service."
                        })]
                    })]
                })]
            }), s.jsxs("div", {
                className: "bg-black bg-opacity-30 rounded-xl p-6 shadow-xl mt-6",
                children: [s.jsx("h3", {
                    className: "text-xl font-bold mb-4",
                    children: "Why Add Money?"
                }), s.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: [s.jsxs("div", {
                        className: "bg-gray-800 bg-opacity-50 p-4 rounded-lg",
                        children: [s.jsx("h4", {
                            className: "font-bold mb-2",
                            children: "More Spins"
                        }), s.jsx("p", {
                            className: "text-gray-300",
                            children: "Add funds to play more games and increase your chances of winning big!"
                        })]
                    }), s.jsxs("div", {
                        className: "bg-gray-800 bg-opacity-50 p-4 rounded-lg",
                        children: [s.jsx("h4", {
                            className: "font-bold mb-2",
                            children: "Higher Bets"
                        }), s.jsx("p", {
                            className: "text-gray-300",
                            children: "Place larger bets for bigger potential payouts on each spin."
                        })]
                    }), s.jsxs("div", {
                        className: "bg-gray-800 bg-opacity-50 p-4 rounded-lg",
                        children: [s.jsx("h4", {
                            className: "font-bold mb-2",
                            children: "Special Bonuses"
                        }), s.jsx("p", {
                            className: "text-gray-300",
                            children: "Get exclusive bonuses when you add ₹1000 or more in a single transaction!"
                        })]
                    })]
                })]
            })]
        })
    },
    bf = ({
        balance: e
    }) => {
        const [t, n] = T.useState("account"), r = {
            name: "John Doe",
            email: "john.doe@example.com",
            joinDate: "2023-05-15",
            totalBets: 127,
            winRate: 32,
            referralCode: "JOHND2023",
            kycStatus: "verified"
        };
        return s.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: s.jsxs("div", {
                className: "bg-black bg-opacity-30 rounded-xl p-6 shadow-xl",
                children: [s.jsxs("div", {
                    className: "flex flex-col md:flex-row items-center md:items-start gap-6 mb-8",
                    children: [s.jsx("div", {
                        className: "w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-3xl font-bold",
                        children: r.name.charAt(0)
                    }), s.jsxs("div", {
                        className: "flex-1 text-center md:text-left",
                        children: [s.jsx("h2", {
                            className: "text-2xl font-bold",
                            children: r.name
                        }), s.jsx("p", {
                            className: "text-gray-400 mb-2",
                            children: r.email
                        }), s.jsxs("div", {
                            className: "flex flex-wrap justify-center md:justify-start gap-3 mb-4",
                            children: [s.jsxs("div", {
                                className: "bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center",
                                children: [s.jsx(Qs, {
                                    className: "h-4 w-4 mr-1 text-green-400"
                                }), "KYC Verified"]
                            }), s.jsxs("div", {
                                className: "bg-gray-800 px-3 py-1 rounded-full text-sm",
                                children: ["Member since ", new Date(r.joinDate).toLocaleDateString()]
                            })]
                        }), s.jsxs("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                            children: [s.jsxs("div", {
                                className: "bg-gray-800 p-3 rounded-lg",
                                children: [s.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Balance"
                                }), s.jsxs("p", {
                                    className: "text-xl font-bold text-green-400",
                                    children: ["$", e.toFixed(2)]
                                })]
                            }), s.jsxs("div", {
                                className: "bg-gray-800 p-3 rounded-lg",
                                children: [s.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Total Bets"
                                }), s.jsx("p", {
                                    className: "text-xl font-bold",
                                    children: r.totalBets
                                })]
                            }), s.jsxs("div", {
                                className: "bg-gray-800 p-3 rounded-lg",
                                children: [s.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Win Rate"
                                }), s.jsxs("p", {
                                    className: "text-xl font-bold text-yellow-400",
                                    children: [r.winRate, "%"]
                                })]
                            })]
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-b border-gray-700 mb-6",
                    children: s.jsxs("div", {
                        className: "flex overflow-x-auto",
                        children: [s.jsx("button", {
                            onClick: () => n("account"),
                            className: `px-4 py-3 font-medium whitespace-nowrap ${t==="account"?"border-b-2 border-yellow-500 text-yellow-500":"text-gray-400 hover:text-white"}`,
                            children: "Account"
                        }), s.jsx("button", {
                            onClick: () => n("security"),
                            className: `px-4 py-3 font-medium whitespace-nowrap ${t==="security"?"border-b-2 border-yellow-500 text-yellow-500":"text-gray-400 hover:text-white"}`,
                            children: "Security"
                        }), s.jsx("button", {
                            onClick: () => n("rewards"),
                            className: `px-4 py-3 font-medium whitespace-nowrap ${t==="rewards"?"border-b-2 border-yellow-500 text-yellow-500":"text-gray-400 hover:text-white"}`,
                            children: "Rewards"
                        }), s.jsx("button", {
                            onClick: () => n("settings"),
                            className: `px-4 py-3 font-medium whitespace-nowrap ${t==="settings"?"border-b-2 border-yellow-500 text-yellow-500":"text-gray-400 hover:text-white"}`,
                            children: "Settings"
                        })]
                    })
                }), t === "account" && s.jsxs("div", {
                    children: [s.jsxs("div", {
                        className: "mb-6",
                        children: [s.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Personal Information"
                        }), s.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [s.jsxs("div", {
                                children: [s.jsx("label", {
                                    className: "block text-sm text-gray-400 mb-1",
                                    children: "Full Name"
                                }), s.jsx("input", {
                                    type: "text",
                                    value: r.name,
                                    readOnly: !0,
                                    className: "w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                })]
                            }), s.jsxs("div", {
                                children: [s.jsx("label", {
                                    className: "block text-sm text-gray-400 mb-1",
                                    children: "Email Address"
                                }), s.jsx("input", {
                                    type: "email",
                                    value: r.email,
                                    readOnly: !0,
                                    className: "w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "mb-6",
                        children: [s.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Refer & Earn"
                        }), s.jsxs("div", {
                            className: "bg-gray-800 p-4 rounded-lg",
                            children: [s.jsx("p", {
                                className: "text-gray-300 mb-3",
                                children: "Share your referral code with friends and earn 10% of their first deposit!"
                            }), s.jsxs("div", {
                                className: "flex",
                                children: [s.jsx("input", {
                                    type: "text",
                                    value: r.referralCode,
                                    readOnly: !0,
                                    className: "flex-1 bg-gray-700 text-white px-4 py-3 rounded-l-lg focus:outline-none"
                                }), s.jsxs("button", {
                                    className: "bg-yellow-500 text-black px-4 rounded-r-lg flex items-center",
                                    children: [s.jsx(Bf, {
                                        className: "h-5 w-5 mr-1"
                                    }), "Copy"]
                                })]
                            })]
                        })]
                    }), s.jsxs("button", {
                        className: "flex items-center justify-center w-full py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors",
                        children: [s.jsx(Wf, {
                            className: "h-5 w-5 mr-2"
                        }), "Logout"]
                    })]
                }), t === "security" && s.jsxs("div", {
                    children: [s.jsxs("div", {
                        className: "mb-6",
                        children: [s.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Security Settings"
                        }), s.jsxs("div", {
                            className: "space-y-4",
                            children: [s.jsxs("div", {
                                className: "flex items-center justify-between p-4 bg-gray-800 rounded-lg",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("h4", {
                                        className: "font-medium",
                                        children: "Password"
                                    }), s.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: "Last changed 30 days ago"
                                    })]
                                }), s.jsx("button", {
                                    className: "px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg",
                                    children: "Change"
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-center justify-between p-4 bg-gray-800 rounded-lg",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("h4", {
                                        className: "font-medium",
                                        children: "Two-Factor Authentication"
                                    }), s.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: "Enhance your account security"
                                    })]
                                }), s.jsx("button", {
                                    className: "px-4 py-2 bg-gray-700 text-white font-medium rounded-lg",
                                    children: "Enable"
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-center justify-between p-4 bg-gray-800 rounded-lg",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("h4", {
                                        className: "font-medium",
                                        children: "KYC Verification"
                                    }), s.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: "Your identity has been verified"
                                    })]
                                }), s.jsx("span", {
                                    className: "px-3 py-1 bg-green-600 text-white text-sm rounded-full",
                                    children: "Verified"
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "mb-6",
                        children: [s.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Login Activity"
                        }), s.jsx("div", {
                            className: "bg-gray-800 p-4 rounded-lg",
                            children: s.jsxs("div", {
                                className: "space-y-3",
                                children: [s.jsxs("div", {
                                    className: "flex justify-between items-start",
                                    children: [s.jsxs("div", {
                                        children: [s.jsx("p", {
                                            className: "font-medium",
                                            children: "Mumbai, India"
                                        }), s.jsx("p", {
                                            className: "text-sm text-gray-400",
                                            children: "Chrome on Windows • Now"
                                        })]
                                    }), s.jsx("span", {
                                        className: "px-2 py-1 bg-green-600 text-white text-xs rounded-full",
                                        children: "Current"
                                    })]
                                }), s.jsxs("div", {
                                    className: "border-t border-gray-700 pt-3",
                                    children: [s.jsx("p", {
                                        className: "font-medium",
                                        children: "Delhi, India"
                                    }), s.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: "Safari on iPhone • 2 days ago"
                                    })]
                                })]
                            })
                        })]
                    })]
                }), t === "rewards" && s.jsx("div", {
                    children: s.jsxs("div", {
                        className: "mb-6",
                        children: [s.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Your Rewards"
                        }), s.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                            children: [s.jsxs("div", {
                                className: "bg-gradient-to-r from-yellow-600 to-yellow-400 p-4 rounded-lg text-black",
                                children: [s.jsxs("div", {
                                    className: "flex justify-between items-start",
                                    children: [s.jsxs("div", {
                                        children: [s.jsx("p", {
                                            className: "text-sm opacity-75",
                                            children: "Loyalty Points"
                                        }), s.jsx("p", {
                                            className: "text-3xl font-bold",
                                            children: "750"
                                        })]
                                    }), s.jsx($f, {
                                        className: "h-10 w-10"
                                    })]
                                }), s.jsx("button", {
                                    className: "mt-4 w-full py-2 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-lg font-medium",
                                    children: "Redeem Points"
                                })]
                            }), s.jsxs("div", {
                                className: "bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-lg",
                                children: [s.jsxs("div", {
                                    className: "flex justify-between items-start",
                                    children: [s.jsxs("div", {
                                        children: [s.jsx("p", {
                                            className: "text-sm opacity-75",
                                            children: "VIP Status"
                                        }), s.jsx("p", {
                                            className: "text-3xl font-bold",
                                            children: "Silver"
                                        })]
                                    }), s.jsx(Qs, {
                                        className: "h-10 w-10"
                                    })]
                                }), s.jsx("div", {
                                    className: "mt-4 bg-white bg-opacity-20 rounded-full h-2",
                                    children: s.jsx("div", {
                                        className: "bg-white h-2 rounded-full w-3/5"
                                    })
                                }), s.jsx("p", {
                                    className: "text-xs mt-1",
                                    children: "300 more points to Gold"
                                })]
                            })]
                        }), s.jsx("h4", {
                            className: "font-bold mb-3",
                            children: "Available Bonuses"
                        }), s.jsxs("div", {
                            className: "space-y-3",
                            children: [s.jsxs("div", {
                                className: "bg-gray-800 p-4 rounded-lg flex justify-between items-center",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("p", {
                                        className: "font-medium",
                                        children: "Welcome Bonus"
                                    }), s.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: "100% match up to $100"
                                    })]
                                }), s.jsx("button", {
                                    className: "px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg",
                                    children: "Claim"
                                })]
                            }), s.jsxs("div", {
                                className: "bg-gray-800 p-4 rounded-lg flex justify-between items-center",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("p", {
                                        className: "font-medium",
                                        children: "Daily Spin"
                                    }), s.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: "Free spin every 24 hours"
                                    })]
                                }), s.jsx("button", {
                                    className: "px-4 py-2 bg-gray-700 text-white font-medium rounded-lg",
                                    children: "Available in 12h"
                                })]
                            })]
                        })]
                    })
                }), t === "settings" && s.jsxs("div", {
                    children: [s.jsxs("div", {
                        className: "mb-6",
                        children: [s.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Preferences"
                        }), s.jsxs("div", {
                            className: "space-y-4",
                            children: [s.jsxs("div", {
                                className: "flex items-center justify-between p-4 bg-gray-800 rounded-lg",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("h4", {
                                        className: "font-medium",
                                        children: "Notifications"
                                    }), s.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: "Receive game and promotion updates"
                                    })]
                                }), s.jsxs("label", {
                                    className: "relative inline-flex items-center cursor-pointer",
                                    children: [s.jsx("input", {
                                        type: "checkbox",
                                        className: "sr-only peer",
                                        defaultChecked: !0
                                    }), s.jsx("div", {
                                        className: "w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-yellow-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-center justify-between p-4 bg-gray-800 rounded-lg",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("h4", {
                                        className: "font-medium",
                                        children: "Sound Effects"
                                    }), s.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: "Play sounds during gameplay"
                                    })]
                                }), s.jsxs("label", {
                                    className: "relative inline-flex items-center cursor-pointer",
                                    children: [s.jsx("input", {
                                        type: "checkbox",
                                        className: "sr-only peer",
                                        defaultChecked: !0
                                    }), s.jsx("div", {
                                        className: "w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-yellow-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-center justify-between p-4 bg-gray-800 rounded-lg",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("h4", {
                                        className: "font-medium",
                                        children: "Dark Mode"
                                    }), s.jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: "Use dark theme"
                                    })]
                                }), s.jsxs("label", {
                                    className: "relative inline-flex items-center cursor-pointer",
                                    children: [s.jsx("input", {
                                        type: "checkbox",
                                        className: "sr-only peer",
                                        defaultChecked: !0
                                    }), s.jsx("div", {
                                        className: "w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-yellow-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
                                    })]
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "mb-6",
                        children: [s.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Responsible Gaming"
                        }), s.jsxs("div", {
                            className: "space-y-4",
                            children: [s.jsxs("div", {
                                className: "bg-gray-800 p-4 rounded-lg",
                                children: [s.jsx("h4", {
                                    className: "font-medium mb-2",
                                    children: "Deposit Limits"
                                }), s.jsxs("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: [s.jsx("button", {
                                        className: "py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm",
                                        children: "Daily"
                                    }), s.jsx("button", {
                                        className: "py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm",
                                        children: "Weekly"
                                    }), s.jsx("button", {
                                        className: "py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm",
                                        children: "Monthly"
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "bg-gray-800 p-4 rounded-lg",
                                children: [s.jsx("h4", {
                                    className: "font-medium mb-2",
                                    children: "Self-Exclusion"
                                }), s.jsx("p", {
                                    className: "text-sm text-gray-400 mb-3",
                                    children: "Take a break from gaming for a set period"
                                }), s.jsx("button", {
                                    className: "w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium",
                                    children: "Set Self-Exclusion Period"
                                })]
                            })]
                        })]
                    })]
                })]
            })
        })
    };

function ep() {
    const [e, t] = T.useState("game"), [n, r] = T.useState(1e3), [l, i] = T.useState(null), [o, u] = T.useState(10), [a, d] = T.useState(!1), [y, h] = T.useState(null), [m, v] = T.useState(null), [x, S] = T.useState([]), [D, p] = T.useState(!1);
    T.useEffect(() => {
        (async () => {
            try {
                S([{
                    id: 1,
                    type: "bet",
                    amount: 50,
                    result: "win",
                    timestamp: new Date().toISOString(),
                    balance: 1050
                }, {
                    id: 2,
                    type: "bet",
                    amount: 100,
                    result: "loss",
                    timestamp: new Date().toISOString(),
                    balance: 950
                }, {
                    id: 3,
                    type: "deposit",
                    amount: 500,
                    result: null,
                    timestamp: new Date().toISOString(),
                    balance: 1450
                }])
            } catch (j) {
                console.error("Error fetching user data:", j)
            }
        })()
    }, []);
    const c = k => {
            i(k)
        },
        f = k => {
            u(k)
        },
        g = async () => {
            if (l === null) {
                alert("Please select a number first!");
                return
            }
            if (o <= 0) {
                alert("Please enter a valid bet amount!");
                return
            }
            if (o > n) {
                alert("Insufficient balance!");
                return
            }
            d(!0), v(null);
            try {
                setTimeout(() => {
                    const k = Math.floor(Math.random() * 10);
                    h(k);
                    const j = k === l;
                    v(j);
                    const _ = j ? n + o * 9 : n - o;
                    r(_);
                    const F = {
                        id: x.length + 1,
                        type: "bet",
                        amount: o,
                        result: j ? "win" : "loss",
                        timestamp: new Date().toISOString(),
                        balance: _
                    };
                    S([F, ...x]), j && (p(!0), setTimeout(() => p(!1), 5e3)), d(!1)
                }, 3e3)
            } catch (k) {
                console.error("Error placing bet:", k), d(!1)
            }
        }, N = k => {
            r(n + k);
            const j = {
                id: x.length + 1,
                type: "deposit",
                amount: k,
                result: null,
                timestamp: new Date().toISOString(),
                balance: n + k
            };
            S([j, ...x])
        };
    return s.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white",
        children: [D && s.jsx("div", {
            className: "fixed inset-0 z-50 pointer-events-none",
            children: s.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: s.jsx("h1", {
                    className: "text-6xl font-bold text-yellow-300 animate-bounce",
                    children: "YOU WON!"
                })
            })
        }), s.jsx("header", {
            className: "bg-black bg-opacity-50 p-4 shadow-lg",
            children: s.jsxs("div", {
                className: "container mx-auto flex justify-between items-center",
                children: [s.jsxs("div", {
                    className: "flex items-center",
                    children: [s.jsx(oc, {
                        className: "h-8 w-8 text-yellow-400 mr-2"
                    }), s.jsx("h1", {
                        className: "text-2xl font-bold text-yellow-400",
                        children: "Spin & Win"
                    })]
                }), s.jsxs("div", {
                    className: "flex items-center bg-black bg-opacity-50 px-4 py-2 rounded-full",
                    children: [s.jsx(Xf, {
                        className: "h-5 w-5 text-green-400 mr-2"
                    }), s.jsxs("span", {
                        className: "font-bold",
                        children: ["$", n.toFixed(2)]
                    })]
                })]
            })
        }), s.jsxs("main", {
            className: "container mx-auto p-4",
            children: [e === "game" && s.jsxs("div", {
                className: "flex flex-col lg:flex-row gap-8",
                children: [s.jsxs("div", {
                    className: "lg:w-2/3 bg-black bg-opacity-30 rounded-xl p-6 shadow-xl",
                    children: [s.jsx(Gf, {
                        isSpinning: a,
                        result: y,
                        selectedNumber: l
                    }), m !== null && s.jsx("div", {
                        className: `mt-6 p-4 rounded-lg text-center text-xl font-bold ${m?"bg-green-600":"bg-red-600"}`,
                        children: m ? `Congratulations! You won $${(o*9).toFixed(2)}!` : `Sorry, you lost $${o.toFixed(2)}. Try again!`
                    })]
                }), s.jsxs("div", {
                    className: "lg:w-1/3 space-y-6",
                    children: [s.jsx(Zf, {
                        selectedNumber: l,
                        onNumberSelect: c,
                        betAmount: o,
                        onBetAmountChange: f,
                        onSpin: g,
                        isSpinning: a,
                        balance: n
                    }), s.jsxs("div", {
                        className: "bg-black bg-opacity-30 rounded-xl p-6 shadow-xl",
                        children: [s.jsxs("h2", {
                            className: "text-xl font-bold mb-4 flex items-center",
                            children: [s.jsx($i, {
                                className: "h-5 w-5 mr-2"
                            }), "Recent Activity"]
                        }), s.jsx("div", {
                            className: "space-y-2",
                            children: x.slice(0, 3).map(k => s.jsxs("div", {
                                className: "flex justify-between items-center border-b border-gray-700 pb-2",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("span", {
                                        className: `font-medium ${k.type==="deposit"?"text-green-400":k.result==="win"?"text-yellow-400":"text-red-400"}`,
                                        children: k.type === "deposit" ? "Deposit" : k.result === "win" ? "Win" : "Loss"
                                    }), s.jsx("p", {
                                        className: "text-xs text-gray-400",
                                        children: new Date(k.timestamp).toLocaleString()
                                    })]
                                }), s.jsxs("span", {
                                    className: `font-bold ${k.type==="deposit"||k.result==="win"?"text-green-400":"text-red-400"}`,
                                    children: [k.type === "deposit" || k.result === "win" ? "+" : "-", "$", k.amount]
                                })]
                            }, k.id))
                        })]
                    })]
                })]
            }), e === "transactions" && s.jsx(Jf, {
                transactions: x
            }), e === "deposit" && s.jsx(qf, {
                onDeposit: N
            }), e === "profile" && s.jsx(bf, {
                balance: n
            })]
        }), s.jsx("footer", {
            className: "fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 shadow-lg",
            children: s.jsx("div", {
                className: "container mx-auto",
                children: s.jsxs("nav", {
                    className: "flex justify-around",
                    children: [s.jsxs("button", {
                        onClick: () => t("game"),
                        className: `flex flex-col items-center py-3 px-6 ${e==="game"?"text-yellow-400":"text-gray-400"}`,
                        children: [s.jsx(Af, {
                            className: "h-6 w-6"
                        }), s.jsx("span", {
                            className: "text-xs mt-1",
                            children: "Game"
                        })]
                    }), s.jsxs("button", {
                        onClick: () => t("transactions"),
                        className: `flex flex-col items-center py-3 px-6 ${e==="transactions"?"text-yellow-400":"text-gray-400"}`,
                        children: [s.jsx($i, {
                            className: "h-6 w-6"
                        }), s.jsx("span", {
                            className: "text-xs mt-1",
                            children: "History"
                        })]
                    }), s.jsxs("button", {
                        onClick: () => t("deposit"),
                        className: `flex flex-col items-center py-3 px-6 ${e==="deposit"?"text-yellow-400":"text-gray-400"}`,
                        children: [s.jsx(ic, {
                            className: "h-6 w-6"
                        }), s.jsx("span", {
                            className: "text-xs mt-1",
                            children: "Deposit"
                        })]
                    }), s.jsxs("button", {
                        onClick: () => t("profile"),
                        className: `flex flex-col items-center py-3 px-6 ${e==="profile"?"text-yellow-400":"text-gray-400"}`,
                        children: [s.jsx(Yf, {
                            className: "h-6 w-6"
                        }), s.jsx("span", {
                            className: "text-xs mt-1",
                            children: "Profile"
                        })]
                    })]
                })
            })
        })]
    })
}
lc(document.getElementById("root")).render(s.jsx(T.StrictMode, {
    children: s.jsx(ep, {})
}));