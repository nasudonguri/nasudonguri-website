let cdnList = {
  js: [
    'https://cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js'
  ],
  css: [
  ]
};

window.onload = () => {
  for(path of cdnList.js){
    let jsTag = document.createElement('script');
    jsTag.src = path;
    document.head.appendChild(jsTag);
  }
  for(path of cdnList.css){
    let cssTag = document.createElement('link');
    cssTag.rel = 'stylesheet';
    cssTag.href = path;
    document.head.appendChild(cssTag);
  }
}