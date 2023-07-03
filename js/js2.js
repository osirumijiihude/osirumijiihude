(this.webpackJsonpbeny = this.webpackJsonpbeny || []).push([
    [0], {
        125: function(e, s, t) {},
        126: function(e, s, t) {
            "use strict";
            t.r(s);
            var a = t(21),
                c = t.n(a),
                i = t(1),
                n = t(7),
                r = t(0),
                l = [{
                    img: "light-animation",
                    title: "Home Light Animation",
                    sticker: "",
                    className: "",
                    routerPath: "/home-light-animation",
                    delayAnimation: ""
                }, {
                    img: "home-typer",
                    title: "Home Typer Creative",
                    sticker: "New",
                    className: "sticker",
                    routerPath: "/home-typer-creative",
                    delayAnimation: "100"
                }, {
                    img: "dark-animation",
                    title: "Home Dark Animation",
                    sticker: "",
                    className: "",
                    routerPath: "/home-dark-animation",
                    delayAnimation: "100"
                }, {
                    img: "home-parallax-typer",
                    title: "Home Parallax & Typer",
                    sticker: "New",
                    className: "sticker",
                    routerPath: "/home-parallax-typer",
                    delayAnimation: ""
                }],
                o = function() {
                    return document.body.classList.add("light"), Object(r.jsxs)("div", {
                        className: "beny_tm_intro_wrapper",
                        children: [Object(r.jsx)("div", {
                            className: "container",
                            children: Object(r.jsxs)("div", {
                                className: "intro_list",
                                children: [Object(r.jsxs)("div", {
                                    className: "intro_title",
                                    id: "intro",
                                    children: [Object(r.jsx)("span", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: "Demos"
                                    }), Object(r.jsx)("h3", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: "All Ready Demos"
                                    }), Object(r.jsx)("p", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: "Beny \u2013 personal portfolio React Template can be used for many purposes. It\u2019s a creative, minimal and clean design.It\u2019s 100% responsive & super Fast."
                                    })]
                                }), Object(r.jsx)("ul", {
                                    children: l.map((function(e, s) {
                                        return Object(r.jsx)("li", {
                                            "data-aos": "fade-up",
                                            "data-aos-duration": "1200",
                                            "data-aos-delay": e.delayAnimation,
                                            children: Object(r.jsxs)("div", {
                                                className: "list_inner",
                                                children: [Object(r.jsx)("img", {
                                                    src: "img/intro/".concat(e.img, ".jpg"),
                                                    alt: "demo"
                                                }), Object(r.jsx)("h3", {
                                                    children: e.title
                                                }), Object(r.jsx)(n.b, {
                                                    to: e.routerPath,
                                                    className: "beny_tm_full_link",
                                                    target: "_blank"
                                                }), Object(r.jsx)("span", {
                                                    className: e.className,
                                                    children: e.sticker
                                                })]
                                            })
                                        }, s)
                                    }))
                                })]
                            })
                        }), Object(r.jsxs)("div", {
                            className: "go_purchase ",
                            children: [Object(r.jsx)("h6", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                children: "You are at the right step now"
                            }), Object(r.jsxs)("h3", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "100",
                                children: ["Purchase The Beny and Build Your Own", " ", Object(r.jsx)("span", {
                                    className: "theme-color",
                                    children: "React JS"
                                }), " &", " ", Object(r.jsx)("span", {
                                    className: "theme-color",
                                    children: "Pure CSS "
                                }), " Based Portfolio Template."]
                            }), Object(r.jsx)("div", {
                                className: "beny_tm_button color ",
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "140",
                                children: Object(r.jsx)("a", {
                                    href: "https://themeforest.net/item/beny-personal-portfolio-react-template/33910000",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: Object(r.jsxs)("span", {
                                        className: "wrapper",
                                        children: [Object(r.jsx)("span", {
                                            className: "first",
                                            children: "Purchase Now"
                                        }), Object(r.jsx)("span", {
                                            className: "second",
                                            children: "Purchase Now"
                                        })]
                                    })
                                })
                            })]
                        }), Object(r.jsx)("div", {
                            className: "intro_copyright",
                            children: Object(r.jsxs)("p", {
                                children: ["\xa9 ", (new Date).getFullYear(), " Beny by", " ", Object(r.jsx)("a", {
                                    href: "https://themeforest.net/user/ib-themes",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "ib-themes."
                                }), " ", "All Rights Reserved."]
                            })
                        })]
                    })
                },
                d = t(3),
                j = t(17),
                h = t.n(j),
                b = t(4),
                m = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        t = s[0],
                        a = s[1];
                    return window.addEventListener("scroll", (function() {
                        window.scrollY >= 80 ? a(!0) : a(!1)
                    })), Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)("div", {
                            className: t ? "beny_tm_topbar animate" : "beny_tm_topbar",
                            children: Object(r.jsx)("div", {
                                className: "in",
                                children: Object(r.jsxs)("div", {
                                    className: "topbar_inner",
                                    children: [Object(r.jsx)("div", {
                                        className: "logo",
                                        children: Object(r.jsx)(n.b, {
                                            to: "/",
                                            children: Object(r.jsx)("img", {
                                                src: "img/logo/dark.png",
                                                alt: "brand"
                                            })
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "menu",
                                        children: Object(r.jsxs)(h.a, {
                                            className: "anchor_nav",
                                            items: ["home", "about", "service", "portfolio", "news", "contact"],
                                            currentClassName: "current",
                                            offset: -88,
                                            children: [Object(r.jsx)("li", {
                                                className: "current",
                                                children: Object(r.jsxs)("a", {
                                                    href: "#home",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Home"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Home"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#about",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "About"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "About"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#service",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Service"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Service"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#portfolio",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Portfolio"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Portfolio"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#news",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "News"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "News"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#contact",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Contact"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Contact"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsx)("a", {
                                                    href: "https://themeforest.net/checkout/from_item/33910000?license=regular",
                                                    children: Object(r.jsxs)("span", {
                                                        className: "wrapper",
                                                        children: [Object(r.jsx)("span", {
                                                            className: "first",
                                                            children: "Buy Now"
                                                        }), Object(r.jsx)("span", {
                                                            className: "second",
                                                            children: "Buy Now"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), Object(r.jsx)("div", {
                            className: "mobile-menu-wrapper",
                            children: Object(r.jsxs)(h.a, {
                                className: "mobile_menu-icon",
                                items: ["home", "about", "service", "portfolio", "news", "contact"],
                                currentClassName: "current",
                                offset: -65,
                                children: [Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#home",
                                        children: [Object(r.jsx)(b.e, {}), Object(r.jsx)("span", {
                                            children: "Home"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#about",
                                        children: [Object(r.jsx)(b.k, {}), Object(r.jsx)("span", {
                                            children: "About"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#service",
                                        children: [Object(r.jsx)(b.i, {}), Object(r.jsx)("span", {
                                            children: "Serivce"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#portfolio",
                                        children: [Object(r.jsx)(b.d, {}), Object(r.jsx)("span", {
                                            children: "Portfolio"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#news",
                                        children: [Object(r.jsx)(b.a, {}), Object(r.jsx)("span", {
                                            children: "News"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#contact",
                                        children: [Object(r.jsx)(b.h, {}), Object(r.jsx)("span", {
                                            children: "Contact"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                O = [{
                    iconName: Object(r.jsx)(b.c, {}),
                    link: "https://www.facebook.com/"
                }, {
                    iconName: Object(r.jsx)(b.j, {}),
                    link: "https://twitter.com/"
                }, {
                    iconName: Object(r.jsx)(b.f, {}),
                    link: "https://www.instagram.com/"
                }, {
                    iconName: Object(r.jsx)(b.b, {}),
                    link: "https://dribbble.com/"
                }, {
                    iconName: Object(r.jsx)(b.g, {}),
                    link: "https://www.linkedin.com/feed/"
                }],
                x = function() {
                    return Object(r.jsx)("ul", {
                        children: O.map((function(e, s) {
                            return Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                    href: e.link,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: e.iconName
                                })
                            }, s)
                        }))
                    })
                },
                u = [{
                    name: "FB.",
                    link: "https://www.facebook.com/"
                }, {
                    name: "DR.",
                    link: "https://dribbble.com/"
                }, {
                    name: "BE.",
                    link: "https://www.behance.net/"
                }, {
                    name: "TW.",
                    link: "https://twitter.com/"
                }],
                p = function() {
                    return Object(r.jsx)("ul", {
                        children: u.map((function(e, s) {
                            return Object(r.jsx)("li", {
                                children: Object(r.jsxs)("a", {
                                    href: e.link,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: [Object(r.jsx)("span", {
                                        className: "first",
                                        children: e.name
                                    }), Object(r.jsx)("span", {
                                        className: "second",
                                        children: e.name
                                    })]
                                })
                            }, s)
                        }))
                    })
                },
                g = t(58),
                f = function() {
                    return Object(r.jsxs)("div", {
                        className: "beny_tm_hero",
                        id: "home",
                        children: [Object(r.jsxs)("div", {
                            className: "background",
                            children: [Object(r.jsx)("div", {
                                className: "image",
                                style: {
                                    backgroundImage: "url(".concat("img/slider/3.jpg", ")")
                                }
                            }), Object(r.jsx)("div", {
                                className: "overlay"
                            })]
                        }), Object(r.jsx)("div", {
                            className: "go-to go-to-next",
                            children: Object(r.jsx)("a", {
                                href: "#about",
                                children: Object(r.jsx)("span", {})
                            })
                        }), Object(r.jsx)("div", {
                            className: "container",
                            children: Object(r.jsx)("div", {
                                className: "content",
                                children: Object(r.jsxs)("div", {
                                    className: "content_inner",
                                    children: [Object(r.jsx)("h3", {
                                        className: "name",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: "Hi! I'm Jara"
                                    }), Object(r.jsxs)("h1", {
                                        className: "job",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "50",
                                        children: [Object(r.jsxs)(g.a, {
                                            children: [Object(r.jsx)("p", {
                                                className: "loop-text lead",
                                                children: "Visual Artist"
                                            }), Object(r.jsx)("p", {
                                                className: "loop-text lead",
                                                children: " Designer"
                                            }), Object(r.jsx)("p", {
                                                className: "loop-text lead",
                                                children: " Developer"
                                            })]
                                        }), Object(r.jsx)("br", {}), " ", Object(r.jsx)("span", {
                                            children: "Based In America."
                                        })]
                                    }), Object(r.jsx)("p", {
                                        className: "text",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: "I'm developer focused on crafting user\u2011friendly experiences, I am passionate about building excellent software that improves the lives of those around me."
                                    }), Object(r.jsx)("div", {
                                        className: "mobile_social",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "150",
                                        children: Object(r.jsx)(x, {})
                                    }), Object(r.jsx)("div", {
                                        className: "beny_tm_button",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: Object(r.jsx)("a", {
                                            className: "anchor",
                                            href: "#about",
                                            children: Object(r.jsxs)("span", {
                                                className: "wrapper",
                                                children: [Object(r.jsx)("span", {
                                                    className: "first",
                                                    children: "See Portfolio"
                                                }), Object(r.jsx)("span", {
                                                    className: "second",
                                                    children: "See Portfolio"
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        }), Object(r.jsx)("div", {
                            className: "social",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1200",
                            children: Object(r.jsx)(p, {})
                        })]
                    })
                },
                v = t(10),
                N = [{
                    passingYear: "2020-2021",
                    degree: "Ph.D in Horriblensess ",
                    instituteName: "Harvard University, Cambridge, MA"
                }, {
                    passingYear: "2018-2019",
                    degree: "Computer Science",
                    instituteName: "Imperialize Technical Institute"
                }, {
                    passingYear: "2016-2018",
                    degree: "Graphic Designer",
                    instituteName: "Web Graphy, Los Angeles, CA"
                }],
                y = [{
                    name: "Web Design",
                    skillPercent: "85"
                }, {
                    name: "Mobile App",
                    skillPercent: "55"
                }, {
                    name: "Illustrator",
                    skillPercent: "65"
                }, {
                    name: "Photoshop",
                    skillPercent: "72"
                }, {
                    name: "Motion Graphy",
                    skillPercent: "80"
                }],
                w = [{
                    awardYear: "2020",
                    degree: "Best Developer",
                    instituteName: "University Of Melbourne, NA"
                }, {
                    awardYear: "2019",
                    degree: "Best Writter",
                    instituteName: "Online Typodev Soluation Ltd."
                }, {
                    awardYear: "2007",
                    degree: "Best Freelancer ",
                    instituteName: "Fiver & Upwork Level 2 & Top Rated"
                }],
                _ = [{
                    designation: "Sr. Software Tester",
                    jobType: "Full Time | Remote",
                    year: "2020 - Present",
                    compnayName: "Google Inc.",
                    descriptions: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
                    animationDealy: ""
                }, {
                    designation: "Sr. Graphic Designer",
                    jobType: "Part Time | Office",
                    year: "2018 - 2019",
                    compnayName: "Avada Theme.",
                    descriptions: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
                    animationDealy: "200"
                }, {
                    designation: "Cr. Web Developer",
                    jobType: "Full Time | InHouse",
                    year: "2016 - 2017",
                    compnayName: "ib-themes ltd.",
                    descriptions: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
                    animationDealy: ""
                }, {
                    designation: "Jr. Web Developer",
                    jobType: "Full Time | Remote",
                    year: "2014 - 2015",
                    compnayName: "Creative Gigs.",
                    descriptions: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
                    animationDealy: "200"
                }],
                k = function() {
                    return Object(r.jsx)(r.Fragment, {
                        children: Object(r.jsxs)("div", {
                            className: "beny_tm_resume",
                            children: [Object(r.jsx)("div", {
                                className: "main_title",
                                children: Object(r.jsx)("h3", {
                                    children: "My Experience"
                                })
                            }), Object(r.jsxs)(v.d, {
                                children: [Object(r.jsxs)(v.b, {
                                    className: "tab_list",
                                    children: [Object(r.jsx)(v.a, {
                                        children: " Education & Skills"
                                    }), Object(r.jsx)(v.a, {
                                        children: "Experience"
                                    })]
                                }), Object(r.jsx)(v.c, {
                                    children: Object(r.jsx)("div", {
                                        className: "resume_inner",
                                        children: Object(r.jsxs)("div", {
                                            className: "row",
                                            children: [Object(r.jsx)("div", {
                                                className: "col-4",
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                children: Object(r.jsx)("div", {
                                                    className: "education ",
                                                    children: Object(r.jsxs)("div", {
                                                        className: "edu_list",
                                                        children: [Object(r.jsx)("h4", {
                                                            children: Object(r.jsx)("label", {
                                                                children: "Education"
                                                            })
                                                        }), Object(r.jsx)("ul", {
                                                            children: N.map((function(e, s) {
                                                                return Object(r.jsxs)("li", {
                                                                    children: [Object(r.jsx)("span", {
                                                                        className: "year",
                                                                        children: e.passingYear
                                                                    }), Object(r.jsxs)("p", {
                                                                        children: [Object(r.jsx)("span", {
                                                                            children: e.degree
                                                                        }), " - ", e.instituteName]
                                                                    })]
                                                                }, s)
                                                            }))
                                                        })]
                                                    })
                                                })
                                            }), Object(r.jsx)("div", {
                                                className: "col-4",
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "200",
                                                children: Object(r.jsxs)("div", {
                                                    className: "skills ",
                                                    children: [Object(r.jsx)("h4", {
                                                        children: Object(r.jsx)("label", {
                                                            children: "Skills"
                                                        })
                                                    }), Object(r.jsx)("div", {
                                                        className: "beny_progress",
                                                        children: y.map((function(e, s) {
                                                            return Object(r.jsxs)("div", {
                                                                className: "progress_inner",
                                                                children: [Object(r.jsxs)("span", {
                                                                    children: [Object(r.jsx)("span", {
                                                                        className: "label",
                                                                        children: e.name
                                                                    }), Object(r.jsxs)("span", {
                                                                        className: "number",
                                                                        children: [e.skillPercent, "%"]
                                                                    })]
                                                                }), Object(r.jsx)("div", {
                                                                    className: "background",
                                                                    children: Object(r.jsx)("div", {
                                                                        className: "bar open",
                                                                        children: Object(r.jsx)("div", {
                                                                            className: "bar_in",
                                                                            style: {
                                                                                width: e.skillPercent + "%"
                                                                            }
                                                                        })
                                                                    })
                                                                })]
                                                            }, s)
                                                        }))
                                                    })]
                                                })
                                            }), Object(r.jsx)("div", {
                                                className: "col-4",
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "400",
                                                children: Object(r.jsx)("div", {
                                                    className: "education ",
                                                    children: Object(r.jsxs)("div", {
                                                        className: "edu_list",
                                                        children: [Object(r.jsx)("h4", {
                                                            children: Object(r.jsx)("label", {
                                                                children: "Awards"
                                                            })
                                                        }), Object(r.jsx)("ul", {
                                                            children: w.map((function(e, s) {
                                                                return Object(r.jsxs)("li", {
                                                                    children: [Object(r.jsx)("span", {
                                                                        className: "year",
                                                                        children: e.awardYear
                                                                    }), Object(r.jsxs)("p", {
                                                                        children: [Object(r.jsx)("span", {
                                                                            children: e.degree
                                                                        }), " - ", e.instituteName]
                                                                    })]
                                                                }, s)
                                                            }))
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                }), Object(r.jsx)(v.c, {
                                    children: Object(r.jsx)("div", {
                                        className: "row",
                                        children: _.map((function(e, s) {
                                            return Object(r.jsx)("div", {
                                                className: "col-6",
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": e.animationDealy,
                                                children: Object(r.jsxs)("div", {
                                                    className: "resume-box-01",
                                                    children: [Object(r.jsx)("h5", {
                                                        children: e.designation
                                                    }), Object(r.jsx)("h6", {
                                                        children: e.jobType
                                                    }), Object(r.jsx)("span", {
                                                        children: e.year
                                                    }), Object(r.jsx)("div", {
                                                        className: "hr"
                                                    }), Object(r.jsx)("h4", {
                                                        children: Object(r.jsx)("label", {
                                                            children: e.compnayName
                                                        })
                                                    }), Object(r.jsx)("p", {
                                                        children: e.descriptions
                                                    })]
                                                })
                                            }, s)
                                        }))
                                    })
                                })]
                            })]
                        })
                    })
                },
                S = function() {
                    return Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsxs)("div", {
                            className: "about_inner",
                            children: [Object(r.jsxs)("div", {
                                className: "left",
                                children: [Object(r.jsx)("img", {
                                    src: "img/thumbs/1-1.jpg",
                                    alt: "thumb"
                                }), Object(r.jsx)("div", {
                                    className: "image",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    style: {
                                        backgroundImage: "url(".concat("img/about/3.jpg", ")")
                                    }
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "right",
                                "data-aos": "fade-right",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "50",
                                children: [Object(r.jsxs)("div", {
                                    className: "short",
                                    children: [Object(r.jsx)("h3", {
                                        children: "I'm Bany Jara"
                                    }), Object(r.jsxs)("h5", {
                                        children: ["A Lead ", Object(r.jsx)("span", {
                                            className: "theme-color",
                                            children: " Visual Artist "
                                        }), "based in ", Object(r.jsx)("span", {
                                            className: "theme-color",
                                            children: "America"
                                        })]
                                    }), Object(r.jsx)("p", {
                                        children: "I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio"
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "extra",
                                    children: [Object(r.jsx)("h3", {
                                        className: "title",
                                        children: "Personal Info"
                                    }), Object(r.jsx)("div", {
                                        className: "list",
                                        children: Object(r.jsxs)("ul", {
                                            children: [Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Name :"
                                                    }), " Bany Jara"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Address :"
                                                    }), " H-400 - Path2UK"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Age :"
                                                    }), " 21 Years"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Phone :"
                                                    }), " +12345667"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Nationality :"
                                                    }), " USA"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Email :"
                                                    }), " yourmail@gmail.com"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Freelance :"
                                                    }), " Available"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Languages :"
                                                    }), " French, English"]
                                                })
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "beny_tm_button color-outline",
                                        children: Object(r.jsx)("a", {
                                            href: "img/about/cv.webp",
                                            download: !0,
                                            children: Object(r.jsxs)("span", {
                                                className: "wrapper",
                                                children: [Object(r.jsx)("span", {
                                                    className: "first",
                                                    children: "Download CV"
                                                }), Object(r.jsx)("span", {
                                                    className: "second",
                                                    children: "Download CV"
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), Object(r.jsx)(k, {})]
                    })
                },
                C = t(15),
                A = t.n(C);
            A.a.setAppElement("#root");
            var I = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        t = s[0],
                        a = s[1],
                        c = Object(i.useState)(!1),
                        n = Object(d.a)(c, 2),
                        l = n[0],
                        o = n[1],
                        j = Object(i.useState)(!1),
                        h = Object(d.a)(j, 2),
                        b = h[0],
                        m = h[1],
                        O = Object(i.useState)(!1),
                        x = Object(d.a)(O, 2),
                        u = x[0],
                        p = x[1];

                    function g() {
                        a(!t)
                    }

                    function f() {
                        o(!l)
                    }

                    function v() {
                        m(!b)
                    }

                    function N() {
                        p(!u)
                    }
                    return Object(r.jsx)("div", {
                        className: "service_list",
                        children: Object(r.jsxs)("ul", {
                            children: [Object(r.jsxs)("li", {
                                children: [Object(r.jsxs)("div", {
                                    className: "list_inner",
                                    onClick: g,
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    children: [Object(r.jsx)("img", {
                                        className: "svg",
                                        src: "img/svg/1.svg",
                                        alt: ""
                                    }), Object(r.jsx)("div", {
                                        className: "service_title",
                                        children: Object(r.jsx)("h3", {
                                            children: "Motion Art Graphy"
                                        })
                                    }), Object(r.jsxs)("div", {
                                        className: "learn_more",
                                        children: ["Learn More", Object(r.jsx)("span", {})]
                                    })]
                                }), Object(r.jsx)(A.a, {
                                    isOpen: t,
                                    onRequestClose: g,
                                    contentLabel: "My dialog",
                                    className: "custom-modal",
                                    overlayClassName: "custom-overlay",
                                    closeTimeoutMS: 500,
                                    children: Object(r.jsxs)("div", {
                                        className: "beny_tm_modalbox_service",
                                        children: [Object(r.jsx)("button", {
                                            className: "close-modal",
                                            onClick: g,
                                            children: Object(r.jsx)("img", {
                                                src: "/img/svg/cancel.svg",
                                                alt: "close icon"
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "box_inner",
                                            children: Object(r.jsx)("div", {
                                                className: "description_wrap scrollable",
                                                children: Object(r.jsxs)("div", {
                                                    className: "popup_informations",
                                                    children: [Object(r.jsxs)("div", {
                                                        className: "image",
                                                        children: [Object(r.jsx)("img", {
                                                            src: "img/thumbs/4-3.jpg",
                                                            alt: ""
                                                        }), Object(r.jsx)("div", {
                                                            className: "main",
                                                            style: {
                                                                backgroundImage: "url(".concat("img/service/1.jpg", ")")
                                                            }
                                                        })]
                                                    }), Object(r.jsxs)("div", {
                                                        className: "description",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Motion Graphic Breakdown In Cinema 4D"
                                                        }), Object(r.jsx)("p", {
                                                            children: "Just because we can't get out and about like we normally would, doesn\u2019t mean we have to taking pictures. There\u2019s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                                                        }), Object(r.jsx)("p", {
                                                            children: "Most photographers love to shoot the unusual, and you don\u2019t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."
                                                        }), Object(r.jsx)("h3", {
                                                            children: "What Is Branding?"
                                                        }), Object(r.jsx)("p", {
                                                            children: "Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."
                                                        }), Object(r.jsx)("div", {
                                                            className: "in_list",
                                                            children: Object(r.jsxs)("ul", {
                                                                children: [Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Email is a crucial channel in any marketing."
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Curious what to say? How to say it?"
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Whether you\u2019re kicking off a new ca mpaign."
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Habitasse per feugiat aliquam luctus accumsan curae"
                                                                    })
                                                                })]
                                                            })
                                                        }), Object(r.jsx)("p", {
                                                            children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                })]
                            }), Object(r.jsxs)("li", {
                                children: [Object(r.jsxs)("div", {
                                    className: "list_inner",
                                    onClick: f,
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "100",
                                    children: [Object(r.jsx)("img", {
                                        className: "svg",
                                        src: "img/svg/2.svg",
                                        alt: ""
                                    }), Object(r.jsx)("div", {
                                        className: "service_title",
                                        children: Object(r.jsx)("h3", {
                                            children: "Branding & Design"
                                        })
                                    }), Object(r.jsxs)("div", {
                                        className: "learn_more",
                                        children: ["Learn More", Object(r.jsx)("span", {})]
                                    })]
                                }), Object(r.jsx)(A.a, {
                                    isOpen: l,
                                    onRequestClose: f,
                                    contentLabel: "My dialog",
                                    className: "custom-modal",
                                    overlayClassName: "custom-overlay",
                                    closeTimeoutMS: 500,
                                    children: Object(r.jsxs)("div", {
                                        className: "beny_tm_modalbox_service",
                                        children: [Object(r.jsx)("button", {
                                            className: "close-modal",
                                            onClick: f,
                                            children: Object(r.jsx)("img", {
                                                src: "/img/svg/cancel.svg",
                                                alt: "close icon"
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "box_inner",
                                            children: Object(r.jsx)("div", {
                                                className: "description_wrap scrollable",
                                                children: Object(r.jsxs)("div", {
                                                    className: "popup_informations",
                                                    children: [Object(r.jsxs)("div", {
                                                        className: "image",
                                                        children: [Object(r.jsx)("img", {
                                                            src: "img/thumbs/4-3.jpg",
                                                            alt: ""
                                                        }), Object(r.jsx)("div", {
                                                            className: "main",
                                                            style: {
                                                                backgroundImage: "url(".concat("img/service/2.jpg", ")")
                                                            }
                                                        })]
                                                    }), Object(r.jsxs)("div", {
                                                        className: "description",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Branding & Design Breakdown In Cinema 4D"
                                                        }), Object(r.jsx)("p", {
                                                            children: "Just because we can't get out and about like we normally would, doesn\u2019t mean we have to taking pictures. There\u2019s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                                                        }), Object(r.jsx)("p", {
                                                            children: "Most photographers love to shoot the unusual, and you don\u2019t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."
                                                        }), Object(r.jsx)("h3", {
                                                            children: "What Is Branding?"
                                                        }), Object(r.jsx)("p", {
                                                            children: "Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."
                                                        }), Object(r.jsx)("div", {
                                                            className: "in_list",
                                                            children: Object(r.jsxs)("ul", {
                                                                children: [Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Email is a crucial channel in any marketing."
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Curious what to say? How to say it?"
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Whether you\u2019re kicking off a new ca mpaign."
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Habitasse per feugiat aliquam luctus accumsan curae"
                                                                    })
                                                                })]
                                                            })
                                                        }), Object(r.jsx)("p", {
                                                            children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                })]
                            }), Object(r.jsxs)("li", {
                                children: [Object(r.jsxs)("div", {
                                    className: "list_inner",
                                    onClick: v,
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "200",
                                    children: [Object(r.jsx)("img", {
                                        className: "svg",
                                        src: "img/svg/3.svg",
                                        alt: ""
                                    }), Object(r.jsx)("div", {
                                        className: "service_title",
                                        children: Object(r.jsx)("h3", {
                                            children: "Mobile App Design"
                                        })
                                    }), Object(r.jsxs)("div", {
                                        className: "learn_more",
                                        children: ["Learn More", Object(r.jsx)("span", {})]
                                    })]
                                }), Object(r.jsx)(A.a, {
                                    isOpen: b,
                                    onRequestClose: v,
                                    contentLabel: "My dialog",
                                    className: "custom-modal",
                                    overlayClassName: "custom-overlay",
                                    closeTimeoutMS: 500,
                                    children: Object(r.jsxs)("div", {
                                        className: "beny_tm_modalbox_service",
                                        children: [Object(r.jsx)("button", {
                                            className: "close-modal",
                                            onClick: v,
                                            children: Object(r.jsx)("img", {
                                                src: "/img/svg/cancel.svg",
                                                alt: "close icon"
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "box_inner",
                                            children: Object(r.jsx)("div", {
                                                className: "description_wrap scrollable",
                                                children: Object(r.jsxs)("div", {
                                                    className: "popup_informations",
                                                    children: [Object(r.jsxs)("div", {
                                                        className: "image",
                                                        children: [Object(r.jsx)("img", {
                                                            src: "img/thumbs/4-3.jpg",
                                                            alt: ""
                                                        }), Object(r.jsx)("div", {
                                                            className: "main",
                                                            style: {
                                                                backgroundImage: "url(".concat("img/service/3.jpg", ")")
                                                            }
                                                        })]
                                                    }), Object(r.jsxs)("div", {
                                                        className: "description",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Mobile App Design Breakdown In Cinema 4D"
                                                        }), Object(r.jsx)("p", {
                                                            children: "Just because we can't get out and about like we normally would, doesn\u2019t mean we have to taking pictures. There\u2019s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                                                        }), Object(r.jsx)("p", {
                                                            children: "Most photographers love to shoot the unusual, and you don\u2019t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."
                                                        }), Object(r.jsx)("h3", {
                                                            children: "What Is Branding?"
                                                        }), Object(r.jsx)("p", {
                                                            children: "Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."
                                                        }), Object(r.jsx)("div", {
                                                            className: "in_list",
                                                            children: Object(r.jsxs)("ul", {
                                                                children: [Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Email is a crucial channel in any marketing."
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Curious what to say? How to say it?"
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Whether you\u2019re kicking off a new ca mpaign."
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Habitasse per feugiat aliquam luctus accumsan curae"
                                                                    })
                                                                })]
                                                            })
                                                        }), Object(r.jsx)("p", {
                                                            children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                })]
                            }), Object(r.jsxs)("li", {
                                children: [Object(r.jsxs)("div", {
                                    className: "list_inner",
                                    onClick: N,
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "300",
                                    children: [Object(r.jsx)("img", {
                                        className: "svg",
                                        src: "img/svg/4.svg",
                                        alt: ""
                                    }), Object(r.jsx)("div", {
                                        className: "service_title",
                                        children: Object(r.jsx)("h3", {
                                            children: "Ui/Ux Consultancy"
                                        })
                                    }), Object(r.jsxs)("div", {
                                        className: "learn_more",
                                        children: ["Learn More", Object(r.jsx)("span", {})]
                                    })]
                                }), Object(r.jsx)(A.a, {
                                    isOpen: u,
                                    onRequestClose: N,
                                    contentLabel: "My dialog",
                                    className: "custom-modal",
                                    overlayClassName: "custom-overlay",
                                    closeTimeoutMS: 500,
                                    children: Object(r.jsxs)("div", {
                                        className: "beny_tm_modalbox_service",
                                        children: [Object(r.jsx)("button", {
                                            className: "close-modal",
                                            onClick: N,
                                            children: Object(r.jsx)("img", {
                                                src: "/img/svg/cancel.svg",
                                                alt: "close icon"
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "box_inner",
                                            children: Object(r.jsx)("div", {
                                                className: "description_wrap scrollable",
                                                children: Object(r.jsxs)("div", {
                                                    className: "popup_informations",
                                                    children: [Object(r.jsxs)("div", {
                                                        className: "image",
                                                        children: [Object(r.jsx)("img", {
                                                            src: "img/thumbs/4-3.jpg",
                                                            alt: ""
                                                        }), Object(r.jsx)("div", {
                                                            className: "main",
                                                            style: {
                                                                backgroundImage: "url(".concat("img/service/4.jpg", ")")
                                                            }
                                                        })]
                                                    }), Object(r.jsxs)("div", {
                                                        className: "description",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Ui/Ux Consultancy is the trending Part of Graphics"
                                                        }), Object(r.jsx)("p", {
                                                            children: "Just because we can't get out and about like we normally would, doesn\u2019t mean we have to taking pictures. There\u2019s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                                                        }), Object(r.jsx)("p", {
                                                            children: "Most photographers love to shoot the unusual, and you don\u2019t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."
                                                        }), Object(r.jsx)("h3", {
                                                            children: "What Is Branding?"
                                                        }), Object(r.jsx)("p", {
                                                            children: "Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."
                                                        }), Object(r.jsx)("div", {
                                                            className: "in_list",
                                                            children: Object(r.jsxs)("ul", {
                                                                children: [Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Email is a crucial channel in any marketing."
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Curious what to say? How to say it?"
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Whether you\u2019re kicking off a new ca mpaign."
                                                                    })
                                                                }), Object(r.jsx)("li", {
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Habitasse per feugiat aliquam luctus accumsan curae"
                                                                    })
                                                                })]
                                                            })
                                                        }), Object(r.jsx)("p", {
                                                            children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                T = t(19),
                P = t.n(T),
                D = t(16),
                L = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        t = s[0],
                        a = s[1],
                        c = Object(i.useState)(!1),
                        n = Object(d.a)(c, 2),
                        l = n[0],
                        o = n[1];
                    return Object(r.jsx)(D.b, {
                        children: Object(r.jsx)("div", {
                            className: "portfolio_list",
                            children: Object(r.jsxs)("ul", {
                                className: "gallery_zoom",
                                children: [Object(r.jsx)(P.a, {
                                    channel: "youtube",
                                    autoplay: !0,
                                    isOpen: t,
                                    videoId: "1gyTUHP6ne8",
                                    onClose: function() {
                                        return a(!1)
                                    }
                                }), Object(r.jsx)(P.a, {
                                    channel: "vimeo",
                                    autoplay: !0,
                                    isOpen: l,
                                    videoId: "100171151",
                                    onClose: function() {
                                        return o(!1)
                                    }
                                }), Object(r.jsx)("li", {
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    children: Object(r.jsxs)("div", {
                                        className: "list_inner video",
                                        children: [Object(r.jsxs)("a", {
                                            href: "https://www.youtube.com/watch?v=1gyTUHP6ne8",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "title",
                                            children: [Object(r.jsx)("h3", {
                                                children: "Aura Dione "
                                            }), Object(r.jsx)("span", {
                                                children: "Youtube Shoot"
                                            })]
                                        }), Object(r.jsx)("img", {
                                            src: "img/portfolio/3.jpg",
                                            alt: "Youtube Shoot",
                                            onClick: function() {
                                                return a(!0)
                                            }
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "100",
                                    children: Object(r.jsxs)("div", {
                                        className: "list_inner video",
                                        children: [Object(r.jsxs)("a", {
                                            href: "https://player.vimeo.com/video/100171151?h=92d8f1bd0a",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "title",
                                            children: [Object(r.jsx)("h3", {
                                                children: "Jupita Rine "
                                            }), Object(r.jsx)("span", {
                                                children: "Vimeo Shoot"
                                            })]
                                        }), Object(r.jsx)("img", {
                                            src: "img/portfolio/2.jpg",
                                            alt: "Vimeo Shoot",
                                            onClick: function() {
                                                return o(!0)
                                            }
                                        })]
                                    })
                                }), Object(r.jsxs)(D.a, {
                                    children: [Object(r.jsx)("li", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: Object(r.jsxs)("div", {
                                            className: "list_inner",
                                            children: [Object(r.jsxs)("a", {
                                                className: "title",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
                                                children: [Object(r.jsx)("h3", {
                                                    children: "Ave Simone"
                                                }), Object(r.jsx)("span", {
                                                    children: "Dribbble Shoot"
                                                })]
                                            }), Object(r.jsx)("a", {
                                                href: "img/portfolio/1.jpg",
                                                children: Object(r.jsx)("img", {
                                                    src: "img/portfolio/1.jpg",
                                                    alt: "Dribbble Shoot"
                                                })
                                            })]
                                        })
                                    }), Object(r.jsx)("li", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "300",
                                        children: Object(r.jsxs)("div", {
                                            className: "list_inner",
                                            children: [Object(r.jsxs)("a", {
                                                className: "title",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://dribbble.com/shots/16530034-Tokyo-Personal-Portfolio-React-Template-RTL",
                                                children: [Object(r.jsx)("h3", {
                                                    children: "Kelly Smith"
                                                }), Object(r.jsx)("span", {
                                                    children: "Dribbble Shoot"
                                                })]
                                            }), Object(r.jsx)("a", {
                                                href: "img/portfolio/4.jpg",
                                                children: Object(r.jsx)("img", {
                                                    src: "img/portfolio/4.jpg",
                                                    alt: "Dribbble Shoot"
                                                })
                                            })]
                                        })
                                    }), Object(r.jsx)("li", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "400",
                                        children: Object(r.jsxs)("div", {
                                            className: "list_inner",
                                            children: [Object(r.jsxs)("a", {
                                                className: "title",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
                                                children: [Object(r.jsx)("h3", {
                                                    children: "Duru Sweet"
                                                }), Object(r.jsx)("span", {
                                                    children: "Dribbble Shoot"
                                                })]
                                            }), Object(r.jsx)("a", {
                                                href: "img/portfolio/5.jpg",
                                                children: Object(r.jsx)("img", {
                                                    src: "img/portfolio/5.jpg",
                                                    alt: "Dribbble Shoot"
                                                })
                                            })]
                                        })
                                    }), Object(r.jsx)("li", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "500",
                                        children: Object(r.jsxs)("div", {
                                            className: "list_inner",
                                            children: [Object(r.jsxs)("a", {
                                                className: "title",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://www.facebook.com/ibthemes",
                                                children: [Object(r.jsx)("h3", {
                                                    children: "Lisa Kotlins"
                                                }), Object(r.jsx)("span", {
                                                    children: "Facebook Shoot"
                                                })]
                                            }), Object(r.jsx)("a", {
                                                href: "img/portfolio/6.jpg",
                                                children: Object(r.jsx)("img", {
                                                    src: "img/portfolio/6.jpg",
                                                    alt: "Facebook Shoot"
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                M = t(14),
                H = t(54),
                B = t.n(H);
            t(121), t(122);

            function F() {
                return Object(r.jsx)(B.a, Object(M.a)(Object(M.a)({}, {
                    dots: !1,
                    arrow: !0,
                    infinite: !0,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !1,
                    responsive: [{
                        breakpoint: 575,
                        settings: {
                            arrow: !1,
                            autoplay: !0
                        }
                    }]
                }), {}, {
                    children: [{
                        img: "1",
                        desc: "Hi, I\u2019m Alvara Atkins and I am designer &amp; developer who dream making the world better place by products. I am also very active for international clients.",
                        name: "Alvara Atkins",
                        designation: "Marketing Manager"
                    }, {
                        img: "2",
                        desc: "This is outstanding work. Everything I needed to do has been done by the makers. I really like this template and more importantly my clients are blown away by it.",
                        name: "Fabian Gattuzo",
                        designation: "Photographer"
                    }, {
                        img: "3",
                        desc: "These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy that I've purchased this liscense!!!",
                        name: "Alizee Bonita",
                        designation: "App Developer"
                    }].map((function(e, s) {
                        return Object(r.jsx)("div", {
                            className: "item",
                            children: Object(r.jsxs)("div", {
                                className: "list_inner",
                                children: [Object(r.jsxs)("div", {
                                    className: "left",
                                    children: [Object(r.jsx)("img", {
                                        src: "img/thumbs/1-1.jpg",
                                        alt: "tumb"
                                    }), Object(r.jsx)("div", {
                                        className: "main",
                                        style: {
                                            backgroundImage: "url(".concat("" + "img/testimonials/".concat(e.img, ".jpg"), ")")
                                        }
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "right",
                                    children: [Object(r.jsx)("img", {
                                        className: "svg",
                                        src: "img/svg/quote.svg",
                                        alt: "quote"
                                    }), Object(r.jsx)("p", {
                                        className: "text",
                                        children: e.desc
                                    }), Object(r.jsxs)("div", {
                                        className: "details",
                                        children: [Object(r.jsx)("h3", {
                                            className: "name",
                                            children: Object(r.jsx)("span", {
                                                children: e.name
                                            })
                                        }), Object(r.jsx)("span", {
                                            className: "job",
                                            children: e.designation
                                        })]
                                    })]
                                })]
                            })
                        }, s)
                    }))
                }))
            }
            A.a.setAppElement("#root");
            var R = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        t = s[0],
                        a = s[1],
                        c = Object(i.useState)(!1),
                        n = Object(d.a)(c, 2),
                        l = n[0],
                        o = n[1],
                        j = Object(i.useState)(!1),
                        h = Object(d.a)(j, 2),
                        b = h[0],
                        m = h[1];

                    function O() {
                        a(!t)
                    }

                    function u() {
                        o(!l)
                    }

                    function p() {
                        m(!b)
                    }
                    return Object(r.jsx)(r.Fragment, {
                        children: Object(r.jsx)("div", {
                            className: "news_list",
                            children: Object(r.jsxs)("ul", {
                                children: [Object(r.jsx)("li", {
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    children: Object(r.jsxs)("div", {
                                        className: "list_inner",
                                        children: [Object(r.jsxs)("div", {
                                            className: "image",
                                            onClick: O,
                                            children: [Object(r.jsx)("img", {
                                                src: "/img/placeholders/4-3.jpg",
                                                alt: "thumb"
                                            }), Object(r.jsx)("div", {
                                                className: "main",
                                                style: {
                                                    backgroundImage: "url(".concat("img/news/1.jpg", ")")
                                                }
                                            })]
                                        }), Object(r.jsxs)("div", {
                                            className: "details",
                                            children: [Object(r.jsxs)("span", {
                                                children: ["April 07,2021 ", Object(r.jsx)("a", {
                                                    href: "#",
                                                    children: "Travel Landing"
                                                })]
                                            }), Object(r.jsx)("h3", {
                                                className: "title",
                                                onClick: O,
                                                children: "Dostie Memorie"
                                            })]
                                        }), Object(r.jsx)(A.a, {
                                            isOpen: t,
                                            onRequestClose: O,
                                            contentLabel: "My dialog",
                                            className: "custom-modal",
                                            overlayClassName: "custom-overlay",
                                            closeTimeoutMS: 500,
                                            children: Object(r.jsxs)("div", {
                                                className: "beny_tm_modalbox_news",
                                                children: [Object(r.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: O,
                                                    children: Object(r.jsx)("img", {
                                                        src: "/img/svg/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(r.jsx)("div", {
                                                    className: "box_inner",
                                                    children: Object(r.jsxs)("div", {
                                                        className: "description_wrap scrollable",
                                                        children: [Object(r.jsxs)("div", {
                                                            className: "image",
                                                            children: [Object(r.jsx)("img", {
                                                                src: "/img/placeholders/4-3.jpg",
                                                                alt: "thumb"
                                                            }), Object(r.jsx)("div", {
                                                                className: "main",
                                                                style: {
                                                                    backgroundImage: "url(".concat("img/news/1.jpg", ")")
                                                                }
                                                            })]
                                                        }), Object(r.jsxs)("div", {
                                                            className: "details",
                                                            children: [Object(r.jsxs)("span", {
                                                                children: ["April 07,2021 ", Object(r.jsx)("a", {
                                                                    href: "#",
                                                                    children: "Travel Landing"
                                                                })]
                                                            }), Object(r.jsx)("h3", {
                                                                className: "title",
                                                                onClick: O,
                                                                children: "Dostie Memorie"
                                                            })]
                                                        }), Object(r.jsxs)("div", {
                                                            className: "main_content",
                                                            children: [Object(r.jsxs)("div", {
                                                                className: "descriptions",
                                                                children: [Object(r.jsx)("p", {
                                                                    className: "bigger",
                                                                    children: "Just because we can't get out and about like we normally would, doesn\u2019t mean we have to stop taking pictures. There\u2019s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                                                                }), Object(r.jsx)("p", {
                                                                    children: "Most photographers love to shoot the unusual, and you don\u2019t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over."
                                                                }), Object(r.jsx)("p", {
                                                                    children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                                                                }), Object(r.jsx)("div", {
                                                                    className: "quotebox",
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                                                                    })
                                                                }), Object(r.jsx)("p", {
                                                                    children: "Pretend everything is new and that you haven\u2019t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off."
                                                                }), Object(r.jsx)("p", {
                                                                    children: "The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again."
                                                                })]
                                                            }), Object(r.jsxs)("div", {
                                                                className: "news_share ",
                                                                children: [Object(r.jsx)("span", {
                                                                    children: "Share:"
                                                                }), Object(r.jsx)(x, {})]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "150",
                                    children: Object(r.jsxs)("div", {
                                        className: "list_inner",
                                        children: [Object(r.jsxs)("div", {
                                            className: "image",
                                            onClick: u,
                                            children: [Object(r.jsx)("img", {
                                                src: "/img/placeholders/4-3.jpg",
                                                alt: "thumb"
                                            }), Object(r.jsx)("div", {
                                                className: "main",
                                                style: {
                                                    backgroundImage: "url(".concat("img/news/2.jpg", ")")
                                                }
                                            })]
                                        }), Object(r.jsxs)("div", {
                                            className: "details",
                                            children: [Object(r.jsxs)("span", {
                                                children: ["April 07,2021 ", Object(r.jsx)("a", {
                                                    href: "#",
                                                    children: "Inspiration"
                                                })]
                                            }), Object(r.jsx)("h3", {
                                                className: "title",
                                                onClick: u,
                                                children: "Chul Urina"
                                            })]
                                        }), Object(r.jsx)(A.a, {
                                            isOpen: l,
                                            onRequestClose: u,
                                            contentLabel: "My dialog",
                                            className: "custom-modal",
                                            overlayClassName: "custom-overlay",
                                            closeTimeoutMS: 500,
                                            children: Object(r.jsxs)("div", {
                                                className: "beny_tm_modalbox_news",
                                                children: [Object(r.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: u,
                                                    children: Object(r.jsx)("img", {
                                                        src: "/img/svg/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(r.jsx)("div", {
                                                    className: "box_inner",
                                                    children: Object(r.jsxs)("div", {
                                                        className: "description_wrap scrollable",
                                                        children: [Object(r.jsxs)("div", {
                                                            className: "image",
                                                            children: [Object(r.jsx)("img", {
                                                                src: "/img/placeholders/4-3.jpg",
                                                                alt: "thumb"
                                                            }), Object(r.jsx)("div", {
                                                                className: "main",
                                                                style: {
                                                                    backgroundImage: "url(".concat("img/news/2.jpg", ")")
                                                                }
                                                            })]
                                                        }), Object(r.jsxs)("div", {
                                                            className: "details",
                                                            children: [Object(r.jsxs)("span", {
                                                                children: ["April 07,2021 ", Object(r.jsx)("a", {
                                                                    href: "#",
                                                                    children: "Inspiration"
                                                                })]
                                                            }), Object(r.jsx)("h3", {
                                                                className: "title",
                                                                children: "Chul Urina"
                                                            })]
                                                        }), Object(r.jsxs)("div", {
                                                            className: "main_content",
                                                            children: [Object(r.jsxs)("div", {
                                                                className: "descriptions",
                                                                children: [Object(r.jsx)("p", {
                                                                    className: "bigger",
                                                                    children: "Just because we can't get out and about like we normally would, doesn\u2019t mean we have to stop taking pictures. There\u2019s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                                                                }), Object(r.jsx)("p", {
                                                                    children: "Most photographers love to shoot the unusual, and you don\u2019t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over."
                                                                }), Object(r.jsx)("p", {
                                                                    children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                                                                }), Object(r.jsx)("div", {
                                                                    className: "quotebox",
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                                                                    })
                                                                }), Object(r.jsx)("p", {
                                                                    children: "Pretend everything is new and that you haven\u2019t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off."
                                                                }), Object(r.jsx)("p", {
                                                                    children: "The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again."
                                                                })]
                                                            }), Object(r.jsxs)("div", {
                                                                className: "news_share",
                                                                children: [Object(r.jsx)("span", {
                                                                    children: "Share:"
                                                                }), Object(r.jsx)(x, {})]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "300",
                                    children: Object(r.jsxs)("div", {
                                        className: "list_inner",
                                        children: [Object(r.jsxs)("div", {
                                            className: "image",
                                            onClick: p,
                                            children: [Object(r.jsx)("img", {
                                                src: "/img/placeholders/4-3.jpg",
                                                alt: "thumb"
                                            }), Object(r.jsx)("div", {
                                                className: "main",
                                                style: {
                                                    backgroundImage: "url(".concat("img/news/3.jpg", ")")
                                                }
                                            })]
                                        }), Object(r.jsxs)("div", {
                                            className: "details",
                                            children: [Object(r.jsxs)("span", {
                                                children: ["April 07,2021 ", Object(r.jsx)("a", {
                                                    href: "#",
                                                    children: "Inspiration"
                                                })]
                                            }), Object(r.jsx)("h3", {
                                                className: "title",
                                                onClick: p,
                                                children: "Chul Urina"
                                            })]
                                        }), Object(r.jsx)(A.a, {
                                            isOpen: b,
                                            onRequestClose: p,
                                            contentLabel: "My dialog",
                                            className: "custom-modal",
                                            overlayClassName: "custom-overlay",
                                            closeTimeoutMS: 500,
                                            children: Object(r.jsxs)("div", {
                                                className: "beny_tm_modalbox_news",
                                                children: [Object(r.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: p,
                                                    children: Object(r.jsx)("img", {
                                                        src: "/img/svg/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(r.jsx)("div", {
                                                    className: "box_inner",
                                                    children: Object(r.jsxs)("div", {
                                                        className: "description_wrap scrollable",
                                                        children: [Object(r.jsxs)("div", {
                                                            className: "image",
                                                            children: [Object(r.jsx)("img", {
                                                                src: "/img/placeholders/4-3.jpg",
                                                                alt: "thumb"
                                                            }), Object(r.jsx)("div", {
                                                                className: "main",
                                                                style: {
                                                                    backgroundImage: "url(".concat("img/news/3.jpg", ")")
                                                                }
                                                            })]
                                                        }), Object(r.jsxs)("div", {
                                                            className: "details",
                                                            children: [Object(r.jsxs)("span", {
                                                                children: ["April 07,2021 ", Object(r.jsx)("a", {
                                                                    href: "#",
                                                                    children: "Inspiration"
                                                                })]
                                                            }), Object(r.jsx)("h3", {
                                                                className: "title",
                                                                children: "Chul Urina"
                                                            })]
                                                        }), Object(r.jsxs)("div", {
                                                            className: "main_content",
                                                            children: [Object(r.jsxs)("div", {
                                                                className: "descriptions",
                                                                children: [Object(r.jsx)("p", {
                                                                    className: "bigger",
                                                                    children: "Just because we can't get out and about like we normally would, doesn\u2019t mean we have to stop taking pictures. There\u2019s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                                                                }), Object(r.jsx)("p", {
                                                                    children: "Most photographers love to shoot the unusual, and you don\u2019t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over."
                                                                }), Object(r.jsx)("p", {
                                                                    children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                                                                }), Object(r.jsx)("div", {
                                                                    className: "quotebox",
                                                                    children: Object(r.jsx)("p", {
                                                                        children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                                                                    })
                                                                }), Object(r.jsx)("p", {
                                                                    children: "Pretend everything is new and that you haven\u2019t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off."
                                                                }), Object(r.jsx)("p", {
                                                                    children: "The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again."
                                                                })]
                                                            }), Object(r.jsxs)("div", {
                                                                className: "news_share",
                                                                children: [Object(r.jsx)("span", {
                                                                    children: "Share:"
                                                                }), Object(r.jsx)(x, {})]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                q = t(57),
                E = function() {
                    var e = Object(q.a)(),
                        s = e.register,
                        t = e.handleSubmit,
                        a = e.formState.errors;
                    return Object(r.jsx)(r.Fragment, {
                        children: Object(r.jsxs)("form", {
                            className: "contact_form",
                            onSubmit: t((function(e, s) {
                                s.target.reset(), console.log("Message submited: " + JSON.stringify(e))
                            })),
                            children: [Object(r.jsxs)("div", {
                                className: "first_row",
                                children: [Object(r.jsx)("input", Object(M.a)(Object(M.a)({}, s("name", {
                                    required: !0
                                })), {}, {
                                    type: "text",
                                    placeholder: "Name *"
                                })), a.name && "required" === a.name.type && Object(r.jsx)("span", {
                                    className: "invalid-feedback",
                                    children: "Name is required"
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "second",
                                children: [Object(r.jsxs)("div", {
                                    className: "left",
                                    children: [Object(r.jsx)("input", Object(M.a)(Object(M.a)({}, s("email", {
                                        required: "Email is Required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Entered value does not match email format"
                                        }
                                    }, {
                                        required: !0
                                    })), {}, {
                                        type: "email",
                                        placeholder: "Email *"
                                    })), a.email && Object(r.jsx)("span", {
                                        className: "invalid-feedback",
                                        children: a.email.message
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "right",
                                    children: [Object(r.jsx)("input", Object(M.a)(Object(M.a)({}, s("subject", {
                                        required: !0
                                    })), {}, {
                                        placeholder: "Subject *"
                                    })), a.subject && Object(r.jsx)("span", {
                                        className: "invalid-feedback",
                                        children: "Subject is required."
                                    })]
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "third",
                                children: [Object(r.jsx)("textarea", Object(M.a)(Object(M.a)({}, s("message", {
                                    required: !0
                                })), {}, {
                                    placeholder: "Message *"
                                })), a.message && Object(r.jsx)("span", {
                                    className: "invalid-feedback",
                                    children: "Message is required."
                                })]
                            }), Object(r.jsx)("div", {
                                className: "beny_tm_button",
                                children: Object(r.jsx)("button", {
                                    type: "submit",
                                    className: "color",
                                    children: Object(r.jsxs)("span", {
                                        className: "wrapper",
                                        children: [Object(r.jsx)("span", {
                                            className: "first",
                                            children: "Submit"
                                        }), Object(r.jsx)("span", {
                                            className: "second",
                                            children: "Submit"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                U = function() {
                    return Object(r.jsx)(r.Fragment, {
                        children: Object(r.jsx)("div", {
                            className: "inner",
                            children: Object(r.jsx)("div", {
                                className: "copy",
                                children: Object(r.jsxs)("p", {
                                    children: ["\xa9 ", (new Date).getFullYear(), " by", " ", Object(r.jsx)("a", {
                                        href: "https://themeforest.net/user/ib-themes",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "ib-themes"
                                    }), ". All rights reserved."]
                                })
                            })
                        })
                    })
                },
                Y = function() {
                    return Object(r.jsxs)("ul", {
                        children: [Object(r.jsxs)("li", {
                            children: [Object(r.jsx)("img", {
                                className: "svg",
                                src: "img/svg/phone.svg",
                                alt: ""
                            }), Object(r.jsx)("a", {
                                href: "Tel: 7614123224",
                                children: "+44 1632 967704"
                            })]
                        }), Object(r.jsxs)("li", {
                            children: [Object(r.jsx)("img", {
                                className: "svg",
                                src: "img/svg/mail.svg",
                                alt: ""
                            }), Object(r.jsx)("span", {
                                children: Object(r.jsx)("a", {
                                    href: "mailto:ib-themes21@gmail.com",
                                    children: "your@gmail.com"
                                })
                            })]
                        }), Object(r.jsxs)("li", {
                            children: [Object(r.jsx)("img", {
                                className: "svg",
                                src: "img/svg/map.svg",
                                alt: ""
                            }), Object(r.jsxs)("span", {
                                children: ["245 King Street, Touterie Victoria", Object(r.jsx)("br", {}), " 8520 Australia"]
                            })]
                        })]
                    })
                },
                z = function() {
                    return document.body.classList.add("light"), Object(r.jsxs)("div", {
                        className: "home-light",
                        children: [Object(r.jsx)("div", {
                            className: "demo-fixed-wrapper",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "50",
                            children: Object(r.jsx)("button", {
                                className: "demo-button",
                                children: Object(r.jsx)(n.b, {
                                    to: "/",
                                    children: Object(r.jsx)("span", {
                                        className: "text",
                                        children: "Demos"
                                    })
                                })
                            })
                        }), Object(r.jsx)(m, {}), Object(r.jsx)(f, {}), Object(r.jsx)("div", {
                            className: "beny_tm_about",
                            id: "about",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "About Me"
                                    }), Object(r.jsx)("h2", {
                                        children: "About Me"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(S, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_services",
                            id: "service",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Services"
                                    }), Object(r.jsx)("h2", {
                                        children: "I provide wide range of digital services"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(I, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_portfolio",
                            id: "portfolio",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Portfolio"
                                    }), Object(r.jsx)("h2", {
                                        children: "My Portfolio"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(L, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_testimonials",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Testimonials"
                                    }), Object(r.jsx)("h2", {
                                        children: "What's Clients Say."
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "testimonials_list",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "100",
                                    children: Object(r.jsx)(F, {})
                                })]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_news",
                            id: "news",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Blogs"
                                    }), Object(r.jsx)("h2", {
                                        children: "Recent News"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(R, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_contact",
                            id: "contact",
                            children: Object(r.jsx)("div", {
                                className: "container",
                                children: Object(r.jsxs)("div", {
                                    className: "contact_inner",
                                    children: [Object(r.jsxs)("div", {
                                        className: "left",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        children: [Object(r.jsxs)("div", {
                                            className: "beny_tm_title_holder",
                                            children: [Object(r.jsx)("span", {
                                                children: "Contact"
                                            }), Object(r.jsx)("h2", {
                                                children: "Let's discuss your project"
                                            })]
                                        }), Object(r.jsx)("div", {
                                            className: "short_list",
                                            children: Object(r.jsx)(Y, {})
                                        })]
                                    }), Object(r.jsxs)("div", {
                                        className: "right",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "150",
                                        children: [Object(r.jsx)("div", {
                                            className: "title",
                                            children: Object(r.jsxs)("p", {
                                                children: ["I'm always open to discussing product", Object(r.jsx)("br", {}), Object(r.jsx)("span", {
                                                    children: "design work or partnerships."
                                                })]
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "fields",
                                            children: Object(r.jsx)(E, {})
                                        })]
                                    })]
                                })
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_copyright",
                            children: Object(r.jsx)("div", {
                                className: "container",
                                children: Object(r.jsx)(U, {})
                            })
                        })]
                    })
                },
                J = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        t = s[0],
                        a = s[1];
                    return window.addEventListener("scroll", (function() {
                        window.scrollY >= 120 ? a(!0) : a(!1)
                    })), Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)("div", {
                            className: t ? "beny_tm_topbar creative animate" : "beny_tm_topbar creative",
                            children: Object(r.jsx)("div", {
                                className: "in container",
                                children: Object(r.jsxs)("div", {
                                    className: "topbar_inner",
                                    children: [Object(r.jsx)("div", {
                                        className: "logo",
                                        children: Object(r.jsxs)(n.b, {
                                            to: "/",
                                            children: [Object(r.jsx)("img", {
                                                className: "light-img",
                                                src: "img/logo/light.png",
                                                alt: "brand"
                                            }), Object(r.jsx)("img", {
                                                className: "dark-img",
                                                src: "img/logo/dark.png",
                                                alt: "brand"
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "menu",
                                        children: Object(r.jsxs)(h.a, {
                                            className: "anchor_nav",
                                            items: ["home", "about", "service", "portfolio", "news", "contact"],
                                            currentClassName: "current",
                                            offset: -88,
                                            children: [Object(r.jsx)("li", {
                                                className: "current",
                                                children: Object(r.jsxs)("a", {
                                                    href: "#home",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Home"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Home"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#about",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "About"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "About"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#service",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Service"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Service"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#portfolio",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Portfolio"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Portfolio"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#news",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "News"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "News"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#contact",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Contact"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Contact"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsx)("a", {
                                                    href: "https://themeforest.net/checkout/from_item/33910000?license=regular",
                                                    children: Object(r.jsxs)("span", {
                                                        className: "wrapper",
                                                        children: [Object(r.jsx)("span", {
                                                            className: "first",
                                                            children: "Buy Now"
                                                        }), Object(r.jsx)("span", {
                                                            className: "second",
                                                            children: "Buy Now"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), Object(r.jsx)("div", {
                            className: "mobile-menu-wrapper",
                            children: Object(r.jsxs)(h.a, {
                                className: "mobile_menu-icon",
                                items: ["home", "about", "service", "portfolio", "news", "contact"],
                                currentClassName: "current",
                                offset: -65,
                                children: [Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#home",
                                        children: [Object(r.jsx)(b.e, {}), Object(r.jsx)("span", {
                                            children: "Home"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#about",
                                        children: [Object(r.jsx)(b.k, {}), Object(r.jsx)("span", {
                                            children: "About"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#service",
                                        children: [Object(r.jsx)(b.i, {}), Object(r.jsx)("span", {
                                            children: "Serivce"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#portfolio",
                                        children: [Object(r.jsx)(b.d, {}), Object(r.jsx)("span", {
                                            children: "Portfolio"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#news",
                                        children: [Object(r.jsx)(b.a, {}), Object(r.jsx)("span", {
                                            children: "News"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#contact",
                                        children: [Object(r.jsx)(b.h, {}), Object(r.jsx)("span", {
                                            children: "Contact"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                V = t(30),
                W = t(23),
                G = t.n(W),
                K = function() {
                    return Object(r.jsx)(r.Fragment, {
                        children: Object(r.jsx)(V.Parallax, {
                            bgImage: "img/slider/11.jpg",
                            strength: 500,
                            children: Object(r.jsxs)("div", {
                                className: "beny_tm_hero white-text-wrapper",
                                id: "home",
                                children: [Object(r.jsxs)("div", {
                                    className: "background d-none d-sm-block",
                                    children: [Object(r.jsx)("div", {
                                        className: "image",
                                        style: {
                                            backgroundImage: "url(".concat("img/slider/11.jpg", ")")
                                        }
                                    }), Object(r.jsx)("div", {
                                        className: "overlay"
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "go-to go-to-next",
                                    children: Object(r.jsx)("a", {
                                        href: "#about",
                                        children: Object(r.jsx)("span", {})
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "container",
                                    children: Object(r.jsx)("div", {
                                        className: "content",
                                        children: Object(r.jsxs)("div", {
                                            className: "content_inner",
                                            children: [Object(r.jsx)("h3", {
                                                className: "name",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                children: "Hello, I'm John"
                                            }), Object(r.jsxs)("h1", {
                                                className: "job",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "100",
                                                children: ["I'm a", " ", Object(r.jsx)("span", {
                                                    className: "typer-toper",
                                                    children: Object(r.jsx)(G.a, {
                                                        loop: !0,
                                                        typeSpeed: 200,
                                                        backSpeed: 150,
                                                        strings: ["Photographer", "Designer", "Developer"],
                                                        smartBackspace: !0,
                                                        shuffle: !1,
                                                        backDelay: 1,
                                                        fadeOut: !1,
                                                        fadeOutDelay: 100,
                                                        loopCount: 0,
                                                        showCursor: !0,
                                                        cursorChar: "|"
                                                    })
                                                })]
                                            }), Object(r.jsx)("p", {
                                                className: "text",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "150",
                                                children: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."
                                            }), Object(r.jsx)("div", {
                                                className: "beny_tm_button",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "250",
                                                children: Object(r.jsx)("a", {
                                                    className: "anchor",
                                                    href: "img/about/cv.webp",
                                                    download: !0,
                                                    children: Object(r.jsxs)("span", {
                                                        className: "wrapper",
                                                        children: [Object(r.jsx)("span", {
                                                            className: "first",
                                                            children: "Download CV"
                                                        }), Object(r.jsx)("span", {
                                                            className: "second",
                                                            children: "Download CV"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "shape",
                                    children: Object(r.jsx)("img", {
                                        src: "/img/slider/shape.svg",
                                        alt: "shape"
                                    })
                                })]
                            })
                        })
                    })
                },
                X = function() {
                    return Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsxs)("div", {
                            className: "about_inner",
                            children: [Object(r.jsxs)("div", {
                                className: "left",
                                children: [Object(r.jsx)("img", {
                                    src: "img/thumbs/1-1.jpg",
                                    alt: ""
                                }), Object(r.jsx)("div", {
                                    className: "image",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    style: {
                                        backgroundImage: "url(".concat("img/about/6.jpg", ")")
                                    }
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "right",
                                "data-aos": "fade-right",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "50",
                                children: [Object(r.jsxs)("div", {
                                    className: "short",
                                    children: [Object(r.jsx)("h3", {
                                        children: "John Smith"
                                    }), Object(r.jsxs)("h5", {
                                        children: ["A Lead ", Object(r.jsx)("span", {
                                            className: "theme-color",
                                            children: " Photographer "
                                        }), "based in ", Object(r.jsx)("span", {
                                            className: "theme-color",
                                            children: "America"
                                        })]
                                    }), Object(r.jsx)("p", {
                                        children: "I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio"
                                    }), Object(r.jsx)("div", {
                                        className: "about_social",
                                        children: Object(r.jsx)(x, {})
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "extra",
                                    children: [Object(r.jsx)("h3", {
                                        className: "title",
                                        children: "Personal Info"
                                    }), Object(r.jsx)("div", {
                                        className: "list",
                                        children: Object(r.jsxs)("ul", {
                                            children: [Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Name :"
                                                    }), " John Smith"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Address :"
                                                    }), " H-400 - Path2UK"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Age :"
                                                    }), " 21 Years"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Phone :"
                                                    }), " +12345667"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Nationality :"
                                                    }), " USA"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Email :"
                                                    }), " yourmail@gmail.com"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Freelance :"
                                                    }), " Available"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Languages :"
                                                    }), " French, English"]
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        }), Object(r.jsx)(k, {})]
                    })
                },
                Q = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        t = s[0],
                        a = s[1],
                        c = Object(i.useState)(!1),
                        n = Object(d.a)(c, 2),
                        l = n[0],
                        o = n[1];
                    return Object(r.jsx)(D.b, {
                        children: Object(r.jsx)("div", {
                            className: "portfolio_list",
                            children: Object(r.jsxs)(v.d, {
                                children: [Object(r.jsxs)(v.b, {
                                    className: "creative-portfolio-list",
                                    children: [Object(r.jsx)(v.a, {
                                        children: "All"
                                    }), Object(r.jsx)(v.a, {
                                        children: "Vimeo"
                                    }), Object(r.jsx)(v.a, {
                                        children: "Youtube"
                                    }), Object(r.jsx)(v.a, {
                                        children: "Dribbble"
                                    })]
                                }), Object(r.jsx)(v.c, {
                                    children: Object(r.jsxs)("ul", {
                                        className: "gallery_zoom",
                                        children: [Object(r.jsx)(P.a, {
                                            channel: "youtube",
                                            autoplay: !0,
                                            isOpen: t,
                                            videoId: "1gyTUHP6ne8",
                                            onClose: function() {
                                                return a(!1)
                                            }
                                        }), Object(r.jsx)(P.a, {
                                            channel: "vimeo",
                                            autoplay: !0,
                                            isOpen: l,
                                            videoId: "100171151",
                                            onClose: function() {
                                                return o(!1)
                                            }
                                        }), Object(r.jsx)("li", {
                                            "data-aos": "fade-right",
                                            "data-aos-duration": "1200",
                                            children: Object(r.jsxs)("div", {
                                                className: "list_inner video",
                                                children: [Object(r.jsxs)("a", {
                                                    href: "https://www.youtube.com/watch?v=1gyTUHP6ne8",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "title",
                                                    children: [Object(r.jsx)("h3", {
                                                        children: "Aura Dione "
                                                    }), Object(r.jsx)("span", {
                                                        children: "Youtube Shoot"
                                                    })]
                                                }), Object(r.jsx)("img", {
                                                    src: "img/portfolio/3.jpg",
                                                    alt: "Youtube Shoot",
                                                    onClick: function() {
                                                        return a(!0)
                                                    }
                                                })]
                                            })
                                        }), Object(r.jsx)("li", {
                                            "data-aos": "fade-right",
                                            "data-aos-duration": "1200",
                                            "data-aos-delay": "100",
                                            children: Object(r.jsxs)("div", {
                                                className: "list_inner video",
                                                children: [Object(r.jsxs)("a", {
                                                    href: "https://player.vimeo.com/video/100171151?h=92d8f1bd0a",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "title",
                                                    children: [Object(r.jsx)("h3", {
                                                        children: "Jupita Rine "
                                                    }), Object(r.jsx)("span", {
                                                        children: "Vimeo Shoot"
                                                    })]
                                                }), Object(r.jsx)("img", {
                                                    src: "img/portfolio/2.jpg",
                                                    alt: "Vimeo Shoot",
                                                    onClick: function() {
                                                        return o(!0)
                                                    }
                                                })]
                                            })
                                        }), Object(r.jsxs)(D.a, {
                                            children: [Object(r.jsx)("li", {
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "200",
                                                children: Object(r.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [Object(r.jsxs)("a", {
                                                        className: "title",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Ave Simone"
                                                        }), Object(r.jsx)("span", {
                                                            children: "Dribbble Shoot"
                                                        })]
                                                    }), Object(r.jsx)("a", {
                                                        href: "img/portfolio/1.jpg",
                                                        children: Object(r.jsx)("img", {
                                                            src: "img/portfolio/1.jpg",
                                                            alt: "Dribbble Shoot"
                                                        })
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "300",
                                                children: Object(r.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [Object(r.jsxs)("a", {
                                                        className: "title",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://dribbble.com/shots/16530034-Tokyo-Personal-Portfolio-React-Template-RTL",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Kelly Smith"
                                                        }), Object(r.jsx)("span", {
                                                            children: "Dribbble Shoot"
                                                        })]
                                                    }), Object(r.jsx)("a", {
                                                        href: "img/portfolio/4.jpg",
                                                        children: Object(r.jsx)("img", {
                                                            src: "img/portfolio/4.jpg",
                                                            alt: "Dribbble Shoot"
                                                        })
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "400",
                                                children: Object(r.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [Object(r.jsxs)("a", {
                                                        className: "title",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Duru Sweet"
                                                        }), Object(r.jsx)("span", {
                                                            children: "Dribbble Shoot"
                                                        })]
                                                    }), Object(r.jsx)("a", {
                                                        href: "img/portfolio/5.jpg",
                                                        children: Object(r.jsx)("img", {
                                                            src: "img/portfolio/5.jpg",
                                                            alt: "Dribbble Shoot"
                                                        })
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "500",
                                                children: Object(r.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [Object(r.jsxs)("a", {
                                                        className: "title",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://www.facebook.com/ibthemes",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Lisa Kotlins"
                                                        }), Object(r.jsx)("span", {
                                                            children: "Facebook Shoot"
                                                        })]
                                                    }), Object(r.jsx)("a", {
                                                        href: "img/portfolio/6.jpg",
                                                        children: Object(r.jsx)("img", {
                                                            src: "img/portfolio/6.jpg",
                                                            alt: "Facebook Shoot"
                                                        })
                                                    })]
                                                })
                                            })]
                                        })]
                                    })
                                }), Object(r.jsx)(v.c, {
                                    children: Object(r.jsxs)("ul", {
                                        className: "gallery_zoom",
                                        children: [Object(r.jsx)(P.a, {
                                            channel: "vimeo",
                                            autoplay: !0,
                                            isOpen: l,
                                            videoId: "100171151",
                                            onClose: function() {
                                                return o(!1)
                                            }
                                        }), Object(r.jsx)("li", {
                                            "data-aos": "fade-right",
                                            "data-aos-duration": "1200",
                                            "data-aos-delay": "100",
                                            children: Object(r.jsxs)("div", {
                                                className: "list_inner video",
                                                children: [Object(r.jsxs)("a", {
                                                    href: "https://player.vimeo.com/video/100171151?h=92d8f1bd0a",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "title",
                                                    children: [Object(r.jsx)("h3", {
                                                        children: "Jupita Rine "
                                                    }), Object(r.jsx)("span", {
                                                        children: "Vimeo Shoot"
                                                    })]
                                                }), Object(r.jsx)("img", {
                                                    src: "img/portfolio/2.jpg",
                                                    alt: "Vimeo Shoot",
                                                    onClick: function() {
                                                        return o(!0)
                                                    }
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(r.jsx)(v.c, {
                                    children: Object(r.jsxs)("ul", {
                                        className: "gallery_zoom",
                                        children: [Object(r.jsx)(P.a, {
                                            channel: "youtube",
                                            autoplay: !0,
                                            isOpen: t,
                                            videoId: "1gyTUHP6ne8",
                                            onClose: function() {
                                                return a(!1)
                                            }
                                        }), Object(r.jsx)("li", {
                                            "data-aos": "fade-right",
                                            "data-aos-duration": "1200",
                                            children: Object(r.jsxs)("div", {
                                                className: "list_inner video",
                                                children: [Object(r.jsxs)("a", {
                                                    href: "https://www.youtube.com/watch?v=1gyTUHP6ne8",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "title",
                                                    children: [Object(r.jsx)("h3", {
                                                        children: "Aura Dione "
                                                    }), Object(r.jsx)("span", {
                                                        children: "Youtube Shoot"
                                                    })]
                                                }), Object(r.jsx)("img", {
                                                    src: "img/portfolio/3.jpg",
                                                    alt: "Youtube Shoot",
                                                    onClick: function() {
                                                        return a(!0)
                                                    }
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(r.jsx)(v.c, {
                                    children: Object(r.jsx)("ul", {
                                        className: "gallery_zoom",
                                        children: Object(r.jsxs)(D.a, {
                                            children: [Object(r.jsx)("li", {
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                children: Object(r.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [Object(r.jsxs)("a", {
                                                        className: "title",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Ave Simone"
                                                        }), Object(r.jsx)("span", {
                                                            children: "Dribbble Shoot"
                                                        })]
                                                    }), Object(r.jsx)("a", {
                                                        href: "img/portfolio/1.jpg",
                                                        children: Object(r.jsx)("img", {
                                                            src: "img/portfolio/1.jpg",
                                                            alt: "Dribbble Shoot"
                                                        })
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "100",
                                                children: Object(r.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [Object(r.jsxs)("a", {
                                                        className: "title",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://dribbble.com/shots/16530034-Tokyo-Personal-Portfolio-React-Template-RTL",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Kelly Smith"
                                                        }), Object(r.jsx)("span", {
                                                            children: "Dribbble Shoot"
                                                        })]
                                                    }), Object(r.jsx)("a", {
                                                        href: "img/portfolio/4.jpg",
                                                        children: Object(r.jsx)("img", {
                                                            src: "img/portfolio/4.jpg",
                                                            alt: "Dribbble Shoot"
                                                        })
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                "data-aos": "fade-right",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "200",
                                                children: Object(r.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [Object(r.jsxs)("a", {
                                                        className: "title",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
                                                        children: [Object(r.jsx)("h3", {
                                                            children: "Duru Sweet"
                                                        }), Object(r.jsx)("span", {
                                                            children: "Dribbble Shoot"
                                                        })]
                                                    }), Object(r.jsx)("a", {
                                                        href: "img/portfolio/5.jpg",
                                                        children: Object(r.jsx)("img", {
                                                            src: "img/portfolio/5.jpg",
                                                            alt: "Dribbble Shoot"
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                Z = function() {
                    return document.body.classList.add("light"), Object(r.jsxs)("div", {
                        className: "home-light",
                        children: [Object(r.jsx)("div", {
                            className: "demo-fixed-wrapper",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "50",
                            children: Object(r.jsx)("button", {
                                className: "demo-button",
                                children: Object(r.jsx)(n.b, {
                                    to: "/",
                                    children: Object(r.jsx)("span", {
                                        className: "text",
                                        children: "Demos"
                                    })
                                })
                            })
                        }), Object(r.jsx)(J, {}), Object(r.jsx)(K, {}), Object(r.jsx)("div", {
                            className: "beny_tm_about",
                            id: "about",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "About Me"
                                    }), Object(r.jsx)("h2", {
                                        children: "About Me"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(X, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_services",
                            id: "service",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Services"
                                    }), Object(r.jsx)("h2", {
                                        children: "I provide wide range of digital services"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(I, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_portfolio",
                            id: "portfolio",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Portfolio"
                                    }), Object(r.jsx)("h2", {
                                        children: "Creative Portfolio"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(Q, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_testimonials",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Testimonials"
                                    }), Object(r.jsx)("h2", {
                                        children: "What's Clients Say."
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "testimonials_list",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "100",
                                    children: Object(r.jsx)(F, {})
                                })]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_news",
                            id: "news",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Blogs"
                                    }), Object(r.jsx)("h2", {
                                        children: "Recent News"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(R, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_contact",
                            id: "contact",
                            children: Object(r.jsx)("div", {
                                className: "container",
                                children: Object(r.jsxs)("div", {
                                    className: "contact_inner",
                                    children: [Object(r.jsxs)("div", {
                                        className: "left",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        children: [Object(r.jsxs)("div", {
                                            className: "beny_tm_title_holder",
                                            children: [Object(r.jsx)("span", {
                                                children: "Contact"
                                            }), Object(r.jsx)("h2", {
                                                children: "Let's discuss your project"
                                            })]
                                        }), Object(r.jsx)("div", {
                                            className: "short_list",
                                            children: Object(r.jsx)(Y, {})
                                        })]
                                    }), Object(r.jsxs)("div", {
                                        className: "right",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "150",
                                        children: [Object(r.jsx)("div", {
                                            className: "title",
                                            children: Object(r.jsxs)("p", {
                                                children: ["I'm always open to discussing product", Object(r.jsx)("br", {}), Object(r.jsx)("span", {
                                                    children: "design work or partnerships."
                                                })]
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "fields",
                                            children: Object(r.jsx)(E, {})
                                        })]
                                    })]
                                })
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_copyright",
                            children: Object(r.jsx)("div", {
                                className: "container",
                                children: Object(r.jsx)(U, {})
                            })
                        })]
                    })
                },
                $ = function() {
                    return Object(r.jsx)(r.Fragment, {
                        children: Object(r.jsx)(V.Parallax, {
                            bgImage: "img/slider/10.jpg",
                            strength: 500,
                            children: Object(r.jsxs)("div", {
                                className: "beny_tm_hero ",
                                id: "home",
                                children: [Object(r.jsxs)("div", {
                                    className: "background d-none d-sm-block",
                                    children: [Object(r.jsx)("div", {
                                        className: "image",
                                        style: {
                                            backgroundImage: "url(".concat("img/slider/10.jpg", ")")
                                        }
                                    }), Object(r.jsx)("div", {
                                        className: "overlay"
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "go-to go-to-next",
                                    children: Object(r.jsx)("a", {
                                        href: "#about",
                                        children: Object(r.jsx)("span", {})
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "container",
                                    children: Object(r.jsx)("div", {
                                        className: "content",
                                        children: Object(r.jsxs)("div", {
                                            className: "content_inner",
                                            children: [Object(r.jsx)("h3", {
                                                className: "name",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                children: "Hello I'm"
                                            }), Object(r.jsx)("h1", {
                                                className: "job",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "50",
                                                children: "Tahlia McGrath"
                                            }), Object(r.jsx)("h2", {
                                                className: "typer",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "100",
                                                children: Object(r.jsx)(G.a, {
                                                    loop: !0,
                                                    typeSpeed: 100,
                                                    backSpeed: 60,
                                                    strings: ["Top Level Freelancer", "Fulltime Youtuber", " Hobby is Writting"],
                                                    smartBackspace: !0,
                                                    shuffle: !1,
                                                    backDelay: 1,
                                                    fadeOut: !1,
                                                    fadeOutDelay: 100,
                                                    loopCount: 0,
                                                    showCursor: !0,
                                                    cursorChar: "|"
                                                })
                                            }), Object(r.jsx)("p", {
                                                className: "text",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "150",
                                                children: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."
                                            }), Object(r.jsx)("div", {
                                                className: "beny_tm_button",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1200",
                                                "data-aos-delay": "200",
                                                children: Object(r.jsx)("a", {
                                                    className: "anchor",
                                                    href: "#about",
                                                    children: Object(r.jsxs)("span", {
                                                        className: "wrapper",
                                                        children: [Object(r.jsx)("span", {
                                                            className: "first",
                                                            children: "See Portfolio"
                                                        }), Object(r.jsx)("span", {
                                                            className: "second",
                                                            children: "See Portfolio"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "social",
                                    children: Object(r.jsx)(p, {})
                                })]
                            })
                        })
                    })
                },
                ee = function() {
                    return Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsxs)("div", {
                            className: "about_inner",
                            children: [Object(r.jsxs)("div", {
                                className: "left",
                                children: [Object(r.jsx)("img", {
                                    src: "img/thumbs/1-1.jpg",
                                    alt: ""
                                }), Object(r.jsx)("div", {
                                    className: "image",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    style: {
                                        backgroundImage: "url(".concat("img/about/9.jpg", ")")
                                    }
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "right",
                                "data-aos": "fade-right",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "50",
                                children: [Object(r.jsxs)("div", {
                                    className: "short",
                                    children: [Object(r.jsx)("h3", {
                                        children: " I'm Jess Jonassen"
                                    }), Object(r.jsxs)("h5", {
                                        children: ["A Lead ", Object(r.jsx)("span", {
                                            className: "theme-color",
                                            children: "UX & UI"
                                        }), " designer based in ", Object(r.jsx)("span", {
                                            className: "theme-color",
                                            children: "Canada"
                                        })]
                                    }), Object(r.jsx)("p", {
                                        children: "I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio"
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "extra",
                                    children: [Object(r.jsx)("h3", {
                                        className: "title",
                                        children: "Personal Info"
                                    }), Object(r.jsx)("div", {
                                        className: "list",
                                        children: Object(r.jsxs)("ul", {
                                            children: [Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Name :"
                                                    }), " Bany Naira"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Address :"
                                                    }), " H-400 - Path2UK"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Age :"
                                                    }), " 21 Years"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Phone :"
                                                    }), " +12345667"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Nationality :"
                                                    }), " USA"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Email :"
                                                    }), " yourmail@gmail.com"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Freelance :"
                                                    }), " Available"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Languages :"
                                                    }), " French, English"]
                                                })
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "beny_tm_button color-outline",
                                        children: Object(r.jsx)("a", {
                                            href: "img/about/cv.webp",
                                            download: !0,
                                            children: Object(r.jsxs)("span", {
                                                className: "wrapper",
                                                children: [Object(r.jsx)("span", {
                                                    className: "first",
                                                    children: "Download CV"
                                                }), Object(r.jsx)("span", {
                                                    className: "second",
                                                    children: "Download CV"
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), Object(r.jsx)(k, {})]
                    })
                },
                se = function() {
                    return document.body.classList.add("light"), Object(r.jsxs)("div", {
                        className: "home-light",
                        children: [Object(r.jsx)("div", {
                            className: "demo-fixed-wrapper",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "50",
                            children: Object(r.jsx)("button", {
                                className: "demo-button",
                                children: Object(r.jsx)(n.b, {
                                    to: "/",
                                    children: Object(r.jsx)("span", {
                                        className: "text",
                                        children: "Demos"
                                    })
                                })
                            })
                        }), Object(r.jsx)(m, {}), Object(r.jsx)($, {}), Object(r.jsx)("div", {
                            className: "beny_tm_about",
                            id: "about",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "About Me"
                                    }), Object(r.jsx)("h2", {
                                        children: "About Me"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(ee, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_services",
                            id: "service",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Services"
                                    }), Object(r.jsx)("h2", {
                                        children: "I provide wide range of digital services"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(I, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_portfolio",
                            id: "portfolio",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Portfolio"
                                    }), Object(r.jsx)("h2", {
                                        children: "My Portfolio"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(L, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_testimonials",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Testimonials"
                                    }), Object(r.jsx)("h2", {
                                        children: "What's Clients Say."
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "testimonials_list",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "100",
                                    children: Object(r.jsx)(F, {})
                                })]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_news",
                            id: "news",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Blogs"
                                    }), Object(r.jsx)("h2", {
                                        children: "Recent News"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(R, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_contact",
                            id: "contact",
                            children: Object(r.jsx)("div", {
                                className: "container",
                                children: Object(r.jsxs)("div", {
                                    className: "contact_inner",
                                    children: [Object(r.jsxs)("div", {
                                        className: "left",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        children: [Object(r.jsxs)("div", {
                                            className: "beny_tm_title_holder",
                                            children: [Object(r.jsx)("span", {
                                                children: "Contact"
                                            }), Object(r.jsx)("h2", {
                                                children: "Let's discuss your project"
                                            })]
                                        }), Object(r.jsx)("div", {
                                            className: "short_list",
                                            children: Object(r.jsx)(Y, {})
                                        })]
                                    }), Object(r.jsxs)("div", {
                                        className: "right",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "150",
                                        children: [Object(r.jsx)("div", {
                                            className: "title",
                                            children: Object(r.jsxs)("p", {
                                                children: ["I'm always open to discussing product", Object(r.jsx)("br", {}), Object(r.jsx)("span", {
                                                    children: "design work or partnerships."
                                                })]
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "fields",
                                            children: Object(r.jsx)(E, {})
                                        })]
                                    })]
                                })
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_copyright",
                            children: Object(r.jsx)("div", {
                                className: "container",
                                children: Object(r.jsx)(U, {})
                            })
                        })]
                    })
                },
                te = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        t = s[0],
                        a = s[1];
                    return window.addEventListener("scroll", (function() {
                        window.scrollY >= 80 ? a(!0) : a(!1)
                    })), Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)("div", {
                            className: t ? "beny_tm_topbar animate" : "beny_tm_topbar",
                            children: Object(r.jsx)("div", {
                                className: "in",
                                children: Object(r.jsxs)("div", {
                                    className: "topbar_inner",
                                    children: [Object(r.jsx)("div", {
                                        className: "logo",
                                        children: Object(r.jsx)(n.b, {
                                            to: "/",
                                            children: Object(r.jsx)("img", {
                                                src: "img/logo/light.png",
                                                alt: "brand"
                                            })
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "menu",
                                        children: Object(r.jsxs)(h.a, {
                                            className: "anchor_nav",
                                            items: ["home", "about", "service", "portfolio", "news", "contact"],
                                            currentClassName: "current",
                                            offset: -88,
                                            children: [Object(r.jsx)("li", {
                                                className: "current",
                                                children: Object(r.jsxs)("a", {
                                                    href: "#home",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Home"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Home"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#about",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "About"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "About"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#service",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Service"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Service"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#portfolio",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Portfolio"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Portfolio"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#news",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "News"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "News"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("a", {
                                                    href: "#contact",
                                                    children: [Object(r.jsx)("span", {
                                                        className: "first",
                                                        children: "Contact"
                                                    }), Object(r.jsx)("span", {
                                                        className: "second",
                                                        children: "Contact"
                                                    })]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsx)("a", {
                                                    href: "https://themeforest.net/checkout/from_item/33910000?license=regular",
                                                    children: Object(r.jsxs)("span", {
                                                        className: "wrapper",
                                                        children: [Object(r.jsx)("span", {
                                                            className: "first",
                                                            children: "Buy Now"
                                                        }), Object(r.jsx)("span", {
                                                            className: "second",
                                                            children: "Buy Now"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), Object(r.jsx)("div", {
                            className: "mobile-menu-wrapper",
                            children: Object(r.jsxs)(h.a, {
                                className: "mobile_menu-icon",
                                items: ["home", "about", "service", "portfolio", "news", "contact"],
                                currentClassName: "current",
                                offset: -65,
                                children: [Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#home",
                                        children: [Object(r.jsx)(b.e, {}), Object(r.jsx)("span", {
                                            children: "Home"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#about",
                                        children: [Object(r.jsx)(b.k, {}), Object(r.jsx)("span", {
                                            children: "About"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#service",
                                        children: [Object(r.jsx)(b.i, {}), Object(r.jsx)("span", {
                                            children: "Serivce"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#portfolio",
                                        children: [Object(r.jsx)(b.d, {}), Object(r.jsx)("span", {
                                            children: "Portfolio"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#news",
                                        children: [Object(r.jsx)(b.a, {}), Object(r.jsx)("span", {
                                            children: "News"
                                        })]
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsxs)("a", {
                                        href: "#contact",
                                        children: [Object(r.jsx)(b.h, {}), Object(r.jsx)("span", {
                                            children: "Contact"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                ae = function() {
                    return Object(r.jsxs)("div", {
                        className: "beny_tm_hero",
                        id: "home",
                        children: [Object(r.jsxs)("div", {
                            className: "background",
                            children: [Object(r.jsx)("div", {
                                className: "image",
                                style: {
                                    backgroundImage: "url(".concat("img/slider/7.jpg", ")")
                                }
                            }), Object(r.jsx)("div", {
                                className: "overlay"
                            })]
                        }), Object(r.jsx)("div", {
                            className: "go-to go-to-next",
                            children: Object(r.jsx)("a", {
                                href: "#about",
                                children: Object(r.jsx)("span", {})
                            })
                        }), Object(r.jsx)("div", {
                            className: "container",
                            children: Object(r.jsx)("div", {
                                className: "content",
                                children: Object(r.jsxs)("div", {
                                    className: "content_inner",
                                    children: [Object(r.jsx)("h3", {
                                        className: "name",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: "Hi! I'm Astro"
                                    }), Object(r.jsxs)("h1", {
                                        className: "job",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "50",
                                        children: [Object(r.jsx)("span", {
                                            className: "typer-toper",
                                            children: Object(r.jsx)(G.a, {
                                                loop: !0,
                                                typeSpeed: 150,
                                                backSpeed: 60,
                                                strings: [" Visual Artist", "Designer", "Developer"],
                                                smartBackspace: !0,
                                                shuffle: !1,
                                                backDelay: 1,
                                                fadeOut: !1,
                                                fadeOutDelay: 100,
                                                loopCount: 0,
                                                showCursor: !0,
                                                cursorChar: "|"
                                            })
                                        }), Object(r.jsx)("br", {}), " ", Object(r.jsx)("span", {
                                            children: "Based In California."
                                        })]
                                    }), Object(r.jsx)("p", {
                                        className: "text",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: "I'm developer focused on crafting user\u2011friendly experiences, I am passionate about building excellent software that improves the lives of those around me."
                                    }), Object(r.jsx)("div", {
                                        className: "mobile_social",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "150",
                                        children: Object(r.jsx)(x, {})
                                    }), Object(r.jsx)("div", {
                                        className: "beny_tm_button",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: Object(r.jsx)("a", {
                                            className: "anchor",
                                            href: "#about",
                                            children: Object(r.jsxs)("span", {
                                                className: "wrapper",
                                                children: [Object(r.jsx)("span", {
                                                    className: "first",
                                                    children: "See Portfolio"
                                                }), Object(r.jsx)("span", {
                                                    className: "second",
                                                    children: "See Portfolio"
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        }), Object(r.jsx)("div", {
                            className: "social",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1200",
                            children: Object(r.jsx)(p, {})
                        })]
                    })
                },
                ce = function() {
                    return Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsxs)("div", {
                            className: "about_inner",
                            children: [Object(r.jsxs)("div", {
                                className: "left",
                                children: [Object(r.jsx)("img", {
                                    src: "img/thumbs/1-1.jpg",
                                    alt: ""
                                }), Object(r.jsx)("div", {
                                    className: "image",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    style: {
                                        backgroundImage: "url(".concat("img/about/7.jpg", ")")
                                    }
                                })]
                            }), Object(r.jsxs)("div", {
                                className: "right",
                                "data-aos": "fade-right",
                                "data-aos-duration": "1200",
                                "data-aos-delay": "50",
                                children: [Object(r.jsxs)("div", {
                                    className: "short",
                                    children: [Object(r.jsx)("h3", {
                                        children: "I'm Bany Astro"
                                    }), Object(r.jsxs)("h5", {
                                        children: ["A Lead ", Object(r.jsx)("span", {
                                            className: "theme-color",
                                            children: "Visual Artist "
                                        }), "based in ", Object(r.jsx)("span", {
                                            className: "theme-color",
                                            children: "California"
                                        })]
                                    }), Object(r.jsx)("p", {
                                        children: "I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio"
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "extra",
                                    children: [Object(r.jsx)("h3", {
                                        className: "title",
                                        children: "Personal Info"
                                    }), Object(r.jsx)("div", {
                                        className: "list",
                                        children: Object(r.jsxs)("ul", {
                                            children: [Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Name :"
                                                    }), " Bany Jara"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Address :"
                                                    }), " H-400 - Path2UK"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Age :"
                                                    }), " 21 Years"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Phone :"
                                                    }), " +12345667"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Nationality :"
                                                    }), " USA"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Email :"
                                                    }), " yourmail@gmail.com"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Freelance :"
                                                    }), " Available"]
                                                })
                                            }), Object(r.jsx)("li", {
                                                children: Object(r.jsxs)("p", {
                                                    children: [Object(r.jsx)("span", {
                                                        children: "Languages :"
                                                    }), " French, English"]
                                                })
                                            })]
                                        })
                                    }), Object(r.jsx)("div", {
                                        className: "beny_tm_button color-outline",
                                        children: Object(r.jsx)("a", {
                                            href: "img/about/cv.webp",
                                            download: !0,
                                            children: Object(r.jsxs)("span", {
                                                className: "wrapper",
                                                children: [Object(r.jsx)("span", {
                                                    className: "first",
                                                    children: "Download CV"
                                                }), Object(r.jsx)("span", {
                                                    className: "second",
                                                    children: "Download CV"
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), Object(r.jsx)(k, {})]
                    })
                },
                ie = function() {
                    return document.body.classList.add("dark"), Object(r.jsxs)("div", {
                        className: "home-light",
                        children: [Object(r.jsx)("div", {
                            className: "demo-fixed-wrapper",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "50",
                            children: Object(r.jsx)("button", {
                                className: "demo-button",
                                children: Object(r.jsx)(n.b, {
                                    to: "/",
                                    children: Object(r.jsx)("span", {
                                        className: "text",
                                        children: "Demos"
                                    })
                                })
                            })
                        }), Object(r.jsx)(te, {}), Object(r.jsx)(ae, {}), Object(r.jsx)("div", {
                            className: "beny_tm_about",
                            id: "about",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "About Me"
                                    }), Object(r.jsx)("h2", {
                                        children: "About Me"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(ce, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_services",
                            id: "service",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Services"
                                    }), Object(r.jsx)("h2", {
                                        children: "I provide wide range of digital services"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(I, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_portfolio",
                            id: "portfolio",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Portfolio"
                                    }), Object(r.jsx)("h2", {
                                        children: "My Portfolio"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(L, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_testimonials",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Testimonials"
                                    }), Object(r.jsx)("h2", {
                                        children: "What's Clients Say."
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "testimonials_list",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "100",
                                    children: Object(r.jsx)(F, {})
                                })]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_news",
                            id: "news",
                            children: Object(r.jsxs)("div", {
                                className: "container",
                                children: [Object(r.jsxs)("div", {
                                    className: "beny_tm_title_holder",
                                    children: [Object(r.jsx)("span", {
                                        children: "Blogs"
                                    }), Object(r.jsx)("h2", {
                                        children: "Recent News"
                                    }), Object(r.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
                                    })]
                                }), Object(r.jsx)(R, {})]
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_contact",
                            id: "contact",
                            children: Object(r.jsx)("div", {
                                className: "container",
                                children: Object(r.jsxs)("div", {
                                    className: "contact_inner",
                                    children: [Object(r.jsxs)("div", {
                                        className: "left",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        children: [Object(r.jsxs)("div", {
                                            className: "beny_tm_title_holder",
                                            children: [Object(r.jsx)("span", {
                                                children: "Contact"
                                            }), Object(r.jsx)("h2", {
                                                children: "Let's discuss your project"
                                            })]
                                        }), Object(r.jsx)("div", {
                                            className: "short_list",
                                            children: Object(r.jsx)(Y, {})
                                        })]
                                    }), Object(r.jsxs)("div", {
                                        className: "right",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "150",
                                        children: [Object(r.jsx)("div", {
                                            className: "title",
                                            children: Object(r.jsxs)("p", {
                                                children: ["I'm always open to discussing product", Object(r.jsx)("br", {}), Object(r.jsx)("span", {
                                                    children: "design work or partnerships."
                                                })]
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "fields",
                                            children: Object(r.jsx)(E, {})
                                        })]
                                    })]
                                })
                            })
                        }), Object(r.jsx)("div", {
                            className: "beny_tm_copyright",
                            children: Object(r.jsx)("div", {
                                className: "container",
                                children: Object(r.jsx)(U, {})
                            })
                        })]
                    })
                },
                ne = function() {
                    return Object(r.jsx)("div", {
                        className: "error_page",
                        children: Object(r.jsx)("div", {
                            className: "hero bg-image",
                            style: {
                                backgroundImage: "url(".concat("img/1.jpg", ")")
                            },
                            children: Object(r.jsxs)("div", {
                                className: "content",
                                children: [Object(r.jsx)("h1", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1200",
                                    children: "404!"
                                }), Object(r.jsx)("p", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "50",
                                    children: "The page you are looking for could not be found."
                                }), Object(r.jsx)("div", {
                                    class: "beny_tm_button color",
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "100",
                                    children: Object(r.jsx)(n.b, {
                                        to: "/",
                                        children: Object(r.jsxs)("span", {
                                            class: "wrapper",
                                            children: [Object(r.jsx)("span", {
                                                class: "first",
                                                children: "BACK TO HOME"
                                            }), Object(r.jsx)("span", {
                                                class: "second",
                                                children: "BACK TO HOME"
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                re = t(6);

            function le() {
                var e = Object(re.f)().pathname;
                return Object(i.useEffect)((function() {
                    window.scrollTo(0, 0)
                }), [e]), null
            }
            var oe = function() {
                return Object(r.jsx)(r.Fragment, {
                    children: Object(r.jsxs)(n.a, {
                        children: [Object(r.jsx)(le, {}), Object(r.jsxs)(re.c, {
                            children: [Object(r.jsx)(re.a, {
                                exact: !0,
                                path: "/",
                                component: o
                            }), Object(r.jsx)(re.a, {
                                path: "/home-light-animation",
                                component: z
                            }), Object(r.jsx)(re.a, {
                                path: "/home-dark-animation",
                                component: ie
                            }), Object(r.jsx)(re.a, {
                                path: "/home-typer-creative",
                                component: Z
                            }), Object(r.jsx)(re.a, {
                                path: "/home-parallax-typer",
                                component: se
                            }), Object(r.jsx)(re.a, {
                                component: ne
                            })]
                        })]
                    })
                })
            };

            function de() {
                var e = Object(i.useState)(!1),
                    s = Object(d.a)(e, 2),
                    t = s[0],
                    a = s[1];
                return Object(i.useEffect)((function() {
                    var e = function() {
                        window.pageYOffset > 500 ? a(!0) : a(!1)
                    };
                    return window.addEventListener("scroll", e),
                        function() {
                            return window.removeEventListener("scroll", e)
                        }
                }), []), Object(r.jsx)(r.Fragment, {
                    children: t && Object(r.jsx)("div", {
                        onClick: function() {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        },
                        className: "scroll_up my_totop",
                        "data-aos": "fade-left",
                        "data-aos-duration": "1200",
                        children: Object(r.jsx)("span", {
                            className: "beny_tm_totop"
                        })
                    })
                })
            }
            var je = t(55),
                he = t.n(je),
                be = t(56),
                me = t.n(be),
                Oe = (t(124), function() {
                    return Object(i.useEffect)((function() {
                        me.a.init()
                    }), []), Object(r.jsxs)("div", {
                        className: "beny_tm_all_wrap",
                        children: [Object(r.jsx)(he.a, {
                            innerSize: 8,
                            outerSize: 44,
                            color: "245, 34, 37",
                            outerAlpha: .3,
                            innerScale: .7,
                            outerScale: 1.2
                        }), Object(r.jsx)(de, {}), Object(r.jsx)(oe, {})]
                    })
                }),
                xe = function(e) {
                    e && e instanceof Function && t.e(3).then(t.bind(null, 128)).then((function(s) {
                        var t = s.getCLS,
                            a = s.getFID,
                            c = s.getFCP,
                            i = s.getLCP,
                            n = s.getTTFB;
                        t(e), a(e), c(e), i(e), n(e)
                    }))
                };
            t(125);
            c.a.render(Object(r.jsx)(Oe, {}), document.getElementById("root")), xe()
        }
    },
    [
        [126, 1, 2]
    ]
]);