import {ACCESSTOKENURL , ACCESSTOKEN ,ACCESSTOKENEXPIRESIN} from "../constant/wx";
import redis from '../redis'
import {get} from "./http";

async function _getAccessToken(force = false){
    const url = `${ACCESSTOKENURL}?force=${force}`

    return await get(url)
}


export async function getAccessToken() {
    // const ttl = await redis.ttlAsync(ACCESSTOKEN)
    // console.log('ttl ,' , ttl)

    let accessToken = await redis.getAsync(ACCESSTOKEN)
    if(!accessToken){
        const {accessToken , expiresIn} = await _getAccessToken(true)

        console.log('get token ', accessToken , 'exp' , expiresIn)
        await redis.setAsync(ACCESSTOKEN , accessToken , 'EX', ACCESSTOKENEXPIRESIN)
    }


    accessToken = await redis.getAsync(ACCESSTOKEN)
    console.log('get token' , accessToken)
    if(!accessToken){
        throw 'get access token failure'
    }
    return accessToken
}