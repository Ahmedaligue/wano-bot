const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await downloads[Math.floor(Math.random() * djsnns.length)];
  conn.djsnns(m.chat, {video: {url: res}, caption: `   ✯≼══━━﹂⛩️﹁━━══≽✯
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
handler.help = ['djsnns'];
handler.tags = ['random'];
handler.djsnns = /^3$/;
export default handler;

global.downloads = [
  'https://telegra.ph/file/afb43b1f36e2d189c764a.mp4',
  
];
