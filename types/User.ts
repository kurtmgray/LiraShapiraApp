import { Transaction } from "./Transaction"

export interface User {
  userID: string
  userName: string
  userLocalCompostStand: number
  accountBalance: number
  dateJoined: Date
  transactions: Transaction[]
}