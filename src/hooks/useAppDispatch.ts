import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
