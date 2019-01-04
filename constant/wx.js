export const verifyToken = 'wxverifytoken'
export const ACCESSTOKENURL = process.env.ACCESSTOKENURL
export const ACCESSTOKEN = 'ACCESSTOKEN'
export const ACCESSTOKENEXPIRESIN = 'ACCESSTOKENEXPIRESIN'

export const saveTempMediaUrl = 'https://api.weixin.qq.com/cgi-bin/media/upload?access_token={0}&type={1}'

export const createMenuUrl = 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token={0}'
export const deleteMenuUrl = 'https://api.weixin.qq.com/cgi-bin/menu/delete?access_token={0}'
export const getMenuUrl = 'https://api.weixin.qq.com/cgi-bin/menu/get?access_token={0}'

export const menus = {
    "button":
        [
            {
                "type": "click",
                "name": "开发指引",
                "key": "mpGuide"
            },
            {
                "name": "公众平台",
                "sub_button":
                    [
                        {
                            "type": "view",
                            "name": "更新公告",
                            "url": "http://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1418702138&token=&lang=zh_CN"
                        },
                        {
                            "type": "view",
                            "name": "接口权限说明",
                            "url": "http://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1418702138&token=&lang=zh_CN"
                        },
                        {
                            "type": "view",
                            "name": "返回码说明",
                            "url": "http://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1433747234&token=&lang=zh_CN"
                        }
                    ]
            },
            {
                "type": "media_id",
                "name": "旅行",
                "media_id": "z2zOokJvlzCXXNhSjF46gdx6rSghwX2xOD5GUV9nbX4"
            }
        ]
}