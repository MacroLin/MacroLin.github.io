import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/reset.less';
import '../../css/index.less';
var querystring = require('querystring');
var $html = document.documentElement;
var htmlW = $html.clientWidth;
var htmlH = $html.clientHeight;
var rem = htmlW / 15;
$html.style.fontSize = rem + 'px';
var $body = document.body;


var Main = React.createClass({
    componentDidMount: function() {

        var $Hi = this.refs.Hi;
        var $main = this.refs.main;
        $main.style.height = htmlH / rem + 'rem';
        this.props.handleAnimation($Hi);
        this.props.handleResize($main);
    },
    render: function() {
        var data = this.props.data;
        var $list = data.map(function(data) {
            return (

                <a key={data.name} href={data.url}>{data.content}</a>
            )
        });
        return (
            <div ref="main" className="main">
            <h1 className="Hi" ref='Hi'>Hi.</h1>
                {$list}
            </div>
        )

    }
});
var LoginBar = React.createClass({
    getInitialState: function() {
        return {
            show: false,
            name: '',
            pwd: '',
            repwd: '',
            message: '',
            login: false,
            accountName: 'World'
        }
    },
    componentDidMount: function(ev) {
        var $loginBtn = this.refs.loginBtn;
        var $accountName = this.refs.accountName;
        var $logOut = this.refs.logOut;
        this.props.handleAnimation($accountName);
        this.props.handleAnimation($loginBtn);
        this.props.handleAnimation($logOut);
    },
    handleShow: function(ev) {
        this.setState({
            show: !this.state.show,
            name: '',
            pwd: '',
            repwd: '',
            message: ''
        });

    },
    handleChange: function(ev) {
        switch (ev.target.name) {
        case "username":
            if (/^[a-zA-Z]*$/g.test(ev.target.value) && (ev.target.value.length <= 9)) {
                this.setState({
                    name: ev.target.value.replace(/\s/g, "")
                });
            }

            break;
        case "pwd":
            if (ev.target.value.length <= 16) {
                this.setState({
                    pwd: ev.target.value
                });
            }

            break;

        case "repwd":
            if (ev.target.value.length <= 16) {
                this.setState({
                    repwd: ev.target.value
                });
            }
            break;
        default:
            console.log('没有此元素的匹配项')
        }

    },
    handleTurn: function(ev) {
        this.setState({
            name: '',
            pwd: '',
            repwd: '',
            message: ''
        });
        var $loginWrap = this.refs.loginWrap;
        if ((ev.target.className.indexOf('turnL') && ev.target.parentNode.className.indexOf('turnL')) !== -1) {
            $loginWrap.className = 'login-wrap register-active';
        } else if ((ev.target.className.indexOf('turnR') && ev.target.parentNode.className.indexOf('turnR')) !== -1) {
            $loginWrap.className = 'login-wrap login-active';
        }


    },
    handleSubmit: function(ev) {
        var that = this;
        switch (ev.target.name) {
        case "regisSubmit":
            var reqData = {
                username: this.state.name,
                pwd: this.state.pwd,
                repwd: this.state.repwd
            }
            reqData = JSON.stringify(reqData);
            var httpReq = new XMLHttpRequest();
            httpReq.open('POST', '/api/user/register', true);
            httpReq.setRequestHeader('Content-Type', 'application/json');
            httpReq.onreadystatechange = function() {
                if (httpReq.readyState == 4) {
                    if (httpReq.status == 200) {

                        var resData = JSON.parse(httpReq.responseText);

                        that.setState({
                            message: resData.message
                        });
                        if (!resData.code) {
                            setTimeout(function() {
                                that.setState({
                                    name: '',
                                    pwd: '',
                                    repwd: '',
                                    message: ''
                                });
                                that.refs.loginWrap.className = 'login-wrap login-active';
                            }, 1000);
                        }
                    } else {
                        console.log(httpReq.statusText)
                    }
                }
            };
            httpReq.onerror = function(err) {
                console.log(httpReq.statusText)
            }

            httpReq.send(reqData);
            break;
        case "logSubmit":
            var reqData = {
                username: this.state.name,
                pwd: this.state.pwd,
            }
            reqData = JSON.stringify(reqData);
            var httpReq = new XMLHttpRequest();
            httpReq.open('POST', '/api/user/login', true);
            httpReq.setRequestHeader('Content-Type', 'application/json');
            httpReq.onreadystatechange = function() {

                if (httpReq.readyState == 4) {
                    if (httpReq.status == 200) {
                        var resData = JSON.parse(httpReq.responseText);

                        that.setState({
                            message: resData.message
                        });
                        if (!resData.code) {
                            setTimeout(function() {
                                that.setState({
                                    login: true,
                                    accountName: resData.userInfo.username,
                                    show:false
                                });
                                that.refs.loginWrap.style.display="none";
                            }, 1000)
                        }
                    } else {
                        console.log(httpReq.statusText)
                    }
                }
            }
            httpReq.onerror = function(err) {
                console.log(httpReq.statusText)
            }

            httpReq.send(reqData);
            break;
        default:
            console.log('没有此元素的匹配项')
        }

    },

    render: function() {
        return (
            <div className="loginbar">
                <a onClick={this.handleShow} className={this.state.login ? "login-btn" : "login-btn active"}  ref="loginBtn" href="javascript:;">Login / Register</a>
                <div className = {this.state.login ? "user-info active" : "user-info"}>
                    <a ref="accountName" className="user-btn" href="">{this.state.accountName}</a>
                    <a onClick={function(){this.refs.loginWrap.style.display="table";this.setState({show:false,login:false})}.bind(this)} ref="logOut" className ="logout-btn" href="javascript:;">Logout</a>
                </div>
                <a onClick={this.handleShow} className={!this.state.show ? "close-btn" : "close-btn active"} href="javascript:;"></a>
                <div  ref="loginWrap" className = {this.state.show ? "login-wrap login-active" : "login-wrap close"}>
                
                    <div  className="register-form">
                        
                        <form name="regisForm" >
                        <h1 className="title">Register</h1>
                            <div ><input onChange={this.handleChange} maxLength = "9" value={this.state.name}  type="text" name="username" placeholder="Username" /></div>
                            <div><input  onChange={this.handleChange} maxLength = "16" value={this.state.pwd} type="password" name="pwd" placeholder="Password" /></div>
                            <div><input  onChange={this.handleChange} maxLength = "16" value={this.state.repwd} type="password" name="repwd" placeholder="Again" /></div>
                            <div className="message">{this.state.message}</div>
                            <a name="regisSubmit" onClick = {this.handleSubmit}  className="submit" href="javascript:;">Rigister</a>
                        </form>
                        <a onClick={this.handleTurn} className="turnR turn" href="javascript:;"><span onClick={this.handleTurn}>Login</span></a>
                    </div>
                    <div className ="login-form">
                        <a onClick={this.handleTurn} className="turnL turn" href="javascript:;"><span onClick={this.handleTurn} >Register</span></a>
                        
                        <form name="logForm" >
                        <h1  className="title">Login</h1>
                            <div ><input onChange={this.handleChange} maxLength = "9" value={this.state.name} type="text" name="username" placeholder="Username" /></div>
                            <div ><input onChange={this.handleChange} maxLength = "16" value={this.state.pwd} type="password" name="pwd" placeholder="Password" /></div>
                            <div className="message">{this.state.message}</div>
                            <a name="logSubmit" onClick = {this.handleSubmit} className="submit" href="javascript:;">Sign In</a>
                        </form>

                    </div>
                   
                    
                </div>
            </div>
        )
    }
});
var HeadNav = React.createClass({
    componentDidMount: function() {
        var $headNav = this.refs.headNav;
        this.props.handleAnimation($headNav);
    },
    render: function() {
        var data = this.props.data;
        var $haedList = data.map(function(data) {
            return (
                <li key={data.name}>
                        <a href={data.url}>{data.content}</a>
                </li>
            )
        });
        return (
            <div ref="headNav" className="head-nav">
                <ul className="head-list">
                    {$haedList}
                </ul>
            </div>
        )
    }
});
var Header = React.createClass({
    getInitialState: function() {
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
        }
    },
    render: function() {
        return (
            <div className="top">
                <div className="header">
                <LoginBar handleAnimation = {this.props.handleAnimation} />
                <HeadNav handleAnimation = {this.props.handleAnimation} data = {this.state.headData} />
            </div>
            <Main handleResize={this.props.handleResize} handleAnimation = {this.props.handleAnimation} data = {this.state.headData} />
            </div>


        )
    }
});

