import { firebase, phoneAuth } from '../../firebase/firebase.config'

//PhoneAuth
export const loginWithPhone = () => {
  return async (dispatch) => {
    try {
      const { user } = await firebase.auth().useDeviceLanguage(phoneAuth)
      const { displayName, phone, uid } = user
      dispatch(fillUserInfo({ displayName, phone, uid }))
      dispatch(handleError({ status: false, message: '' }))
    } catch (error) {
      console.log(error)
    }
  }
}
