let cdnList = {
  js: [
    'https://cdn.jsdelivr.net/npm/ua-parser-js/src/ua-parser.min.js',
    'https://cdn.jsdelivr.net/npm/dayjs/dayjs.min.js',
    'https://cdn.jsdelivr.net/npm/dayjs/plugin/timezone.min.js',
    'https://cdn.jsdelivr.net/npm/dayjs/plugin/utc.min.js',
    'https://cdn.jsdelivr.net/npm/dayjs/locale/ja.min.js',
    'https://cdn.jsdelivr.net/npm/twemoji/dist/twemoji.npm.min.js',
    'https://cdn.jsdelivr.net/npm/typed.js/lib/typed.min.js',
    'https://cdn.jsdelivr.net/npm/qr-code-styling/lib/qr-code-styling.min.js'
  ],
  css: [
    'https://cdn.jsdelivr.net/npm/the-new-css-reset/css/reset.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://cdn.jsdelivr.net/npm/typed.js/assets/demos.min.css'
  ]
};

// Config
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

// Function Send Discord
const sendDiscord = (url, msg) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'username': user,
      'content': `${msg}
${now.format('YYYY年MM月DD日dd曜日 HH:mm:ss')}, ${device}`
    })
  });
};

// Init
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
    // Day.js Config
    dayjs.locale('ja');
    dayjs.extend(window.dayjs_plugin_utc);
    dayjs.extend(window.dayjs_plugin_timezone);
    dayjs.tz.setDefault('Asia/Tokyo');

    // Get Date and Time
    let now = dayjs();

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

    document.title = pageConfig.title;

    twemoji.parse(document.body);

    let typedElem = document.querySelector('[id^=typed-strings-]');
    for(let i = 0; i < typedElem.length; i++)
    let typed = new Typed(`#typed-${i}`, {
      stringsElement: `#typed-strings-${i}`
    });
  }
};
