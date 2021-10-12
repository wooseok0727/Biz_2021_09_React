(this["webpackJsonpreact-todolist"] =
  this["webpackJsonpreact-todolist"] || []).push([
  [0],
  {
    24: function (e) {
      e.exports = JSON.parse(
        '{"web":{"client_id":"482288214034-mk2uudp1a2j7p0t6fo9dhgt35ca7fr76.apps.googleusercontent.com","project_id":"fair-solution-328806","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","javascript_origins":["http://localhost:3000"]}}'
      );
    },
    30: function (e, t, c) {},
    31: function (e, t, c) {},
    33: function (e, t, c) {},
    34: function (e, t, c) {},
    35: function (e, t, c) {},
    36: function (e, t, c) {},
    43: function (e, t, c) {},
    44: function (e, t, c) {},
    45: function (e, t, c) {},
    46: function (e, t, c) {},
    47: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(1),
        s = c.n(n),
        o = c(21),
        i = c.n(o),
        r = (c(30), c(31), c(2)),
        a = c(5),
        j = c(0),
        l = Object(n.createContext)(),
        d = function () {
          return Object(n.useContext)(l);
        },
        u = function (e) {
          var t = e.children,
            c = Object(n.useState)(),
            s = Object(a.a)(c, 2),
            o = {
              user: s[0],
              setUser: s[1],
              inputId: Object(n.useRef)(null),
              inputPW: Object(n.useRef)(null),
            };
          return Object(j.jsx)(l.Provider, { value: o, children: t });
        },
        b = c(25),
        O = c(10),
        x = Object(n.createContext)(),
        h = function () {
          return Object(n.useContext)(x);
        },
        p = function (e) {
          var t = e.children,
            c = Object(n.useState)({ t_id: 0, t_text: "", t_complete: !1 }),
            s = Object(a.a)(c, 2),
            o = s[0],
            i = s[1],
            r = Object(n.useState)([]),
            l = Object(a.a)(r, 2),
            d = l[0],
            u = l[1],
            h = Object(n.useRef)(1),
            p = Object(n.useRef)(null),
            m = {
              todo: o,
              todoList: d,
              inputId: p,
              onChange: function (e) {
                var t = e.target.value;
                i(
                  Object(O.a)(
                    Object(O.a)({}, o),
                    {},
                    { t_text: t, t_id: h.current }
                  )
                );
              },
              todoInsert: function () {
                if (!o.t_text) return !0;
                u([].concat(Object(b.a)(d), [o])),
                  i(Object(O.a)(Object(O.a)({}, o), {}, { t_text: "" })),
                  h.current++;
              },
              onRemove: function (e) {
                u(
                  d.filter(function (t) {
                    return t.t_id !== e;
                  })
                );
              },
              onCompClick: function (e) {
                u(
                  d.map(function (t) {
                    return t.t_id === e
                      ? Object(O.a)(
                          Object(O.a)({}, t),
                          {},
                          { t_complete: !t.t_complete }
                        )
                      : t;
                  })
                );
              },
            };
          return Object(j.jsx)(x.Provider, { value: m, children: t });
        },
        m =
          (c(33),
          function (e) {
            var t = e.form,
              c = e.children;
            return Object(j.jsx)(p, {
              children: Object(j.jsxs)("main", {
                className: "main_box",
                children: [
                  Object(j.jsx)("section", {
                    className: "form_wrapper",
                    children: t,
                  }),
                  Object(j.jsx)("section", {
                    className: "list_wrapper",
                    children: c,
                  }),
                ],
              }),
            });
          }),
        f = function () {
          var e = h(),
            t = e.todoList,
            c = e.onRemove,
            s = e.onCompClick,
            o = Object(n.useState)(!1),
            i = Object(a.a)(o, 2),
            r = i[0],
            l = i[1],
            d = Object(n.useState)(),
            u = Object(a.a)(d, 2),
            b = u[0],
            O = u[1],
            x = function (e) {
              l(!0), O(e);
            },
            p = t.map(function (e) {
              return Object(j.jsx)(
                _,
                { todo: e, onRemove: c, onCompClick: s, onRemoveClick: x },
                e.t_id
              );
            });
          return Object(j.jsxs)(j.Fragment, {
            children: [
              Object(j.jsx)("svg", {
                viewBox: "0 0 0 0",
                className: "item_temp",
                children: Object(j.jsxs)("defs", {
                  children: [
                    Object(j.jsx)("path", {
                      id: "todo_line",
                      stroke: "#000",
                      d: "M21 12.3h1750v0.1z",
                    }),
                    Object(j.jsx)("path", {
                      id: "todo_box",
                      stroke: "#000",
                      d: "M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4",
                    }),
                    Object(j.jsx)("path", {
                      id: "todo_check",
                      stroke: "#000",
                      d: "M10 13l2 2 5-5",
                    }),
                    Object(j.jsx)("circle", {
                      id: "todo_circle",
                      cx: "13.5",
                      cy: "12.5",
                      r: "10",
                    }),
                  ],
                }),
              }),
              Object(j.jsx)("div", { className: "view_list", children: p }),
              r &&
                Object(j.jsx)(T, {
                  title: "ARE YOU SURE?",
                  onConfirm: function () {
                    l(!1), c(b);
                  },
                  onCancel: function () {
                    l(!1);
                  },
                }),
            ],
          });
        },
        v =
          (c(34),
          function () {
            var e = h(),
              t = e.inputId,
              c = e.todo,
              s = e.onChange,
              o = e.todoInsert,
              i = Object(n.useState)(!1),
              r = Object(a.a)(i, 2),
              l = r[0],
              d = r[1],
              u = Object(n.useCallback)(
                function (e) {
                  d(o()), e.preventDefault();
                },
                [o]
              );
            return Object(j.jsxs)(j.Fragment, {
              children: [
                Object(j.jsxs)("form", {
                  className: "input_box",
                  onSubmit: u,
                  children: [
                    Object(j.jsx)("input", {
                      ref: t,
                      value: c.t_text,
                      onChange: s,
                      className: c.t_text && "focus",
                    }),
                    Object(j.jsx)("span", {
                      className: "label",
                      children: "ADD TODO HERE..",
                    }),
                    Object(j.jsx)("svg", {
                      width: "120px",
                      height: "26px",
                      viewBox: "0 0 120 26",
                      children: Object(j.jsx)("path", {
                        d: "M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25",
                      }),
                    }),
                    Object(j.jsx)("span", { className: "border" }),
                    Object(j.jsx)(L, { children: "+" }),
                  ],
                }),
                l &&
                  Object(j.jsx)(T, {
                    title: "OOPS! WRITE A TODO.",
                    onConfirm: function () {
                      d(!1), t.current.focus();
                    },
                  }),
              ],
            });
          }),
        _ =
          (c(35),
          function (e) {
            var t = e.todo,
              c = e.onCompClick,
              n = e.onRemoveClick,
              s = t.t_id,
              o = t.t_text;
            return Object(j.jsxs)("div", {
              className: "todo_box",
              children: [
                Object(j.jsxs)("label", {
                  className: "todo",
                  children: [
                    Object(j.jsx)("input", {
                      className: "todo_state",
                      type: "checkbox",
                      onClick: function () {
                        return c(s);
                      },
                    }),
                    Object(j.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      xmlnsXlink: "http://www.w3.org/1999/xlink",
                      width: "1750px",
                      height: "24px",
                      viewBox: "0 0 1750 24",
                      className: "todo_icon",
                      children: [
                        Object(j.jsx)("use", {
                          xlinkHref: "#todo_line",
                          className: "todo_line",
                        }),
                        Object(j.jsx)("use", {
                          xlinkHref: "#todo_box",
                          className: "todo_box",
                        }),
                        Object(j.jsx)("use", {
                          xlinkHref: "#todo_check",
                          className: "todo_check",
                        }),
                        Object(j.jsx)("use", {
                          xlinkHref: "#todo_circle",
                          className: "todo_circle",
                        }),
                      ],
                    }),
                    Object(j.jsx)("div", {
                      className: "todo_text",
                      children: o,
                    }),
                  ],
                }),
                Object(j.jsx)("div", {
                  className: "todo_remove",
                  onClick: function () {
                    return n(s);
                  },
                  children: "\xd7",
                }),
              ],
            });
          }),
        C = c(11),
        N =
          (c(36),
          function (e) {
            e.title;
            var t = d().user;
            return Object(j.jsxs)(j.Fragment, {
              children: [
                Object(j.jsx)("header", {
                  children: Object(j.jsxs)("div", {
                    className: "header_wrapper",
                    children: [
                      Object(j.jsx)("div", {
                        className: "logo_box",
                        children: Object(j.jsx)(C.b, {
                          to: "/docs/index.html",
                          className: "logo",
                          children: "TODOs",
                        }),
                      }),
                      (null === t || void 0 === t ? void 0 : t.userid)
                        ? Object(j.jsxs)("nav", {
                            className: "main_nav",
                            children: [
                              Object(j.jsxs)("div", {
                                className: "user_info",
                                children: ["[ ", t.userid, " ] "],
                              }),
                              Object(j.jsx)(L, {
                                text: "LOGOUT",
                                children: Object(j.jsx)(C.b, {
                                  to: "/logout",
                                  children: "LOGOUT",
                                }),
                              }),
                            ],
                          })
                        : Object(j.jsxs)("nav", {
                            className: "main_nav",
                            children: [
                              Object(j.jsx)(L, {
                                text: "JOIN",
                                children: Object(j.jsx)(C.b, {
                                  to: "/join",
                                  children: "JOIN",
                                }),
                              }),
                              Object(j.jsx)(L, {
                                text: "LOGIN",
                                children: Object(j.jsx)(C.b, {
                                  to: "/login",
                                  children: "LOGIN",
                                }),
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
                Object(j.jsx)("div", {
                  className: "sub_title",
                  children: "TODOLIST",
                }),
              ],
            });
          }),
        g = c(3),
        k = c.n(g),
        w = c(9),
        E = c(16),
        S = c.p + "docs/static/media/ink.5517d17d.mp4",
        R =
          (c(43),
          function () {
            var e = d(),
              t = e.setUser,
              c = e.inputId,
              s = e.inputPW,
              o = Object(n.useState)({ userid: "", password: "" }),
              i = Object(a.a)(o, 2),
              l = i[0],
              u = i[1],
              b = Object(n.useState)(!1),
              x = Object(a.a)(b, 2),
              h = x[0],
              p = x[1],
              m = Object(n.useState)(),
              f = Object(a.a)(m, 2),
              v = f[0],
              _ = f[1],
              C = Object(r.e)(),
              N = function (e) {
                u(
                  Object(O.a)(
                    Object(O.a)({}, l),
                    {},
                    Object(E.a)({}, e.target.name, e.target.value)
                  )
                );
              },
              g = (function () {
                var e = Object(w.a)(
                  k.a.mark(function e() {
                    var c;
                    return k.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (c = l), (e.next = 3), t(c);
                          case 3:
                            C.replace("/");
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return Object(j.jsxs)("div", {
              className: "auth_form",
              children: [
                Object(j.jsx)("video", {
                  autoPlay: !0,
                  muted: !0,
                  children: Object(j.jsx)("source", {
                    src: S,
                    type: "video/mp4",
                  }),
                }),
                Object(j.jsxs)("div", {
                  className: "inputs",
                  children: [
                    Object(j.jsxs)("div", {
                      className: "userid",
                      children: [
                        Object(j.jsx)("input", {
                          ref: c,
                          type: "text",
                          name: "userid",
                          autoComplete: "off",
                          onChange: N,
                          className: l.userid && "focus",
                        }),
                        Object(j.jsx)("span", {
                          className: "label",
                          children: "ID",
                        }),
                        Object(j.jsx)("svg", {
                          width: "120px",
                          height: "26px",
                          viewBox: "0 0 120 26",
                          children: Object(j.jsx)("path", {
                            d: "M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25",
                          }),
                        }),
                        Object(j.jsx)("span", { className: "border" }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "password",
                      children: [
                        Object(j.jsx)("input", {
                          ref: s,
                          type: "password",
                          name: "password",
                          autoComplete: "off",
                          onChange: N,
                          className: l.password && "focus",
                        }),
                        Object(j.jsx)("span", {
                          className: "label",
                          children: "PASSWORD",
                        }),
                        Object(j.jsx)("svg", {
                          width: "120px",
                          height: "26px",
                          viewBox: "0 0 120 26",
                          children: Object(j.jsx)("path", {
                            d: "M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25",
                          }),
                        }),
                        Object(j.jsx)("span", { className: "border" }),
                      ],
                    }),
                    Object(j.jsx)(L, {
                      text: "LOGIN",
                      onClick: function () {
                        var e = l.userid
                          ? !l.password && 'PLEASE ENTER YOUR "PASSWORD"'
                          : 'PLEASE ENTER YOUR "ID"';
                        e ? (p(!0), _(e)) : g();
                      },
                      children: "LOGIN",
                    }),
                  ],
                }),
                h &&
                  Object(j.jsx)(T, {
                    title: v,
                    onConfirm: function () {
                      p(!1),
                        _(!1),
                        'PLEASE ENTER YOUR "ID"' === v
                          ? c.current.focus()
                          : s.current.focus();
                    },
                  }),
              ],
            });
          }),
        I = function () {
          var e = Object(r.e)(),
            t = d().setUser,
            c = Object(n.useCallback)(
              Object(w.a)(
                k.a.mark(function c() {
                  return k.a.wrap(function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (c.next = 2), t([]);
                        case 2:
                          e.replace("/");
                        case 3:
                        case "end":
                          return c.stop();
                      }
                  }, c);
                })
              ),
              [t, e]
            );
          return Object(n.useEffect)(c, [c]), Object(j.jsx)("div", {});
        },
        L =
          (c(44),
          function (e) {
            var t = e.children,
              c = e.text,
              n = e.onClick;
            return Object(j.jsxs)("div", {
              className: "btn_box",
              children: [
                Object(j.jsx)("span", { className: "mask", children: c }),
                Object(j.jsx)("button", { onClick: n, children: t }),
              ],
            });
          }),
        T =
          (c(45),
          function (e) {
            var t = e.onConfirm,
              c = e.onCancel,
              n = e.title;
            return Object(j.jsx)("div", {
              className: "modal_wrap",
              children: Object(j.jsxs)("div", {
                className: "modal_block",
                children: [
                  Object(j.jsx)("h2", { children: n }),
                  Object(j.jsx)("div", {
                    className: "buttons",
                    children: c
                      ? Object(j.jsxs)(j.Fragment, {
                          children: [
                            Object(j.jsx)(L, {
                              text: "DELETE",
                              onClick: t,
                              children: "DELETE",
                            }),
                            Object(j.jsx)(L, {
                              text: "CANCEL",
                              onClick: c,
                              children: "CANCEL",
                            }),
                          ],
                        })
                      : Object(j.jsx)(L, {
                          text: "OK",
                          onClick: t,
                          children: "OK",
                        }),
                  }),
                ],
              }),
            });
          }),
        D =
          (c(46),
          c(24),
          function () {
            return Object(j.jsx)("div", {
              className: "App",
              children: Object(j.jsxs)(u, {
                children: [
                  Object(j.jsx)(N, {}),
                  Object(j.jsx)(r.a, {
                    path: "/docs/index.html",
                    exact: !0,
                    children: Object(j.jsx)(m, {
                      form: Object(j.jsx)(v, {}),
                      children: Object(j.jsx)(f, {}),
                    }),
                  }),
                  Object(j.jsx)(r.a, {
                    path: "/login",
                    exact: !0,
                    component: R,
                  }),
                  Object(j.jsx)(r.a, {
                    path: "/logout",
                    exact: !0,
                    component: I,
                  }),
                ],
              }),
            });
          }),
        P = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 48))
              .then(function (t) {
                var c = t.getCLS,
                  n = t.getFID,
                  s = t.getFCP,
                  o = t.getLCP,
                  i = t.getTTFB;
                c(e), n(e), s(e), o(e), i(e);
              });
        };
      i.a.render(
        Object(j.jsx)(s.a.StrictMode, {
          children: Object(j.jsx)(C.a, { children: Object(j.jsx)(D, {}) }),
        }),
        document.getElementById("root")
      ),
        P();
    },
  },
  [[47, 1, 2]],
]);
//# sourceMappingURL=main.2e76d225.chunk.js.map
