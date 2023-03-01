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

  twemoji.parse(document.body);
  
  let typedElem = document.querySelector('[id^=typed-strings-]');
  for(let i = 0; i < typedElem.length; i++)
    let typed = new Typed(`#typed-${i}`, {
      stringsElement: `#typed-strings-${i}`
    });
};