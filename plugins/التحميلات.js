const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await lolivid[Math.floor(Math.random() * lolivid.length)];
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
*◞❐║🏮║⇠『』◈◜*
*◞❐║🏮║⇠『』◈◜*
*◞❐║🏮║⇠『』◈◜*
✯≼══━━﹂⛩️﹁━━══≽✯
*❐║حقوق║🏮𝑊𝐴𝑁𝛩🏮 》*
✯≼══━━﹂⛩️﹁━━══≽✯    `}, {quoted: m});
};
handler.help = ['التنزيلات'];
handler.tags = ['random'];
handler.command = /^التنزيلات$/;
export default handler;

global.التنزيلات = [
  'https://telegra.ph/file/f3aebe900dbce40dd98d9.jpg',
  
];
