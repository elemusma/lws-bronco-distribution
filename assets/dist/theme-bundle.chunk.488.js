"use strict";(self.webpackChunkRoots=self.webpackChunkRoots||[]).push([[488],{97488:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});var n=o(91238),r=o(33977),a=o(71305),c=o(33270);function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}var s=function(t){function e(){return t.apply(this,arguments)||this}var o,n;return n=t,(o=e).prototype=Object.create(n.prototype),o.prototype.constructor=o,i(o,n),e.prototype.onReady=function(){var t=this;(0,a.A)(this.context);var e=this.context.compareRemoveMessage;c("body").on("click","[data-comparison-remove]",(function(o){t.context.comparisons.length<=2&&((0,r.ji)(e),o.preventDefault())}))},e}(n.A)},71305:(t,e,o)=>{o.d(e,{A:()=>c});var n=o(33977),r=o(33270);function a(t,e,o){0!==t.length?(e.is("visible")||e.addClass("show"),e.attr("href",o.compare+"/"+t.join("/")),e.find("span.countPill").html(t.length)):e.removeClass("show")}function c(t){var e=t.noCompareMessage,o=t.urls,c=[],i=r("a[data-compare-nav]");r("body").on("compareReset",(function(){var t=r("body").find('input[name="products[]"]:checked');a(c=t.length?t.map((function(t,e){return e.value})).get():[],i,o)})),r("body").triggerHandler("compareReset"),r("body").on("click","[data-compare-id]",(function(t){var e,n=t.currentTarget.value,i=r("a[data-compare-nav]");t.currentTarget.checked?(e=n,c.push(e)):function(t,e){var o=t.indexOf(e);o>-1&&t.splice(o,1)}(c,n),a(c,i,o)})),r("body").on("click","a[data-compare-nav]",(function(){if(r("body").find('input[name="products[]"]:checked').length<=1)return(0,n.ji)(e),!1}))}}}]);
//# sourceMappingURL=theme-bundle.chunk.488.js.map