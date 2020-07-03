import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_EN: NbMenuItem[] = [
  {
    title: 'FM Dashboard',
    icon: 'layers-outline',
    children: [
      {
        title: 'Order',
        icon: 'car-outline',
        children: [
          {
            title: 'Order',
            icon: 'chevron-right-outline',
            link: '/pages/ord-order',
          },
          {
            title: 'Sub Order',
            icon: 'chevron-right-outline',
            link: '/pages/ord-sub-order',
          },
          {
            title: 'Process Order',
            icon: 'chevron-right-outline',
            link: '/pages/ord-process-order',
          },
          {
            title: 'Store Location',
            icon: 'chevron-right-outline',
            link: '/pages/ord-store-location',
          },
          {
            title: 'BU',
            icon: 'chevron-right-outline',
            link: '/pages/ord-bu',
          },
        ],
      },
      {
        title: 'Activities',
        icon: 'car-outline',
        link: '/pages/act-activities',
      },
      {
        title: 'Delivery',
        icon: 'car-outline',
        children: [
          {
            title: 'Dashboard',
            icon: 'chevron-right-outline',
            link: '/pages/dvl-dashboard',
          },
          {
            title: 'Search',
            icon: 'chevron-right-outline',
            link: '/pages/dvl-search',
            home: true,
          },
        ],
      },
      {
        title: 'System Parameter',
        icon: 'car-outline',
        children: [
          {
            title: 'System Main Group',
            icon: 'chevron-right-outline',
            link: '/pages/sys-main-group',
          },
          {
            title: 'System Sub Group',
            icon: 'chevron-right-outline',
            link: '/pages/sys-sub-group',
          },
          {
            title: 'System Sequence Param',
            icon: 'chevron-right-outline',
            link: '/pages/sys-sequence-param',
          },
        ],
      },
    ],
  },
  {
    title: 'TMS',
    icon: 'layers-outline',
    children: [
      {
        title: 'การขาย',
        icon: 'car-outline',
        children: [
          {
            title: 'การจองเวลานัดส่งสินค้า',
            icon: 'chevron-right-outline',
            link: '/pages/slot-booking-info',
          },
          {
            title: 'บันทึกรายการขายและนัดหมาย',
            icon: 'chevron-right-outline',
            link: '/pages/slot-booking-create',
          },
        ],
      },
      {
        title: 'การจัดเส้นทาง',
        icon: 'car-outline',
        children: [
          {
            title: 'การจัดรถ',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
      {
        title: 'ประวัติการสั่งซื้อสินค้า',
        icon: 'car-outline',
        link: '',
      },
      {
        title: 'Contact Center',
        icon: 'car-outline',
        children: [
          {
            title: 'ยืนยันการนัดหมายโดย Contact Center',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'ขอเลื่อน / ยกเลิกรายการนัดหมาย',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
      {
        title: 'การตรวจสอบคุณภาพ -QC',
        icon: 'car-outline',
        children: [
          {
            title: 'ตรวจสอบการจัดส่งและการติดตั้ง',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
      {
        title: 'ระบบคลังสินค้า ส่งสาขา',
        icon: 'car-outline',
        children: [
          {
            title: 'ยืนยันการรับของจาก DC เข้าสาขา',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
      {
        title: 'รายงาน',
        icon: 'car-outline',
        children: [
          {
            title: 'รายงาน 1-10',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
      {
        title: 'ข้อมุล Master',
        icon: 'car-outline',
        children: [
          {
            title: 'ข้อมูลลูกค้า',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'ข้อมูลรถ',
            icon: 'chevron-right-outline',
            children: [
              {
                title: 'รถ',
                icon: 'chevron-right-outline',
                link: '',
              },
              {
                title: 'ประเภทรถ',
                icon: 'chevron-right-outline',
                link: '',
              },
              {
                title: 'กำหนดประเภทรถเขากับโซน',
                icon: 'chevron-right-outline',
                link: '',
              },
            ],
          },
          {
            title: 'ประเภทบริการ Service Type',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'ข้อมูลสาขา',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'ข้อมูลสินค้าและค่าขนส่ง',
            icon: 'chevron-right-outline',
            children: [
              {
                title: 'หมวดหมู่สินค้า',
                icon: 'chevron-right-outline',
                link: '',
              },
              {
                title: 'ประเภทสินค้า',
                icon: 'chevron-right-outline',
                link: '',
              },
              {
                title: 'ยี่ห้อสินค้า',
                icon: 'chevron-right-outline',
                link: '',
              },
              {
                title: 'รายการสินค้า (item)',
                icon: 'chevron-right-outline',
                link: '',
              },
            ],
          },
          {
            title: 'ข้อมูลช่าง',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'ซับคอนแทรค (Sub-Contract)',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'จัดการ User',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'กำหนด Role การใช้งาน',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
    ],
  },
];

export const MENU_ITEMS_TH: NbMenuItem[] = [
  {
    title: 'แผงควบคุมเอฟเอ็ม',
    icon: 'layers-outline',
    children: [
      {
        title: 'ออเดอร์',
        icon: 'car-outline',
        children: [
          {
            title: 'ออเดอร์',
            icon: 'chevron-right-outline',
            link: '/pages/ord-order',
          },
          {
            title: 'ซับออเดอร์',
            icon: 'chevron-right-outline',
            link: '/pages/ord-sub-order',
          },
          {
            title: 'โปรเซสออเดอร์',
            icon: 'chevron-right-outline',
            link: '/pages/ord-process-order',
          },
          {
            title: 'ที่ตั้งร้านค้า',
            icon: 'chevron-right-outline',
            link: '/pages/ord-store-location',
          },
          {
            title: 'บียู',
            icon: 'chevron-right-outline',
            link: '/pages/ord-bu',
          },
        ],
      },
      {
        title: 'แอคทิวิตี้',
        icon: 'car-outline',
        link: '/pages/act-activities',
      },
      {
        title: 'เดลิเวอรี่',
        icon: 'car-outline',
        children: [
          {
            title: 'แผงควบคุม',
            icon: 'chevron-right-outline',
            link: '/pages/dvl-dashboard',
          },
          {
            title: 'ค้นหา',
            icon: 'chevron-right-outline',
            link: '/pages/dvl-search',
            home: true,
          },
        ],
      },
      {
        title: 'ระบบพารามิเตอร์',
        icon: 'car-outline',
        children: [
          {
            title: 'ระบบกลุ่มหลัก',
            icon: 'chevron-right-outline',
            link: '/pages/sys-main-group',
          },
          {
            title: 'ระบบกลุ่มย่อย',
            icon: 'chevron-right-outline',
            link: '/pages/sys-sub-group',
          },
          {
            title: 'ระบบลำดับพารามิเจอร์',
            icon: 'chevron-right-outline',
            link: '/pages/sys-sequence-param',
          },
        ],
      },
    ],
  },
  {
    title: 'ทีเอมเอฟ',
    icon: 'layers-outline',
    children: [
      {
        title: 'การขาย',
        icon: 'car-outline',
        children: [
          {
            title: 'การจองเวลานัดส่งสินค้า',
            icon: 'chevron-right-outline',
            link: '/pages/slot-booking-info',
          },
          {
            title: 'บันทึกรายการขายและนัดหมาย',
            icon: 'chevron-right-outline',
            link: '/pages/slot-booking-create',
          },
        ],
      },
      {
        title: 'การจัดเส้นทาง',
        icon: 'car-outline',
        children: [
          {
            title: 'การจัดรถ',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
      {
        title: 'ประวัติการสั่งซื้อสินค้า',
        icon: 'car-outline',
        link: '',
      },
      {
        title: 'Contact Center',
        icon: 'car-outline',
        children: [
          {
            title: 'ยืนยันการนัดหมายโดย Contact Center',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'ขอเลื่อน / ยกเลิกรายการนัดหมาย',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
      {
        title: 'การตรวจสอบคุณภาพ -QC',
        icon: 'car-outline',
        children: [
          {
            title: 'ตรวจสอบการจัดส่งและการติดตั้ง',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
      {
        title: 'ระบบคลังสินค้า ส่งสาขา',
        icon: 'car-outline',
        children: [
          {
            title: 'ยืนยันการรับของจาก DC เข้าสาขา',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
      {
        title: 'รายงาน',
        icon: 'car-outline',
        children: [
          {
            title: 'รายงาน 1-10',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
      {
        title: 'ข้อมุล Master',
        icon: 'car-outline',
        children: [
          {
            title: 'ข้อมูลลูกค้า',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'ข้อมูลรถ',
            icon: 'chevron-right-outline',
            children: [
              {
                title: 'รถ',
                icon: 'chevron-right-outline',
                link: '',
              },
              {
                title: 'ประเภทรถ',
                icon: 'chevron-right-outline',
                link: '',
              },
              {
                title: 'กำหนดประเภทรถเขากับโซน',
                icon: 'chevron-right-outline',
                link: '',
              },
            ],
          },
          {
            title: 'ประเภทบริการ Service Type',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'ข้อมูลสาขา',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'ข้อมูลสินค้าและค่าขนส่ง',
            icon: 'chevron-right-outline',
            children: [
              {
                title: 'หมวดหมู่สินค้า',
                icon: 'chevron-right-outline',
                link: '',
              },
              {
                title: 'ประเภทสินค้า',
                icon: 'chevron-right-outline',
                link: '',
              },
              {
                title: 'ยี่ห้อสินค้า',
                icon: 'chevron-right-outline',
                link: '',
              },
              {
                title: 'รายการสินค้า (item)',
                icon: 'chevron-right-outline',
                link: '',
              },
            ],
          },
          {
            title: 'ข้อมูลช่าง',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'ซับคอนแทรค (Sub-Contract)',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'จัดการ User',
            icon: 'chevron-right-outline',
            link: '',
          },
          {
            title: 'กำหนด Role การใช้งาน',
            icon: 'chevron-right-outline',
            link: '',
          },
        ],
      },
    ],
  },
];
