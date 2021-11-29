import prefix from '~lib/prefix';

const featureSectionData = {
  featureTabTitle1:
    "Maximize the internationalization <br className='d-none d-xs-block' /> of your website",
  featureTabTitle2:
    "Our platform handles<br className='d-none d-xs-block' />everything for you",
  featureTabTitle3:
    "Use localistars for <br className='d-none d-xs-block' />any kind of business",
  tabWidget1: [
    {
      id: "w1",
      icon: `${prefix}/image/project-management/icon-order.png`,
      iconBackground: '#ff8d52',
      title: 'Localistars',
      text: "Order your translations online<br class='d-none d-xs-block'>for your project or website."
    },
    {
      id: "w2",
      icon: `${prefix}/image/project-management/icon-separate.png`,
      iconBackground: '#15cda8',
      title: 'Localization',
      text: "Manage translation and development seperately <br class='d-none d-xs-block'> and enhance the internationalization of your company."
    }
  ],
  tabWidget2: [
    {
      id: "w1",
      icon: `${prefix}/image/project-management/icon-partner.png`,
      iconBackground: '#ff8d52',
      title: 'Partner matching',
      text: "Relax while localistars notifies the translators that matches your needs."
    },
    {
      id: "w2",
      icon: `${prefix}/image/project-management/icon-invoice.png`,
      iconBackground: '#15cda8',
      title: 'Easy accounting',
      text: "No need to waste time managing invoices. No matter if you work always with the same partner or with different partners, the payment workflow is still the same."
    }
  ],
  tabWidget3: [
    {
      id: "w1",
      icon: `${prefix}/image/project-management/icon-web.png`,
      iconBackground: '#ff8d52',
      title: 'Websites and apps',
      text: "Use localistars for websites, applications, mobile apps, etc. of any kind."
    },
    {
      id: "w2",
      icon: `${prefix}/image/project-management/icon-game.png`,
      iconBackground: '#15cda8',
      title: 'Video game',
      text: "Take your game to next level. Manage your game language easily and eliminate unnecessary communication in your team."
    },
    {
      id: "w3",
      icon: `${prefix}/image/project-management/icon-docs.png`,
      iconBackground: '#5034fb',
      title: 'Documents',
      text: "Not only software, but any kind of document can be translated."
    }
  ]
};

export default featureSectionData;
