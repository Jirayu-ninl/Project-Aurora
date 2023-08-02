export const Section = (scroll: any) => ({
  hero: { index: 0, name: 'HERO', start: 0, end: 0.413 / scroll.pages },
  intro: {
    index: 1,
    name: 'INTRODUCTION',
    start: 0.413 / scroll.pages,
    end: 1.9 / scroll.pages,
  },
  passion: {
    index: 2,
    name: 'PASSION',
    start: 1.9 / scroll.pages,
    end: 2.9 / scroll.pages,
  },
  marquee: {
    index: 3,
    name: 'MARQUEE',
    start: 2.9 / scroll.pages,
    end: 6 / scroll.pages,
  },
  skills: {
    index: 4,
    name: 'SKILLS',
    start: 6 / scroll.pages,
    end: 9.5 / scroll.pages,
  },
  projects: {
    index: 5,
    name: 'PROJECTS',
    start: 9.5 / scroll.pages,
    end: 15 / scroll.pages,
  },
})

export const NavSectionInit = (scroll: any) => ({
  intro: {
    index: 0,
    name: 'INTRODUCTION',
    start: 0,
    end: 1.9 / scroll.pages,
  },
  passion: {
    index: 1,
    name: 'PASSION',
    start: 1.9 / scroll.pages,
    end: 4.2 / scroll.pages,
  },
  skills: {
    index: 2,
    name: 'SKILLS',
    start: 4.2 / scroll.pages,
    end: 11.3 / scroll.pages,
  },
  projects: {
    index: 3,
    name: 'PROJECTS',
    start: 11.3 / scroll.pages,
    end: 14 / scroll.pages,
  },
  services: {
    index: 4,
    name: 'SERVICES',
    start: 14 / scroll.pages,
    end: 1,
  },
})

export const getNavSection = (scroll: any) => {
  const Section = NavSectionInit(scroll)
  let section
  if (
    Section.intro.start <= scroll.offset &&
    scroll.offset < Section.intro.end
  ) {
    section = Section.intro
  } else if (
    Section.passion.start <= scroll.offset &&
    scroll.offset < Section.passion.end
  ) {
    section = Section.passion
  } else if (
    Section.skills.start <= scroll.offset &&
    scroll.offset < Section.skills.end
  ) {
    section = Section.skills
  } else if (
    Section.projects.start <= scroll.offset &&
    scroll.offset < Section.projects.end
  ) {
    section = Section.projects
  } else if (
    Section.services.start <= scroll.offset &&
    scroll.offset < Section.services.end
  ) {
    section = Section.services
  } else {
    section = {
      index: 99,
      name: 'N',
      start: 0,
      end: 1,
    }
  }

  return section
}
