import prefix from '~lib/prefix';

const featureSectionData = {
  featureTabTitle1: 'New job opportunities',
  featureTabTitle2: 'Keep working with partners you trust.',
  featureTabTitle3: 'Add team members or collaborators.',

  tabWidget1: [
    {
      id: "w1",
      icon: `${prefix}/image/translationjobs/icon-grid.png`,
      iconBackground: '#ff8d52',
      title: 'Your language profile',
      text: 'New job opportunities matching your language profile are waiting for you.'
    },
    {
      id: "w2",
      icon: `${prefix}/image/translationjobs/icon-notifications.png`,
      iconBackground: '#15cda8',
      title: 'Notifications',
      text: "You periodically receive notifications for new projects."
    },
    {
      id: "w3",
      icon: `${prefix}/image/translationjobs/icon-money.png`,
      iconBackground: '#5034fb',
      title: 'Get paid',
      text: "You can easily withdraw your earnings from your organisation section."
    }
  ],

  tabWidget2: [
    {
      id: "w1",
      icon: `${prefix}/image/translationjobs/icon-message.png`,
      iconBackground: '#15cda8',
      title: 'Marketing',
      text: "Expand your personal reach <br class='d-none d-xs-block'> with the free possibility to list here."
    }
  ],

  tabWidget3: [
    {
      id: "w1",
      icon: `${prefix}/image/translationjobs/icon-team.png`,
      iconBackground: '#ff8d52',
      title: 'Invite team members',
      text: 'Especially for translation agencies, you can add all your team members to your organisation.'
    },
    {
      id: "w2",
      icon: `${prefix}/image/translationjobs/icon-list.png`,
      iconBackground: '#15cda8',
      title: 'Individual rights',
      text: "Each user can be granted individual rights so they get access to the relevant parts of your workflow."
    }
  ]
};

export default featureSectionData;
