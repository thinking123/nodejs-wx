import express from 'express'
import bodyParser from 'body-parser'
import {wxHashVerify , parseXML , resText} from "./utils/wx-util";

const app = express()
const port = 80
const token = 'verifytoken'

// app.use(bodyParse)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/wx' , (req , res) => {
    console.log('from dsf')
    const {signature , timestamp , nonce , echostr}= req.query

    if(wxHashVerify(signature , timestamp ,nonce)){
        res.send('this is echo string')
    }else{
        res.send('not equal hash')
    }
})

app.post('/wx' , (req , respond) => {

    var jsonString = '';

    req.on('data', function (data) {
        jsonString += data;
    });

    req.on('end', function () {
        const xml = JSON.parse(jsonString)
        console.log('xml res : ' , xml);

        parseXML(xml).then(res=>{
            console.log(res)
            res = resText(res.xml)
            respond.send(res)
        }).catch(err=>{
            respond.send(`error : ${err}`)
        })
    });


//     const xml = req.body
//     console.log('from post body' , xml)
// //     const xml = `<xml><ToUserName><![CDATA[gh_3d9c0b7d4d2f]]></ToUserName><FromUserName><![CDATA[ofRPM0swXBeqFKC-WW
// // OMyN2_Dxak]]></FromUserName><CreateTime>1546494018</CreateTime><MsgType><![CDATA[text]]></MsgType><Content>
// // <![CDATA[sdfsdf]]></Content><MsgId>6642141231231886372</MsgId></xml>`
//     parseXML(xml).then(res=>{
//         console.log(res)
//         res = resText(res.xml)
//         respond.send(res)
//     }).catch(err=>{
//         respond.send(`error : ${err}`)
//     })
})

// app.all(function (req , res , next) {
//     console.log('all app')
//     res.send("")
// })

app.listen(port , () =>{
    console.log(`start on port ${port}`)
})