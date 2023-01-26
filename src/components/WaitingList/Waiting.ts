export interface waitings {
    waiting_id: number,
    name: string,
    people: number,
    phone_num: string
  }

  export interface res { 
    information: string,
    is_waiting: boolean,
    waiting : waitings[]
  }
