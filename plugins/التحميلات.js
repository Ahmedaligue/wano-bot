const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await lolivid[Math.floor(Math.random() * lolivid.length)];
  conn.sendMessage(m.chat, {video: {url: res}, caption: {` ✯≼══━━﹂⛩️﹁━━══≽✯
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
handler.help = ['التحميلات'];
handler.tags = ['random'];
handler. = /^التحميلات$/;
export default handler;

global. التحميلات = [
  ' https://telegra.ph/file/5d53cc9b66b472ad7de4a.mp4 ',
  
];
