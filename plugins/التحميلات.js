const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await downloads[Math.floor(Math.random() * ownloads.length)];
  conn.sendMessage(m.chat, {picture: {url: res}, caption: `   ✯≼══━━﹂⛩️﹁━━══≽✯
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
handler.help = ['التنزيلات'];
handler.tags = ['random'];
handler.command = /^4$/;
export default handler;

global.التنزيلات = [
  'https://telegra.ph/file/93202d4624c89e0423ccf.jpg',
  
];
