webpackJsonp([0],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _React$createClass;

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(82);

__webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $html = document.documentElement;
var htmlW = $html.clientWidth;
var htmlH = $html.clientHeight;
var rem = htmlW / 15;
$html.style.fontSize = rem + 'px';
var $body = document.body;

var Main = _react2.default.createClass({
    displayName: 'Main',

    componentDidMount: function componentDidMount() {

        var $Hi = this.refs.Hi;
        var $main = this.refs.main;
        $main.style.height = htmlH / rem + 'rem';
        this.props.handleAnimation($Hi);
        this.props.handleResize($main);
    },
    render: function render() {
        var data = this.props.data;
        var $list = data.map(function (data) {
            return _react2.default.createElement(
                'a',
                { key: data.name, href: data.url },
                data.content
            );
        });
        return _react2.default.createElement(
            'div',
            { ref: 'main', className: 'main' },
            _react2.default.createElement(
                'h1',
                { className: 'Hi', ref: 'Hi' },
                'Hi.'
            ),
            $list
        );
    }
});
var LoginBar = _react2.default.createClass((_React$createClass = {
    displayName: 'LoginBar',

    getInitialState: function getInitialState() {
        return {
            show: false,
            name: '',
            pwd: '',
            rName: '',
            rPwd: '',
            rtPwd: ''
        };
    },
    componentDidMount: function componentDidMount(ev) {
        var $loginBtn = this.refs.loginBtn;
        this.props.handleAnimation($loginBtn);
    },
    handleChange: function handleChange(ev) {},
    handleShow: function handleShow(ev) {
        this.setState({
            show: !this.state.show,
            name: '',
            pwd: '',
            rName: '',
            rPwd: '',
            rtPwd: ''
        });
    }
}, _defineProperty(_React$createClass, 'handleChange', function handleChange(ev) {
    switch (ev.target.name) {
        case "username":
            this.setState({
                name: ev.target.value
            });
            break;
        case "pwd":
            this.setState({
                pwd: ev.target.value
            });
            break;
        case "rUsername":
            this.setState({
                rName: ev.target.value
            });
            break;
        case "rPwd":
            this.setState({
                rPwd: ev.target.value
            });
            break;
        case "rtPwd":
            this.setState({
                rtPwd: ev.target.value
            });
            break;
        default:
            console.log('没有此元素的匹配项');
    }
}), _defineProperty(_React$createClass, 'handleTurn', function handleTurn(ev) {
    this.setState({
        name: '',
        pwd: '',
        rName: '',
        rPwd: '',
        rtPwd: ''
    });
    var $loginWrap = this.refs.loginWrap;
    if (ev.target.className.indexOf('turnL') !== -1) {
        $loginWrap.className = 'login-wrap register-active';
    } else if (ev.target.className.indexOf('turnR') !== -1) {
        $loginWrap.className = 'login-wrap login-active';
    }
}), _defineProperty(_React$createClass, 'render', function render() {
    return _react2.default.createElement(
        'div',
        { className: 'loginbar' },
        _react2.default.createElement(
            'a',
            { onClick: this.handleShow, className: 'login-btn', ref: 'loginBtn', href: 'javascript:;' },
            'Login / Register'
        ),
        _react2.default.createElement(
            'a',
            { className: 'user-btn', href: '' },
            'Hello,Macro'
        ),
        _react2.default.createElement('a', { onClick: this.handleShow, className: !this.state.show ? "close-btn" : "close-btn active", href: 'javascript:;' }),
        _react2.default.createElement(
            'div',
            { ref: 'loginWrap', className: this.state.show ? "login-wrap login-active" : "login-wrap close" },
            _react2.default.createElement(
                'div',
                { className: 'register-form' },
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                        'h1',
                        { className: 'title' },
                        'Register'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { onChange: this.handleChange, maxLength: '9', value: this.state.rName, type: 'text', name: 'rUsername', placeholder: 'Username' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { onChange: this.handleChange, maxLength: '9', value: this.state.rPwd, type: 'password', name: 'rPwd', placeholder: 'Password' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { onChange: this.handleChange, maxLength: '9', value: this.state.rtPwd, type: 'password', name: 'rtPwd', placeholder: 'Again' })
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'submit', href: '' },
                        'Rigister'
                    )
                ),
                _react2.default.createElement('a', { onClick: this.handleTurn, className: 'turnR turn', href: 'javascript:;' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'login-form' },
                _react2.default.createElement('a', { onClick: this.handleTurn, className: 'turnL turn', href: 'javascript:;' }),
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                        'h1',
                        { className: 'title' },
                        'Login'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { onChange: this.handleChange, maxLength: '9', value: this.state.name, type: 'text', name: 'username', placeholder: 'Username' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { onChange: this.handleChange, maxLength: '9', value: this.state.pwd, type: 'password', name: 'pwd', placeholder: 'Password' })
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'submit', href: '' },
                        'Sign In'
                    )
                )
            )
        )
    );
}), _React$createClass));
var HeadNav = _react2.default.createClass({
    displayName: 'HeadNav',

    componentDidMount: function componentDidMount() {
        var $headNav = this.refs.headNav;
        this.props.handleAnimation($headNav);
    },
    render: function render() {
        var data = this.props.data;
        var $haedList = data.map(function (data) {
            return _react2.default.createElement(
                'li',
                { key: data.name },
                _react2.default.createElement(
                    'a',
                    { href: data.url },
                    data.content
                )
            );
        });
        return _react2.default.createElement(
            'div',
            { ref: 'headNav', className: 'head-nav' },
            _react2.default.createElement(
                'ul',
                { className: 'head-list' },
                $haedList
            )
        );
    }
});
var Header = _react2.default.createClass({
    displayName: 'Header',

    getInitialState: function getInitialState() {
        return {
            "headData": [{
                "name": "Blog",
                "content": "Blog",
                "url": ""
            }, {
                "name": "About",
                "content": "About",
                "url": ""
            }, {
                "name": "Contact",
                "content": "Contact",
                "url": ""
            }]
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'top' },
            _react2.default.createElement(
                'div',
                { className: 'header' },
                _react2.default.createElement(LoginBar, { handleAnimation: this.props.handleAnimation }),
                _react2.default.createElement(HeadNav, { handleAnimation: this.props.handleAnimation, data: this.state.headData })
            ),
            _react2.default.createElement(Main, { handleResize: this.props.handleResize, handleAnimation: this.props.handleAnimation, data: this.state.headData })
        );
    }
});

