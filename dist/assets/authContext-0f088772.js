import{r as g,j as f,k as w,u as X,aC as Y,h as Z,aD as M,ar as G,as as B,R as V,aE as ee,aF as te,aG as I,aH as re,A as ne}from"./index-82274b1b.js";import{P as c}from"./InputAdornment-870377e2.js";const oe=g.createContext(null),F=oe;function J(){return g.useContext(F)}const ie=typeof Symbol=="function"&&Symbol.for,ae=ie?Symbol.for("mui.nested"):"__THEME_NESTED__";function se(e,t){return typeof t=="function"?t(e):w({},e,t)}function ce(e){const{children:t,theme:o}=e,r=J(),n=g.useMemo(()=>{const a=r===null?o:se(r,o);return a!=null&&(a[ae]=r!==null),a},[o,r]);return f.jsx(F.Provider,{value:n,children:t})}const q={};function W(e,t,o,r=!1){return g.useMemo(()=>{const n=e&&t[e]||t;if(typeof o=="function"){const a=o(n),d=e?w({},t,{[e]:a}):a;return r?()=>d:d}return e?w({},t,{[e]:o}):w({},t,o)},[e,t,o,r])}function de(e){const{children:t,theme:o,themeId:r}=e,n=X(q),a=J()||q,d=W(r,n,o),v=W(r,a,o,!0);return f.jsx(ce,{theme:v,children:f.jsx(Y.Provider,{value:d,children:t})})}const pe=["theme"];function Ue(e){let{theme:t}=e,o=Z(e,pe);const r=t[M];return f.jsx(de,w({},o,{themeId:r?M:void 0,theme:r||t}))}const Ne="/assets/white-logo-5106a57b.png";var A={},ue=B;Object.defineProperty(A,"__esModule",{value:!0});var he=A.default=void 0,le=ue(G()),fe=f,me=(0,le.default)((0,fe.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");he=A.default=me;var T={},ge=B;Object.defineProperty(T,"__esModule",{value:!0});var ve=T.default=void 0,ye=ge(G()),be=f,_e=(0,ye.default)((0,be.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");ve=T.default=_e;function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},P.apply(this,arguments)}function xe(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,a;for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}function S(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ee(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var C=function(e){Ee(t,e);function t(){var r;return r=e.call(this)||this,r.handleExpired=r.handleExpired.bind(S(r)),r.handleErrored=r.handleErrored.bind(S(r)),r.handleChange=r.handleChange.bind(S(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(S(r)),r}var o=t.prototype;return o.getValue=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this.props.grecaptcha.getResponse(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},o.execute=function(){var n=this.props.grecaptcha;if(n&&this._widgetId!==void 0)return n.execute(this._widgetId);this._executeRequested=!0},o.executeAsync=function(){var n=this;return new Promise(function(a,d){n.executionResolve=a,n.executionReject=d,n.execute()})},o.reset=function(){this.props.grecaptcha&&this._widgetId!==void 0&&this.props.grecaptcha.reset(this._widgetId)},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},o.handleChange=function(n){this.props.onChange&&this.props.onChange(n),this.executionResolve&&(this.executionResolve(n),delete this.executionReject,delete this.executionResolve)},o.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&this._widgetId===void 0){var n=document.createElement("div");this._widgetId=this.props.grecaptcha.render(n,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(n)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.componentWillUnmount=function(){this._widgetId!==void 0&&(this.delayOfCaptchaIframeRemoving(),this.reset())},o.delayOfCaptchaIframeRemoving=function(){var n=document.createElement("div");for(document.body.appendChild(n),n.style.display="none";this.captcha.firstChild;)n.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(n)},5e3)},o.handleRecaptchaRef=function(n){this.captcha=n},o.render=function(){var n=this.props;n.sitekey,n.onChange,n.theme,n.type,n.tabindex,n.onExpired,n.onErrored,n.size,n.stoken,n.grecaptcha,n.badge,n.hl;var a=xe(n,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]);return V.createElement("div",P({},a,{ref:this.handleRecaptchaRef}))},t}(V.Component);C.displayName="ReCAPTCHA";C.propTypes={sitekey:c.string.isRequired,onChange:c.func,grecaptcha:c.object,theme:c.oneOf(["dark","light"]),type:c.oneOf(["image","audio"]),tabindex:c.number,onExpired:c.func,onErrored:c.func,size:c.oneOf(["compact","normal","invisible"]),stoken:c.string,hl:c.string,badge:c.oneOf(["bottomright","bottomleft","inline"])};C.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},k.apply(this,arguments)}function Re(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,a;for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}function we(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var h={},Le=0;function Se(e,t){return t=t||{},function(r){var n=r.displayName||r.name||"Component",a=function(v){we(x,v);function x(m,s){var i;return i=v.call(this,m,s)||this,i.state={},i.__scriptURL="",i}var y=x.prototype;return y.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+Le++),this.__scriptLoaderID},y.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},y.asyncScriptLoaderHandleLoad=function(s){var i=this;this.setState(s,function(){return i.props.asyncScriptOnLoad&&i.props.asyncScriptOnLoad(i.state)})},y.asyncScriptLoaderTriggerOnScriptLoaded=function(){var s=h[this.__scriptURL];if(!s||!s.loaded)throw new Error("Script is not loaded.");for(var i in s.observers)s.observers[i](s);delete window[t.callbackName]},y.componentDidMount=function(){var s=this,i=this.setupScriptURL(),u=this.asyncScriptLoaderGetScriptLoaderID(),l=t,U=l.globalName,O=l.callbackName,N=l.scriptId;if(U&&typeof window[U]<"u"&&(h[i]={loaded:!0,observers:{}}),h[i]){var E=h[i];if(E&&(E.loaded||E.errored)){this.asyncScriptLoaderHandleLoad(E);return}E.observers[u]=function(p){return s.asyncScriptLoaderHandleLoad(p)};return}var D={};D[u]=function(p){return s.asyncScriptLoaderHandleLoad(p)},h[i]={loaded:!1,observers:D};var b=document.createElement("script");b.src=i,b.async=!0;for(var H in t.attributes)b.setAttribute(H,t.attributes[H]);N&&(b.id=N);var $=function(R){if(h[i]){var K=h[i],j=K.observers;for(var z in j)R(j[z])&&delete j[z]}};O&&typeof window<"u"&&(window[O]=function(){return s.asyncScriptLoaderTriggerOnScriptLoaded()}),b.onload=function(){var p=h[i];p&&(p.loaded=!0,$(function(R){return O?!1:(R(p),!0)}))},b.onerror=function(){var p=h[i];p&&(p.errored=!0,$(function(R){return R(p),!0}))},document.body.appendChild(b)},y.componentWillUnmount=function(){var s=this.__scriptURL;if(t.removeOnUnmount===!0)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u+=1)i[u].src.indexOf(s)>-1&&i[u].parentNode&&i[u].parentNode.removeChild(i[u]);var l=h[s];l&&(delete l.observers[this.asyncScriptLoaderGetScriptLoaderID()],t.removeOnUnmount===!0&&delete h[s])},y.render=function(){var s=t.globalName,i=this.props;i.asyncScriptOnLoad;var u=i.forwardedRef,l=Re(i,["asyncScriptOnLoad","forwardedRef"]);return s&&typeof window<"u"&&(l[s]=typeof window[s]<"u"?window[s]:void 0),l.ref=u,g.createElement(r,l)},x}(g.Component),d=g.forwardRef(function(v,x){return g.createElement(a,k({},v,{forwardedRef:x}))});return d.displayName="AsyncScriptLoader("+n+")",d.propTypes={asyncScriptOnLoad:c.func},ee(d,r)}}var Q="onloadcallback",Ce="grecaptcha";function Oe(){return typeof window<"u"&&window.recaptchaOptions||{}}function je(){var e=Oe(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return"https://"+t+"/recaptcha/api.js?onload="+Q+"&render=explicit"}const Ie=Se(je,{callbackName:Q,globalName:Ce})(C);function De({updateValidRecaptcha:e}){function t(o){o!=""&&o!=null&&e(!0)}return f.jsx(f.Fragment,{children:f.jsx("div",{className:"my-8 w-full h-full flex justify-center items-center",children:f.jsx(Ie,{sitekey:"6LeJiRApAAAAAJggQH1VQaPhk38_418L_pajXGtb",onChange:t})})})}const _=new ne,L=new te,He=async e=>{try{const t=await _.postUserLogin(e);return ke(t),!0}catch{return sessionStorage.clear(),I.info("Dados Incorretos",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),console.error("Acesso negado."),!1}},$e=async e=>{try{Pe(e)}catch{sessionStorage.clear(),console.error("Acesso negado.")}},Pe=async e=>{if(e!=null)try{const t={razaoSocial:e.empresa.trim(),cnpj:e.cnpj},o=await L.postEmpresaCadastro(t),r={cep:e.cep,logradouro:e.logradouro.trim(),bairro:e.bairro.trim(),numero:e.numero,estado:e.uf.trim(),cidade:e.localidade.trim(),complemento:e.complemento.trim()},n=await _.postEndereco(r);await L.putVincularEmpresaEndereco(o.idEmpresa,n.idEndereco);const a={nomeCompleto:e.empresa,email:e.email,senha:e.senha,isProfissional:!0},d=await _.postUserCadastro(a);await _.putVincularUsuarioEmpresa(d,o.idEmpresa)!=null&&(I.success("Por favor, preencha os dados corretamente.",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),window.location.href="/login")}catch(t){I.warn("Por favor, preencha os dados corretamente.",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),sessionStorage.clear(),console.error("Erro ao cadastrar a empresa",t)}},ke=async e=>{if(sessionStorage.setItem("dataLocal",JSON.stringify(e)),re.defaults.headers.Authorization=`Bearer ${e.token}`,_.idUser=e.userId,L.idUser=e.userId,e!=null)try{const t=await L.getEmpresaInfo();sessionStorage.setItem("dataEmpresa",JSON.stringify(t.data)),_.idEmpresa=t.data.idEmpresa,L.idEmpresa=t.data.idEmpresa}catch(t){console.error("Erro ao obter informações da empresa:",t)}};export{De as R,Ne as T,Ue as a,he as b,$e as c,ve as d,He as u};
