import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/kdjrjidj/9d3ab3158d5c42934102969a6a854df4/raw/9dc72b1ce4348bf8e30593d74f4e60d6cf6e33d2/xjsjjdjdjsd.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.sjdbs)).buffer()
  await conn.sendFile(m.chat, cowi, '⛩️┃🏮𝑊𝐴𝑁𝛩🏮┃⛩️', '👤', m)
  let ciwi = await(await fetch(cita.hsvqwiw)).buffer()
  await conn.sendFile(m.chat, ciwi, '⛩️┃🏮𝑊𝐴𝑁𝛩🏮┃⛩️', '👤', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet']
handler.command = ['تطقيم-اولاد','طقم-اولاد'] 


export default handler
