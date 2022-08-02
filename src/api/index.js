import { get, post } from '../utils/axios'

export const login = data => post('/api/login', data)

export const fetchMemu = () => get('/api/permission')
