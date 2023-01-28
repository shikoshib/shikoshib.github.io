/*
    Hi! This is all of the gj-boomlings-api's code in a single file.
    Version: 1.4.1
    Check out the original version here: https://www.npmjs.com/package/gj-boomlings-api

    Happy coding!
*/

let headers = {
    "Content-Type":"application/x-www-form-urlencoded",
    "user-agent":"",
    "Accept-Encoding":"*",
    "Accept":"*/*"
};
let server = "http://www.boomlings.com/database/";
let secret = "Wmfd2893gb7";

let colors = { 
    "0": "125,255,0", 
    "1": "0,255,0", 
    "2": "0,255,125", 
    "3": "0,255,255", 
    "4": "0,125,255", 
    "5": "0,0,255", 
    "6": "125,0,255", 
    "7": "255,0,255", 
    "8": "255,0,125", 
    "9": "255,0,0", 
    "10": "255,125,0", 
    "11": "255,255,0", 
    "12": "255,255,255", 
    "13": "185,0,255", 
    "14": "255,185,0", 
    "15": "0,0,0", 
    "16": "0,200,255", 
    "17": "175,175,175", 
    "18": "90,90,90", 
    "19": "255,125,125", 
    "20": "0,175,75", 
    "21": "0,125,125", 
    "22": "0,75,175", 
    "23": "75,0,175", 
    "24": "125,0,125", 
    "25": "175,0,75", 
    "26": "175,75,0", 
    "27": "125,125,0", 
    "28": "75,175,0", 
    "29": "255,75,0", 
    "30": "150,50,0", 
    "31": "150,100,0", 
    "32": "100,150,0", 
    "33": "0,150,100", 
    "34": "0,100,150", 
    "35": "100,0,150", 
    "36": "150,0,100", 
    "37": "150,0,0", 
    "38": "0,150,0", 
    "39": "0,0,150", 
    "40": "125,255,175", 
    "41": "125,125,255"
}

let officialSongs = {"sm": {
    "name": "Stereo Madness",
    "id": "Level 1",
    "artist": "ForeverBound",
    "link": "https://www.youtube.com/watch?v=JhKyKEDxo8Q"
},"bot": {
    "name": "Back on Track",
    "id": "Level 2",
    "artist": "DJVI",
    "link": "https://www.youtube.com/watch?v=N9vDTYZpqXM"
},
"pg": {
    "name": "Polargeist",
    "id": "Level 3",
    "artist": "Step",
    "link": "https://www.youtube.com/watch?v=4W28wWWxKuQ"
},
"dout": {
    "name": "Dry Out",
    "id": "Level 4",
    "artist": "DJVI",
    "link": "https://www.youtube.com/watch?v=FnXabH2q2A0"
},
"bab": {
    "name": "Base After Base",
    "id": "Level 5",
    "artist": "DJVI",
    "link": "https://www.youtube.com/watch?v=TZULkgQPHt0"
},
"clg": {
    "name": "Cant Let Go",
    "id": "Level 6",
    "artist": "DJVI",
    "link": "https://www.youtube.com/watch?v=fLnF-QnR1Zw"
},
"j": {
    "name": "Jumper",
    "id": "Level 7",
    "artist": "Waterflame",
    "link": "https://www.youtube.com/watch?v=ZXHO4AN_49Q"
},
"tm": {
    "name": "Time Machine",
    "id": "Level 8",
    "artist": "Waterflame",
    "link": "https://www.youtube.com/watch?v=zZ1L9JD6l0g"
},
"c": {
    "name": "Cycles",
    "id": "Level 9",
    "artist": "DJVI",
    "link": "https://www.youtube.com/watch?v=KDdvGZn6Gfs"
},
"xs": {
    "name": "xStep",
    "id": "Level 10",
    "artist": "DJVI",
    "link": "https://www.youtube.com/watch?v=PSvYfVGyQfw"
},
"cf": {
    "name": "Clutterfunk",
    "id": "Level 11",
    "artist": "Waterflame",
    "link": "https://www.youtube.com/watch?v=D5uJOpItgNg"
},
"toe": {
    "name": "Theory of Everything",
    "id": "Level 12",
    "artist": "DJ-Nate",
    "link": "https://www.newgrounds.com/audio/listen/354826"
},
"ea": {
    "name": "Electroman Adventures",
    "id": "Level 13",
    "artist": "Waterflame",
    "link": "https://www.youtube.com/watch?v=Pb6KyewC_Vg"
},
"cs": {
    "name": "Clubstep",
    "id": "Level 14",
    "artist": "DJ-Nate",
    "link": "https://www.newgrounds.com/audio/listen/396093"
},
"ed": {
    "name": "Electrodynamix",
    "id": "Level 15",
    "artist": "DJ-Nate",
    "link": "https://www.newgrounds.com/audio/listen/368392"
},
"hf": {
    "name": "Hexagon Force",
    "id": "Level 16",
    "artist": "Waterflame",
    "link": "https://www.youtube.com/watch?v=afwK743PL2Y"
},
"bp": {
    "name": "Blast Processing",
    "id": "Level 17",
    "artist": "Waterflame",
    "link": "https://www.youtube.com/watch?v=Z5RufkDHsdM"
},
"toeii": {
    "name": "Theory of Everything 2",
    "id": "Level 18",
    "artist": "DJ-Nate",
    "link": "https://www.newgrounds.com/audio/listen/790340"
},
"gd": {
    "name": "Geometrical Dominator",
    "id": "Level 19",
    "artist": "Waterflame",
    "link": "https://www.newgrounds.com/audio/listen/641172"
},
"d": {
    "name": "Deadlocked",
    "id": "Level 20",
    "artist": "F-777",
    "link": "https://www.youtube.com/watch?v=QRGkFkf2r0U"
},
"fd": {
    "name": "Fingerdash",
    "id": "Level 21",
    "artist": "MDK",
    "link": "https://www.youtube.com/watch?v=BuPmq7yjDnI"
},
"tss": {
    "name": "The Seven Seas",
    "id": "Level 1 (Geometry Dash: Meltdown)",
    "artist": "F-777",
    "link": "https://www.youtube.com/watch?v=38fPQ5JKQ_Q"
},
"va": {
    "name": "Viking Arena",
    "id": "Level 2 (Geometry Dash: Meltdown)",
    "artist": "F-777",
    "link": "https://www.youtube.com/watch?v=RaJ6Vf2w9hY"
},
"ar": {
    "name": "Airborne Robots",
    "id": "Level 3 (Geometry Dash: Meltdown)",
    "artist": "F-777",
    "link": "https://www.youtube.com/watch?v=guBpnPY32s0"
},
"tc": {
    "name": "Random Song 06",
    "id": "Level 22 (The Challenge)",
    "artist": "RobTop",
    "link": "https://www.newgrounds.com/audio/listen/633385"
},
"p": {
    "name": "Payload",
    "id": "Level 1 (Geometry Dash: World)",
    "artist": "Dex Arson",
    "link": "https://www.youtube.com/watch?v=2SFOjJxEL7g"
},
"bm": {
    "name": "Beast Mode",
    "id": "Level 2 (Geometry Dash: World)",
    "artist": "Dex Arson",
    "link": "https://www.newgrounds.com/audio/listen/589874"
},
"m": {
    "name": "Machina",
    "id": "Level 3 (Geometry Dash: World)",
    "artist": "Dex Arson",
    "link": "https://www.youtube.com/watch?v=EWjZOxs87yg"
},
"y": {
    "name": "Years",
    "id": "Level 4 (Geometry Dash: World)",
    "artist": "Dex Arson",
    "link": "https://www.youtube.com/watch?v=0MZvDD_sy-w"
},
"f": {
    "name": "Frontlines",
    "id": "Level 5 (Geometry Dash: World)",
    "artist": "Dex Arson",
    "link": "https://www.youtube.com/watch?v=f3wAripOdag"
},
"sp": {
    "name": "Space Pirates",
    "id": "Level 6 (Geometry Dash: World)",
    "artist": "Waterflame",
    "link": "https://www.youtube.com/watch?v=Cu7HaeRHMhM"
},
"s": {
    "name": "Striker",
    "id": "Level 7 (Geometry Dash: World)",
    "artist": "Waterflame",
    "link": "https://www.youtube.com/watch?v=MU9wRCGt9h8"
},
"e": {
    "name": "Embers",
    "id": "Level 8 (Geometry Dash: World)",
    "artist": "Dex Arson",
    "link": "https://www.youtube.com/watch?v=nMDMlIvdqlA"
},
"round": {
    "name": "Round 1",
    "id": "Level 9 (Geometry Dash: World)",
    "artist": "Dex Arson",
    "link": "https://www.youtube.com/watch?v=NvQoY4gTIGU"
},
"mdo": {
    "name": "Monster Dance Off",
    "id": "Level 10 (Geometry Dash: World)",
    "artist": "F-777",
    "link": "https://www.youtube.com/watch?v=B8YkwDbGBr8"
},
"unknown": {
    "name": "Unknown",
    "id": "This song is not defined by RobTop. In game it returns \"Back on Track\".",
    "artist": "DJVI",
    "link": null
}
}