var ContentList = React.createClass({
    componentDidMount: function() {},
    hanldeMouseOver: function(ev) {
        var $listCld = ev.target;
        $listCld.style.transition = '.5s';
        $listCld.style.transform = "scale(1.15)";
    },
    handleMouseMove: function(ev) {
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
    handleMouseOut: function(ev) {
        ev.target.style.transition = '.5s';
        ev.target.style.transform = 'none';

    },
    render: function() {
        var that = this;
        var data = this.props.data;
        var $contentList = data.map(function(data) {
            return (
                <li key = {data.name}><a  ref="a" onMouseOver = {that.hanldeMouseOver} onMouseMove={that.handleMouseMove} onMouseOut = {that.handleMouseOut}   href={data.url}>{data.name}</a></li>
            )
        });
        return (
            <div className="content-list">
                <ul>
                    {$contentList}
                </ul>
            </div>
        )
    }
});
var CategoryBar = React.createClass({
    render: function() {
        return (
            <div className = "category-bar">
                <h1 className="category-title">Category</h1>
                <ul>
                    <li>
                        <a href="">JavaScript</a>
                    </li>
                    <li>
                        <a href="">Prochip</a>
                    </li>

                </ul>
            </div>
        )
    }
});
var Content = React.createClass({

    getInitialState: function() {
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
        }
    },
    render: function() {
        return (
            <div ref="content" className="content">
                <ContentList  data = {this.state.contentData} />
                <CategoryBar />
            </div>
        )
    }
});

