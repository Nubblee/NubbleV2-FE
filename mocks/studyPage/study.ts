import type { DayType } from '@/types/day'

export const studyData = {
  id: '1',
  type: 'recruiting',
  icon: '/nubble.png',
  language: 'javascript',
  title: '[JS] 알고리즘 우리가 짱먹는다 ㅋㅋ 우리가 알고왕이지롱~ ㅋㅋ 우리가 알고왕이지롱~  ',
  levels: ['Lv. 1', 'Lv. 2'],
  days: ['MON', 'WED', 'FRI'] as DayType[],
  members: [
    {
      id: 1,
      name: '수민',
      image: '/basicProfile.png',
    },
    {
      id: 2,
      name: '지영',
      image: '/basicProfile.png',
    },
    {
      id: 3,
      name: '성오',
      image: '/basicProfile.png',
    },
    {
      id: 4,
      name: '원우',
      image: '/basicProfile.png',
    },
  ],
}