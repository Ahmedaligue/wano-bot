const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await lolivid[Math.floor(Math.random() * lolivid.length)];
  conn.sendMessage(m.chat, {video: {url: res}, caption: ` ✯≼══━━﹂⛩️﹁━━══≽✯
*اهلـا بــك فـــي قــســم الــتـحـمـ🔽يلـات*
✯≼══━━﹂⛩️﹁━━══≽✯
*◞❐║🏮║⇠『نشيد』◈◜*
*◞❐║🏮║⇠『موسيقى』◈◜*
*◞❐║🏮║⇠『اغنيه』◈◜*
*◞❐║🏮║⇠『صورهia』◈◜*
*◞❐║🏮║⇠『فيديو2』◈◜*
*◞❐║🏮║⇠『فيديو』◈◜*
*◞❐║🏮║⇠『اغنيه2』◈◜*
*◞❐║🏮║⇠『فيس』◈◜صيانه*
*◞❐║🏮║⇠『انسنا』◈◜صيانه*
✯≼══━━﹂⛩️﹁━━══≽✯
*❐║حقوق ┃🏮𝑊𝐴𝑁𝛩🏮』* 
✯≼══━━﹂⛩️﹁━━══≽✯* `}, {quoted: m});
};
handler.help = ['4'];
handler.tags = ['random'];
handler.4 = /^4$/;
export default handler;

global.التحويلات = [
  ' ',
  
];
