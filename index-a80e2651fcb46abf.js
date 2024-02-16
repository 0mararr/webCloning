(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(6353)
            }])
        },
        4970: function(e, a, t) {
            "use strict";
            var l = t(3288);
            t(2466);
            let i = e => {
                let {
                    title: a,
                    subtitle: t,
                    titleClassName: i,
                    subtitleClassName: s,
                    containerClassName: r,
                    titleWrapperClassName: o,
                    children: c,
                    onClick: d,
                    testId: n,
                    id: A
                } = e;
                return (0, l.jsxs)("div", {
                    className: "leading-6 ".concat(r),
                    "data-testid": n,
                    onClick: d,
                    id: A,
                    children: [(0, l.jsxs)("div", {
                        className: "flex flex-col ".concat(o),
                        children: [(0, l.jsx)("div", {
                            className: i,
                            children: a
                        }), (0, l.jsx)("div", {
                            className: s,
                            children: t
                        })]
                    }), c ? (0, l.jsx)("div", {
                        children: c
                    }) : null]
                })
            };
            i.defaultProps = {
                title: "",
                subtitle: "",
                children: void 0,
                titleClassName: "",
                subtitleClassName: "",
                containerClassName: "",
                titleWrapperClassName: "",
                onClick: void 0,
                testId: "",
                id: ""
            }, a.Z = i
        },
        6353: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                __N_SSG: function() {
                    return el
                },
                default: function() {
                    return ei
                }
            });
            var l = t(3288),
                i = t(2466),
                s = t(8082),
                r = t(4918),
                o = t(1354),
                c = t(9773),
                d = t(4970),
                n = t(8559),
                A = t.n(n),
                m = t(4105);
            let x = {
                    className: "text-l md:text-base text-sm font-black text-maxiphy-black-500 dark:text-white"
                },
                p = {
                    className: "relative flex flex-col basis-[40%]"
                },
                h = {
                    className: "bg-[#00000000] focus:outline-0 border-b dark:border-[#ffffff1a] border-[#3333331a] py-2 dark:text-white text-maxiphy-black-500 w-64 md:text-base text-sm",
                    error: "text-red-700 border-red-700"
                },
                u = {
                    className: "absolute bottom-[-20px] text-red-700 text-xs "
                },
                g = {
                    className: "font-light text-maxiphy-black-500 dark:text-white md:text-base text-sm"
                },
                b = {
                    className: "border-[#33333354] dark:border-[#ffffff54] before:dark:content-[url('../public/tickWhite.svg')] before:content-[url('../public/tickDark.svg')]"
                },
                w = e => {
                    let {
                        requestSubmited: a
                    } = e, {
                        t
                    } = (0, s.Z)(), {
                        values: r,
                        errors: c,
                        handleChange: d,
                        handleSubmit: n,
                        touched: w,
                        handleBlur: v,
                        setFieldValue: f,
                        isSubmitting: y,
                        setTouched: N
                    } = (0, o.u6)(), [j, E] = (0, i.useState)({
                        firstName: !1,
                        lastName: !1,
                        email: !1,
                        phoneNumber: !1,
                        serviceType: !1
                    }), k = e => f("phoneNumber", e), U = () => N({ ...w,
                        phoneNumber: !0
                    }), C = () => {
                        (0, m.B)({
                            action: "contact-us-form-submitted",
                            category: "form-submission",
                            label: "contact-us-form-submitted",
                            value: "contact-us-form-submitted"
                        }), n()
                    };
                    return (0, i.useEffect)(() => {
                        Object.keys(w).forEach(e => {
                            j[e] || ((0, m.B)({
                                action: e,
                                category: "form-event",
                                label: e,
                                value: e
                            }), E(a => ({ ...a,
                                [e]: !0
                            })))
                        })
                    }, [w]), (0, l.jsxs)("div", {
                        className: "flex flex-wrap min-h-[560px] gap-6 items-center xl:justify-start sm:justify-between mt-10 xl:mt-0 ",
                        children: [(0, l.jsxs)("div", { ...p,
                            children: [(0, l.jsx)("label", {
                                htmlFor: "firstName",
                                ...x,
                                children: t("home:contactUs.firstName")
                            }), (0, l.jsx)("input", {
                                type: "text",
                                id: "firstName",
                                value: r.firstName,
                                onChange: d,
                                onBlur: v,
                                className: "".concat(h.className, " ").concat((null == c ? void 0 : c.firstName) && (null == w ? void 0 : w.firstName) ? h.error : null),
                                disabled: y
                            }), (null == c ? void 0 : c.firstName) && (null == w ? void 0 : w.firstName) ? (0, l.jsx)("div", { ...u,
                                children: null == c ? void 0 : c.firstName
                            }) : null]
                        }), (0, l.jsxs)("div", { ...p,
                            children: [(0, l.jsx)("label", {
                                htmlFor: "lastName",
                                ...x,
                                children: t("home:contactUs.lastName")
                            }), (0, l.jsx)("input", {
                                type: "text",
                                id: "lastName",
                                value: r.lastName,
                                onChange: d,
                                onBlur: v,
                                className: "".concat(h.className, " ").concat((null == c ? void 0 : c.lastName) && (null == w ? void 0 : w.lastName) ? h.error : null),
                                disabled: y
                            }), (null == c ? void 0 : c.lastName) && (null == w ? void 0 : w.lastName) ? (0, l.jsx)("div", { ...u,
                                children: null == c ? void 0 : c.lastName
                            }) : null]
                        }), (0, l.jsxs)("div", { ...p,
                            children: [(0, l.jsx)("label", {
                                htmlFor: "email",
                                ...x,
                                children: t("home:contactUs.mail")
                            }), (0, l.jsx)("input", {
                                type: "email",
                                id: "email",
                                value: r.email,
                                onChange: d,
                                onBlur: v,
                                className: "".concat(h.className, " ").concat((null == c ? void 0 : c.email) && (null == w ? void 0 : w.email) ? h.error : null),
                                disabled: y
                            }), (null == c ? void 0 : c.email) && (null == w ? void 0 : w.email) ? (0, l.jsx)("div", { ...u,
                                children: null == c ? void 0 : c.email
                            }) : null]
                        }), (0, l.jsxs)("div", { ...p,
                            children: [(0, l.jsx)("label", {
                                htmlFor: "phone",
                                ...x,
                                children: t("home:contactUs.phone")
                            }), (0, l.jsx)("div", {
                                dir: "ltr",
                                className: "self-start",
                                children: (0, l.jsx)(A(), {
                                    inputClass: "".concat(h.className, " ").concat((null == c ? void 0 : c.phoneNumber) && (null == w ? void 0 : w.phoneNumber) ? h.error : null),
                                    disabled: y,
                                    specialLabel: "",
                                    value: r.phoneNumber,
                                    country: "lb",
                                    placeholder: "+961 XX XXX XXX",
                                    onBlur: U,
                                    onChange: k
                                })
                            }), (null == c ? void 0 : c.phoneNumber) && (null == w ? void 0 : w.phoneNumber) ? (0, l.jsx)("div", { ...u,
                                children: null == c ? void 0 : c.phoneNumber
                            }) : null]
                        }), (0, l.jsxs)("div", {
                            className: "relative w-full flex flex-col gap-[20px] md:justify-start justify-center",
                            children: [(0, l.jsx)("label", {
                                htmlFor: "phone",
                                className: "".concat(x.className, " self-start"),
                                children: t("home:contactUs.serviceType.title")
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-wrap gap-[10px]",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex gap-[10px] basis-[30%] min-w-[165px]",
                                    children: [(0, l.jsx)(o.gN, {
                                        type: "radio",
                                        id: "UIUX",
                                        name: "serviceType",
                                        value: "UIUXservice",
                                        ...b,
                                        disabled: y
                                    }), (0, l.jsx)("label", { ...g,
                                        htmlFor: "UIUX",
                                        children: t("home:contactUs.serviceType.one")
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex gap-[10px] basis-[30%] min-w-[165px]",
                                    children: [(0, l.jsx)(o.gN, {
                                        type: "radio",
                                        id: "software",
                                        name: "serviceType",
                                        value: "softwareService",
                                        ...b,
                                        disabled: y
                                    }), (0, l.jsx)("label", { ...g,
                                        htmlFor: "software",
                                        children: t("home:contactUs.serviceType.two")
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex gap-[10px] basis-[30%] min-w-[165px]",
                                    children: [(0, l.jsx)(o.gN, {
                                        type: "radio",
                                        id: "consultation",
                                        name: "serviceType",
                                        value: "consultationService",
                                        ...b,
                                        disabled: y
                                    }), (0, l.jsx)("label", { ...g,
                                        htmlFor: "consultation",
                                        children: t("home:contactUs.serviceType.three")
                                    })]
                                }), (null == c ? void 0 : c.serviceType) && (null == w ? void 0 : w.serviceType) ? (0, l.jsx)("div", { ...u,
                                    children: null == c ? void 0 : c.serviceType
                                }) : null]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "w-full flex flex-col gap-2",
                            children: [(0, l.jsx)("label", {
                                htmlFor: "message",
                                ...x,
                                children: t("home:contactUs.message")
                            }), (0, l.jsxs)("div", {
                                className: "flex gap-[60px] items-end md:flex-nowrap flex-wrap",
                                children: [(0, l.jsxs)("div", {
                                    className: " relative w-full",
                                    children: [(0, l.jsx)("textarea", {
                                        id: "message",
                                        className: "min-w-full bg-[#00000000] focus:outline-0 border-b dark:border-[#ffffff1a] border-[#3333331a] py-2 md:text-base text-sm dark:text-white text-maxiphy-black-500 resize-none",
                                        rows: 5,
                                        placeholder: "write your message...",
                                        value: r.message,
                                        onChange: d,
                                        disabled: y
                                    }), (null == c ? void 0 : c.message) && (null == w ? void 0 : w.message) ? (0, l.jsx)("div", { ...u,
                                        children: null == c ? void 0 : c.message
                                    }) : null]
                                }), (0, l.jsx)("button", {
                                    className: "min-w-full md:min-w-[150px] h-[45px] rounded-[10px] md:rounded-[16px] bg-maxiphy-blue-500 text-white disabled:bg-gray-500 md:text-base text-sm",
                                    type: "submit",
                                    onClick: C,
                                    disabled: y || a,
                                    children: t("home:contactUs.send")
                                })]
                            })]
                        })]
                    })
                };
            var v = t(1565),
                f = t(3297);
            let y = {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "961",
                serviceType: "",
                message: ""
            };
            var N = v.Ry({
                firstName: v.Z_().trim().required("Field is required").min(3, "Minimum 3 characters"),
                lastName: v.Z_().trim().required("Field is required").min(3, "Minimum 3 characters"),
                email: v.Z_().trim().email("Invalid Email format").required("Field is required"),
                phoneNumber: v.Z_().test("phone-validation", "Invalid phone number", e => (0, f.phone)("+".concat(e), {
                    strictDetection: !0
                }).isValid),
                serviceType: v.Z_().required("Field is required"),
                message: v.Z_().required("Field is required")
            });
            let j = {
                    className: "bg-maxiphy-m-black dark:bg-maxiphy-black-500 rounded-full md:w-6 w-4 md:h-6 h-4"
                },
                E = {
                    UIUXservice: "UIUX Service",
                    softwareService: "Software Service",
                    consultationService: "Consultation Service"
                },
                k = (0, i.forwardRef)((e, a) => {
                    let {
                        t
                    } = (0, s.Z)(), {
                        executeRecaptcha: n
                    } = (0, c.xX)(), [A, m] = (0, i.useState)(!1), x = async (e, a) => {
                        var t, l;
                        if (!n) return;
                        let i = { ...e,
                            serviceType: null !== (t = null == E ? void 0 : E[null == e ? void 0 : e.serviceType]) && void 0 !== t ? t : null == e ? void 0 : e.serviceType
                        };
                        try {
                            let s = await n("submit"),
                                o = await (0, r.Z)({
                                    method: "post",
                                    url: "/api/sendgrid",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    data: JSON.stringify({ ...i,
                                        recaptchaToken: s
                                    })
                                });
                            (null === (l = o.data) || void 0 === l ? void 0 : l.success) && (m(!0), alert("Thank you for contacting us! Your message has been received and we will get back to you as soon as possible. We appreciate your interest in ".concat(null == e ? void 0 : e.serviceType, " and look forward to helping you."))), a.resetForm()
                        } catch (c) {
                            alert("We're sorry, but there was an error processing your request. Please check your information and try again later or contact us directly for assistance. We apologize for the inconvenience.")
                        }
                    };
                    return (0, l.jsx)("section", {
                        ref: a,
                        id: "contactUs",
                        className: " bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)] md:rounded-[36px] rounded-[16px] p-[1px] shadow-xl shadow-[rgba(0,0,0,0.4)]",
                        children: (0, l.jsxs)("div", {
                            className: "flex xl:flex-row flex-col bg-maxiphy-gray-500 dark:bg-maxiphy-black-500 md:rounded-[36px] rounded-[16px] p-[24px] gap-[5%]",
                            children: [(0, l.jsxs)("div", {
                                className: "relative flex flex-col bg-maxiphy-gray-500 dark:bg-maxiphy-d-black gap-16 md:p-12 p-7 xl:h-[560px] h-full md:rounded-[24px] rounded-[14px] lg:min-w-[370px] min-w-full overflow-hidden",
                                children: [(0, l.jsx)(d.Z, {
                                    title: t("home:contactUs.contactInfoTitle"),
                                    subtitle: t("home:contactUs.contactInfoDesc"),
                                    titleWrapperClassName: "gap-2.5",
                                    titleClassName: "md:text-2xl text-lg font-black",
                                    subtitleClassName: "md:text-base text-sm font-light lg:w-64"
                                }), (0, l.jsxs)("ul", {
                                    className: "flex flex-col gap-6",
                                    children: [(0, l.jsxs)("li", {
                                        className: "flex gap-5 items-center md:text-base text-sm",
                                        children: [(0, l.jsx)("div", { ...j
                                        }), "hello@maxiphy.com"]
                                    }), (0, l.jsxs)("li", {
                                        className: "flex gap-5 items-center md:text-base text-sm",
                                        children: [(0, l.jsx)("div", { ...j
                                        }), (0, l.jsx)("a", {
                                            href: "https://maxiphy.com",
                                            children: "https://maxiphy.com"
                                        })]
                                    }), (0, l.jsxs)("li", {
                                        className: "flex gap-5 items-center md:text-base text-sm",
                                        children: [(0, l.jsx)("div", { ...j
                                        }), t("home:contactUs.location")]
                                    }), (0, l.jsx)("li", {
                                        className: "flex gap-5 items-center md:text-base text-sm",
                                        children: (0, l.jsxs)("p", {
                                            className: "font-gho-roboto text-[12px] leading-4 dark:text-[rgba(255,255,255,0.3)] ",
                                            children: [t("home:contactUs.disclaimer1"), " ", (0, l.jsxs)("a", {
                                                href: "https://policies.google.com/privacy",
                                                target: "#",
                                                className: "cursor-pointer underline",
                                                children: [t("home:contactUs.disclaimer2"), " "]
                                            }), t("home:contactUs.disclaimer3"), " ", (0, l.jsxs)("a", {
                                                href: "https://policies.google.com/terms",
                                                target: "#",
                                                className: "cursor-pointer underline",
                                                children: [t("home:contactUs.disclaimer4"), " "]
                                            }), t("home:contactUs.disclaimer5")]
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "flex items-center justify-center absolute sm:w-96 sm:h-96 rounded-full bg-[#3333331a] dark:bg-maxiphy-black-500 bottom-0 right-0 translate-x-1/2 translate-y-1/2",
                                    children: (0, l.jsx)("div", {
                                        className: "sm:w-64 sm:h-64 rounded-full bg-[#3333331a] dark:bg-[#fff] opacity-[0.1]"
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsx)(o.J9, {
                                    validationSchema: N,
                                    initialValues: y,
                                    onSubmit: x,
                                    children: (0, l.jsx)(w, {
                                        requestSubmited: A
                                    })
                                })
                            })]
                        })
                    })
                });
            k.displayName = "ContactUs";
            var U = t(2493),
                C = t.n(U),
                M = t(8302),
                R = t(2898);
            t(2576);
            var B = t(6319),
                S = t(6810),
                F = t(8768);
            let I = [{
                    title: "SEFACTORY",
                    logo: {
                        src: "/_next/static/media/Frame 115.9a172dc0.png",
                        height: 480,
                        width: 1059,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEUWUDdmenQA//82cV1Ob2UudFspfV5yhH9hc26ACVnxAAAACXRSTlMP8gLy+/k+8fSDXvh+AAAACXBIWXMAAG66AABuugHW3rEXAAAAH0lEQVR4nGNggAAmBlZmRkZGdhY2BlZmDkYOEAMmBQAE9ABLV996qwAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }
                }, {
                    title: "GIFCO",
                    logo: {
                        src: "/_next/static/media/Frame 110.c6902800.png",
                        height: 480,
                        width: 1059,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEUFsOhEj6YfhaRHMyguZngAotwAqt8GpdkYkbcncYgzWGMmd5BEOTEkdpE8SU1GiZ1IjaI7i6RGjKE0Y3H0wXulAAAAFHRSTlMh5EEZqB0MO7q3dppDOMJmwoXCjST3eEMAAAAJcEhZcwAAbroAAG66AdbesRcAAAAoSURBVHicY+DhZWdgYGVnY+Dj4OZkEWAUZODi4GQRFmLkZ2BmgkgBABJIAPVXS5t6AAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }
                }, {
                    title: "PEPSI",
                    logo: {
                        src: "/_next/static/media/Frame 111.e286cab6.png",
                        height: 480,
                        width: 360,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAATlBMVEUBVY0+f6z4XXAAWJD0lqI8fqsCSIMHTYhMaXHzXXGZutRmwN1HjLj5l6P56+2CqsXnDCmYvdbz///3FTMVbKSieZr4PVZ/s9L/tsH6/v9PBbxxAAAAE3RSTlNCOfoXU7EvDgC5Tk3+VvpY+rhVzd4vRQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwFwQcCgDAIALFrhQJupa7/f9QElwhx5M58TyL3+h1E1vVRlmvufcMn1dGxVkozBgD7AT+gAe99TC9pAAAAAElFTkSuQmCC",
                        blurWidth: 6,
                        blurHeight: 8
                    }
                }, {
                    title: "MINISTRY OF HAJJ AND UMRAH",
                    logo: {
                        src: "/_next/static/media/Frame 122.a566f2e1.png",
                        height: 480,
                        width: 480,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXFskmzi0ZbLvpT404PCkUvZzpHHnVTBt4B+lm2/t41ylnDLn1PZqmFmZGFrillPVVg3akKFiE6HdFRFg2RfbUNyZ1IXZ2b4AAAAFXRSTlMAGx4zNEckMj1GTDKxWms5wct4rSEIfx4CAAAACXBIWXMAAG66AABuugHW3rEXAAAAO0lEQVR4nGNgYGBgZ2UAAzYOdhYwg19QgA/MEBIVE4ZI8fBApNh5eUGqGbk5uUU4ORkZmLiYOTiYudgALfABdU7pfOMAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 8
                    }
                }, {
                    title: "you're next",
                    logo: {
                        src: "/_next/static/media/you'reNextLight.905e74f8.svg",
                        height: 120,
                        width: 329
                    },
                    dark: !1
                }, {
                    title: "you're next",
                    logo: {
                        src: "/_next/static/media/you'reNextDark.309c990b.svg",
                        height: 120,
                        width: 329
                    },
                    dark: !0
                }, {
                    title: "DZINE",
                    logo: {
                        src: "/_next/static/media/Frame 124.a4578519.png",
                        height: 480,
                        width: 964,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEV0dHSCf3d+fXl+fXrlk7HEAAAABHRSTlMCDEgu9PaftwAAAAlwSFlzAABuugAAbroB1t6xFwAAAB9JREFUeJxjYGBkZAADRiYmZiYmJkYGRmZmCAMkCCIBAqwAJdM9UYIAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 4
                    }
                }, {
                    title: "SARA",
                    logo: {
                        src: "/_next/static/media/Frame 123.e3986fa0.png",
                        height: 480,
                        width: 480,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVqfIuZvcxZYmpaY2uUu8qgzMyQt8dcZm6Vt8ibxtMoVpdCAAAACnRSTlMBWU9yZwhLZSw7Zmu1ZgAAAAlwSFlzAABuugAAbroB1t6xFwAAADNJREFUeJwdyMENADEMAsHFOHbSf8Mn7oEGLXA0B6Jaebe7dZOmNRHer6sqY+31uhIl4AMWVQCXzEvvfAAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 8
                    }
                }, {
                    title: "KIDS MENDO",
                    logo: {
                        src: "/_next/static/media/Frame 112.6e361dea.png",
                        height: 480,
                        width: 484,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEUsXZlrfme3r2LDSh792VD245jb14lvgZFYc+P952ffoUvGOBj38LD23EDw1lj95F2epWumpmj/6mfvpUOUnl02XoSHTEJWd563NBw0YZhncWIkWorBtE4tXpmOeVB2VVT/+1dJcaAzXJSClWb63kmOc1ehqFnOTx93i57BhUFog5o+4QdJAAAAI3RSTlN3/KX8pQ0f/ANOc/1E477Mo7ndlP7A+5H5XP7+9oz9+4BsN6JD3nkAAAAJcEhZcwAAbroAAG66AdbesRcAAABGSURBVHicFcGFEYAwAASwrxvubsX3H5AjgQi0kMZo2EzLKIk5zFCmIdk5Ft+fBfEU/JmnrjoorHOMNVeO9VVKqbvGht/YfolqBBCwwPGvAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 8
                    }
                }, {
                    title: "IPS",
                    logo: {
                        src: "/_next/static/media/Frame 113.a53aac40.png",
                        height: 555,
                        width: 1045,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEVVdm2ZmZaNj4+Zk56MjI99ipmUkoaJiY627HaQOaNZdrfwJGmWAAAAC3RSTlMCR1ctbGd+PRw1R4Ojc+8AAAAJcEhZcwAAN10AADddARmARl0AAAAlSURBVHicFcGHEQAgDAOxt1Mg2X9gDgm+HeCkqxpwunWBkKTgAQY4AFLuH87oAAAAAElFTkSuQmCC",
                        blurWidth: 8,
                        blurHeight: 4
                    }
                }, {
                    title: "CLEMENCEAU MEDICAL CENTER",
                    logo: {
                        src: "/_next/static/media/Frame 114.eb3a92e0.png",
                        height: 480,
                        width: 986,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEVx1uJMaXF4xdp8orpRk6mOx+Orxtt3zNt3wtZ3t54thaPyg33hAAAAC3RSTlMSAE8uOgQdM0VvVJ8Ldp8AAAAJcEhZcwAAbroAAG66AdbesRcAAAAmSURBVHicFcS3DQAwDAMwFff/Dw7CgSC5SxIA4v4tjUaNLDtc+QAG6ABwKnkVRQAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }
                }, {
                    title: "SKYDIVE DUBAI",
                    logo: {
                        src: "/_next/static/media/Frame 116.340fa74a.png",
                        height: 555,
                        width: 1045,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEVMaXFua2uFg4V9dHV2dndbXl4AAAB6eXt3d3iIiIhxT0h9fX2MjY+cenZc7S4OAAAADXRSTlMAQf79ZSwBocpaSk/65ALt+wAAAAlwSFlzAAA3XQAAN10BGYBGXQAAACdJREFUeJxjYGDlYmRkZGVgYOPgZeZhYgcxmJmZQAwGbhYWFk5GBgAKBwCLe8XyMgAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }
                }, {
                    title: "INFLIGHT DUBAI",
                    logo: {
                        src: "/_next/static/media/Frame 117.8073f719.png",
                        height: 555,
                        width: 1045,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEVwcHBfXFxfZ2lBQUNXV1lqZGR2dHRlX19bWFo5NjZDQ0NlPDdmUE5pZ2lkREA9OTlFMVSaAAAAEHRSTlMCQieO9xdE+tekhWr6b4eu57+LpAAAAAlwSFlzAAA3XQAAN10BGYBGXQAAACdJREFUeJwFwYcBACAMwzCng7L5/1skMFvXlNBjV1QDHz7fASSpJR8LoQCaOiDrOgAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 4
                    }
                }, {
                    title: "DUBAI CAMEL",
                    logo: {
                        src: "/_next/static/media/Frame 118.d35573e1.png",
                        height: 480,
                        width: 480,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXVvqjEglixo2PIoonMuqXNxKXIeWPVhIPXQUHgMTLRiHzOxKnhNDa2oGnbNjbRvaPCzWDJAAAAEHRSTlMBDj0cNUUuTx1nP1mCXEEnE5e65QAAAAlwSFlzAABuugAAbroB1t6xFwAAADdJREFUeJwdxkkSgDAMBLEevGUB8v/fUkYnAZKlgKt1njUGTfne8x9oCqxWpZdx9naPMCzCHfgAHY4A8tar5fsAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 8
                    }
                }, {
                    title: "THE OFFICE OF H.H THE CROWN PRICE OF DUBAI",
                    logo: {
                        src: "/_next/static/media/Frame 119.d2932e51.png",
                        height: 480,
                        width: 1137,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAACVBMVEXVhYXWg4LceHhU3C45AAAAA3RSTlMPJEx/qG/+AAAACXBIWXMAAG66AABuugHW3rEXAAAAFElEQVR4nGNggAMmMGBkYGAEAwYAAOIAFA/Rg+YAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 3
                    }
                }, {
                    title: "ALZAKA HOTEL",
                    logo: {
                        src: "/_next/static/media/Frame 120.0c335401.png",
                        height: 480,
                        width: 519,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAP1BMVEXR3MNsqpj788362ZJzrZxwrpxxrp5yrZ1wrZxwrJxwr55zqptvsZ372pfz1peawKj36LtzraJ2sqhur53/+sRdKnNoAAAAFXRSTlMBVyF+eaNoRIqBuTNposWHRCxhzRESsEjSAAAACXBIWXMAAG66AABuugHW3rEXAAAAOElEQVR4nCXGSQ7AIAwEwQFsj82awP//GkX0odQAkDNuZT53RvltTGu/RvSqWvUYKOJuTiSPCAl+HfUBPJreN44AAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 7
                    }
                }, {
                    title: "HAMDAN BIN MOHAMMED BIN RASHID AL MAKTOUM INTERNATIONAL PHOTOGRAPHY AWARD",
                    logo: {
                        src: "/_next/static/media/Frame 121.c4b4d435.png",
                        height: 480,
                        width: 1206,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEVMaXF6dXWBg4N8fHxcSTp+hIQxPUUaGSk+SUJPsmAhAAAACXRSTlMADFJkhEQhGIuSCgwiAAAACXBIWXMAAG66AABuugHW3rEXAAAAIElEQVR4nAXBhwEAMAjDMGcA/f/iSsD1HSBtuxJOxs58BA8ATEHga9cAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 3
                    }
                }],
                V = (0, i.forwardRef)((e, a) => {
                    let t = (0, F.useRouter)(),
                        {
                            locale: s
                        } = t,
                        [r, o] = (0, i.useState)(0),
                        c = (0, i.useContext)(B.n),
                        {
                            width: d
                        } = (0, S.d)(),
                        n = e => {
                            (null == e ? void 0 : e.realIndex) && o(null == e ? void 0 : e.realIndex)
                        },
                        A = I.filter(e => (null == e ? void 0 : e.dark) === void 0 || (null == e ? void 0 : e.dark) && "dark" === c || !(null == e ? void 0 : e.dark) && "light" === c);
                    return (0, l.jsx)("section", {
                        ref: a,
                        className: " bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)] md:rounded-[36px] rounded-[16px] p-[1px] shadow-xl shadow-[rgba(0,0,0,0.4)]",
                        children: (0, l.jsx)("div", {
                            className: "flex items-center bg-maxiphy-gray-500 dark:bg-maxiphy-black-500 md:rounded-[36px] rounded-[16px] p-[25px] lg:p-[40px]",
                            children: (0, l.jsxs)(M.tq, {
                                slidesPerView: d < 800 ? 3 : 5,
                                spaceBetween: 20,
                                className: "mySwiper",
                                autoplay: {
                                    delay: 2500,
                                    disableOnInteraction: !1
                                },
                                loop: !0,
                                modules: [R.pt],
                                centeredSlides: !0,
                                slideToClickedSlide: !0,
                                onRealIndexChange: n,
                                dir: "ar" === s ? "rtl" : "ltr",
                                children: [(0, l.jsx)("div", {
                                    className: "absolute pointer-events-none w-full h-full top-0 bg-gradient-to-r from-maxiphy-gray-500 dark:from-maxiphy-black-500 via-transparent dark:via-transparent to-maxiphy-gray-500 dark:to-maxiphy-black-500 z-50"
                                }), A.map((e, a) => (0, l.jsxs)(M.o5, {
                                    className: "transition-all duration-100 ease-linear relative",
                                    children: [(0, l.jsx)("div", {
                                        className: "absolute top-0 ".concat(a === r ? "" : "backdrop-grayscale", " w-full h-full")
                                    }), (0, l.jsx)("div", {
                                        className: "transition-all duration-100 ease-linear",
                                        children: (0, l.jsx)(C(), {
                                            src: e.logo,
                                            alt: e.title,
                                            width: 300,
                                            height: 200,
                                            loading: "lazy",
                                            className: "aspect-[1/1] md:aspect-[2/1] max-h-[90px] h-full w-full object-contain pointer-events-none"
                                        })
                                    })]
                                }, a))]
                            }, JSON.stringify([c, d, s]))
                        })
                    })
                });
            V.displayName = "KeyCustomers";
            var Z = t(9177);
            let _ = () => {
                let [e, a] = (0, i.useState)(0), [t, l] = (0, i.useState)(0);
                return (0, Z.Z)(() => {
                    l(e)
                }, 200, [e]), (0, i.useEffect)(() => {
                    function e() {
                        let {
                            scrollY: e
                        } = window;
                        a(e)
                    }
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                }, []), {
                    clientHeight: t
                }
            };
            var X = t(6737),
                D = t(6731),
                T = t.n(D),
                O = t(5832),
                H = t(1395),
                G = t(583),
                z = t(4879),
                L = t(3890),
                J = t(8110),
                W = t(4166);
            t(9645), t(5896);
            var P = t(7642);
            let Y = {
                    en: (0, l.jsx)(C(), {
                        src: z.Z,
                        className: " md:w-[30px] md:min-w-[30px] w-[20px] min-w-[20px] ",
                        width: 32,
                        alt: "united kingdom flag"
                    }),
                    fr: (0, l.jsx)(C(), {
                        src: W.Z,
                        className: " md:w-[30px] md:min-w-[30px] w-[20px] min-w-[20px] ",
                        width: 32,
                        alt: "france flag"
                    }),
                    es: (0, l.jsx)(C(), {
                        src: J.Z,
                        className: " md:w-[30px] md:min-w-[30px] w-[20px] min-w-[20px] ",
                        width: 32,
                        alt: "spain flag"
                    }),
                    ar: (0, l.jsx)(C(), {
                        src: L.Z,
                        className: " md:w-[30px] md:min-w-[30px] w-[20px] min-w-[20px] ",
                        width: 32,
                        alt: "saudi arabia flag"
                    })
                },
                q = e => {
                    let {
                        images: a
                    } = e, {
                        t
                    } = (0, s.Z)(), r = (0, H.useRouter)(), {
                        locale: o
                    } = r, [c, d] = i.useState(!1), [n, A] = i.useState(!1), x = (0, i.useRef)(null), p = (0, i.useRef)(null), h = () => {
                        d(e => !e)
                    }, u = () => {
                        A(e => !e)
                    };
                    (0, O.Z)(x, () => {
                        c && h()
                    }, ["click"]), (0, O.Z)(p, () => {
                        c && u()
                    }, ["click"]);
                    let g = e => () => {
                            (0, m.B)({
                                action: "locale-switch-".concat(e),
                                category: "locale-switch",
                                label: "locale-switch-".concat(e),
                                value: "locale-switch-".concat(e)
                            }), h()
                        },
                        b = e => () => {
                            (0, m.B)({
                                action: "locale-switch-".concat(e),
                                category: "locale-switch",
                                label: "locale-switch-".concat(e),
                                value: "locale-switch-".concat(e)
                            }), u()
                        };
                    return (0, l.jsxs)("div", {
                        className: "p-[20px] md:p-[32px] md:h-[100vh] flex flex-col items-center justify-between",
                        children: [(0, l.jsx)("div", {
                            className: "z-50 md:hidden relative block bg-gradient-to-b w-full rounded-[16px] mb-[28px] from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)] p-[1px] shadow-xl shadow-[rgba(0,0,0,0.4)]",
                            children: (0, l.jsxs)("div", {
                                className: "flex items-center justify-between w-full p-[16px] bg-maxiphy-black-500 rounded-[16px] z-50",
                                children: [(0, l.jsx)(X.Z, {
                                    hasPadding: !1,
                                    classNames: "px-[8px]",
                                    imageClassNames: "w-[24px]",
                                    titleClassNames: "text-[24px]"
                                }), (0, l.jsxs)("div", {
                                    className: "relative z-[100]",
                                    ref: x,
                                    children: [(0, l.jsx)(G.Z, {
                                        primary: !1,
                                        clickFn: h,
                                        size: "sm",
                                        ariaLabel: "Change Language",
                                        className: " p-1 md:p-3 w-[40px] h-[40px] flex items-center justify-center !bg-[rgba(255,255,255,0.3)] backdrop-blur-[5px]",
                                        children: Y[r.locale]
                                    }), c ? (0, l.jsx)("div", {
                                        className: "absolute top-[135%] right-0 bg-gray-50 p-2 rounded w-20 justify-center flex z-[999] text-black",
                                        children: (0, l.jsx)("ul", {
                                            children: ["en", "ar"].map(e => (0, l.jsx)("li", {
                                                children: (0, l.jsx)(T(), {
                                                    href: r.asPath,
                                                    locale: e,
                                                    onClick: g(e),
                                                    children: (0, l.jsxs)("div", {
                                                        className: "flex items-center justify-between gap-2 font-bold",
                                                        children: [e.toUpperCase(), Y[e]]
                                                    })
                                                })
                                            }, e))
                                        })
                                    }) : null]
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "relative z-20 w-full h-full flex justify-end bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)] md:rounded-[24px] rounded-[16px] p-[1px] shadow-xl shadow-[rgba(0,0,0,0.4)]",
                            children: [(0, l.jsxs)("div", {
                                className: "absolute justify-between w-full z-10 ps-[100px] p-[40px] md:p-[56px] hidden md:flex",
                                ref: p,
                                children: [(0, l.jsx)("div", {
                                    children: (0, l.jsx)(G.Z, {
                                        clickFn: () => {
                                            (0, P.E)("contact")
                                        },
                                        ariaLabel: "scroll to contact us",
                                        className: "font-bold",
                                        children: t("home:hero.letsWorkTogether")
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "relative ",
                                    children: [(0, l.jsx)(G.Z, {
                                        primary: !1,
                                        clickFn: u,
                                        size: "sm",
                                        ariaLabel: "Change Language",
                                        className: " p-1 md:p-3 w-[40px] h-[40px] md:w-[54px] md:h-[54px] flex items-center justify-center !bg-[rgba(255,255,255,0.3)] backdrop-blur-[5px]",
                                        children: Y[r.locale]
                                    }), n ? (0, l.jsx)("div", {
                                        className: "absolute top-[135%] right-0 bg-gray-50 p-2 rounded w-20 justify-center flex z-[999] text-black",
                                        children: (0, l.jsx)("ul", {
                                            children: ["en", "ar"].map(e => (0, l.jsx)("li", {
                                                children: (0, l.jsx)(T(), {
                                                    href: r.asPath,
                                                    locale: e,
                                                    onClick: b(e),
                                                    children: (0, l.jsxs)("div", {
                                                        className: "flex items-center justify-between gap-2 font-bold",
                                                        children: [e.toUpperCase(), Y[e]]
                                                    })
                                                })
                                            }, e))
                                        })
                                    }) : null]
                                })]
                            }), (0, l.jsx)(M.tq, {
                                slidesPerView: 1,
                                className: "hero-slider md:rounded-[24px] rounded-[16px] z-10",
                                loop: !0,
                                pagination: !0,
                                slideToClickedSlide: !0,
                                effect: "fade",
                                modules: [R.N1, R.xW, R.pt, R.tl],
                                speed: 400,
                                autoplay: {
                                    delay: 3e3,
                                    disableOnInteraction: !1
                                },
                                keyboard: {
                                    enabled: !0
                                },
                                dir: "ar" === o ? "rtl" : "ltr",
                                children: null == a ? void 0 : a.map((e, a) => (0, l.jsxs)(M.o5, {
                                    className: "relative w-full object-cover z-[10]",
                                    children: [(0, l.jsx)(C(), {
                                        src: e.src,
                                        alt: e.alt,
                                        width: 1e3,
                                        height: 1e3,
                                        loading: "lazy",
                                        className: "h-full w-full object-cover aspect-square absolute z-[200] pointer-events-none"
                                    }), (0, l.jsx)("div", {
                                        className: "absolute z-[210] bottom-[40px] md:bottom-[64px] w-[calc(100%-40px*2)] md:w-[calc(100%-64px*2)] mx-[40px] md:mx-[64px] pointer-events-none",
                                        children: (0, l.jsx)(X.Z, {
                                            hasPadding: !1,
                                            title: t("home:hero.".concat(e.slogan)),
                                            classNames: "!justify-start ",
                                            imageClassNames: "!w-[14px] !min-w-[14px] md:!w-[32px] md:!min-w-[32px]",
                                            titleClassNames: "!text-[14px] md:!text-[32px]"
                                        })
                                    }), (null == e ? void 0 : e.lowResSrc) ? (0, l.jsx)(C(), {
                                        src: e.lowResSrc,
                                        alt: e.alt,
                                        width: 500,
                                        height: 500,
                                        priority: !0,
                                        className: "h-full w-full !min-w-[calc(100vw-20px*2)] md:min-w-[calc(100vw-32px*2)] object-cover aspect-square z-10 blur-[10px] pointer-events-none"
                                    }) : null]
                                }, a))
                            }, o)]
                        }), (0, l.jsx)("div", {
                            className: "w-full md:hidden block mt-[28px] shadow-xl shadow-[rgba(0,0,0,0.4)]",
                            children: (0, l.jsx)(G.Z, {
                                clickFn: () => {
                                    (0, P.E)("contact")
                                },
                                ariaLabel: "scroll to contact us",
                                className: "w-full font-bold",
                                children: t("home:hero.letsWorkTogether")
                            })
                        })]
                    })
                };
            var Q = t(7278),
                K = {
                    src: "/_next/static/media/desktop-bg.21d2eb14.svg",
                    height: 718,
                    width: 1440
                },
                $ = {
                    src: "/_next/static/media/mobile-bg.53a54ab5.svg",
                    height: 437,
                    width: 441
                };
            let ee = () => {
                    let {
                        t: e
                    } = (0, s.Z)();
                    return (0, l.jsxs)("div", {
                        className: "relative flex flex-col items-center justify-center",
                        children: [(0, l.jsx)(C(), {
                            src: K,
                            alt: "Maxiphy Logo",
                            loading: "lazy",
                            className: "w-full object-contain hidden md:block"
                        }), (0, l.jsx)(C(), {
                            src: $,
                            alt: "Maxiphy Logo",
                            loading: "lazy",
                            className: "w-full object-contain md:hidden block"
                        }), (0, l.jsxs)("div", {
                            className: "absolute text-center w-[70vw] md:w-[50vw] translate-y-8 md:translate-y-0",
                            children: [(0, l.jsxs)("div", {
                                className: "flex md:flex-row flex-col w-full items-center justify-center gap-0 md:gap-2",
                                children: [(0, l.jsxs)("div", {
                                    className: "relative h-full z-10 flex items-center justify-center",
                                    children: [(0, l.jsx)("div", {
                                        className: "absolute w-[140px] h-[30px] bg-maxiphy-blue-500 blur-[40px] z-10"
                                    }), (0, l.jsx)("p", {
                                        className: "text-maxiphy-blue-500 font-extrabold text-[36px] md:text-[42px] z-50 ",
                                        children: e("home:hero.title1")
                                    })]
                                }), (0, l.jsx)("p", {
                                    className: "text-maxiphy-gray-900 font-extrabold md:text-[42px] text-[36px] dark:text-white whitespace-normal md:whitespace-nowrap",
                                    children: e("home:hero.title2")
                                })]
                            }), (0, l.jsx)("p", {
                                className: "mt-[40px] md:mt-[16px] dark:text-white text-[16px] md:text-[18px] font-light",
                                children: e("home:hero.description")
                            })]
                        })]
                    })
                },
                ea = () => {
                    let {
                        t: e
                    } = (0, s.Z)(), {
                        locale: a
                    } = (0, H.useRouter)();
                    return (0, l.jsx)("div", {
                        className: "flex gap-[30px] flex-col md:flex-row flex-wrap",
                        children: Q.q.map((e, t) => {
                            let {
                                desktopImage: i,
                                desktopImageAr: s,
                                alt: r
                            } = null != e ? e : {}, [o] = r.split(" ");
                            return (0, l.jsx)("div", {
                                className: "flex flex-col gap-[40px] items-center justify-center w-full md:w-[31%] grow",
                                children: (0, l.jsx)("div", {
                                    className: " bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)] md:rounded-[36px] rounded-[33px] p-[1px] shadow-xl shadow-[rgba(0,0,0,0.4)]",
                                    children: (0, l.jsx)(C(), {
                                        src: "ar" === a ? s : i,
                                        alt: r,
                                        width: 500,
                                        height: 500,
                                        loading: "lazy",
                                        className: "block w-full object-contain md:rounded-[36px] rounded-[33px] pointer-events-none"
                                    })
                                })
                            }, t)
                        })
                    })
                },
                et = () => {
                    let {
                        t: e
                    } = (0, s.Z)(), {
                        clientHeight: a
                    } = _(), t = (0, i.useRef)(null), r = (0, i.useRef)(null), o = (0, i.useRef)(null), [c, d] = (0, i.useState)({
                        services: 0,
                        keyCustomers: 0,
                        contactUs: 0
                    }), [n, A] = (0, i.useState)({
                        services: !1,
                        keyCustomers: !1,
                        contactUs: !1
                    });
                    return (0, i.useEffect)(() => {
                        var e, a, l;
                        let i = null == t ? void 0 : null === (e = t.current) || void 0 === e ? void 0 : e.offsetTop,
                            s = null == r ? void 0 : null === (a = r.current) || void 0 === a ? void 0 : a.offsetTop,
                            c = null == o ? void 0 : null === (l = o.current) || void 0 === l ? void 0 : l.offsetTop;
                        i && s && c && d({
                            services: i,
                            keyCustomers: s,
                            contactUs: c
                        })
                    }, []), (0, i.useEffect)(() => {
                        Object.keys(n).forEach(e => {
                            !n[e] && a > c[e] && ((0, m.B)({
                                action: "".concat(e, "-in-view"),
                                category: "scroll-event",
                                label: "".concat(e, " in view"),
                                value: "".concat(e, "-in-view")
                            }), A(a => ({ ...a,
                                [e]: !0
                            }))), a < c[e] && A(a => ({ ...a,
                                [e]: !1
                            }))
                        })
                    }, [a, c]), (0, l.jsxs)("div", {
                        className: "dark:bg-maxiphy-d-black bg-white text-maxiphy-black-500 dark:text-white",
                        children: [(0, l.jsx)(q, {
                            images: Q.en
                        }), (0, l.jsx)("div", {
                            className: "container mx-auto",
                            children: (0, l.jsx)(ee, {})
                        }), (0, l.jsxs)("div", {
                            className: "container mx-auto md:px-[90px] px-4",
                            children: [(0, l.jsx)(X.Z, {
                                title: e("home:services.title"),
                                hasPadding: !1,
                                classNames: "pb-[75px] md:pt-[80px] pt-[120px]",
                                id: "services"
                            }), (0, l.jsx)(ea, {}), (0, l.jsx)(X.Z, {
                                title: e("home:keyCustomers.title"),
                                position: "end",
                                id: "keyCustomers"
                            }), (0, l.jsx)(V, {
                                ref: r
                            }), (0, l.jsx)(X.Z, {
                                title: e("home:contactUs.title"),
                                id: "contact"
                            }), (0, l.jsx)(k, {
                                ref: o
                            })]
                        })]
                    })
                };
            var el = !0,
                ei = et
        },
        7278: function(e, a, t) {
            "use strict";
            t.d(a, {
                en: function() {
                    return l
                },
                pd: function() {
                    return i
                },
                q: function() {
                    return s
                }
            });
            let l = [{
                    src: "https://res.cloudinary.com/dlcilxota/image/upload/v1687427191/Maxiphy-web/turtle_nho1ks.jpg",
                    lowResSrc: "https://res.cloudinary.com/dlcilxota/image/upload/v1687428776/Maxiphy-web/turtleLow_sopisn.jpg",
                    alt: "turtle",
                    slogan: "qualityUnearthed"
                }, {
                    src: "https://res.cloudinary.com/dlcilxota/image/upload/v1687427192/Maxiphy-web/lizard_r73gbs.jpg",
                    lowResSrc: "https://res.cloudinary.com/dlcilxota/image/upload/v1687428776/Maxiphy-web/lizardLow_ksy1sk.jpg",
                    alt: "lizard",
                    slogan: "partner"
                }, {
                    src: "https://res.cloudinary.com/dlcilxota/image/upload/v1692188450/Maxiphy-web/gorilla_excf2z.jpg",
                    lowResSrc: "https://res.cloudinary.com/dlcilxota/image/upload/v1692188628/Maxiphy-web/gorilla_1_pitvi7.jpg",
                    alt: "Gorilla",
                    slogan: "empowering"
                }, {
                    src: "https://res.cloudinary.com/dlcilxota/image/upload/v1697183763/Maxiphy-web/gorilla_o1alkf.png",
                    lowResSrc: "",
                    alt: "Octopus",
                    slogan: "flexibility"
                }],
                i = [{
                    src: "https://res.cloudinary.com/dlcilxota/image/upload/v1697181562/Maxiphy-web/Hero_Section_mk2ee7.jpg",
                    alt: "dbc hero image"
                }],
                s = [{
                    desktopImage: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184202/Maxiphy-web/new%20services/Property_1_action_15_v2z89x.png",
                    mobileImage: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184202/Maxiphy-web/new%20services/Property_1_action_15_v2z89x.png",
                    desktopImageAr: "https://res.cloudinary.com/dlcilxota/image/upload/v1687430742/Maxiphy-web/web-services-arabic_c5yseg.png",
                    mobileImageAr: "https://res.cloudinary.com/dlcilxota/image/upload/v1687430742/Maxiphy-web/web-services-arabic_c5yseg.png",
                    alt: "web services"
                }, {
                    desktopImage: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184203/Maxiphy-web/new%20services/Property_1_action_12_xj05di.png",
                    mobileImage: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184203/Maxiphy-web/new%20services/Property_1_action_12_xj05di.png",
                    desktopImageAr: "https://res.cloudinary.com/dlcilxota/image/upload/v1687430742/Maxiphy-web/brand-services-arabic_shb4vy.png",
                    mobileImageAr: "https://res.cloudinary.com/dlcilxota/image/upload/v1687430742/Maxiphy-web/brand-services-arabic_shb4vy.png",
                    alt: "brand services"
                }, {
                    desktopImage: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184202/Maxiphy-web/new%20services/Property_1_action_10_nofe8o.png",
                    mobileImage: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184202/Maxiphy-web/new%20services/Property_1_action_10_nofe8o.png",
                    desktopImageAr: "https://res.cloudinary.com/dlcilxota/image/upload/v1687430742/Maxiphy-web/mobile-services-arabic_m7ol4h.png",
                    mobileImageAr: "https://res.cloudinary.com/dlcilxota/image/upload/v1687430742/Maxiphy-web/mobile-services-arabic_m7ol4h.png",
                    alt: "mobile app services"
                }, {
                    desktopImage: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184203/Maxiphy-web/new%20services/Property_1_Variant13_xkyxyb.png",
                    desktopImageAr: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184203/Maxiphy-web/new%20services/Property_1_Variant13_xkyxyb.png",
                    alt: "VR services"
                }, {
                    desktopImage: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184203/Maxiphy-web/new%20services/Property_1_Variant12_kyrgzk.png",
                    desktopImageAr: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184203/Maxiphy-web/new%20services/Property_1_Variant12_kyrgzk.png",
                    alt: "NFC services"
                }, {
                    desktopImage: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184203/Maxiphy-web/new%20services/Property_1_Variant15_it5i07.png",
                    desktopImageAr: "https://res.cloudinary.com/dlcilxota/image/upload/v1697184203/Maxiphy-web/new%20services/Property_1_Variant15_it5i07.png",
                    alt: "AI services"
                }]
        }
    },
    function(e) {
        e.O(0, [261, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);