var Footer = React.createClass({
    componentDidMount: function() {
        var $footer = this.refs.footer;
    },
    render: function() {
        return (
            <div ref="footer" className='footer'>
                <div className="contact">QQ:107483419<br/>
                微信:1074863419</div>
            </div>
        )
    }
});
var Wrap = React.createClass({
    componentDidMount: function() {
        var $topWrap = this.refs.topWrap;
        this.handleAnimation($topWrap);
    },
    handleAnimation: function(obj) {
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
            case "top-wrap":
                if (scrollT <= 30) {
                    scrollT = 30
                } else if (scrollT >= 255) {
                    scrollT = 255
                }
                obj.style.backgroundColor = "rgba(" + scrollT + "," + scrollT + "," + scrollT + ",1)";
                break;

            case "login-btn active":
                obj.style.color = "rgba(" + (255 - scrollT) + "," + (255 - scrollT) + "," + (255 - scrollT) + ",1)";
                break;
            case "user-btn":
                obj.style.color = "rgba(" + (255 - scrollT) + "," + (255 - scrollT) + "," + (255 - scrollT) + ",1)";
            break;
            case "logout-btn":
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

            default:
                console.log("没有此元素的匹配项")
            }



        }
    },
    handleResize: function(obj) {
        var that = this;
        window.addEventListener('resize', function(ev) {
            htmlH = $html.clientHeight;
            htmlW = $html.clientWidth;
            rem = htmlW / 15;
            $html.style.fontSize = rem + 'px';
            switch (obj.className) {
            case "main":
                obj.style.height = htmlH / rem + 'rem';
                break;
            default:
                console.log('没有此元素的匹配项')
            }
        }, false);
    },
    render: function() {
        return (
            <div ref="wrap"  className="wrap">
                <div ref="topWrap" className = "top-wrap">
                    <Header handleResize={this.handleResize} handleAnimation = {this.handleAnimation}/>
                    <Content   />
                </div>
                
                <Footer />
            </div>
        )
    }
});
ReactDOM.render(<Wrap />, document.querySelector('.container'))