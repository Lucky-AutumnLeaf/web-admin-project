import type { MenuResultType } from '@/types/user'
import {
  BankOutlined,
  CommentOutlined,
  DashboardOutlined,
  DollarOutlined,
  FileTextOutlined,
  FrownOutlined,
  FundProjectionScreenOutlined,
  FundViewOutlined,
  InsertRowLeftOutlined,
  LaptopOutlined,
  ProfileOutlined,
  ReadOutlined,
  SettingOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  TransactionOutlined,
  TruckOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const iconMap: Record<string, React.ReactNode> = {
  DashboardOutlined: <DashboardOutlined />,
  TeamOutlined: <TeamOutlined />,
  UnorderedListOutlined: <UnorderedListOutlined />,
  UserAddOutlined: <UserAddOutlined />,
  LaptopOutlined: <LaptopOutlined />,
  InsertRowLeftOutlined: <InsertRowLeftOutlined />,
  BankOutlined: <BankOutlined />,
  TruckOutlined: <TruckOutlined />,
  ToolOutlined: <ToolOutlined />,
  DollarOutlined: <DollarOutlined />,
  ProfileOutlined: <ProfileOutlined />,
  FrownOutlined: <FrownOutlined />,
  FileTextOutlined: <FileTextOutlined />,
  TransactionOutlined: <TransactionOutlined />,
  FundProjectionScreenOutlined: <FundProjectionScreenOutlined />,
  FundViewOutlined: <FundViewOutlined />,
  ReadOutlined: <ReadOutlined />,
  CommentOutlined: <CommentOutlined />,
  ThunderboltOutlined: <ThunderboltOutlined />,
  SettingOutlined: <SettingOutlined />,
  UserOutlined: <UserOutlined />
}

export const transformMenu = (menuList: MenuResultType[]): MenuItem[] => {
  return menuList.map((item) => ({
    ...item,
    icon: iconMap[item.icon],
    children: item.children && transformMenu(item.children)
  }))
}
