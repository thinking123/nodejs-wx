export function wxRes(xml) {
    const {MsgType , ...rest} = xml
    const type = MsgType[0]
    console.log('type :' , type , 'rest' , rest)
    switch (type) {
        case 'text':
            return text(rest)
        case 'image':
            return image(rest)
        default:
            return 'success'
    }
}


function image(xml) {
    let {ToUserName, FromUserName, CreateTime , PicUrl , MediaId , MsgId} = xml

    //此处注意，from 和 to的位置 原来的from是现在的to
    const toUser = FromUserName[0]
    const fromUser = ToUserName[0]
    const time = CreateTime[0]
    const url = PicUrl[0]
    const med = MediaId[0]
    const id = MsgId[0]

    const template=`<xml><ToUserName><![CDATA[${toUser}]]></ToUserName><FromUserName><![CDATA[${fromUser}]]></FromUserName><CreateTime>${time}</CreateTime><MsgType><![CDATA[image]]></MsgType><PicUrl><![CDATA[${url}]]></PicUrl><MediaId><![CDATA[${med}]]></MediaId><MsgId>${id}</MsgId></xml>`
    // console.log('res xml image' , template)
    return template
}

function text(xml) {
    let {ToUserName, FromUserName, CreateTime} = xml

    //此处注意，from 和 to的位置 原来的from是现在的to
    const to = FromUserName[0]
    const from = ToUserName[0]
    CreateTime = CreateTime[0]
    const content = 'return content'

    const template=`<xml><ToUserName><![CDATA[${to}]]></ToUserName><FromUserName><![CDATA[${from}]]></FromUserName><CreateTime>${CreateTime}</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[${content}]]></Content></xml>`
    // console.log('res xml text' , template)
    return template
}