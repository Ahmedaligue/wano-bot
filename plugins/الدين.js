const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await debt[Math.floor(Math.random() * debt.length)];
  conn.sendMessage(m.chat, {video: {url: res}, caption: ` ✯≼══━━﹂⛩️﹁━━══≽✯
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
handler.command = /^6$/;
export default handler;

global.debt = [
  'https://telegra.ph/file/c4d3a877ec2e6b2bf037a.jpg ',
  
];
