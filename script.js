let cdnList = {
  js: [
    'https://cdn.jsdelivr.net/npm/muicss/dist/js/mui.min.js',
    'https://cdn.jsdelivr.net/npm/ua-parser-js/src/ua-parser.min.js',
    'https://cdn.jsdelivr.net/npm/twemoji/dist/twemoji.npm.min.js',
    'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  ],
  css: [
    'https://cdn.jsdelivr.net/npm/muicss/dist/css/mui.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
  ]
};

let pageConfig = {};

let pageList = {};

let headerHTML = ``;
let footerHTML = ``;

document.title = 'Loading';

document.head.onload = () => {
  // Add JavaScript CDN
  for(path of cdnList.js){
    let jsTag = document.createElement('script');
    jsTag.src = path;
    document.head.appendChild(jsTag);
  };

  // Add CSS CDN
  for(path of cdnList.css){
    let cssTag = document.createElement('link');
    cssTag.rel = 'stylesheet';
    cssTag.href = path;
    document.head.appendChild(cssTag);
  };
};

document.body.onload = () => {
  // Add header
  let header = document.createElement('header');
  header.innerHTML = headerHTML;
  document.body.prepend(header);

  // Add footer
  let footer = document.createElement('footer');
  footer.innerHTML = footerHTML;
  document.body.prepend(footer);
};

window.onload = () => {
  document.title = pageConfig.title;
};