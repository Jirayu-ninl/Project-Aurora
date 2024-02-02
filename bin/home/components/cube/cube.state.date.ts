export const getCubeState = (pages: number) => ({
  passionSection: { START: 2.543 / pages, END: 6.5 / pages },
  skillsSection: {
    pre: { START: 6.5 / pages, END: 7.5 / pages },
    inView: { START: 7.5 / pages, END: 9.2 / pages },
  },
  projectSection: {
    pre: { START: 9.2 / pages, END: 12 / pages },
    inView: { START: 12 / pages, END: 12.8 / pages },
  },
  fadeOut: { START: 10 / pages, END: 10.5 / pages },
  destructScale: { START: 10.3 / pages, END: 11 / pages },
  destruct: { START: 11 / pages, END: 13 / pages },
  diamondZoom: { START: 11 / pages, END: 12 / pages },
  preFooter: { START: 12.8 / pages, END: 13.5 / pages },
})
