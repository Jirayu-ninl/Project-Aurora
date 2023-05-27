const DataMap = (content) => {
  const Data = {
    Info: [
      { title: 'Client', description: content.client },
      { title: 'Industry', description: content.industry },
      { title: 'Date', description: content.projectDate },
      { title: 'Services', description: content.services },
    ],
    Banner: {
      Title: content.title,
      IsLogo: content.bannerOption,
      Image: content.bannerImage.url,
      width: content.bannerImage.width,
      height: content.bannerImage.height,
    },
    Introduction: {
      number: '01',
      title: 'Introduction',
      content: content.introduction,
    },
    About: {
      number: '02',
      title: 'About',
      content: content.about,
    },
    Identities: {
      number: '03',
      title: 'Identities',
      content: content.identities,
    },
    Conclusion: {
      number: '04',
      title: 'Conclusion',
      content: content.conclusion,
    },
  }

  return Data
}

export default DataMap
