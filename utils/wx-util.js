import {saveTempMediaUrl} from "../constant/wx";
import {post} from "./http";
import {getAccessToken} from "./wxAccessToken";

// export async function saveTempMedia(mediaType) {
//     const token = await getAccessToken()
//     const url = String.format(saveTempMediaUrl , token , mediaType)
//     return await post(url)
// }