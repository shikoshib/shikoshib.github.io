/**
 * @name gj-boomlings-api
 * @description A light-weight Geometry Dash API wrapper
 * @version 1.4.6
 * @author shikoshib
 * @see {@link http://github.com/shikoshib/gj-boomlings-api/wiki/|Documentation}
 */


const officialsongs = {"sm": {
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

async function gjWReq(endpoint, data = "") {
    let r = await fetch(`https://gbaweb.vercel.app/${endpoint}/${data}`)
    let res = await r.text()
    if(res.includes("{") || res.includes("[")) res = JSON.parse(res);
    
    return {data: res, status: r.status};
}

function encB64(string) {
    if(!string || string == "") console.error("No string provided!")
    let str = btoa(unescape(encodeURIComponent(string))).replace(/\//g, '_').replace(/\+/g, '-');
    return str;
}

async function blockUser(target, username, password) {
    let res = await gjWReq("blockUser", `${target}?user=${username}&password=${password}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function unblockUser(target, username, password) {
    let res = await gjWReq("unblockUser", `${target}?user=${username}&password=${password}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function deleteAccountPost(id, str, password) {
    let res = await gjWReq("deleteAccountPost", `?id=${id}&user=${str}&password=${password}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function deleteComment(id, lvl, str, password) {
    let res = await gjWReq("deleteComment", `?id=${id}&lvl=${lvl}&user=${str}&password=${password}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getWeeklyDemon() {
    let res = await gjWReq("getWeeklyDemon");
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getDailyLevel() {
    let res = await gjWReq("getDailyLevel");
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getGauntlets() {
    let res = await gjWReq("getGauntlets");
    return res.data;
}

async function getTop100() {
    let res = await gjWReq("getTop100");
    return res.data;
}

async function getCreatorScores() {
    let res = await gjWReq("getCreatorScores");
    return res.data;
}

async function reportLevel(lvl) {
    let res = await gjWReq("reportLevel", lvl);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function searchUsers(str) {
    let res = await gjWReq("searchUsers", str);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function dlLevel(lvl) {
    let res = await gjWReq("dlLevel", lvl);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getLevelByID(id) {
    let res = await gjWReq("getLevelByID", id);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getMapPacks(page = 1){
    let res = await gjWReq("getMapPacks", page);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getProfile(user){
    let res = await gjWReq("getProfile", user);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getSongInfo(song){
    let res = await gjWReq("getSongInfo", song);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

function getOfficialSongInfo(song) {
    if(!song) console.error("Please provide a song ID.");
    if(isNaN(song)) console.error("A song ID must be a number.");
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
        } = officialsongs;
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

async function getCommentHistory(str, page = 1, mode = 1) {
    let res = await gjWReq("getCommentHistory", `${str}?page=${page}&mode=${mode}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getAccountPosts(str, page = 1){
    let res = await gjWReq("getAccountPosts", `${str}?page=${page}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getBlockedList(str, pass){
    let res = await gjWReq("getBlockedList", `${str}?password=${pass}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getFriendsList(str, pass){
    let res = await gjWReq("getFriendsList", `${str}?password=${pass}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getMessages(user, pass, page = 1){
    let res = await gjWReq("getMessages", `${user}?password=${pass}&page=${page}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getComments(level, page = 1, mode = 1){
    let res = await gjWReq("getComments", `${level}?page=${page}&mode=${mode}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function getUserLevels(str,page = 1){
    let res = await gjWReq("getUserLevels", `${str}?page=${page}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function deleteLevel(lvl, str, password) {
    let res = await gjWReq("deleteLevel", `${lvl}?user=${str}&password=${password}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function dlMessage(id, user, pass){
    let res = await gjWReq("dlMessage", `${id}?user=${user}&password=${pass}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function searchLevels(query, page = 1){
    let res = await gjWReq("searchLevels", `${query}?page=${page}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function updateLevelDesc(level, d, user, password){
    let desc = d;
    if(!desc) desc = "(No description provided)";

    let res = await gjWReq("updateLevelDesc", `${level}?content=${encB64(desc)}&user=${user}&password=${password}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function uploadAccountPost(content, str, password) {
    let res = await gjWReq("uploadAccountPost", `?content=${encB64(content)}&user=${str}&password=${password}`);
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function uploadComment(comment, id, user, password, percent = 0) {
    let res = await gjWReq("uploadComment", `${id}?comment=${encB64(comment)}&user=${user}&password=${password}&percent=${percent}`)
    if(res.status == 403) console.error(res.data.error);

    return res.data;
}

async function uploadMessage(receiver, subj, content, user, pass) {
    let res = await gjWReq("uploadMessage", `?receiver=${receiver}&subject=${encB64(subj)}&content=${encB64(content)}&user=${user}&password=${pass}`)
    if(res.status == 403) console.error(res.data.error)

    return res.data;
}