var ContentList = _react2.default.createClass({
    displayName: 'ContentList',

    componentDidMount: function componentDidMount() {},
    hanldeMouseOver: function hanldeMouseOver(ev) {
        var $listCld = ev.target;
        $listCld.style.transition = '.5s';
        $listCld.style.transform = "scale(1.15)";
    },
    handleMouseMove: function handleMouseMove(ev) {
        var count = this.props.count;
        var $listCld = ev.target;
        var cldOffsetLeft = $listCld.offsetLeft;
        var cldOffsetTop = $listCld.offsetTop;
        var cldOffsetWidth = $listCld.offsetWidth;
        var cldOffsetHeight = $listCld.offsetHeight;
        var offsetLeft = $listCld.parentNode.offsetLeft;
        var offsetTop = $listCld.parentNode.offsetTop;
        var L = ev.clientX - (cldOffsetLeft + offsetLeft + cldOffsetWidth / 2);
        var T = ev.pageY - (htmlH + cldOffsetTop + offsetTop + cldOffsetWidth / 2);
        $listCld.style.transform = "scale(1.10) rotateY(" + L * .05 + "deg) translateZ(50px) rotateX(" + -T * 0.1 + "deg) translateY(" + T * 0.05 + "px) ";
        $listCld.style.transition = '0s';
    },
    handleMouseOut: function handleMouseOut(ev) {
        ev.target.style.transition = '.5s';
        ev.target.style.transform = 'none';
    },
    render: function render() {
        var that = this;
        var data = this.props.data;
        var $contentList = data.map(function (data) {
            return _react2.default.createElement(
                'li',
                { key: data.name },
                _react2.default.createElement(
                    'a',
                    { ref: 'a', onMouseOver: that.hanldeMouseOver, onMouseMove: that.handleMouseMove, onMouseOut: that.handleMouseOut, href: data.url },
                    data.name
                )
            );
        });
        return _react2.default.createElement(
            'div',
            { className: 'content-list' },
            _react2.default.createElement(
                'ul',
                null,
                $contentList
            )
        );
    }
});
var CategoryBar = _react2.default.createClass({
    displayName: 'CategoryBar',

    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'category-bar' },
            _react2.default.createElement(
                'h1',
                { className: 'category-title' },
                'Category'
            ),
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '' },
                        'JavaScript'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '' },
                        'Prochip'
                    )
                )
            )
        );
    }
});
var Content = _react2.default.createClass({
    displayName: 'Content',

    componentDidMount: function componentDidMount() {
        var $content = this.refs.content;
        this.props.handleAnimation($content);
    },
    getInitialState: function getInitialState() {
        return {
            contentData: [{
                "category": "JavaScript",
                "name": "React入门教程",
                "url": ""
            }, {
                "category": "JavaScript",
                "name": "Redux入门教程",
                "url": ""
            }, {
                "category": "JavaScript",
                "name": "NodeJs入门教程",
                "url": ""
            }, {
                "category": "JavaScript",
                "name": "ECMAScript 6入门教程",
                "url": ""
            }, {
                "category": "Prochip",
                "name": "函数式编程入门教程",
                "url": ""
            }]
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { ref: 'content', className: 'content' },
            _react2.default.createElement(ContentList, { data: this.state.contentData }),
            _react2.default.createElement(CategoryBar, null)
        );
    }
});

