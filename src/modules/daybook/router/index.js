export default {
  name: 'daybook',
  component: () => import('@/modules/daybook/layout/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import('@/modules/daybook/view/NoEntrySelecred.vue'),
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import('@/modules/daybook/view/EntryView.vue'),
    },
  ],
};
