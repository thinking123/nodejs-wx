import {asyncWrap} from "../utils";
import {menus, createMenuUrl , deleteMenuUrl} from "../constant/wx";
import {getAccessToken} from "../utils/wxAccessToken";
import {post , get} from "../utils/http";

async function createMenu(req, res) {

    console.log('body' , req.body)


    const token = await getAccessToken()
    const url = String.format(createMenuUrl, token)
    console.log('url' , url)
    const data = await post(url, req.body && req.body.menus ? req.body.menus : menus)
    res.send(data)
}

async function deleteMenu(req, res) {
    const token = await getAccessToken()
    const url = String.format(deleteMenuUrl, token)
    const data = await get(url)
    res.send(data)
}

async function getMenu(req, res) {
    const token = await getAccessToken()
    const url = String.format(deleteMenuUrl, token)
    const data = await get(url)
    res.send(data)
}


export default function registerRoutes(app) {
    app.post('/menu', asyncWrap(createMenu))
    app.delete('/menu', asyncWrap(deleteMenu))
    app.get('/menu', asyncWrap(getMenu))
}