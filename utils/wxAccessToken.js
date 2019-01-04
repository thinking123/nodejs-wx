import {ACCESSTOKENURL , ACCESSTOKEN } from "../constant/wx";
import redis from '../redis'
import {get} from "./http";

async function _getAccessToken(force = false){
    const url = `${ACCESSTOKENURL}?force=${force}`

    return await get(url)
}


export async function getAccessToken() {
    const ttl = await redis.ttl(ACCESSTOKEN)
    if(ttl <= 0){
        const {accessToken , expiresIn} = await _getAccessToken(true)
        await redis.setAsync(ACCESSTOKEN , accessToken , expiresIn)
    }


    let accessToken = await redis.getAsync(accessToken)
    if(!accessToken){
        throw 'get access token failure'
    }
    return accessToken
}