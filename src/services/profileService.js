// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getProfile(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function createSaleCounter(profileId, formData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function clearCounter(profileId) {
  try{
    const res = await fetch( `${BASE_URL}/${profileId}`,{
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type' : 'application/json'
      },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function updateCounter(profile, formData) {
  // console.log("this is being passed as formData ", formData)
  try{
    const res = await fetch( `${BASE_URL}/${profile}/update`,{
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return await res.json(profile)
  } catch (err) {
    throw new Error(err)
  }
}





export { getProfile, createSaleCounter, clearCounter, updateCounter }
