import { Prisma } from '@prisma/client'

interface Entity extends Prisma.UserUncheckedCreateInput {}

// Randomely picked from people database.
// https://shashi.shibusawa.or.jp

export const yamadaTaro: Entity = {
  id: 1,
  name: 'Yamada Taro',
  email: 'yamada.taro@example.com',
  company: 'ジレンマ研究センター',
  title: '専務',
  department: '経営',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175862120-343746aa-2c86-4fe2-852d-3c9c7cc24692.jpg',
}

export const saitoJun: Entity = {
  id: 2,
  name: 'Saito Jun',
  email: 'saito.jun@example.com',
  company: '川のほとり茶屋有限会社',
  title: '所長',
  department: '厚木研究所',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175862303-90e594dd-bc80-4019-9fec-a04046bda155.jpg',
}

export const robertAlomar: Entity = {
  id: 3,
  name: 'Robert Alomar',
  email: 'robert.alomar@example.com',
  company: 'Wooden Baseball Inc.',
  title: 'Marketing Manager',
  department: 'Sapporo',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175866160-1395bc4d-f369-488f-ba2d-8a6624213157.jpg',
}

export const aiuchiKengo: Entity = {
  id: 4,
  name: '相内 建吾',
  email: 'aiuchi.kengo@example.com',
  company: 'HREF商会',
  title: '部長',
  department: '東京支店',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175866241-37940298-643f-4c3b-88a1-9e8a3e13e6bc.jpg',
}

export const aikawaOsamu: Entity = {
  id: 5,
  name: '会川 修',
  email: 'aikawa.osamu@example.com',
  company: 'HREF商会',
  title: '名誉会長',
  department: '本店',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175866354-1556174b-1e17-4385-87b7-ebc7dff18240.jpg',
}

export const iioTadashi: Entity = {
  id: 6,
  name: '飯尾 正',
  email: 'iio.tadashi@example.com',
  company: 'デジデジシネマ推進委員会',
  title: 'センター長',
  department: '録音部',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175866525-fae1823c-ce61-4042-b9c6-30b19e970f68.jpg',
}

export const igarashiJunko: Entity = {
  id: 7,
  name: '五十嵐 順子',
  email: 'igarashi.junko@example.com',
  company: '株式会社バーチャルバーコード',
  title: '部長',
  department: 'マーケティング部',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175867242-a0be5ab9-5b91-4296-9964-fa362b6dddf4.jpg',
}

export const sunKautilya: Entity = {
  id: 8,
  name: 'スン カウティリヤ',
  email: 'sun.kautilya@example.com',
  company: 'Sun and Moon Corporation',
  title: 'CIO',
  department: 'Niigata Branch',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175866600-0e1a798e-1d8e-4629-802d-2161ae2bcb8e.jpg',
}

export const kagawaKyoko: Entity = {
  id: 9,
  name: '香川 京子',
  email: 'kagawa.kyoko@example.com',
  company: 'うどんホールディングス合同会社',
  title: '代表社員',
  department: '埼玉支部',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175867290-40ea9bd4-b163-476b-ab52-ed58a3b4f03a.jpg',
}

export const kagawaToyohiko: Entity = {
  id: 10,
  name: '賀川 豊彦',
  email: 'kagawa.toyohiko@example.com',
  company: 'サッカーグッズ研究促進委員会',
  title: '研究者',
  department: '大阪支部',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175866701-e54b7da7-7baa-48bf-b922-826f3a7bf354.jpg',
}

export const kasaharaToshiro: Entity = {
  id: 11,
  name: '笠原 敏郎',
  email: 'kasahara.toshiro@example.com',
  company: 'ヌードルとプードル株式会社',
  title: 'セントラル支店長',
  department: 'ヌードル部',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175866833-bbf25d21-fd4f-4e95-ae9d-c8ce36ce4450.jpg',
}

export const johnKenbridge: Entity = {
  id: 12,
  name: 'John Kenbridge',
  email: 'john.kenbridge@example.com',
  company: 'ヌードルとプードル株式会社',
  title: 'セントラル支店長',
  department: 'プードル部',
  avatar_url: 'https://user-images.githubusercontent.com/158877/175866992-52f15171-1d62-4bac-a451-de5601dcf552.jpg',
}

const entities: Prisma.UserUncheckedCreateInput[] = [
  // Make sure to include the above entities in this list, to insert into database.
  yamadaTaro,
  saitoJun,
  robertAlomar,
  aiuchiKengo,
  aikawaOsamu,
  iioTadashi,
  igarashiJunko,
  sunKautilya,
  kagawaKyoko,
  kagawaToyohiko,
  kasaharaToshiro,
  johnKenbridge,
]

export default entities