async function xorEncrypt(str, key) {
    let r = await fetch(`https://gdtools.oshibkodielnyil.repl.co/xor.php?data=${str}&key=${key}`);
    let text = await r.text();
    return text;
}

async function xorDecrypt(str, key) {
    let r = await fetch(`https://gdtools.oshibkodielnyil.repl.co/xor.php?data=${str}&key=${key}&mode=dec`);
    let text = await r.text();
    return text;
}

async function gjp(pass) {
    const gjp = await xorEncrypt(pass, 37526);
    return gjp.toString();
}

function rgbToHEX(color) {
    let r = color.split(",")[0];
    let g = color.split(",")[1].split(",")[0];
    let b = color.split(",")[2];

    if(b.includes("#")) b = b.split("#")[0];

    let rHex = Number(r).toString(16);
    let gHex = Number(g).toString(16);
    let bHex = Number(b).toString(16); 

    return `#${rHex.length == 1 ? "0" + rHex : rHex}${gHex.length == 1 ? "0" + gHex : gHex}${bHex.length == 1 ? "0" + bHex : bHex}`.toUpperCase();
}

async function gjReq(endpoint, data) {
    let r = await fetch(`${server}${endpoint.endsWith(".php") ? endpoint.split(".php")[0] : endpoint}.php`, {
        method: 'POST',
        headers: {
            "Content-Type":"application/x-www-form-urlencoded",
            "user-agent":"",
            "Accept-Encoding":"*",
            "Accept":"*/*"
        },
        body: new URLSearchParams(data)
    })

    let res = await r.text()
    if(res.toLowerCase() == "error code: 1005") throw new Error("1005 Error: Your IP is banned from making requests to this server.");
    
    return {
        data: res,
        status: r.status
    };
}

function decB64(string) {
    let str = decodeURIComponent(escape(atob(string.replaceAll("_", '/').replaceAll("-", '+'))));
    return str;
}

