export function migrate_from_0_to_1(): void {
  localStorage.removeItem('version');

  const scheduleJson = localStorage.getItem('schedule');
  if (scheduleJson == null) return;

  const scheduleName = JSON.parse(scheduleJson).name as string;

  let scheduleId: number | undefined;
  switch (scheduleName) {
    case '2 days a month':
      scheduleId = 0;
      break;
    case '4 days a month':
      scheduleId = 1;
      break;
    case '6 days a month':
      scheduleId = 2;
      break;
    case '8 days a month':
      scheduleId = 3;
      break;
    case '10 days a month':
      scheduleId = 4;
      break;
    default:
      scheduleId = 0;
      break;
  }

  const settingsDto = {
    vegetarian: {
      scheduleId,
    },
    version: 1,
  };
  localStorage.setItem('settings', JSON.stringify(settingsDto));

  localStorage.removeItem('schedule');
}
