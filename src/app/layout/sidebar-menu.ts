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
    name: 'Danh mục sản phẩm',
    path: '/introduce/open-letter-detail',
    children: [
      {
        name: 'sắt mỹ thuật',
        path: '/smt',
        children: [
          {
            name: 'cổng',
            path: '',
            children: []
          },
          {
            name: 'mái',
            path: '',
            children: []
          },
          {
            name: 'lan can',
            path: '',
            children: []
          },
          {
            name: 'cầu thang',
            path: '',
            children: []
          }
        ]
      },
      {
        name: 'nhôm kính',
        path: '/nk',
        children: [
          {
            name: 'thuỷ lực',
            path: '',
            children: []
          },
          {
            name: 'xếp trượt',
            path: '',
            children: []
          },
          {
            name: 'trượt quay',
            path: '',
            children: []
          }
        ]
      }
    ]
  },
  {
    name: 'Liên hệ',
    path: '',
    children: []
  }
]
