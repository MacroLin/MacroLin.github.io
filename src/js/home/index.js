import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/reset.less';
import '../../css/index.less';
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
            rName: '',
            rPwd: '',
            rtPwd: ''
        }
    },
    componentDidMount: function(ev) {
        var $loginBtn = this.refs.loginBtn;
        this.props.handleAnimation($loginBtn);
    },
    handleChange: function(ev) {},
    handleShow: function(ev) {
        this.setState({
            show: !this.state.show,
            name: '',
            pwd: '',
            rName: '',
            rPwd: '',
            rtPwd: ''
        });

    },
    handleChange: function(ev) {
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
            console.log('没有此元素的匹配项')
        }

    },
    handleTurn: function(ev) {
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


    },
    render: function() {
        return (
            <div className="loginbar">
                <a onClick={this.handleShow} className="login-btn"  ref="loginBtn" href="javascript:;">Login / Register</a>
                <a className="user-btn" href="">Hello,Macro</a>
                <a onClick={this.handleShow} className={!this.state.show ? "close-btn" : "close-btn active"} href="javascript:;"></a>
                <div  ref="loginWrap" className = {this.state.show ? "login-wrap login-active" : "login-wrap close"}>
                
                    <div  className="register-form">
                        
                        <form>
                        <h1 className="title">Register</h1>
                            <div ><input onChange={this.handleChange} maxLength = "9" value={this.state.rName}  type="text" name="rUsername" placeholder="Username" /></div>
                            <div><input  onChange={this.handleChange} maxLength = "9" value={this.state.rPwd} type="password" name="rPwd" placeholder="Password" /></div>
                            <div><input  onChange={this.handleChange} maxLength = "9" value={this.state.rtPwd} type="password" name="rtPwd" placeholder="Again" /></div>
                            <a  className="submit" href="">Rigister</a>
                        </form>
                        <a onClick={this.handleTurn} className="turnR turn" href="javascript:;"></a>
                    </div>
                    <div className ="login-form">
                        <a onClick={this.handleTurn} className="turnL turn" href="javascript:;"></a>
                        
                        <form>
                        <h1  className="title">Login</h1>
                            <div ><input onChange={this.handleChange} maxLength = "9" value={this.state.name} type="text" name="username" placeholder="Username" /></div>
                            <div ><input onChange={this.handleChange} maxLength = "9" value={this.state.pwd} type="password" name="pwd" placeholder="Password" /></div>
                            <a  className="submit" href="">Sign In</a>
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
        this.props.handleAnimation($footer);
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
                
                <Footer handleAnimation = {this.handleAnimation} />
            </div>
        )
    }
});
ReactDOM.render(<Wrap />, document.querySelector('.container'))