export default {
    name: 'blog',
    type: 'document',
      title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'title'
      },
      {
        name: 'content',
        type: 'string',
        title: 'Content'
      },
      {
        title: 'Launch Scheduled At',
        name: 'launchAt',
        type: 'datetime',
        options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
            timeStep: 15,
            calendarTodayLabel: 'Today'
          }
      }
    ]
  }