function encB64(string) {
    if(!string || string == "") throw new Error("No string provided!")
    let str = btoa(unescape(encodeURIComponent(string))).replace(/\//g, '_').replace(/\+/g, '-');
    return str;
}

async function demonlist(name) {
    let r = await fetch(`https://pointercrate.com/api/v2/demons/?name=${name}`);
    let lvlObj = await r.json();
    if(lvlObj == undefined) return null;
    
    const res = {
        "position": lvlObj[0].position,
        "publisher": lvlObj[0].publisher.name,
        "verifier": lvlObj[0].verifier.name,
    }
        
    return res;
}

function decCommentFromHistory(comment) {
    let spl = comment.split('~');
    let cmnt = [];
    for(let i =0;i<spl.length;i++) {
      if(i%2!=0) {
        cmnt.push(spl[i-1]+`~`+spl[i]);
      }
    }

    let levelID = cmnt[1].split("~")[1];
    let commentContent = cmnt[0].split("~")[1];
    let playerID = cmnt[2].split("~")[1];
    let likes = cmnt[3].split("~")[1];
    let percent = cmnt[4].split("~")[1];
    let age = cmnt[5].split("~")[1];
    let messageID = cmnt[6].split("~")[1].split(":")[0];
    let username = cmnt[7].split("~")[0];
    
    const res = {
        username: username,
        content: decB64(commentContent),
        levelID: Number(levelID),
        playerID: Number(playerID),
        likes: Number(likes),
        percent: Number(percent),
        id: Number(messageID),
        age: age
    }

    return res;
}

async function decMessage(msg) {
    let spl = msg.split(":");
    let msgInfo = [];
    for(let i =0;i<spl.length;i++) {
      if(i%2!=0) {
        msgInfo.push(spl[i-1]+`:`+spl[i]);
      }
    }

    let username = msgInfo[0].split("6:")[1];
    let playerID = msgInfo[1].split("3:")[1];
    let accID = msgInfo[2].split("2:")[1];
    let msgID = msgInfo[3].split("1:")[1];
    let title = msgInfo[4].split("4:")[1];
    let content = msgInfo[7].split("5:")[1];
    let age = msgInfo[8].split("7:")[1];
    
    let decCntnt = await xorDecrypt(content, 14251);

    return {
        username: username,
        title: decB64(title),
        content: decCntnt,
        playerID: Number(playerID),
        accountID: Number(accID),
        messageID: Number(msgID),
        age: age
    };
}

function decMsg(msg) {
    let spl = msg.split("#")[0].split(":");
    let msgInfo = [];
    for(let i =0;i<spl.length;i++) {
      if(i%2!=0) {
        msgInfo.push(spl[i-1]+`:`+spl[i]);
      }
    }

    let username = msgInfo[0].split("6:")[1];
    let playerID = msgInfo[1].split("3:")[1];
    let accID = msgInfo[2].split("2:")[1];
    let msgID = msgInfo[3].split("1:")[1];
    let title = msgInfo[4].split("4:")[1];
    let age = msgInfo[7].split("7:")[1];

    return {
        username: username,
        title: decB64(title),
        playerID: Number(playerID),
        accountID: Number(accID),
        messageID: Number(msgID),
        age: age
    };
}

function decodeAccountPost(post) {
    let postContent = post.split("2~")[1].split("~4~")[0];
    let likes = post.split("~4~")[1].split("~9~")[0];
    let age = post.split("~9~")[1].split("~6~")[0];
    let id = post.split("~6~")[1];

    if(id.includes("~")) id = post.split("~6~")[2];
    if(id.includes("#")) id = id.split("#")[0];

    const result = {
        content: decB64(postContent).trim(),
        likes: Number(likes),
        age: age,
        id: Number(id)
    }

    return result;
}

function decodeGJComment(comment) {
    let spl = comment.split("~");
    let cmnt = [];
    for(let i =0;i<spl.length;i++) {
      if(i%2!=0) {
        cmnt.push(spl[i-1]+`~`+spl[i]);
      }
    }

    let commentContent = cmnt[0].split("2~")[1];
    let playerID = cmnt[1].split("3~")[1];
    let likes = cmnt[2].split("4~")[1];
    let percent = cmnt[4].split("10~")[1];
    let age = cmnt[5].split("9~")[1];
    let msgID = cmnt[6].split("6~")[1];
    let username = comment.split(":1~")[1].split("~9")[0];
    
    if(msgID.includes(":")) msgID = msgID.split(":")[0];

    const res = {
        username: username,
        content: decB64(commentContent),
        playerID: Number(playerID),
        likes: Number(likes),
        percent: Number(percent),
        id: Number(msgID),
        age: age
    }
    
    return res;
}

function decodeGJGauntlet(gauntlet) {
    let spl = gauntlet.split(':');
    let glInfo = [];
    for(let i =0;i<spl.length;i++) {
      if(i%2!=0) {
        glInfo.push(spl[i-1]+`:`+spl[i]);
      }
    }
    
    let id = glInfo[0].split(":")[1];
    let levelList = glInfo[1].split(":")[1];

    let firstLvl = levelList.split(",")[0];
    let secondLvl = levelList.split(",")[1].split(",")[0];
    let thirdLvl = levelList.split(",")[2].split(",")[0];
    let fourthLvl = levelList.split(",")[3].split(",")[0];
    let fifthLvl = levelList.split(",")[4].split("#")[0];

    const glIDs = {
        "1": "Fire Gauntlet",
        "2": "Ice Gauntlet",
        "3": "Poison Gauntlet",
        "4": "Shadow Gauntlet",
        "5": "Lava Gauntlet",
        "6": "Bonus Gauntlet",
        "7": "Chaos Gauntlet",
        "8": "Demon Gauntlet",
        "9": "Time Gauntlet",
        "10": "Crystal Gauntlet",
        "11": "Magic Gauntlet",
        "12": "spike Gauntlet",
        "13": "Monster Gauntlet",
        "14": "Doom Gauntlet",
        "15": "Death Gauntlet"
    }

    const list = [firstLvl,secondLvl,thirdLvl,fourthLvl,fifthLvl]

    const result = {
        "name": glIDs[id],
        "levels": list
    }

    return result;
}

function getOfficialSongInfo(song) {
    if(!song || song == "") throw new Error("Please provide a song ID.");
    if(isNaN(song)) throw new Error("A song ID must be a number.");
        const {
            sm,
            bot,
            pg,
            dout,
            bab,
            clg,
            j,
            tm,
            c,
            xs,
            cf,
            toe,
            ea,
            cs,
            ed,
            hf,
            bp,
            toeii,
            gd,
            d,
            fd,
            tss,
            va,
            ar,
            tc,
            p,
            bm,
            m,
            y,
            f,
            sp,
            s,
            e,
            round,
            mdo,
            unknown
        } = officialSongs;
        const jsons = {
            1: sm,
            2: bot,
            3: pg,
            4: dout,
            5: bab,
            6: clg,
            7: j,
            8: tm,
            9: c,
            10: xs,
            11: cf,
            12: toe,
            13: ea,
            14: cs,
            15: ed,
            16: hf,
            17: bp,
            18: toeii,
            19: gd,
            20: d,
            21: fd,
            22: tss,
            23: va,
            24: ar,
            25: tc,
            26: p,
            27: bm,
            28: m,
            29: y,
            30: f,
            31: sp,
            32: s,
            33: e,
            34: round,
            35: mdo
        }
        let result = jsons[Number(song)];
        if(result == undefined) result = unknown;
        return result;
}

async function decodeLevel(level){
    let spl = level.split(':');
    let levelInfo = [];
    for(let i =0;i<spl.length;i++) {
      if(i%2!=0) {
        levelInfo.push(spl[i-1]+`:`+spl[i]);
      }
    }
    
    let id = levelInfo[0].split("1:")[1];
    let name = levelInfo[1].split("2:")[1];
    let version = levelInfo[2].split("5:")[1];
    let difficulty = levelInfo[5].split("9:")[1];
    let downloads = levelInfo[6].split("10:")[1];
    let officialSong = levelInfo[7].split("12:")[1];
    let gameVersion = levelInfo[8].split("13:")[1];
    let likes = levelInfo[9].split("14:")[1];
    let demonBool = levelInfo[10].split("17:")[1];
    let stars = levelInfo[13].split("18:")[1];
    let ftrd = levelInfo[14].split("19:")[1];
    let epic = levelInfo[15].split("42:")[1];
    let objs = levelInfo[16].split("45:")[1];
    let desc = levelInfo[17].split("3:")[1];
    let length = levelInfo[18].split("15:")[1];
    let copiedID = levelInfo[19].split("30:")[1];
    let twoPlayer = levelInfo[20].split("31:")[1];
    let coins = levelInfo[21].split("37:")[1];
    let verifiedCoins = levelInfo[22].split("38:")[1];
    let starsRequested = levelInfo[23].split("39:")[1];
    let customSong = levelInfo[26].split("35:")[1].split("#")[0];
    let author = "-";
    
    if(levelInfo.length == 29) {
        author = levelInfo[27].split(":")[0];
    }

    let disliked = false;
    if(likes.includes("-")) disliked = true;

    if(desc.includes("/")) desc = desc.split("/")[0];
    if(decB64(desc) == '') desc = "KE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkKQ=="

    if(verifiedCoins == "0") verifiedCoins = false;
    if(verifiedCoins == "1") verifiedCoins = true;

    let demonBoolDecoding = {
        '1': true,
        '': false,
        '0': false
    }

    let featuredDecoding = {
        "0": false,
        "1": true,
        undefined: true
    }

    let featured = featuredDecoding[ftrd];
    if(featured == undefined) featured = true;

    let difficultyDecoding = {
        "-10": "Auto",
        "0": "Unrated",
        "10": "Easy",
        "20": "Normal",
        "30": "Hard",
        "40": "Harder",
        "50": "Insane"
    }

    if(demonBoolDecoding[demonBool] == true) {
        difficultyDecoding = {
            "10": "Easy Demon",
            "20": "Medium Demon",
            "30": "Hard Demon",
            "40": "Insane Demon",
            "50": "Extreme Demon"
        }
    }
    
    const lengthDecoding = {
        "0": "Tiny",
        "1": "Short",
        "2": "Medium",
        "3": "Long",
        "4": "XL"
    }

    const decodeGameVersion = {
        "1": "Pre-1.7",
        "2": "Pre-1.7",
        "3": "Pre-1.7",
        "4": "Pre-1.7",
        "5": "Pre-1.7",
        "6": "Pre-1.7",
        "7": "Pre-1.7",
        "10": "1.7",
        "18": "1.8",
        "19": "1.9",
        "20": "2.0",
        "21": "2.1"
    }
    
    let song;
    if(Number(officialSong) > 0) song = getOfficialSongInfo(Number(officialSong) + 1);
    if(Number(officialSong) == 0 && Number(customSong) == 0) song = getOfficialSongInfo(1);
    if(Number(customSong) > 0) {
        let songName = level.split("~|~2~|~")[1].split("~|~3~|~")[0]
        let songId = Number(level.split("#1~|~")[1].split("~|~2~|~")[0])
        let artist = level.split("~|~4~|~")[1].split("~|~5~|~")[0]
        let artistId = Number(level.split("~|~3~|~")[1].split("~|~4~|~")[0])
        let size = `${level.split("~|~5~|~")[1].split("~|~6~|~")[0]} MB`
        let link = decodeURIComponent(level.split("~|~10~|~")[1].split("~|~7~|~")[0])

        let songinfo = {
            "name": songName,
            "id": songId,
            "artist": artist,
            "artistId": artistId,
            "fileSize": size,
            "link": link
        }

        song = songinfo;
    }
    
    let dlist = await demonlist(name);
    
    let result = {
        id: Number(id),
        name: name,
        description: decB64(desc),
        creator: author,
        level_version: Number(version),
        difficulty: difficultyDecoding[difficulty],
        stars: Number(stars),
        downloads: Number(downloads),
        likes: Number(likes),
        disliked: disliked,
        length: lengthDecoding[length],
        demon: demonBoolDecoding[demonBool],
        featured: featured,
        epic: demonBoolDecoding[epic],
        objects: Number(objs),
        stars_requested: Number(starsRequested),
        game_version: decodeGameVersion[gameVersion],
        copied: Number(copiedID),
        large: Number(objs) > 40000 ? true : false,
        two_p: demonBoolDecoding[twoPlayer],
        coins: Number(coins),
        verified_coins: verifiedCoins,
        song: song
    }

    if(dlist != null) {
        result['pointercrate'] = dlist;
    }

    return result;
}

function decodeLevelRes(level){
    let spl = level.split(':');
    let levelInfo = [];
    for(let i =0;i<spl.length;i++) {
      if(i%2!=0) {
        levelInfo.push(spl[i-1]+`:`+spl[i]);
      }
    }
    
    let id = levelInfo[0].split("1:")[1];
    let name = levelInfo[1].split("2:")[1];
    let version = levelInfo[2].split("5:")[1];
    let playerID = levelInfo[3].split("6:")[1];
    let difficulty = levelInfo[5].split("9:")[1];
    let downloads = levelInfo[6].split("10:")[1];
    let officialSong = levelInfo[7].split("12:")[1];
    let gameVersion = levelInfo[8].split("13:")[1];
    let likes = levelInfo[9].split("14:")[1];
    let demonBool = levelInfo[10].split("17:")[1];
    let stars = levelInfo[13].split("18:")[1];
    let ftrd = levelInfo[14].split("19:")[1];
    let epic = levelInfo[15].split("42:")[1];
    let objs = levelInfo[16].split("45:")[1];
    let desc = levelInfo[17].split("3:")[1];
    let length = levelInfo[18].split("15:")[1];
    let copiedID = levelInfo[19].split("30:")[1];
    let twoPlayer = levelInfo[20].split("31:")[1];
    let coins = levelInfo[21].split("37:")[1];
    let verifiedCoins = levelInfo[22].split("38:")[1];
    let starsRequested = levelInfo[23].split("39:")[1];
    let customSong = levelInfo[26].split("35:")[1].split("#")[0];

    let disliked = false;
    if(likes.includes("-")) disliked = true;

    if(desc.includes("/")) desc = desc.split("/")[0];
    if(decB64(desc) == '') desc = "KE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkKQ=="

    if(verifiedCoins == "0") verifiedCoins = false;
    if(verifiedCoins == "1") verifiedCoins = true;

    let demonBoolDecoding = {
        '1': true,
        '': false,
        '0': false
    }

    let featuredDecoding = {
        "0": false,
        "1": true,
        undefined: true
    }

    let featured = featuredDecoding[ftrd];
    if(featured == undefined) featured = true;

    let difficultyDecoding = {
        "-10": "Auto",
        "0": "Unrated",
        "10": "Easy",
        "20": "Normal",
        "30": "Hard",
        "40": "Harder",
        "50": "Insane"
    }

    if(demonBoolDecoding[demonBool] == true) {
        difficultyDecoding = {
            "10": "Easy Demon",
            "20": "Medium Demon",
            "30": "Hard Demon",
            "40": "Insane Demon",
            "50": "Extreme Demon"
        }
    }
    
    const lengthDecoding = {
        "0": "Tiny",
        "1": "Short",
        "2": "Medium",
        "3": "Long",
        "4": "XL"
    }

    const decodeGameVersion = {
        "1": "Pre-1.7",
        "2": "Pre-1.7",
        "3": "Pre-1.7",
        "4": "Pre-1.7",
        "5": "Pre-1.7",
        "6": "Pre-1.7",
        "7": "Pre-1.7",
        "10": "1.7",
        "18": "1.8",
        "19": "1.9",
        "20": "2.0",
        "21": "2.1"
    }

    let result = {
        id: Number(id),
        name: name,
        description: decB64(desc),
        level_version: Number(version),
        difficulty: difficultyDecoding[difficulty],
        stars: Number(stars),
        downloads: Number(downloads),
        likes: Number(likes),
        disliked: disliked,
        length: lengthDecoding[length],
        demon: demonBoolDecoding[demonBool],
        featured: featured,
        epic: demonBoolDecoding[epic],
        objects: Number(objs),
        stars_requested: Number(starsRequested),
        game_version: decodeGameVersion[gameVersion],
        copied: Number(copiedID),
        large: Number(objs) > 40000 ? true : false,
        two_p: demonBoolDecoding[twoPlayer],
        coins: Number(coins),
        verified_coins: verifiedCoins
    }

    return {
            res: result, 
            playerID: playerID, 
            officialSong: officialSong, 
            customSong: customSong
        };
}

function decodeMapPack(mp) {
    let spl = mp.split(':');
    let mpInfo = [];
    for(let i =0;i<spl.length;i++) {
        if(i%2!=0) {
            mpInfo.push(spl[i-1]+`:`+spl[i]);
        }
    }

    let mappackID = mpInfo[0].split("1:")[1];
    let name = mpInfo[1].split("2:")[1];
    let unarrayedList = mpInfo[2].split("3:")[1];
    let stars = mpInfo[3].split("4:")[1];
    let coins = mpInfo[4].split("5:")[1];
    let difficulty = mpInfo[5].split("6:")[1];
    let txtCol = mpInfo[6].split("7:")[1];
    let barCol = mpInfo[7].split("8:")[1];
    
    let firstLvl = unarrayedList.split(",")[0];
    let secondLvl = unarrayedList.split(",")[1].split(",")[0];
    let thirdLvl = unarrayedList.split(",")[2].split(",")[0];

    let difficultyDecoder = {
        "0": "Auto",
        "1": "Easy",
        "2": "Normal",
        "3": "Hard",
        "4": "Harder",
        "5": "Insane",
        "6": "Hard Demon",
        "7": "Easy Demon",
        "8": "Medium Demon",
        "9": "Insane Demon",
        "10": "Extreme Demon",
    }

    const result = {
        name: name,
        id: Number(mappackID),
        levels: [Number(firstLvl),Number(secondLvl),Number(thirdLvl)],
        stars: Number(stars),
        coins: Number(coins),
        difficulty: difficultyDecoder[difficulty],
        textColor: rgbToHEX(txtCol),
        barColor: rgbToHEX(barCol)
    }

    return result;
}

function decodeUserResult(user) {
    let spl = user.split(':');
    let userInfo = [];
    for(let i =0;i<spl.length;i++) {
      if(i%2!=0) {
        userInfo.push(spl[i-1]+`:`+spl[i]);
      }
    }

    let name = userInfo[0].split("1:")[1];
    let playerID = userInfo[1].split("2:")[1];
    let coins = userInfo[2].split("13:")[1];
    let userCoins = userInfo[3].split("17:")[1];
    let p1col = userInfo[6].split("10:")[1];
    let p2col = userInfo[7].split("11:")[1];
    let accID = userInfo[10].split("16:")[1];
    let stars = userInfo[11].split("3:")[1];
    let cp = userInfo[12].split("8:")[1];
    let demons = userInfo[13].split("4:")[1].split("#")[0];

    const result = {
        username: name.trim(),
        playerID: Number(playerID),
        accountID: Number(accID),
        color1: rgbToHEX(colors[p1col]),
        color2: rgbToHEX(colors[p2col]),
        stars: Number(stars),
        secretCoins: Number(coins),
        userCoins: Number(userCoins),
        demons: Number(demons),
        creatorPoints: Number(cp)
    }

    return result;
}

function decScoresUser(user) {
    let spl = user.split(':');
    let userInfo = [];
    for(let i =0;i<spl.length;i++) {
      if(i%2!=0) {
        userInfo.push(spl[i-1]+`:`+spl[i]);
      }
    }

    let name = userInfo[0].split("1:")[1];
    let playerID = userInfo[1].split("2:")[1];
    let coins = userInfo[2].split("13:")[1];
    let userCoins = userInfo[3].split("17:")[1];
    let p1col = userInfo[6].split("10:")[1];
    let p2col = userInfo[7].split("11:")[1];
    let rank = userInfo[4].split("6:")[1];
    let accID = userInfo[10].split("16:")[1];
    let stars = userInfo[11].split("3:")[1];
    let cp = userInfo[12].split("8:")[1];
    let diamonds = userInfo[13].split("46:")[1];
    let demons = userInfo[14].split("4:")[1];

    const result = {
        username: name.trim(),
        playerID: playerID,
        accountID: accID,
        rank: rank,
        color1: rgbToHEX(colors[p1col]),
        color2: rgbToHEX(colors[p2col]),
        stars: stars,
        diamonds: diamonds,
        secretCoins: coins,
        userCoins: userCoins,
        demons: demons,
        creatorPoints: cp
    }

    return result;
}

async function searchUsers(str) {
    if(!str || str == '') throw new Error("Please provide a query!");

    let res = await gjReq("getGJUsers20", {
        str: str,
        secret: "Wmfd2893gb7"
    })

    if(res.data == -1) throw new Error(`Couldn't find a "${str}" user.`)

    return decodeUserResult(res.data);
}

async function blockUser(target, username, password) {
    if(!target || target == "") throw new Error("Please provide a target's player ID or username!");
    if(!username || username == "") throw new Error("Please provide your player ID or username!");
    if(!password || password == "") throw new Error("Please provide your password!");

    let user = await searchUsers(username);
    let targetObj = await searchUsers(target);

    const data = {
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0,
        secret: "Wmfd2893gb7",
        targetAccountID: targetObj.accountID,
        accountID: user.accountID,
        gjp: gjp(password)
    }

    let res = await gjReq("blockGJUser20", data);
    if(res.data == -1) throw new Error(-1);

    return 1;
}

async function deleteAccountPost(id, str, password) {
    if(!id || id == "") throw new Error("Please provide an account post ID!");
    if(!str || str == "") throw new Error("Please provide a user ID or name!");
    if(!password || password == "") throw new Error("Please provide a password!");

    let user = await searchUsers(str);

    let data = {
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0,
        accountID: user.accountID,
        secret: "Wmfd2893gb7",
        gjp: gjp(password),
        commentID: id,
    };

    let res = await gjReq("deleteGJAccComment20", data);
    if(res.data == -1) throw new Error(-1);

    return 1;
}

async function deleteComment(id, lvl, str, password) {
    if(!id || id == "") throw new Error("Please provide a comment ID!");
    if(!lvl || lvl == "") throw new Error("Please provide a level ID!");
    if(!str || str == "") throw new Error("Please provide a user ID or name!");
    if(!password || password == "") throw new Error("Please provide a password!");

    let user = await searchUsers(str);

    let data = {
        accountID: user.accountID,
        secret: "Wmfd2893gb7",
        levelID: lvl,
        gjp: gjp(password),
        commentID: id,
    };

    let res = await gjReq("deleteGJComment20", data);
    if(res.data == -1) throw new Error(-1);

    return 1;
}

async function getLevelByID(id) {
    if(!id || id == "") throw new Error("Please provide a level ID!");
    if(isNaN(id)) throw new Error("The level ID should be a number!");

    const data = {
        secret: secret,
        str: id,
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0,
        type: 0
    }

    let res = await gjReq("getGJLevels21", data);
    if(res.data == -1) throw new Error("-1 Not found.");

    return await decodeLevel(res.data);
}

async function deleteLevel(lvl, str, password) {
    if(!lvl || lvl == "") throw new Error("Please provide a level ID!");
    if(!str || str == "") throw new Error("Please provide a user ID or name!");
    if(!password || password == "") throw new Error("Please provide a password!");

    let user = await searchUsers(str);

    let data = {
        accountID: user.accountID,
        secret: "Wmfv2898gc9",
        levelID: lvl,
        gjp: gjp(password),
    };

    let res = await gjReq("deleteGJLevelUser20", data);
    if(res.data == -1) throw new Error(-1);

    return 1;
}

async function dlLevel(level) {
    if(!level || level == "") throw new Error("Please provide a level ID.");
    if(isNaN(level)) throw new Error("The level parameter should be a number.");

    let xor = new XOR();

    const data = {
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0,
        levelID: level.toString().trim(),
        secret: "Wmfd2893gb7"
    }

    let res = await gjReq('downloadGJLevel22', data);
    if(res.data == -1) throw new Error("-1 This level is not found.");

    let spl = res.data.split(":");
    let levelInfo = [];
    for(let i =0;i<spl.length;i++) {
        if(i%2!=0) {
        levelInfo.push(spl[i-1]+`:`+spl[i]);
        }
    }

    let id = levelInfo[0].split("1:")[1];
    let name = levelInfo[1].split("2:")[1];
    let description = decB64(levelInfo[2].split("3:")[1]);
    let version = levelInfo[4].split("5:")[1];
    let difficulty = levelInfo[7].split("9:")[1];
    let downloads = levelInfo[8].split("10:")[1];
    let gameVersion = levelInfo[10].split("13:")[1];
    let likes = levelInfo[11].split("14:")[1];
    let demonBool = levelInfo[12].split("17:")[1];
    let stars = levelInfo[15].split("18:")[1];
    let ftrd = levelInfo[16].split("19:")[1];
    let epic = levelInfo[17].split("42:")[1];
    let objs = levelInfo[18].split("45:")[1];
    let length = levelInfo[19].split("15:")[1];
    let copiedID = levelInfo[20].split("30:")[1];
    let twoPlayer = levelInfo[21].split("31:")[1];
    let uploaded = levelInfo[22].split("28:")[1];
    let updated = levelInfo[23].split("29:")[1];
    let coins = levelInfo[26].split("37:")[1];
    let verifiedCoins = levelInfo[27].split("38:")[1];
    let starsRequested = levelInfo[28].split("39:")[1];
    let ldm = levelInfo[31].split("40:")[1];
    let password = await xorDecrypt(levelInfo[32].split("27:")[1].split("#")[0], 26364);

    if(password.length == 7) password = password.replace("1", "");

    let disliked = likes.includes("-") ? true : false;

    if(verifiedCoins == "0") verifiedCoins = false;
    if(verifiedCoins == "1") verifiedCoins = true;

    let demonBoolDecoding = {
        '1': true,
        '': false,
        '0': false
    }

    let featuredDecoding = {
        "0": false,
        "1": true,
        undefined: true
    }

    let featured = featuredDecoding[ftrd];
    if(featured == undefined) featured = true;

    let difficultyDecoding = {
        "-10": "Auto",
        "0": "Unrated",
        "10": "Easy",
        "20": "Normal",
        "30": "Hard",
        "40": "Harder",
        "50": "Insane"
    }

    if(demonBoolDecoding[demonBool] == true) {
        difficultyDecoding = {
            "10": "Easy Demon",
            "20": "Medium Demon",
            "30": "Hard Demon",
            "40": "Insane Demon",
            "50": "Extreme Demon"
        }
    }
            
    const lengthDecoding = {
        "0": "Tiny",
        "1": "Short",
        "2": "Medium",
        "3": "Long",
        "4": "XL"
    }

    const decodeGameVersion = {
        "1": "Pre-1.7",
        "2": "Pre-1.7",
        "3": "Pre-1.7",
        "4": "Pre-1.7",
        "5": "Pre-1.7",
        "6": "Pre-1.7",
        "7": "Pre-1.7",
        "10": "1.7",
        "18": "1.8",
        "19": "1.9",
        "20": "2.0",
        "21": "2.1"
    }

    if(description == '') description = "(No description provided)";

    let getLvl = await getLevelByID(id);
    let result = {
        id: Number(id),
        name: name,
        description: description,
        creator: getLvl.creator,
        level_version: Number(version),
        difficulty: difficultyDecoding[difficulty],
        stars: Number(stars),
        downloads: Number(downloads),
        likes: Number(likes),
        disliked: disliked,
        length: lengthDecoding[length],
        password: password, 
        demon: demonBoolDecoding[demonBool],
        featured: featured,
        epic: demonBoolDecoding[epic],
        objects: Number(objs),
        uploaded: uploaded,
        updated: updated,
        stars_requested: Number(starsRequested),
        game_version: decodeGameVersion[gameVersion],
        ldm: demonBoolDecoding[ldm],
        copied: Number(copiedID),
        large: Number(objs) > 40000 ? true : false,
        two_p: demonBoolDecoding[twoPlayer],
        coins: Number(coins),
        verified_coins: verifiedCoins,
        song: getLvl.song,
    }
            
    if(getLvl.pointercrate != undefined && server.includes("boomlings.com/database")) {
        result.pointercrate = getLvl.pointercrate;
    }

    return result;
}

async function dlMessage(id, user, pass) {
    if(!id || id == "") throw new Error("Please provide a message ID!");
    if(Number(id) == NaN) throw new Error("The message ID should be a number!");
    if(!user || user == "") throw new Error("Please provide your player ID or username!");
    if(!pass || pass == "") throw new Error("Please provide your password!");

    let userObj = await searchUsers(user);

    const data = {
        accountID: userObj.accountID,
        gjp: gjp(pass),
        secret: secret,
        messageID: id
    }

    let res = await gjReq("downloadGJMessage20", data);
    if(res.data == -1) throw new Error(-1);

    return decMessage(res.data);
}

async function getAccountPosts(str, page = 1) {
    if(!str || str == "") throw new Error("Please provide a user ID or name!");

    let user = await searchUsers(str);

    let ACdata = {
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0,
        accountID: user.accountID,
        secret: "Wmfd2893gb7",
        page: page - 1
    };

    let res = await gjReq("getGJAccountComments20", ACdata);
    if(res.data == -1) throw new Error("-1 Not found.");
    if(res.data.startsWith("#")) throw new Error("Whoops! Couldn't find anything!");
    
    let accPosts = res.data.split("|");
    let result = [];
    accPosts.forEach(p => {
        result.push(decodeAccountPost(p));
    })

    return result;
}

async function getBlockedList(str, pass) {
    if(!str || str == "") throw new Error("Please provide your player ID or username!");
    if(!pass || pass == "") throw new Error("Please provide your password!");

    let user = await searchUsers(str);

    const data = {
        accountID: user.accountID,
        gjp: gjp(pass),
        secret: "Wmfd2893gb7",
        type: 1
    }

    let res = await gjReq("getGJUserList20", data);
    if(res.data == -1) throw new Error(-1);
    if(res.data == -2) throw new Error("No players have been found in the blocklist.");
    
    let players = res.data.split("|");
    let result = [];

    players.forEach(p => {
        let username = p.split(":")[1];
        let playerID = p.split(":")[3];
        let p1 = p.split(":")[7];
        let p2 = p.split(":")[9];
        let accID = p.split(":")[15];
        let msg = p.split(":")[17];

        let msgState = {
            "0": "all",
            "1": "friends",
            "2": "none"
        }

        result.push({
            username: username,
            playerID: Number(playerID),
            accountID: Number(accID),
            color1: rgbToHEX(colors[p1]),
            color2: rgbToHEX(colors[p2]),
            messages: msgState[msg]
        })
    })

    return result;
}

async function getCommentHistory(str, page = 1, mode = 1) {
    if(!str || str == "") throw new Error("Please provide a player ID or name!");
    if(page && isNaN(page)) throw new Error("Please provide a page!");
    if(mode && isNaN(mode)) throw new Error("Please provide a mode ID! 0 for recent, 1 for most liked.");
    
    const user = await getProfile(str);
    if(user.commentHistory != "all") throw new Error("Whoops! This user has disabled viewing his comment history!");

    const CHData = {
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0,
        secret: "Wmfd2893gb7",
        userID: user.playerID,
        page: Number(page) - 1,
        mode: Number(mode)
    }

    let res = await gjReq("getGJCommentHistory", CHData);
    if(res.data == -1) throw new Error("-1 Not found.");
    
    let comments = res.data.split("|");
    let result = [];
    comments.forEach(c => {
        result.push(decCommentFromHistory(c));
    })

    return result;
}

async function getComments(level, page = 1, mode = 1) {
    if(!level || level == "") throw new Error("Please provide a level ID!");
    if(isNaN(level)) throw new Error("A level ID should be a number.");
    if(mode && isNaN(mode)) throw new Error("Please provide a mode ID! 0 for recent, 1 for most liked.");

    const data = {
        levelID: level,
        page: Number(page) - 1,
        mode: Number(mode),
        secret: "Wmfd2893gb7",
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0
    }

    let res = await gjReq("getGJComments21", data);
    if(res.data.startsWith("#")) throw new Error("-1 No comments have been found.");
    
    let comments = res.data.split("|");
    let result = [];
    comments.forEach(c => {
        result.push(decodeGJComment(c));
    })

    return result;
}

async function getCreatorScores() {
    const data = {
        secret: secret,
        type: "creators",
        count: 100
    }

    let res = await gjReq("getGJScores20", data);

    let players = res.data.split("|");
    let emptyElem = players.indexOf(100);

    players.splice(emptyElem, 1);

    let result = [];
    players.forEach(p => {
        result.push(decScoresUser(p));
    });

    return result;
}

async function getDailyLevel() {
    let res = await dlLevel(-1);
    return res;
}

async function getWeeklyDemon() {
    let res = await dlLevel(-2);
    return res;
}

async function getFriendsList(str, pass) {
    if(!str || str == "") throw new Error("Please provide your player ID or username!");
    if(!pass || pass == "") throw new Error("Please provide your password!");

    let user = await searchUsers(str);

    const data = {
        accountID: user.accountID,
        gjp: gjp(pass),
        secret: "Wmfd2893gb7"
    }

    let res = await gjReq("getGJUserList20", data);
    let players = res.data.split("|");
    let result = [];

    players.forEach(p => {
        let username = p.split(":")[1];
        let playerID = p.split(":")[3];
        let p1 = p.split(":")[7];
        let p2 = p.split(":")[9];
        let accID = p.split(":")[15];
        let msg = p.split(":")[17];

        let msgState = {
            "0": "all",
            "1": "friends",
            "2": "none"
        }

        result.push({
            username: username,
            playerID: Number(playerID),
            accountID: Number(accID),
            color1: rgbToHEX(colors[p1]),
            color2: rgbToHEX(colors[p2]),
            messages: msgState[msg]
        })
    })

    return result;
}

async function getGauntlets() {
    const data = {
        secret: "Wmfd2893gb7",
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0
    }

    let res = await gjReq("getGJGauntlets21", data)

    let gauntlets = res.data.split("|");
    let result = [];
    gauntlets.forEach(g => {
        result.push(decodeGJGauntlet(g));
    })

    return result;
}

async function getMapPacks(page = 1) {
    const data = {
        secret: "Wmfd2893gb7",
        page: Number(page) - 1
    }

    let res = await gjReq("getGJMapPacks21", data);
    if(res.data.startsWith("#")) throw new Error("-1 Not found.");

    let packs = res.data.split("|");
    let result = [];
    packs.forEach(p => {
        result.push(decodeMapPack(p));
    })

    return result;
}

async function getMessages(user, pass, page = 1) {
    if(!user || user == "") throw new Error("Please provide your player ID or username!");
    if(!pass || pass == "") throw new Error("Please provide your password!");
    if(Number(page) == NaN) throw new Error("The page should be a number!");

    let userObj = await searchUsers(user);

    const data = {
        accountID: userObj.accountID,
        gjp: gjp(pass),
        secret: secret,
        page: Number(page) - 1
    }

    let res = await gjReq("getGJMessages20", data);
    if(res.data == -1) throw new Error(-1);

    let msgs = res.data.split("|");
    let result = [];
    msgs.forEach(m => {
        result.push(decMsg(m));
    })

    return result;
}

async function getProfile(str) {
    if(!str || str == "") throw new Error("Please provide a user ID or name!");

    let user = await searchUsers(str);

    let data = {
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0,
        targetAccountID: user.accountID,
        secret: "Wmfd2893gb7"
    };

    let res = await gjReq("getGJUserInfo20", data);
    if(res.data == -1) throw new Error("-1 This user is not found.");

    let spl = res.data.split(':');
    let userInfo = [];
    for(let i =0;i<spl.length;i++) {
      if(i%2!=0) {
        userInfo.push(spl[i-1]+`:`+spl[i]);
      }
    }

    let username = userInfo[0].split("1:")[1];
    let playerID = userInfo[1].split("2:")[1];
    let goldCoins = userInfo[2].split("13:")[1];
    let silverCoins = userInfo[3].split("17:")[1];
    let p1col = userInfo[4].split("10:")[1];
    let p2col = userInfo[5].split("11:")[1];
    let stars = userInfo[6].split("3:")[1];
    let diamonds = userInfo[7].split("46:")[1];
    let demons = userInfo[8].split("4:")[1];
    let cps = userInfo[9].split("8:")[1];         // clicks per second lmao
    let msgState = userInfo[10].split("18:")[1];
    let friendsState = userInfo[11].split("19:")[1];
    let commentHistoryState = userInfo[12].split("50:")[1];
    let youtube = userInfo[13].split("20:")[1];
    let rank = userInfo[23].split("30:")[1];
    let accountID = userInfo[24].split("16:")[1];
    let twitter = userInfo[26].split("44:")[1];
    let twitch = userInfo[27].split("45:")[1];
    let modState = userInfo[28].split("49:")[1];

    let ytLnk = youtube != "" ? `https://youtube.com/channel/${youtube}` : null;
    let twitterLnk = twitter != "" ? `https://twitter.com/${twitter}` : null;
    let twitchLnk = twitch != "" ? `https://twitch.tv/${twitch}` : null;

    if(youtube.endsWith("123")) ytLnk = `https://youtube.com/channel/${youtube.split("123")[0]}`;
    if(twitter.endsWith("123")) twitterLnk = `https://twitter.com/${twitter.split("123")[0]}`;
    if(twitch.endsWith("123")) twitchLnk = `https://twitch.tv/${twitch.split("123")[0]}`;

    let msgStateDecoding = {
        "0": "all",
        "1": "friends",
        "2": "none"
    }

    let stateBinaryDecoding = {
        "0": "all",
        "1": "none"
    }

    let modDecoding = {
        "0": "none",
        "1": "mod",
        "2": "elder"
    }

    const result = {
        username: username,
        playerID: Number(playerID),
        accountID: Number(accountID),
        rank: Number(rank),
        color1: rgbToHEX(colors[p1col]),
        color2: rgbToHEX(colors[p2col]),
        stars: Number(stars),
        diamonds: Number(diamonds),
        secretCoins: Number(goldCoins),
        userCoins: Number(silverCoins),
        demons: Number(demons),
        creatorPoints: Number(cps),
        messages: msgStateDecoding[msgState],
        friendRequests: stateBinaryDecoding[friendsState],
        commentHistory: msgStateDecoding[commentHistoryState],
        mod: modDecoding[modState],
        youtube: ytLnk,
        twitter: twitterLnk,
        twitch: twitchLnk
    }
    
    return result;
}

async function getSongInfo(song) {
    if(!song || song == "") throw new Error("Please provide a song ID.");
    if(isNaN(song)) throw new Error("A song ID must be a number.");

    const data = {
        songID: song,
        secret: "Wmfd2893gb7"
    }

    let res = await gjReq('getGJSongInfo', data);
    if(res.data == -2) throw new Error(`-2. Couldn't find a song with ID ${song}.`);

    const result = {
        "name": res.data.split("|~2~|~")[1].split("~|~3~|~")[0],
        "id": Number(res.data.split("1~|~")[1].split("~|~2~|")[0]),
        "artist": res.data.split("~|~4~|~")[1].split("~|~5~|~")[0],
        "artistId": Number(res.data.split("~|~3~|~")[1].split("~|~4~|~")[0]),
        "fileSize": `${res.data.split("~|~5~|~")[1].split("~|~6~|~")[0]} MB`,
        "link": decodeURIComponent(res.data.split("~|~10~|~")[1].split("~|~7~|~")[0])
    }

    return result;
}

async function getTop100() {
    const data = {
        secret: secret,
        type: "top",
        count: 100
    }

    let res = await gjReq("getGJScores20", data);

    let players = res.data.split("|");
    let emptyElem = players.indexOf(100);

    players.splice(emptyElem, 1);

    let result = [];
    players.forEach(p => {
        result.push(decScoresUser(p));
    });

    return result;
}

async function reportLevel(level) {
    if(!level || level == "") throw new Error("Please provide a level ID.");
    if(isNaN(Number(level))) throw new Error("The level ID should be a number.");

    const data = {
        levelID: level.toString().trim(),
        secret: "Wmfd2893gb7"
    }

    let res = await gjReq("reportGJLevel", data);

    return res.data;
}

async function searchLevels(query, page = 1) {
    const data = {
        type: 0,
        str: query,
        page: Number(page) - 1,
        secret: secret
    }

    let res = await gjReq("getGJLevels21", data)

    let levels = res.data.split("#")[0].split("|");
    let creators = res.data.split("#")[1].split("|");
    let songs = res.data.split("#")[2].split(":");

    let result = [];

    let encCreators = {};
    let encSongs = {};
    
    creators.forEach(c => {
        let playerID = c.split(":")[0];
        let username = c.split(":")[1];
        encCreators[playerID] = username;
    })

    songs.forEach(s => {
        let songId = s.split("~|~")[1];
        let songName = s.split("~|~")[3];
        let songArtistID = s.split("~|~")[5];
        let songArtist = s.split("~|~")[7];
        let size = s.split("~|~")[9];
        let link = s.split("~|~")[13];
        
        encSongs[songId] = {
            "name": songName,
            "id": Number(songId),
            "artist": songArtist,
            "artistId": Number(songArtistID),
            "fileSize": `${size} MB`,
            "link": decodeURIComponent(link)
        };
    })

    for(const l of levels) {
        let decLvl = decodeLevelRes(l);

        let lvl = decLvl.res;
        let officialSongID = Number(decLvl.officialSong);
        let songID = Number(decLvl.customSong);
        let playerId = decLvl.playerID;
        let song;

        if(officialSongID == 0 && songID != 0 || officialSongID != 0 && songID != 0) song = encSongs[songID.toString()];
        if(officialSongID != 0 && songID == 0) song = getOfficialSongInfo(officialSongID + 1);
        if(officialSongID == 0 && songID == 0) song = getOfficialSongInfo(1);

        lvl['creator'] = encCreators[playerId] != undefined ? encCreators[playerId] : "-";
        lvl['song'] = song;

        result.push(lvl);
    }

    return result;
}

async function unblockUser(target, username, password) {
    if(!target || target == "") throw new Error("Please provide a target's player ID or username!");
    if(!username || username == "") throw new Error("Please provide your player ID or username!");
    if(!password || password == "") throw new Error("Please provide your password!");

    let user = await searchUsers(username);
    let targetObj = await searchUsers(target);

    const data = {
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0,
        secret: "Wmfd2893gb7",
        targetAccountID: targetObj.accountID,
        accountID: user.accountID,
        gjp: gjp(password)
    }

    let res = await gjReq("unblockGJUser20", data)
    if(res.data == -1) throw new Error(-1);

    return 1;
}

async function updateLevelDesc(level, d, user, password) {
    let desc = d;

    if(!level || level == "") throw new Error("Please provide a level ID!");
    if(Number(level) == NaN) throw new Error("A level ID must be a number!");
    if(!desc) desc = "(No description provided)";
    if(!user || user == "") throw new Error("Please provide a user ID or name!");
    if(!password || password == "") throw new Error("Please provide a password!");

    let userObj = await searchUsers(user);

    const uLDdata = {
        accountID: userObj.accountID,
        gjp: gjp(password),
        levelID: level,
        levelDesc: encB64(desc),
        secret: secret
    }

    let res = await gjReq("updateGJDesc20", uLDdata);
    if(res.data == -1) throw new Error("-1 Failed to update the description.");

    return 1;
}

async function uploadAccountPost(content, str, password) {
    if(!content || content == "") throw new Error("Please provide an account post content!");
    if(!str || str == "") throw new Error("Please provide a user ID or name!");
    if(!password || password == "") throw new Error("Please provide a password!");

    let user = await searchUsers(str);
    
    
    const comment = encB64(content);

    let uACdata = {
        gameVersion: 21,
        binaryVersion: 35,
        gdw: 0,
        accountID: user.accountID,
        secret: "Wmfd2893gb7",
        gjp: gjp(password),
        comment: comment,
        cType: 1
    };

    let res = await gjReq("uploadGJAccComment20", uACdata);
    if(res.status == 500) throw new Error("500 Error: couldn't post!");

    return res.data;
}

async function uploadMessage(receiver, subj, content, user, pass) {
    if(!receiver || receiver == "") throw new Error("Please specify a message receiver!");
    if(!subj || subj == "") throw new Error("Please specify a message subject!");
    if(!content || content == "") throw new Error("Please specify a message content!");
    if(!user || user == "") throw new Error("Please provide a username or a player ID!");
    if(!pass || pass == "") throw new Error("Please provide a password!");
    
    let receiverObj = await searchUsers(receiver);
    let userObj = await searchUsers(user);

    let cntnt = await xorEncrypt(content, 14251);

    const data = {
        accountID: userObj.accountID,
        toAccountID: receiverObj.accountID,
        gjp: gjp(pass),
        subject: encB64(subj),
        body: cntnt,
        secret: secret
    }

    let res = await gjReq("uploadGJMessage20", data);
    if(res.data == -1) throw new Error(-1);

    return 1;
}

async function getUserLevels(str, page = 1) {
    if(!str || str == "") throw new Error("Please provide a username or player ID!");

    let user = await searchUsers(str);

    const data = {
        type: 5,
        str: user.playerID,
        secret: secret,
        page: Number(page) - 1
    }

    let res = await gjReq("getGJLevels21", data)

    let levels = res.data.split("#")[0].split("|");
    let creators = res.data.split("#")[1].split("|");
    let songs = res.data.split("#")[2].split(":");

    let result = [];

    let encCreators = {};
    let encSongs = {};
    
    creators.forEach(c => {
        let playerID = c.split(":")[0];
        let username = c.split(":")[1];
        encCreators[playerID] = username;
    })

    songs.forEach(s => {
        let songId = s.split("~|~")[1];
        let songName = s.split("~|~")[3];
        let songArtistID = s.split("~|~")[5];
        let songArtist = s.split("~|~")[7];
        let size = s.split("~|~")[9];
        let link = s.split("~|~")[13];
        
        encSongs[songId] = {
            "name": songName,
            "id": Number(songId),
            "artist": songArtist,
            "artistId": Number(songArtistID),
            "fileSize": `${size} MB`,
            "link": decodeURIComponent(link)
        };
    })

    for(const l of levels) {
        let decLvl = decodeLevelRes(l);

        let lvl = decLvl.res;
        let officialSongID = Number(decLvl.officialSong);
        let songID = Number(decLvl.customSong);
        let playerId = decLvl.playerID;
        let song;

        if(officialSongID == 0 && songID != 0 || officialSongID != 0 && songID != 0) song = encSongs[songID.toString()];
        if(officialSongID != 0 && songID == 0) song = getOfficialSongInfo(officialSongID + 1);
        if(officialSongID == 0 && songID == 0) song = getOfficialSongInfo(1);

        lvl['creator'] = encCreators[playerId] != undefined ? encCreators[playerId] : "-";
        lvl['song'] = song;

        result.push(lvl);
    }

    return result;
}