let handler = async (m, { conn, command, text }) => {
let love = `
『 نرحب بجميع الاوتاكو 』
✯≼══━━﹂🏮﹁━━══≽✯

⛩️┃Wαɳσ『  🏮   』change┃⛩️

*⟽ ⎎مۘــمۘــيــزا̍ت ا̍ڵــنــقـ📜ـٰابة*
*┇مشرفين عادلين👨‍⚖️*               
*┇اعضا محترمين🪇*
*┇فعاليات يوميه🎮*   
*┇إعطاء إشراف لمن يستحقه🎗️*
*┇تصفيه اسبوعيه للأصنام👤*
✯≼══━━﹂🏮﹁━━══≽✯
*رابط الاستقبال:↶*
*『 https://chat.whatsapp.com/F8nL19lEuWmL4xleej7PsT 』*

*┇🏮 من طرف┇كاتاكوري*
✯≼══━━﹂🏮﹁━━══≽✯

 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^استماره$/i
export default handler
