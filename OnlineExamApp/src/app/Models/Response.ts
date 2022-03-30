import { UserInfo } from "./userInfo";


export interface ResponseModel {
    statusCode: number;
    response: any;
    data: UserInfo | UserInfo[] | null | undefined
}