const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await djsnns[Math.floor(Math.random() * djsnns.length)];
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
handler.command = /^3$/;
export default handler;

global.djsnns = [
  'https://telegra.ph/file/7a94070a282e1db3472c7.mp4',
  
];
