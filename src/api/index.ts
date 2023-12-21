import axios from 'axios';
import { API } from '@/constants';
// import { ethers } from 'ethers';
import { formatUnits } from 'ethers';

function createInstatnceCandidate () {
  return axios.create({
    baseURL: API,
  });
}

const api = createInstatnceCandidate();

export async function getTotalSupply() {
  const res = await api.get('/totalsupply')
  return res.data ? res.data : '';
}

export async function getCirculateSupply() {
  const res = await api.get('/circulatedcoins')
  return res.data ? res.data : '';
}

export async function getTotalStaked() {
  const res = await api.get('/staking/current');
  return res.data;  
}

export async function getTosPrice() {
  const res = await api.get('/tosprice');
  return res.data
}

export async function getCirculationSupply () {
  const res = await api.get('/circulationSupply')
  return res.data
}

export async function getStakedData() {
  const res = await axios.get('https://tonstarterapi.tokamak.network/v1/stakecontracts?chainId=1');
  const stakeList = res.data.datas;
  let total = 0;
  total = Number(formatUnits(stakeList[0].totalStakedAmountString, 18));
  return total
}

export async function getTONPrice() {
  const res = await axios.get('https://api.upbit.com/v1/ticker?markets=KRW-TON')
  return res.data[0]
}

export async function getUSDInfo() {
  const res = await axios.get('https://api.frankfurter.app/latest?from=KRW')
  return res.data.rates.USD
}