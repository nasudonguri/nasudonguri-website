let cdnList = {
  js: [
    'https://cdn.jsdelivr.net/npm/ua-parser-js/src/ua-parser.min.js',
    'https://cdn.jsdelivr.net/npm/twemoji/dist/twemoji.npm.min.js',
    'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
    'https://cdn.jsdelivr.net/npm/typed.js/lib/typed.min.js'
  ],
  css: [
    'https://cdn.jsdelivr.net/npm/the-new-css-reset/css/reset.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://cdn.jsdelivr.net/npm/typed.js/assets/demos.min.css'
  ]
};

let pageConfig = {
  title: document.title,
  description: document.querySelector('meta[name="description"]').innerHTML,
  header: true,
  footer: true,
  discord: false
};

let authorInfo = {
  name: '',
  link: {}
};

let pageList = {};

let headerHTML = ``;
let footerHTML = ``;

const sendDiscord = (url, text) => {
  
}

const init = () => {
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

  // Add header
  if(pageConfig.header){
    let header = document.createElement('header');
    header.innerHTML = headerHTML;
    document.body.prepend(header);
  }

  // Add footer
  if(pageConfig.footer){
    let footer = document.createElement('footer');
    footer.innerHTML = footerHTML;
    document.body.append(footer);
  }

  document.head.onload = () => {
    // Get UserAgent
    let uap = UAParser().getResult();

    let device = `
      Browser: ${uap.browser.toString()}
      OS: ${uap.os.toString()}
      Device: ${uap.device.toString()}
    `;

    // Send Discord
    if(pageConfig.discord != false){
      sendDiscord(pageConfig.discord, `Access`);
    }
  }
};

document.title = pageConfig.title;