webpackJsonp_name_([0],{934:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(940),u=r(o),a=t(394),i=r(a),f=t(391),l=r(f),p=t(248),d=r(p),s=t(249),c=r(s),_=t(393),y=r(_),v=t(392),h=r(v),m=(0,u.default)(['\nquery {\n  repository(owner:"shendepu", name: "moqui-graphql") {\n    name\n    description\n  }\n}\n'],['\nquery {\n  repository(owner:"shendepu", name: "moqui-graphql") {\n    name\n    description\n  }\n}\n']),b=t(5),q=r(b),g=t(221),M=t(309),P=r(M),j=function(e){function n(){return(0,d.default)(this,n),(0,y.default)(this,(n.__proto__||(0,l.default)(n)).apply(this,arguments))}return(0,h.default)(n,e),(0,c.default)(n,[{key:"render",value:function(){var e=this.props.repository;return q.default.createElement("div",null,(0,i.default)(e))}}]),n}(b.Component);j.propTypes={loading:b.PropTypes.bool,repository:b.PropTypes.object};var w=(0,P.default)(m),x=(0,g.graphql)(w,{props:function(e){var n=(e.ownProps,e.data),t=n.loading,r=n.repository;return{loading:t,repository:r}}})(j);n.default=x},937:function(e,n,t){e.exports={default:t(941),__esModule:!0}},938:function(e,n,t){e.exports={default:t(942),__esModule:!0}},940:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var o=t(937),u=r(o),a=t(938),i=r(a);n.default=function(e,n){return(0,i.default)((0,u.default)(e,{raw:{value:(0,i.default)(n)}}))}},941:function(e,n,t){t(943);var r=t(15).Object;e.exports=function(e,n){return r.defineProperties(e,n)}},942:function(e,n,t){t(944),e.exports=t(15).Object.freeze},943:function(e,n,t){var r=t(40);r(r.S+r.F*!t(49),"Object",{defineProperties:t(397)})},944:function(e,n,t){var r=t(77),o=t(396).onFreeze;t(250)("freeze",function(e){return function(n){return e&&r(n)?e(o(n)):n}})}});