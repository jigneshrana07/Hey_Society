interface IsPublisher {
    avatar: null | string
    position: string
    company: string
    company_phone: string
    phone: null | string
    site: string
    platforms: number[]
    balance: number
    withdraw_status: number
    is_social_enabled: boolean
    social_level: number
    is_fraud_notification_sent: boolean
    is_freeze: boolean
    industry: number
    job_title: number
    bank_title: string
    bank_holder_name: string
    bank_clabe: string
    bank_card_number: string
}

interface User {
    id: number
    first_name: string
    last_name: string
    is_confirmed: boolean
    need_new_password: boolean
    ref_link: string
    share_link: string
    email: string
    is_publisher: IsPublisher
    is_advertiser: boolean
    default_card: string
}

export interface UserData {
    token: string
    user: User
    email: string
}