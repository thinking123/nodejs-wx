import {accessTokenURL} from "../constant/wx";
import request from 'request'

export async function get(url){
    return new Promise((resolve, reject) => {
        request.get(url , function (err, response, body) {
            if(err){
                reject(err)
            }
            //
            // if (response.statusCode != 200) {
            //     reject(`status code : ${response.statusCode}`)
            // }

            // console.log('get access token :', body)

            resolve(JSON.parse(body))
        })
    })
}

export async function post(url , data = {}){
    return new Promise((resolve, reject) => {
        request.post({url ,form: data },  function (err, response, body) {
            if(err){
                reject(err)
            }

            resolve(JSON.parse(body))
        })
    })
}
