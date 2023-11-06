export interface MenuItem {
  name: string;
  path: string;
  children: MenuItem[];
}

export const MENUITEMS: MenuItem[] = [
  {
    name: 'Trang chủ',
    path: '/',
    children: []
  },
  {
    name: 'Giới thiệu',
    path: '/introduce',
    children: []
  },
  {
    name: 'Thư ngỏ',
    path: '/introduce/open-letter-detail',
    children: []
  },
  {
    name: 'Liên hệ',
    path: '',
    children: []
  }
]
