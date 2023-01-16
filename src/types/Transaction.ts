export interface Transaction{
    "title": string, 
    "amount": number, 
    "details": string, 
    "date":{
        "day": number,
        "month": string, 
        "year": number,
    }
}