const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await debt[Math.floor(Math.random() * debt.length)];
  conn.sendMessage(m.chat, {picture: {url: res}, caption: ` ✯≼══━━﹂⛩️﹁━━══≽✯
*اهـلـا بـك فـي قـسـم الــ🕋ــديـن*
✯≼══━━﹂⛩️﹁━━══≽✯
*◞❐║🏮║⇠『احاديث』◈◜*
*◞❐║🏮║⇠『الله』◈◜*
✯≼══━━﹂⛩️﹁━━══≽✯
*❐║حقوق║🏮𝑊𝐴𝑁𝛩🏮》*
✯≼══━━﹂⛩️﹁━━══≽✯ `}, {quoted: m});
};
handler.help = ['debt'];
handler.tags = ['random'];
handler. = /^6$/;
export default handler;

global.debt = [
  'https://telegra.ph/file/39b704a05eb784819da0a.jpg ',
  
];
