interface ad_group {
    id?: number
    advertiser?: {
        logo: string | null
        company: string
    },
    social_cost_per_click?: number
    social_title?: string
    social_content?: string
    social_title_en?: string
    social_content_en?: string
    social_status?: string
    social_platforms?: string[]
    campaign_payment_type?: number
    social_suggested_comment?: string
    campaign_dest_url?: string
    campaign_cpa_obj_title?: string
}

export interface SocialAds {
    id: number
    ad_group: ad_group
    banner_size: number
    social_content: string
    social_content_en: string
    ad_img: {
        id: number,
        img: string,
        filename: string
    }
    social_platforms: string[]
    social_suggested_comment: string
    social_title: string
    social_title_en: string
    utm_params: string
}

export interface socialLink {
    link: string
}



// ad_group:
// advertiser: {logo: null, company: 'Ububble, S.A. de C.V.'}
// campaign_cpa_obj_title: "Registro"
// campaign_dest_url: "https://lovewehelp.com/download"
// campaign_payment_type: 1
// id: 714
// social_cost_per_click: 0.042
// social_status: "regular"
// [[Prototype]]: Object
// ad_img:
// filename: "Insta (2).png"
// id: 574
// img: "https://s3.amazonaws.com/stipio.com/media/block/img/ZR0GCGkPUa.png"
// [[Prototype]]: Object
// banner_size: 7
// id: 573
// social_content: "Utiliza herramientas de seguridad y guardaespaldas virtuales 24/7 para vivir una vida más segura."
// social_content_en: ""
// social_platforms: Array(3)
// 0: "linkedin"
// 1: "twitter"
// 2: "facebook"
// length: 3
// [[Prototype]]: Array(0)
// social_suggested_comment: "Niñas todas descarguen esta aplicación. Esta super padre es de seguridad y tienen guardaespaldas virtuales. En caso de que lleguen a tener una emergencia les avisa a tus contactos que ustedes elijan su ubicación actual, y aparte a sus agentes que están capacitados para ayudar. Y la verdad te hablan y apoyan rapidísimo. Además, si estás en un taxi o sales a caminar, puedes solicitarlo a sus agentes.\nSe llama WeHelp. Cuidense mucho!"
// social_title: "App de seguridad personal con guardaespaldas virtuales"
// social_title_en: ""
// utm_params: ""