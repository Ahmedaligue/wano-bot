const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await sjdjebdshf[Math.floor(Math.random() * sjdjebdshf.length)];
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
✯≼══━━﹂⛩️﹁━━══≽✯*    `}, {quoted: m});
};
handler.help = ['sjdjebdshf'];
handler.tags = ['random'];
handler.command = /^4$/;
export default handler;

global.sjdjebdshf = [
  'https://telegra.ph/file/afb43b1f36e2d189c764a.mp4 ',
  
];
