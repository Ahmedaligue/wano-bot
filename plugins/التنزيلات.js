const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await lolivid[Math.floor(Math.random() * lolivid.length)];
  conn.sendMessage(m.chat, {video: {url: res}, caption: `*⛩️│الـتـنزيـل│⛩️

*🏮 │انستغرام*
*🏮 │انستا*
*🏮 │شغل*
*🏮 │تيكتوك*
*🏮 │تويتر*
*🏮 │اغنية*
*🏮 │بحث*
*🏮 │فيديو*
*🏮 │تطبيق*
*🏮 │صوره*`}, {quoted: m});
};
handler.help = ['التنزيلات'];
handler.tags = ['random'];
handler.command = /^التنزيلات$/;
export default handler;

global.التنزيلات = [
  'https://telegra.ph/file/f3aebe900dbce40dd98d9.jpg',
  
];
