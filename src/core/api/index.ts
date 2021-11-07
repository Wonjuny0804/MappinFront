import axios from 'axios';
import { IEmailCheckResponse } from './../interface/auth';
const BASEURL = "http://15.164.40.176/api/v1/";



export const EmailCheck = async (email: string): Promise<IEmailCheckResponse> => axios.post(`${BASEURL}check`); 