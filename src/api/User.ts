import axios from "axios";
import type { IProfile, SuccessfulResult } from "../models/User";

export async function loginProfile(email: string, password: string): Promise<boolean> {
  try {
    const response = await axios.post('https://cinemaguide.skillbox.cc/auth/login',
      { email, password },
      { withCredentials: true }
    )
    return response.data.result
  } catch {
    return false
  }
}

export async function logoutProfile(): Promise<boolean> {
  const response = await axios.get<SuccessfulResult>('https://cinemaguide.skillbox.cc/auth/logout',
  { withCredentials: true } )
  return response.data.result
}


export async function registerProfile(email: string, password: string, name: string, surname: string): Promise<boolean> {
  try {
    const response = await axios.post('https://cinemaguide.skillbox.cc/user',
      { email, password, name, surname }
    )
    return response.data.result;
  } catch {
    return false
  }
}

export async function fetchProfile(): Promise<IProfile | null> {
  try {
    const response = await axios.get<IProfile>('https://cinemaguide.skillbox.cc/profile',
      { withCredentials: true }
    )
    return response.data
  }
  catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return null 
    }
    throw error 
  }
}


