export interface User{
    id: number,
    profilePic: string,
    name: string,
    email: string,
    company: string,
    country: string,
    city: string,
    data: {
        expenses: [],
        incomes: [],
        investments: [],
        wallet:[],
    },
}