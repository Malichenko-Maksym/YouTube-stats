export const environment = {
  production: false,
  statisticsJson: JSON.stringify({
    channel_link: 'https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ',
    channel_user_alias: 'realdude!',
    channel_title: 'RealDudeTM',
    video_count: [
      {
        '2024-01-25': 123,
      },
      {
        '2024-01-27': 456,
      },
      {
        '2024-01-29': 789,
      },
    ],
    view_count: [
      {
        '2024-01-25': 222,
      },
      {
        '2024-01-27': 334,
      },
      {
        '2024-01-29': 467,
      },
    ],
    subscriber_count: [
      {
        '2024-01-25': 123,
      },
      {
        '2024-01-27': 456,
      },
      {
        '2024-01-29': 789,
      },
      {
        '2024-01-31': 456,
      },
      {
        '2024-02-02': 789,
      },
    ],
    on_pause: false,
    user_comment: '',
  }),
  channelListJson: JSON.stringify([
    {
      channel_id: 'UCiMhD4jzUqG',
      channel_link: 'https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ',
      channel_title: 'ExistingPerson',
      channel_user_alias: 'realdude!',
      collect_once_in_n_days: 7,
      collect_video_count: true,
      collect_view_count: true,
      collect_subscriber_count: false,
      start_collect_from: '2025-01-01',
      on_pause: false,
      user_comment: '',
    },
    {
      channel_id: 'daftypunky',
      channel_link: 'https://www.youtube.com/@daftpunk',
      channel_title: 'DaftPunkTM',
      channel_user_alias: 'fakeguy',
      collect_once_in_n_days: 1,
      collect_video_count: false,
      collect_view_count: true,
      collect_subscriber_count: true,
      start_collect_from: '2024-1-30',
      on_pause: true,
      user_comment: 'real channel for real men!',
    },
  ]),
};
