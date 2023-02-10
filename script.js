let cdnList = {
  js: [
    '//cdn.jsdelivr.net/npm/muicss/dist/js/mui.min.js',
    '//cdn.jsdelivr.net/npm/ua-parser-js@latest/dist/ua-parser.min.js',
    '//cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js',
    '//cdn.jsdelivr.net/npm/notie/dist/notie.min.js',
    '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  ],
  css: [
    'https://cdn.jsdelivr.net/npm/muicss/dist/css/mui.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    '//cdn.jsdelivr.net/npm/notie/dist/notie.min.css'
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