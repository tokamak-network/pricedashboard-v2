import { API } from '@/constants';
import axios from 'axios';
import { formatUnits } from 'ethers';

function createInstatnceCandidate () {
  return axios.create({
    baseURL: API,
  });
}

const api = createInstatnceCandidate();

export async function getTotalSupply() {
  return (await api.get('/totalsupply'))?.data ?? '';
}

export async function getCirculateSupply() {
  return (await api.get('/circulatedcoins'))?.data ?? '';
}

export async function getTotalStaked() {
  return (await api.get('/staking/current'))?.data;
}

export async function getTosPrice() {
  return (await api.get('/tosprice'))?.data;
}

export async function getCirculationSupply () {
  return (await api.get('/circulationSupply'))?.data;
}

export async function getSupply () {
  return (await api.get('/supply'))?.data;
}

export async function getTVL () {
  return (await api.get('/tvl'))?.data?.tvl;
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
