let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^5$/i.test(m.text)) { 
     hssbzhhzdbsh = [ 
                    `*نرحب بك في مملكة ماستر🌟男*

*◉━━━── •༺ 👑 ༻• ──━━━◉*
*⌗يمنع استخدام لقب خارج نطاق الانمي*

*˼‏⥆˹ الـلـقـب ⇜【】*

*˼‏⥆˹ من أي انمي لقبك⇜【 】*

*˼‏⥆˹ مـن طـرف مين⇜ 【  】*

*˼‏⥆ ˹ ذكـر أو انـثـى ⇜【  】*

*˼‏⥆˹ صـورة للشخصـية ⇜ 【 】*

*⌗ممنوع استخدام لقب بنت وانت ولد والعكس*
*◉━━━── •༺ 👑 ༻• ──━`  
                     
   
             

     ];
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
