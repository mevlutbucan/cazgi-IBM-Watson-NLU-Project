(this.webpackJsonpsentimentanalyzer=this.webpackJsonpsentimentanalyzer||[]).push([[0],{17:function(t,e,n){},25:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(2),a=n.n(s),r=n(18),c=n.n(r),o=(n(25),n(3)),l=n(4),u=n(6),d=n(5),j=n(8),m=n.n(j),b=n(19),x=(n(17),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)("table",{className:"table table-bordered",children:Object(i.jsx)("tbody",{children:Object.entries(this.props.emotions).map((function(t){var e=Object(b.a)(t,2),n=e[0],s=e[1];return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:s})]},n.id)}))})})})}}]),n}(a.a.Component)),p=(n(43),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={innercomp:Object(i.jsx)("textarea",{id:"textinput",rows:"4",cols:"50",placeholder:"TEXT"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderTextArea=function(){document.getElementById("textinput").value="","url"===t.state.mode&&t.setState({innercomp:Object(i.jsx)("textarea",{id:"textinput",rows:"4",cols:"50",placeholder:"TEXT"}),mode:"text",sentimentOutput:[]})},t.renderTextBox=function(){document.getElementById("textinput").value="","text"===t.state.mode&&t.setState({innercomp:Object(i.jsx)("textarea",{id:"textinput",rows:"1",cols:"50",placeholder:"URL"}),mode:"url",sentimentOutput:[]})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e=".";e="url"===t.state.mode?e+"/url/sentiment?url="+document.getElementById("textinput").value:e+"/text/sentiment?text="+document.getElementById("textinput").value,m.a.get(e).then((function(e){var n;n="string"===typeof e.data?Object(i.jsx)("div",{children:e.data}):"positive"===e.data.label?Object(i.jsx)("div",{style:{color:"green",fontSize:20},children:"POSITIVE"}):"negative"===e.data.label?Object(i.jsx)("div",{style:{color:"red",fontSize:20},children:"NEGATIVE"}):Object(i.jsx)("div",{style:{color:"orange",fontSize:20},children:"NEUTRAL"}),t.setState({sentimentOutput:n})}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e=".";e="url"===t.state.mode?e+"/url/emotion?url="+document.getElementById("textinput").value:e+"/text/emotion/?text="+document.getElementById("textinput").value,m.a.get(e).then((function(e){"string"===typeof e.data?t.setState({sentimentOutput:Object(i.jsx)("div",{children:e.data})}):t.setState({sentimentOutput:Object(i.jsx)(x,{emotions:e.data.emotion})})}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("button",{className:"btn btn-info",onClick:this.renderTextArea,children:"Text"}),Object(i.jsx)("button",{className:"btn btn-dark",onClick:this.renderTextBox,children:"URL"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),this.state.innercomp,Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(i.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(i.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(a.a.Component)),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),s(t),a(t),r(t)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),O()}},[[44,1,2]]]);
//# sourceMappingURL=main.9356d4a1.chunk.js.map