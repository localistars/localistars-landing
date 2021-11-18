(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{6133:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/how-it-works",function(){return e(9419)}])},638:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),i.forEach((function(t){r(n,t,e[t])}))}return n}t.default=function(n,t){var e=o.default,r={loading:function(n){n.error,n.isLoading;return n.pastDelay,null}};s=n,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](s):s instanceof l)?r.loader=function(){return n}:"function"===typeof n?r.loader=n:"object"===typeof n&&(r=i({},r,n));var s,l;var c=r=i({},r,t);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return e(c);r.loadableGenerated&&delete(r=i({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,a(e,r);delete r.ssr}return e(r)};s(e(7294));var o=s(e(4302));function s(n){return n&&n.__esModule?n:{default:n}}function a(n,t){return delete t.webpack,delete t.modules,n(t)}},6319:function(n,t,e){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((r=e(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=i},4302:function(n,t,e){"use strict";function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){i(n,t,e[t])}))}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a=(s=e(7294))&&s.__esModule?s:{default:s},l=e(7161),c=e(6319);var u=[],p=[],x=!1;function f(n){var t=n(),e={loading:!0,loaded:null,error:null};return e.promise=t.then((function(n){return e.loading=!1,e.loaded=n,n})).catch((function(n){throw e.loading=!1,e.error=n,n})),e}var d=function(){function n(t,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._loadFn=t,this._opts=e,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,e,i;return t=n,(e=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var n=this,t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,r=this._opts;if(e.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var i=this;this._delay=setTimeout((function(){i._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){n._update({}),n._clearTimeouts()})).catch((function(n){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(n){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},n),this._callbacks.forEach((function(n){return n()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(n){var t=this;return this._callbacks.add(n),function(){t._callbacks.delete(n)}}}])&&r(t.prototype,e),i&&r(t,i),n}();function m(n){return function(n,t){var e=function(){if(!i){var t=new d(n,r);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=a.default.lazy(r.loader));var i=null;if(!x&&"function"===typeof r.webpack&&!r.suspense){var s=r.webpack();p.push((function(n){var t=!0,r=!1,i=void 0;try{for(var o,a=s[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var l=o.value;if(-1!==n.indexOf(l))return e()}}catch(c){r=!0,i=c}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}}))}var u=r.suspense?function(n,t){return a.default.createElement(r.lazy,o({},n,{ref:t}))}:function(n,t){e();var o=a.default.useContext(c.LoadableContext),s=l.useSubscription(i);return a.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(n){o(n)})),a.default.useMemo((function(){return s.loading||s.error?a.default.createElement(r.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:i.retry}):s.loaded?a.default.createElement(function(n){return n&&n.__esModule?n.default:n}(s.loaded),n):null}),[n,s])};return u.preload=function(){return!r.suspense&&e()},u.displayName="LoadableComponent",a.default.forwardRef(u)}(f,n)}function h(n,t){for(var e=[];n.length;){var r=n.pop();e.push(r(t))}return Promise.all(e).then((function(){if(n.length)return h(n,t)}))}m.preloadAll=function(){return new Promise((function(n,t){h(u).then(n,t)}))},m.preloadReady=function(n){var t=void 0===n?[]:n;return new Promise((function(n){var e=function(){return x=!0,n()};h(p,t).then(e,e)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var b=m;t.default=b},9483:function(n,t,e){"use strict";var r=e(5893),i=e(7294),o=e(8332),s=(0,e(5152).default)((function(){return e.e(239).then(e.bind(e,1239))}),{loadableGenerated:{webpack:function(){return[1239]},modules:["../components/VideoModal/index.js -> react-modal-video"]},ssr:!1});t.Z=function(n){var t=n.id,e=n.className,a=n.children,l=(0,i.useState)(!1),c=l[0],u=l[1];return(0,r.jsxs)(i.Fragment,{children:[(0,o.F)()&&(0,r.jsx)(s,{channel:"youtube",autoplay:!0,isOpen:c,videoId:t,onClose:function(){return u(!1)}}),!(0,o.F)()&&(0,r.jsx)(s,{channel:"custom",isOpen:c,url:"https://www.youtube-nocookie.com/embed/".concat(t,"?rel=0&controls=0&showinfo=0"),onClose:function(){return u(!1)}}),(0,r.jsx)("button",{className:"btn-reset".concat(e?" "+e:""),onClick:function(){return u(!0)},children:a})]})}},9419:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return it},default:function(){return ot}});var r=e(5893),i=(e(7294),e(945)),o=e(7379),s=e(2790);function a(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function l(){var n=a(["\n  padding-top: 100px;\n  padding-bottom: 0;\n  position: relative;\n\n  @media (min-width: 768px) {\n    padding-top: 140px;\n    padding-bottom: 0;\n  }\n\n  @media (min-width: 992px) {\n    padding-top: 150px;\n    padding-bottom: 0;\n  }\n\n  @media (min-width: 1200px) {\n    padding-top: 170px;\n    padding-bottom: 0;\n  }\n\n  @media (min-width: 1366px) {\n    padding-top: 160px;\n    padding-bottom: 0;\n  }\n"]);return l=function(){return n},n}function c(){var n=a(["\n  font-weight: 500;\n  letter-spacing: -2px;\n  line-height: 1.1;\n  font-size: 40px;\n  margin-bottom: 25px;\n  z-index: 1;\n  position: relative;\n\n  @media (min-width: 480px) {\n    font-size: 50px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 60px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: 70px;\n  }\n"]);return c=function(){return n},n}function u(){var n=a(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 0;\n  width: 18.5%;\n\n  @media (min-width: 768px) {\n    left: 5%;\n    top: -5%;\n  }\n\n  @media (min-width: 992px) {\n    left: 6%;\n    top: -22%;\n  }\n"]);return u=function(){return n},n}function p(){var n=a(["\n  color: var(--color-texts-3);\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 34px;\n\n  @media (min-width: 768px) {\n    font-size: 21px;\n  }\n"]);return p=function(){return n},n}function x(){var n=a(["\n  text-align: center;\n"]);return x=function(){return n},n}function f(){var n=a(["\n  position: relative;\n  .form-control {\n    width: 100%;\n    border-radius: 500px;\n    min-height: 50px;\n    padding-left: 30px;\n    @media (min-width: 480px) {\n      min-height: 72px;\n    }\n  }\n"]);return f=function(){return n},n}function d(){var n=a(["\n  border-radius: 500px !important;\n  padding: 16px 35px;\n  margin-top: 10px;\n  min-width: 100%;\n  @media (min-width: 480px) {\n    min-width: 137px;\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    transform: translateY(-50%);\n    margin-top: 0px;\n  }\n"]);return d=function(){return n},n}function m(){var n=a(["\n  margin-top: 50px;\n  @media (min-width: 992px) {\n    margin-top: 70px;\n  }\n"]);return m=function(){return n},n}function h(){var n=a(["\n  position: absolute;\n  right: -3.5%;\n  bottom: 35%;\n  z-index: 0;\n  width: 9.7%;\n"]);return h=function(){return n},n}function b(){var n=a(["\n  position: absolute;\n  left: -4%;\n  bottom: 20%;\n  z-index: 0;\n  width: 10%;\n"]);return b=function(){return n},n}function g(){var n=a(["\n  border-radius: 75px;\n  max-width: 516px;\n  margin: auto;\n\n  @media (min-width: 480px) {\n    background-color: #f2f5fb;\n    border: 2px solid #f8f9fc;\n  }\n"]);return g=function(){return n},n}function w(){var n=a([""]);return w=function(){return n},n}function j(){var n=a([""]);return j=function(){return n},n}var v=(0,o.ZP)(s.xu)(l());v.Title=(0,o.ZP)(s.X6)(c()),v.TitleShape=(0,o.ZP)(s.xu)(u()),v.Text=(0,o.ZP)(s.nv)(p()),v.ContentBlock=(0,o.ZP)(s.xu)(x()),v.InputBox=(0,o.ZP)(s.xu)(f()),v.Button=(0,o.ZP)(s.zx)(d()),v.Image=(0,o.ZP)(s.xu)(m()),v.ImageShape01=(0,o.ZP)(s.xu)(h()),v.ImageShape02=(0,o.ZP)(s.xu)(b()),v.NewsletterBox=(0,o.ZP)(s.xu)(g()),v.Newsletter=(0,o.ZP)(s.xu)(w()),v.Box=(0,o.ZP)(s.xu)(j());var y=v,P=e(682),O=e(4051),Z=e(1555),z=e(1781),_=e(9460);function k(){var n=(0,_.$G)("translations").t;return(0,r.jsxs)(y,{children:[(0,r.jsx)(P.Z,{children:(0,r.jsxs)(O.Z,{className:"justify-content-center",children:[(0,r.jsx)(Z.Z,{xs:"12",className:"col-xl-8 col-lg-11",children:(0,r.jsxs)(y.ContentBlock,{mb:"35px",children:[(0,r.jsx)(y.Title,{as:"h1",children:n("how.hero.title")}),(0,r.jsx)(y.Title,{as:"h2",children:n("how.hero.title2")}),(0,r.jsx)(y.Text,{children:(0,r.jsxs)(_.cC,{i18nKey:"how.hero.text",children:['"Clients and translators welcome \u2013 ',(0,r.jsx)("br",{className:"d-none d-sm-block"}),'  together you get translation projects done."']})}),(0,r.jsx)(y.TitleShape,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/shape-hero.png"),alt:"projects",className:"w-100"})})]})}),(0,r.jsx)(Z.Z,{xs:"12",className:"col-lg-5 col-md-7",children:(0,r.jsx)(y.Text,{})})]})}),(0,r.jsx)(y.ImageShape01,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/shape3-hero.png"),alt:"shape 1",className:"w-100"})}),(0,r.jsx)(y.ImageShape02,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/shape2-hero.png"),alt:"shape 1",className:"w-100"})})]})}e(5675);var T=e(4338);function N(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function G(){var n=N(["\n  padding-top: 60px;\n  padding-bottom: 20px;\n  @media (min-width: 768px) {\n    padding-top: 50px;\n    padding-bottom: 20px;\n  }\n\n  @media (min-width: 992px) {\n    padding-top: 30px;\n    padding-bottom: 0px;\n  }\n"]);return G=function(){return n},n}function S(){var n=N([""]);return S=function(){return n},n}function L(){var n=N(["\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 1.3;\n  position: relative;\n\n  @media (min-width: 768px) {\n    font-size: 38px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: 48px;\n  }\n"]);return L=function(){return n},n}function C(){var n=N(["\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 1.75;\n"]);return C=function(){return n},n}function I(){var n=N(["\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 1.77777;\n"]);return I=function(){return n},n}function E(){var n=N(["\n  margin-right: -17.0656px;\n  display: flex;\n  flex-wrap: wrap;\n"]);return E=function(){return n},n}function B(){var n=N(["\n  .video-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    color: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background-color: #ff5722;\n    border-color: transparent;\n\n    min-width: 76px;\n    max-width: 76px;\n    min-height: 76px;\n    max-height: 76px;\n    @media (min-width: 575px) {\n      min-width: 96px;\n      max-width: 96px;\n      min-height: 96px;\n      max-height: 96px;\n    }\n  }\n"]);return B=function(){return n},n}function H(){var n=N(["\n  margin-right: 15px;\n  border-radius: 500px !important;\n  color: #fff;\n  min-width: 140px;\n  height: 56px;\n  margin-top: 15px;\n  font-size: 14px;\n  @media (min-width: 576px) {\n    font-size: 15px;\n  }\n  @media (min-width: 1200px) {\n    min-width: 165px;\n    height: 60px;\n  }\n  &.btn-1 {\n    box-shadow: 4px 4px 56px rgba(255, 87, 34, 0.3) !important;\n    color: #fff !important;\n    &:hover {\n      box-shadow: none;\n      color: #fff !important;\n    }\n  }\n  &.btn-2 {\n    box-shadow: 4px 4px 56px rgb(80 52 252 / 0%);\n    &:hover {\n      box-shadow: 4px 4px 56px rgb(80 52 252 / 30%);\n    }\n  }\n"]);return H=function(){return n},n}function M(){var n=N([""]);return M=function(){return n},n}var X=(0,o.ZP)(s.xu)(G());X.Content=(0,o.ZP)(s.xu)(S()),X.Title=(0,o.ZP)(s.X6)(L()),X.Subtitle=(0,o.ZP)(s.X6)(C()),X.Text=(0,o.ZP)(s.nv)(I()),X.ButtonGroup=(0,o.ZP)(s.xu)(E()),X.Image=(0,o.ZP)(s.xu)(B()),X.Button=(0,o.ZP)(s.zx)(H()),X.Box=(0,o.ZP)(s.xu)(M());var D=X;function q(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function W(){var n=q([""]);return W=function(){return n},n}function F(){var n=q(["\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 1.77777;\n  color: inherit;\n"]);return F=function(){return n},n}function R(){var n=q(["\n  color: var(--bs-tree-poppy);\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 28px;\n  position: relative;\n  padding-left: 60px;\n  display: inline-block;\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    bottom: 9px;\n    width: 41px;\n    height: 1px;\n    background-color: #ff5722;\n  }\n"]);return R=function(){return n},n}function U(){var n=q(["\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 1.38095;\n\n  @media (min-width: 768px) {\n    font-size: 33px;\n  }\n\n  @media (min-width: 1400px) {\n    font-size: 42px;\n  }\n"]);return U=function(){return n},n}var A=(0,o.ZP)(s.xu)(W());A.Text=(0,o.ZP)(s.nv)(F()),A.Subtitle=(0,o.ZP)(s.X6)(R()),A.Main=(0,o.ZP)(s.X6)(U());var K=A;function Y(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function $(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){Y(n,t,e[t])}))}return n}function V(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function Q(n){var t=n.subTitleProps,e=n.titleProps,i=n.textProps,o=n.subTitle,s=n.title,a=n.text,l=V(n,["subTitleProps","titleProps","textProps","subTitle","title","text"]);return(0,r.jsxs)(K,$({},l,{children:[!!a&&"string"!==typeof a&&(0,r.jsx)("text",{}),(0,r.jsx)(K.Subtitle,$({},t,{children:(0,r.jsx)(T.Hq,{value:o})})),(0,r.jsx)(K.Main,$({},e,{as:"h2",children:(0,r.jsx)(T.Hq,{value:s})})),!!a&&"string"!==typeof a&&(0,r.jsx)(K.Text,$({},i,{children:a})),!!a&&"string"===typeof a&&(0,r.jsx)(K.Text,$({},i,{children:(0,r.jsx)(T.Hq,{value:a})}))]}))}function J(){var n=(0,_.$G)("translations").t;return(0,r.jsx)(D,{children:(0,r.jsx)(P.Z,{children:(0,r.jsxs)(O.Z,{className:"align-items-stretch justify-content-center",children:[(0,r.jsx)(Z.Z,{xs:"12",className:"col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray",children:(0,r.jsxs)(D.Content,{mt:"40px",mtLG:"0",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(Q,{subTitle:n("how.process.consumer.one.subTitle"),title:n("how.process.consumer.one.title"),text:(0,r.jsxs)(_.cC,{i18nKey:"how.process.consumer.one.text",children:["Make sure you have",(0,r.jsx)(T.rU,{to:"/translator#get-started",children:"set up your account."})]}),titleProps:{mb:"30px"},subTitleProps:{mb:"25px"}}),(0,r.jsx)("hr",{})]})}),(0,r.jsx)(Z.Z,{col:"12",className:"col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse",children:(0,r.jsxs)(D.Content,{mt:"40px",mtLG:"0",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(Q,{subTitle:n("how.process.creator.one.subTitle"),title:n("how.process.creator.one.title"),text:(0,r.jsxs)(_.cC,{i18nKey:"how.process.creator.one.text",children:["Make sure you have",(0,r.jsx)(T.rU,{to:"/translationjob#get-started",children:"set up your account."})]}),titleProps:{mb:"30px"},subTitleProps:{mb:"25px"}}),(0,r.jsx)("hr",{})]})})]})})})}function nn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function tn(){var n=nn(["\n  padding-top: 60px;\n  padding-bottom: 20px;\n  @media (min-width: 768px) {\n    padding-top: 80px;\n    padding-bottom: 40px;\n  }\n\n  @media (min-width: 992px) {\n    padding-top: 100px;\n    padding-bottom: 110px;\n  }\n"]);return tn=function(){return n},n}function en(){var n=nn([""]);return en=function(){return n},n}function rn(){var n=nn(["\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 1.3;\n  position: relative;\n  @media (min-width: 768px) {\n    font-size: 38px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: 48px;\n  }\n"]);return rn=function(){return n},n}function on(){var n=nn(["\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 1.75;\n"]);return on=function(){return n},n}function sn(){var n=nn(["\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 1.77777;\n"]);return sn=function(){return n},n}function an(){var n=nn(["\n  margin-right: -17.0656px;\n  display: flex;\n  flex-wrap: wrap;\n"]);return an=function(){return n},n}function ln(){var n=nn(["\n  .video-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    color: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background-color: #ff5722;\n    border-color: transparent;\n\n    min-width: 76px;\n    max-width: 76px;\n    min-height: 76px;\n    max-height: 76px;\n    @media (min-width: 575px) {\n      min-width: 96px;\n      max-width: 96px;\n      min-height: 96px;\n      max-height: 96px;\n    }\n  }\n"]);return ln=function(){return n},n}function cn(){var n=nn([""]);return cn=function(){return n},n}function un(){var n=nn(["\n  margin-right: 15px;\n  border-radius: 500px !important;\n  color: #fff;\n  min-width: 140px;\n  height: 56px;\n  margin-top: 15px;\n  font-size: 14px;\n  @media (min-width: 576px) {\n    font-size: 15px;\n  }\n  @media (min-width: 1200px) {\n    min-width: 165px;\n    height: 60px;\n  }\n  &.btn-1 {\n    box-shadow: 4px 4px 56px rgba(255, 87, 34, 0.3) !important;\n    color: #fff !important;\n    &:hover {\n      box-shadow: none;\n      color: #fff !important;\n    }\n  }\n  &.btn-2 {\n    box-shadow: 4px 4px 56px rgb(80 52 252 / 0%);\n    &:hover {\n      box-shadow: 4px 4px 56px rgb(80 52 252 / 30%);\n    }\n  }\n"]);return un=function(){return n},n}function pn(){var n=nn([""]);return pn=function(){return n},n}var xn=(0,o.ZP)(s.xu)(tn());xn.Content=(0,o.ZP)(s.xu)(en()),xn.Title=(0,o.ZP)(s.X6)(rn()),xn.Subtitle=(0,o.ZP)(s.X6)(on()),xn.Text=(0,o.ZP)(s.nv)(sn()),xn.ButtonGroup=(0,o.ZP)(s.xu)(an()),xn.Image=(0,o.ZP)(s.xu)(ln()),xn.HIWimage=(0,o.ZP)(s.xu)(cn()),xn.Button=(0,o.ZP)(s.zx)(un()),xn.Box=(0,o.ZP)(s.xu)(pn());var fn=xn;function dn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function mn(){var n=dn([""]);return mn=function(){return n},n}function hn(){var n=dn(["\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 1.77777;\n  color: inherit;\n"]);return hn=function(){return n},n}function bn(){var n=dn(["\n  color: #ff5722;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 28px;\n  position: relative;\n  padding-left: 60px;\n  display: inline-block;\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    bottom: 9px;\n    width: 41px;\n    height: 1px;\n    background-color: #ff5722;\n  }\n"]);return bn=function(){return n},n}function gn(){var n=dn(["\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 1.38095;\n\n  @media (min-width: 768px) {\n    font-size: 33px;\n  }\n\n  @media (min-width: 1400px) {\n    font-size: 42px;\n  }\n"]);return gn=function(){return n},n}var wn=(0,o.ZP)(s.xu)(mn());wn.Text=(0,o.ZP)(s.nv)(hn()),wn.Subtitle=(0,o.ZP)(s.X6)(bn()),wn.Main=(0,o.ZP)(s.X6)(gn());var jn=wn;function vn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function yn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){vn(n,t,e[t])}))}return n}function Pn(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function On(n){var t=n.subTitleProps,e=n.titleProps,i=n.textProps,o=n.subTitle,s=n.title,a=n.text,l=Pn(n,["subTitleProps","titleProps","textProps","subTitle","title","text"]);return(0,r.jsxs)(jn,yn({},l,{children:[(0,r.jsx)(jn.Subtitle,yn({},t,{children:(0,r.jsx)(T.Hq,{value:o})})),(0,r.jsx)(jn.Main,yn({},e,{as:"h2",children:(0,r.jsx)(T.Hq,{value:s})})),a?(0,r.jsx)(jn.Text,yn({},i,{children:(0,r.jsx)(T.Hq,{value:a})})):null]}))}function Zn(){var n=(0,_.$G)("translations").t;return(0,r.jsx)(fn,{children:(0,r.jsxs)(P.Z,{children:[(0,r.jsxs)(O.Z,{className:"align-items-center justify-content-center",children:[(0,r.jsx)(Z.Z,{xs:"12",className:"col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray",children:(0,r.jsxs)(fn.Content,{mt:"0px",mtLG:"0",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(On,{title:n("how.process.consumer.two.title"),text:n("how.process.consumer.two.text"),titleProps:{mb:"15px"},subTitleProps:{mb:"5px"}}),(0,r.jsx)(fn.HIWimage,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/draft.jpg"),alt:"draft",className:"w-100"})})]})}),(0,r.jsx)(Z.Z,{col:"12",className:"col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse"})]}),(0,r.jsxs)(O.Z,{className:"align-items-center justify-content-center",children:[(0,r.jsx)(Z.Z,{xs:"12",className:"col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray"}),(0,r.jsx)(Z.Z,{xs:"12",className:"col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse",children:(0,r.jsxs)(fn.Content,{mt:"0px",mtLG:"0",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(On,{title:n("how.process.creator.two.title"),text:n("how.process.creator.two.text"),titleProps:{mb:"15px"},subTitleProps:{mb:"5px"}}),(0,r.jsx)(fn.HIWimage,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/start_bid.jpg"),alt:"start bid",className:"w-100"})})]})})]}),(0,r.jsxs)(O.Z,{className:"align-items-center justify-content-center",children:[(0,r.jsx)(Z.Z,{xs:"12",className:"col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray",children:(0,r.jsxs)(fn.Content,{mt:"0px",mtLG:"0",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(On,{title:n("how.process.consumer.three.title"),text:n("how.process.consumer.three.text"),titleProps:{mb:"15px"},subTitleProps:{mb:"5px"}}),(0,r.jsx)(fn.HIWimage,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/choose_bid.jpg"),alt:"choose bid",className:"w-100"})})]})}),(0,r.jsx)(Z.Z,{col:"12",className:"col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse"})]}),(0,r.jsxs)(O.Z,{className:"align-items-center justify-content-center",children:[(0,r.jsx)(Z.Z,{xs:"12",className:"col-xl-4 col-lg-6 col-md-8 col-xs-10 mt-7 bg-athens-gray",children:(0,r.jsxs)(fn.Content,{mt:"50px",mtLG:"1",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(On,{title:n("how.process.consumer.four.title"),text:n("how.process.consumer.four.text"),titleProps:{mb:"15px"},subTitleProps:{mb:"5px"}}),(0,r.jsx)(fn.HIWimage,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/accounting.jpg"),alt:"accounting",className:"w-100"})})]})}),(0,r.jsx)(Z.Z,{col:"12",className:"col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 mt-7 bg-gorse"})]}),(0,r.jsxs)(O.Z,{className:"align-items-center justify-content-center",children:[(0,r.jsx)(Z.Z,{xs:"12",className:"col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray"}),(0,r.jsx)(Z.Z,{xs:"12",className:"col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse",children:(0,r.jsxs)(fn.Content,{mt:"0px",mtLG:"0",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(On,{title:n("how.process.creator.three.title"),text:n("how.process.creator.three.text"),titleProps:{mb:"15px"},subTitleProps:{mb:"5px"}}),(0,r.jsx)(fn.HIWimage,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/upload_files.jpg"),alt:"start bid",className:"w-100"})})]})})]}),(0,r.jsxs)(O.Z,{className:"align-items-center justify-content-center",children:[(0,r.jsx)(Z.Z,{xs:"12",className:"col-xl-4 col-lg-6 col-md-8 col-xs-10 border bg-athens-gray",children:(0,r.jsxs)(fn.Content,{mt:"50px",mtLG:"1",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(On,{title:n("how.process.consumer.five.title"),text:n("how.process.consumer.five.text"),titleProps:{mb:"15px"},subTitleProps:{mb:"5px"}}),(0,r.jsx)(fn.HIWimage,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/paid_project.jpg"),alt:"paid_project",className:"w-100"})})]})}),(0,r.jsx)(Z.Z,{col:"12",className:"col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse"})]}),(0,r.jsxs)(O.Z,{className:"align-items-stretch justify-content-center",children:[(0,r.jsx)(Z.Z,{xs:"12",className:"col-xl-4 col-lg-6 col-md-8 col-xs-10 mt-7 bg-athens-gray",children:(0,r.jsxs)(fn.Content,{mt:"0px",mtLG:"0",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(On,{title:n("how.process.consumer.six.title"),text:n("how.process.consumer.six.text"),titleProps:{mb:"15px"},subTitleProps:{mb:"5px"}}),(0,r.jsx)(fn.HIWimage,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/transactions.jpg"),alt:"transactions",className:"w-100"})})]})}),(0,r.jsx)(Z.Z,{xs:"12",className:"col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 mt-7 bg-gorse",children:(0,r.jsxs)(fn.Content,{mt:"0px",mtLG:"0",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(On,{title:n("how.process.creator.four.title"),text:n("how.process.creator.four.text"),titleProps:{mb:"15px"},subTitleProps:{mb:"5px"}}),(0,r.jsx)(fn.HIWimage,{children:(0,r.jsx)("img",{src:"".concat(z.Z,"/image/howitworks/payout.jpg"),alt:"payout",className:"w-100"})})]})})]})]})})}function zn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function _n(){var n=zn(["\n  padding-top: 60px;\n  padding-bottom: 20px;\n  @media (min-width: 768px) {\n    padding-top: 80px;\n    padding-bottom: 40px;\n  }\n\n  @media (min-width: 992px) {\n    padding-top: 100px;\n    padding-bottom: 110px;\n  }\n"]);return _n=function(){return n},n}function kn(){var n=zn([""]);return kn=function(){return n},n}function Tn(){var n=zn(["\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 1.3;\n  position: relative;\n  @media (min-width: 768px) {\n    font-size: 38px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: 48px;\n  }\n"]);return Tn=function(){return n},n}function Nn(){var n=zn(["\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 1.75;\n"]);return Nn=function(){return n},n}function Gn(){var n=zn(["\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 1.77777;\n"]);return Gn=function(){return n},n}function Sn(){var n=zn(["\n  margin-right: -17.0656px;\n  display: flex;\n  flex-wrap: wrap;\n"]);return Sn=function(){return n},n}function Ln(){var n=zn(["\n  .video-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    color: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background-color: #ff5722;\n    border-color: transparent;\n\n    min-width: 76px;\n    max-width: 76px;\n    min-height: 76px;\n    max-height: 76px;\n    @media (min-width: 575px) {\n      min-width: 96px;\n      max-width: 96px;\n      min-height: 96px;\n      max-height: 96px;\n    }\n  }\n"]);return Ln=function(){return n},n}function Cn(){var n=zn(["\n  margin-right: 15px;\n  border-radius: 500px !important;\n  color: #fff;\n  min-width: 140px;\n  height: 56px;\n  margin-top: 15px;\n  font-size: 14px;\n  @media (min-width: 576px) {\n    font-size: 15px;\n  }\n  @media (min-width: 1200px) {\n    min-width: 165px;\n    height: 60px;\n  }\n  &.btn-1 {\n    box-shadow: 4px 4px 56px rgba(255, 87, 34, 0.3) !important;\n    color: #fff !important;\n    &:hover {\n      box-shadow: none;\n      color: #fff !important;\n    }\n  }\n  &.btn-2 {\n    box-shadow: 4px 4px 56px rgb(80 52 252 / 0%);\n    &:hover {\n      box-shadow: 4px 4px 56px rgb(80 52 252 / 30%);\n    }\n  }\n"]);return Cn=function(){return n},n}function In(){var n=zn([""]);return In=function(){return n},n}var En=(0,o.ZP)(s.xu)(_n());En.Content=(0,o.ZP)(s.xu)(kn()),En.Title=(0,o.ZP)(s.X6)(Tn()),En.Subtitle=(0,o.ZP)(s.X6)(Nn()),En.Text=(0,o.ZP)(s.nv)(Gn()),En.ButtonGroup=(0,o.ZP)(s.xu)(Sn()),En.Image=(0,o.ZP)(s.xu)(Ln()),En.Button=(0,o.ZP)(s.zx)(Cn()),En.Box=(0,o.ZP)(s.xu)(In());var Bn=En;function Hn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function Mn(){var n=Hn([""]);return Mn=function(){return n},n}function Xn(){var n=Hn(["\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 1.77777;\n  color: inherit;\n"]);return Xn=function(){return n},n}function Dn(){var n=Hn(["\n  color: #ff5722;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 28px;\n  position: relative;\n  padding-left: 60px;\n  display: inline-block;\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    bottom: 9px;\n    width: 41px;\n    height: 1px;\n    background-color: #ff5722;\n  }\n"]);return Dn=function(){return n},n}function qn(){var n=Hn(["\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 1.38095;\n\n  @media (min-width: 768px) {\n    font-size: 33px;\n  }\n\n  @media (min-width: 1400px) {\n    font-size: 42px;\n  }\n"]);return qn=function(){return n},n}var Wn=(0,o.ZP)(s.xu)(Mn());Wn.Text=(0,o.ZP)(s.nv)(Xn()),Wn.Subtitle=(0,o.ZP)(s.X6)(Dn()),Wn.Main=(0,o.ZP)(s.X6)(qn());var Fn=Wn;function Rn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Un(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){Rn(n,t,e[t])}))}return n}function An(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function Kn(n){var t=n.subTitleProps,e=n.titleProps,i=n.textProps,o=n.subTitle,s=n.title,a=n.text,l=An(n,["subTitleProps","titleProps","textProps","subTitle","title","text"]);return(0,r.jsxs)(Fn,Un({},l,{children:[(0,r.jsx)(Fn.Subtitle,Un({},t,{children:(0,r.jsx)(T.Hq,{value:o})})),(0,r.jsx)(Fn.Main,Un({},e,{as:"h2",children:(0,r.jsx)(T.Hq,{value:s})})),a?(0,r.jsx)(Fn.Text,Un({},i,{children:(0,r.jsx)(T.Hq,{value:a})})):null]}))}var Yn=e(9483);function $n(){var n=(0,_.$G)("translations").t;return(0,r.jsx)(Bn,{children:(0,r.jsx)(P.Z,{children:(0,r.jsxs)(O.Z,{className:"align-items-center justify-content-center",children:[(0,r.jsx)(Z.Z,{xs:"12",className:"col-xl-6 col-lg-6 col-md-8 col-xs-10",children:(0,r.jsxs)(Bn.Image,{children:[(0,r.jsx)("img",{className:"w-100",src:"".concat(z.Z,"/image/howitworks/thumbnail.png"),alt:"thumbnail locize"}),(0,r.jsxs)(Yn.Z,{id:"T0giUsKS5KQ",className:"video-btn sonar-emitter",children:[" ",(0,r.jsx)("i",{className:"fa fa-play"})," "]})]})}),(0,r.jsx)(Z.Z,{col:"12",className:"col-xxl-5 offset-xxl-1 col-lg-5 col-md-8 col-xs-10",children:(0,r.jsxs)(Bn.Content,{mt:"40px",mtLG:"0",mb:"50px",mbLG:"0",mlLG:"30px",children:[(0,r.jsx)(Kn,{subTitle:n("how.video.subTitle"),title:n("how.video.title"),text:n("how.video.text"),titleProps:{mb:"30px"},subTitleProps:{mb:"25px"}}),(0,r.jsxs)(Bn.ButtonGroup,{mt:"25px",children:[(0,r.jsx)(Bn.Button,{className:"btn-primary btn-1",as:T.rU,target:"_blank",href:"https://docs.locize.com/guides-tips-and-tricks/working-with-translators/localistars",children:n("how.video.learnMore")}),(0,r.jsx)(Bn.Button,{className:"btn-electric-violet-2 btn-2",as:T.rU,to:"/ecosystem",children:n("how.video.ecosystem")})]})]})})]})})})}var Vn=e(6025);function Qn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Jn(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function nt(){var n,t,e=(n=["\n  .btn {\n    font-size: 15px;\n    font-weight: 500;\n    height: 50px;\n    min-width: 137px;\n    border-radius: 3px;\n    color: var(--bs-white);\n    font-size: 13px;\n    font-weight: 500;\n    line-height: 1.2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 15px;\n    padding-right: 15px;\n    letter-spacing: -0.4px;\n    color: #fff;\n    margin-left: 10px;\n    background-color: #5034fc;\n    border-color: #5034fc;\n    box-shadow: -12px 20px 50px rgb(80 52 252 / 30%);\n    border-radius: 500px;\n    &:hover {\n      box-shadow: -12px 20px 50px rgb(80 52 252 / 0%);\n      /* box-shadow: 0 0px 0px rgba(241, 139, 98, 0.3); */\n    }\n  }\n"],t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}})));return nt=function(){return e},e}var tt=(0,o.ZP)(s.xu)(nt()),et=function(n){var t=n.btnLink,e=n.btnText,i=Jn(n,["btnLink","btnText"]);return(0,r.jsx)(tt,function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){Qn(n,t,e[t])}))}return n}({},i,{children:(0,r.jsx)(T.rU,{target:"_blank",className:"btn",href:t||"/",children:e})}))},rt=e(9008),it=!0;function ot(){var n=(0,_.$G)("translations").t;return(0,r.jsxs)(i.FE,{headerConfig:{headerClasses:"site-header site-header--menu-end light-header site-header--sticky",containerFluid:!1,buttonBlock:(0,r.jsx)(et,{className:"d-none d-sm-flex",btnText:n("common.header"),btnLink:"https://www.localistars.app/register"})},children:[(0,r.jsxs)(rt.default,{children:[(0,r.jsx)("title",{children:n("how.meta.title")}),(0,r.jsx)("meta",{name:"description",content:n("how.meta.description")})]}),(0,r.jsx)(k,{}),(0,r.jsx)(J,{}),(0,r.jsx)(Zn,{}),(0,r.jsx)($n,{}),(0,r.jsx)(Vn.Z,{})]})}},5152:function(n,t,e){n.exports=e(638)}},function(n){n.O(0,[774,675,25,888,179],(function(){return t=6133,n(n.s=t);var t}));var t=n.O();_N_E=t}]);