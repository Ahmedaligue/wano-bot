const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await downloads[Math.floor(Math.random() * downloads.length)];
  conn.sendMessage(m.chat, {video: {url: res}, caption: `   ✯≼══━━﹂⛩️﹁━━══≽✯
*اهـلـا بـك فـي قـسـم التـحـويلـات*
✯≼══━━﹂⛩️﹁━━══≽✯
*◞❐║🏮║⇠『ملصق』◈◜*
*◞❐║🏮║⇠『سرقه』◈◜*
*◞❐║🏮║⇠『ستاكت』◈◜*
*◞❐║🏮║⇠『جوده』◈◜*
*◞❐║🏮║⇠『لصوره』◈◜*
*◞❐║🏮║⇠『لملصق』◈◜*
*◞❐║🏮║⇠『لفيدي』◈◜*
*◞❐║🏮║⇠『لرابط』◈◜*
✯≼══━━﹂⛩️﹁━━══≽✯
*❐║حقوق║🏮𝑊𝐴𝑁𝛩🏮 》*
✯≼══━━﹂⛩️﹁━━══≽✯    `}, {quoted: m});
};
handler.help = ['downloads'];
handler.tags = ['random'];
handler.command = /^4$/;
export default handler;

global.التنزيلات = [
  'https://telegra.ph/file/afb43b1f36e2d189c764a.mp4',
  
];
