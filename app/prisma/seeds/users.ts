import { Prisma } from '@prisma/client'

interface Entity extends Prisma.UserUncheckedCreateInput {}

// Randomely picked from people database.
// https://shashi.shibusawa.or.jp

export const yamadaTaro: Entity = {
  id: 1,
  name: 'Yamada Taro',
  email: 'yamada.taro@example.com'
}

export const saitoJun: Entity = {
  id: 2,
  name: 'Yamada Jun',
  email: 'yamada.jun@example.com'
}

export const robertAlomar: Entity = {
  id: 3,
  name: 'Robert Alomar',
  email: 'robert.alomar@example.com'
}

export const aiuchiKengo: Entity = {
  id: 4,
  name: '相内 建吾',
  email: 'aiuchi.kengo@example.com'
}

export const aikawaOsamu: Entity = {
  id: 5,
  name: '会川 修',
  email: 'aikawa.osamu@example.com'
}

export const iioTadashi: Entity = {
  id: 6,
  name: '飯尾 正',
  email: 'iio.tadashi@example.com'
}

export const igarashiJunko: Entity = {
  id: 7,
  name: '五十嵐 順子',
  email: 'igarashi.junko@example.com'
}

export const sunKautilya: Entity = {
  id: 8,
  name: 'スン カウティリヤ',
  email: 'sun.kautilya@example.com'
}

export const kagawaKyoko: Entity = {
  id: 9,
  name: '香川 京子',
  email: 'kagawa.kyoko@example.com'
}

export const kagawaToyohiko: Entity = {
  id: 10,
  name: '賀川 豊彦',
  email: 'kagawa.toyohiko@example.com'
}

export const kasaharaToshiro: Entity = {
  id: 11,
  name: '笠原 敏郎',
  email: 'kasahara.toshiro@example.com'
}

export const johnKenbridge: Entity = {
  id: 12,
  name: 'John Kenbridge',
  email: 'john.kenbridge@example.com'
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
  johnKenbridge
]

export default entities
