export interface MenuItem {
  id: string;
  name: string;
  path: string;
  children: any[];
}

export const MENUITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Trang chủ',
    path: '/',
    children: []
  },
  {
    id: '2',
    name: 'Giới thiệu',
    path: '/introduce',
    children: []
  },
  {
    id: '3',
    name: 'Danh mục sản phẩm',
    path: '/category',
    children: [
      {
        name: 'sắt mỹ thuật',
        path: '/sat-my-thuat',
        children: [
          {
            name: 'cổng',
            path: 'gate',
            children: []
          },
          {
            name: 'mái',
            path: 'roof',
            children: []
          },
          {
            name: 'lan can',
            path: 'balcony',
            children: []
          },
          {
            name: 'cầu thang',
            path: 'stair',
            children: []
          }
        ]
      },
      {
        name: 'nhôm kính',
        path: '/nhom-kinh',
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
    id: '4',
    name: 'Liên hệ',
    path: '',
    children: []
  }
]
