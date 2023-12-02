export var LT_Config = {
    Local_API_Url: "https://localhost:7018/api"
}

export var CONFIG = {
    Local_API_Url: LT_Config.Local_API_Url,
    ContentType: 'application/json',
};

export var main_url: any = {
    api_url: CONFIG.Local_API_Url
}

export var API_URLS: any = {
    Generic_api_url: main_url.api_url,

    //leaves
    emp_leaves:"leaves",
}