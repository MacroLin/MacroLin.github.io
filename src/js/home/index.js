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
	componentDidMount:function(){
		
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
	componentDidMount:function(){
		var $loginBtn = this.refs.loginBtn;
		this.props.handleAnimation($loginBtn);
	},
    render: function() {
        return (
            <div className="loginbar">
				<a  className="login-btn"  ref="loginBtn" href="">Login / Register</a>
			</div>
        )
    }
});
var HeadNav = React.createClass({
	componentDidMount:function(){
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
    render: function() {
        var data = this.props.data;
        var $contentList = data.map(function(data) {
            return (
                <li key = {data.name}><a href={data.url}>{data.name}</a></li>
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
            <div className="content">
				<ContentList data = {this.state.contentData} />
				<CategoryBar />
			</div>
        )
    }
});

var Wrap = React.createClass({
	componentDidMount:function(){
		var $wrap = this.refs.wrap;
		this.handleAnimation($wrap);
	},
    handleAnimation: function( obj) {
    	var that = this;
        window.addEventListener('scroll', function() {
        	var scrollT = $body.scrollTop;
        	switch(obj.className){
				case "wrap":
					if(scrollT <= 30){
						scrollT = 30
					}
					obj.style.background = "rgba(" + scrollT + "," + scrollT + "," + scrollT + ",1)";
				break;
				case "login-btn":
					obj.style.color = "rgba(" + (255-scrollT) + "," + (255-scrollT) + "," + (255-scrollT) + ",1)";
				break;
				case "Hi":
					obj.style.color = "rgba(" + (255-scrollT) + "," + (255-scrollT) + "," + (255-scrollT) + ",1)";
				break; 
				case "head-nav":
					if(scrollT > that.refs.wrap.scrollHeight*.25){
						obj.style.opacity = 1;
					}else{
						obj.style.opacity = 0;
					}
				break;
				default:
					console.log("没有此元素的匹配项")
        	}
            
            
        }, false);
    },
    handleResize:function(obj) {
    	var that = this;
		window.addEventListener('resize',function(ev){
			htmlH = $html.clientHeight;
   			htmlW = $html.clientWidth;
    		rem = htmlW / 15;
    		$html.style.fontSize = rem + 'px';
    		switch(obj.className){
    			case "main":
    				obj.style.height = htmlH / rem + 'rem';
    			break;
    			default:
    			console.log('没有此元素的匹配项')
    		}
		},false);
	},
    render: function() {
        return (
            <div ref="wrap"  className="wrap">
				<Header handleResize={this.handleResize} handleAnimation = {this.handleAnimation}/>
				<Content />
			</div>
        )
    }
});
ReactDOM.render(<Wrap />, document.querySelector('.container'))