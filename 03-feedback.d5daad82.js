function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var n=r("8zd4h");const l=document.querySelector(".feedback-form"),i=l.querySelector('input[name="email"]'),s=l.querySelector('textarea[name="message"]');l.addEventListener("input",e(n)((function(){const e={email:i.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.addEventListener("load",(function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(i.value=e.email||"",s.value=e.message||"")})),l.addEventListener("submit",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log("Form Data:",t),localStorage.removeItem("feedback-form-state"),l.reset()}));
//# sourceMappingURL=03-feedback.d5daad82.js.map