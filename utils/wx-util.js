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

    ToUserName = ToUserName[0]
    FromUserName = FromUserName[0]
    CreateTime = CreateTime[0]
    const content = 'return content'
    // const obj = {
    //     xml:
    //         {
    //             'ToUserName': ToUserName[0],
    //             'FromUserName': FromUserName[0],
    //             'CreateTime': CreateTime[0],
    //             'MsgType': MsgType[0],
    //             'Content': Content[0],
    //             'MsgId': MsgId[0]
    //         }
    // }
    // const builder = new Builder({cdata:true , xmldec:false})
    // const resXml = builder.buildObject(obj)
    // console.log(resXml)
    // return resXml
    
const template=`<xml><ToUserName><![CDATA[${ToUserName}]]></ToUserName><FromUserName><![CDATA[${FromUserName}]]></FromUserName><CreateTime>${CreateTime}</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[${content}]]></Content></xml>`

    return template
    
}