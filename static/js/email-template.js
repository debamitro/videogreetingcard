function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002Femail.pug":"style\n  include style.css\nh1\n  = 'Video Greeting Card for ' + m_to\nbr\ndiv(class=\"msgdiv\")\n  = m_message\nbr\na(href!=m_videolink target=\"_blank\")\n  img(src!=m_videoimgsrc)\nbr\nbr\n= '- ' + m_from\n","views\u002Fstyle.css":"h1 {\n    font-family: Garamond, Georgia\n}\n\n.msgdiv {\n    font-family: Serif;\n    font-size: 14px;\n}\n"};
;var locals_for_with = (locals || {});(function (m_from, m_message, m_to, m_videoimgsrc, m_videolink) {;pug_debug_line = 1;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + "\u003Cstyle\u003Eh1 {\n    font-family: Garamond, Georgia\n}\n\n.msgdiv {\n    font-family: Serif;\n    font-size: 14px;\n}\n\u003C\u002Fstyle\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Video Greeting Card for ' + m_to) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + "\u003Cdiv class=\"msgdiv\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = m_message) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", m_videolink, false, false)+" target=\"_blank\"") + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", m_videoimgsrc, false, false)) + "\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\u002Femail.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = '- ' + m_from) ? "" : pug_interp));}.call(this,"m_from" in locals_for_with?locals_for_with.m_from:typeof m_from!=="undefined"?m_from:undefined,"m_message" in locals_for_with?locals_for_with.m_message:typeof m_message!=="undefined"?m_message:undefined,"m_to" in locals_for_with?locals_for_with.m_to:typeof m_to!=="undefined"?m_to:undefined,"m_videoimgsrc" in locals_for_with?locals_for_with.m_videoimgsrc:typeof m_videoimgsrc!=="undefined"?m_videoimgsrc:undefined,"m_videolink" in locals_for_with?locals_for_with.m_videolink:typeof m_videolink!=="undefined"?m_videolink:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}