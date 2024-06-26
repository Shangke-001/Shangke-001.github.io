interface ResponseData {
  code: number
  message: string
  ok: boolean
}

//已有品牌数据类型
export interface TradeMark {
  id?: number
  tmName: string
  logoUrl: string
}

export type Records = TradeMark[]

//获取的已有全部品牌的数据ts类型
export interface TradeMarkResponseForm extends ResponseData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    searchCount: boolean
    pages: number
  }
}

export interface TradeMarkAEDResposeForm extends ResponseData {
  data: null
}
