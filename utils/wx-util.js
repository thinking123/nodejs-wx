import sha1 from 'sha1'
import {parseString, Builder} from 'xml2js'

import {verifyToken} from "../constant/wx";

export function wxHashVerify(signature, timestamp, nonce) {
    let list = [verifyToken, timestamp, nonce]
    console.log(list)
    list.sort()
    console.log(list)
    const str = list.join('')
    console.log(str)
    const hash = sha1(str)
    console.log('hash')
    console.log(`hash : ${hash} , sign : ${signature}`)
    return hash === signature
}

export function parseXML(xml) {
    console.log('parseXML')
    return new Promise((resolve, reject) => {
        parseString(xml, function (err, res) {
            err ? reject(err) : resolve(res)
        })
    })
}

export function resText(xml) {
    // const {ToUserName, FromUserName, CreateTime, MsgType, Content, MsgId} = xml
    let {ToUserName, FromUserName, CreateTime, MsgType, Content, MsgId} = xml

    //此处注意，from 和 to的位置 原来的from是现在的to
    let to = FromUserName[0]
    let from = ToUserName[0]
    CreateTime = CreateTime[0]
    const content = 'return content'
    
const template=`<xml><ToUserName><![CDATA[${to}]]></ToUserName><FromUserName><![CDATA[${from}]]></FromUserName><CreateTime>${CreateTime}</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[${content}]]></Content></xml>`

    console.log('res xml' , template)
    return template
    
}