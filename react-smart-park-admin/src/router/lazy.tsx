import { lazy } from 'react'

const Login = lazy(() => import('@/views/Login'))
const Home = lazy(() => import('@/views/Home'))
const NotFound = lazy(() => import('@/views/NotFound'))
const Dashboard = lazy(() => import('@/views/Dashboard'))
const UserList = lazy(() => import('@/views/Users'))
const AddUser = lazy(() => import('@/components/users/AddUser'))
const Tenement = lazy(() => import('@/views/estate/Tenement'))
const Room = lazy(() => import('@/views/estate/Room'))
const Car = lazy(() => import('@/views/estate/Car'))
const Repair = lazy(() => import('@/views/Repair'))
const Contract = lazy(() => import('@/views/finance/Contract'))
const Surrender = lazy(() => import('@/views/finance/Surrender'))
const Bill = lazy(() => import('@/views/finance/Bill'))
const Merchants = lazy(() => import('@/views/Merchants'))
const All = lazy(() => import('@/views/operation/All'))
const Article = lazy(() => import('@/views/operation/Article'))
const Comments = lazy(() => import('@/views/operation/Comments'))
const Equipment = lazy(() => import('@/views/Equipment'))
const Enengy = lazy(() => import('@/views/Energy'))
const Settings = lazy(() => import('@/views/Settings'))
const Personal = lazy(() => import('@/views/Personal'))
export {
  AddUser,
  All,
  Article,
  Bill,
  Car,
  Comments,
  Contract,
  Dashboard,
  Enengy,
  Equipment,
  Home,
  Login,
  Merchants,
  NotFound,
  Personal,
  Repair,
  Room,
  Settings,
  Surrender,
  Tenement,
  UserList
}
