import initialState from './initialState'

export default function (state = initialState, action: any) {
  const { type, payload } = action
  switch (type) {
    case 'NOTIFICATION_SHOWN':
      return { ...state, notificationShown: payload }
    default:
      return state
  }
}