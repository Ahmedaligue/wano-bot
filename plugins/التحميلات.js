const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await downloads[Math.floor(Math.random() * downloads.length)];
  conn.sendMessage(m.chat, {video: {url: res}, caption: `  ✯≼══━━﹂⛩️﹁━━══≽✯
 ✯≼══━━﹂⛩️﹁━━══≽✯
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
✯≼══━━﹂⛩️﹁━━══≽✯*   `}, {quoted: m});
};
handler.help = ['downloads'];
handler.tags = ['random'];
handler.command = /^4$/;
export default handler;

global.downloads = [
  '   ',
  
];
