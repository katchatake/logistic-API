
export const validDB = async (AppDataSource:any)=>{
    const isInitialized: boolean = AppDataSource.isInitialized;
    // console.log("Inicialización ==>",isInitialized)
    return (isInitialized) ? AppDataSource : await AppDataSource.initialize();
}
export interface dataReq {
    username : string,
    password :string
}
export interface messageResponse {
    code:number,
    message:string,
    data:Object
}