var Footer = _react2.default.createClass({
    displayName: 'Footer',

    componentDidMount: function componentDidMount() {
        var $footer = this.refs.footer;
        this.props.handleAnimation($footer);
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { ref: 'footer', className: 'footer' },
            _react2.default.createElement(
                'div',
                { className: 'contact' },
                'QQ:107483419',
                _react2.default.createElement('br', null),
                '\u5FAE\u4FE1:1074863419'
            )
        );
    }
});
var Wrap = _react2.default.createClass({
    displayName: 'Wrap',

    componentDidMount: function componentDidMount() {
        var $wrap = this.refs.wrap;
        this.handleAnimation($wrap);
    },
    handleAnimation: function handleAnimation(obj) {
        var that = this;
        window.addEventListener('scroll', animation, false);
        function animation(ev) {
            var scrollT = 0;
            if ($html.scrollTop == 0) {
                scrollT = $body.scrollTop;
            } else if ($body.scrollTop == 0) {
                scrollT = $html.scrollTop;
            }

            switch (obj.className) {
                case "wrap":
                    if (scrollT <= 30) {
                        scrollT = 30;
                    } else if (scrollT >= 255) {
                        scrollT = 255;
                    }
                    obj.style.backgroundColor = "rgba(" + scrollT + "," + scrollT + "," + scrollT + ",1)";
                    break;
                case "content":
                    if (scrollT <= 30) {
                        scrollT = 30;
                    } else if (scrollT >= 255) {
                        scrollT = 255;
                    }
                    obj.style.backgroundColor = "rgba(" + scrollT + "," + scrollT + "," + scrollT + ",1)";
                    break;
                case "login-btn":
                    obj.style.color = "rgba(" + (255 - scrollT) + "," + (255 - scrollT) + "," + (255 - scrollT) + ",1)";
                    break;
                case "Hi":
                    obj.style.color = "rgba(" + (255 - scrollT) + "," + (255 - scrollT) + "," + (255 - scrollT) + ",1)";
                    break;
                case "head-nav":
                    if (scrollT > that.refs.wrap.scrollHeight * .25) {
                        obj.style.opacity = 1;
                    } else {
                        obj.style.opacity = 0;
                    }
                    break;
                case "footer":

                    break;
                default:
                    console.log("没有此元素的匹配项");
            }
        }
    },
    handleResize: function handleResize(obj) {
        var that = this;
        window.addEventListener('resize', function (ev) {
            htmlH = $html.clientHeight;
            htmlW = $html.clientWidth;
            rem = htmlW / 15;
            $html.style.fontSize = rem + 'px';
            switch (obj.className) {
                case "main":
                    obj.style.height = htmlH / rem + 'rem';
                    break;
                default:
                    console.log('没有此元素的匹配项');
            }
        }, false);
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { ref: 'wrap', className: 'wrap' },
            _react2.default.createElement(Header, { handleResize: this.handleResize, handleAnimation: this.handleAnimation }),
            _react2.default.createElement(Content, { handleAnimation: this.handleAnimation }),
            _react2.default.createElement(Footer, { handleAnimation: this.handleAnimation })
        );
    }
});
_reactDom2.default.render(_react2.default.createElement(Wrap, null), document.querySelector('.container'));

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[180]);
//# sourceMappingURL=home.js.map