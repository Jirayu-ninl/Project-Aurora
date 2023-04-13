import create from 'zustand'

const store = (set) => ({
  clicked: null,
  setClicked: (v) => set(() => ({ clicked: v })),
  projects: [
    {
      coverImage: {
        url: 'https://media.graphassets.com/9gXKj2SQK6W4DK9DNXcQ',
        width: 3840,
        height: 2160,
      },
      featured: false,
      slug: 'mitrphol',
      tag: ['Packaging'],
      tagline: 'tagline',
      title: 'MitrPhol',
    },
    {
      coverImage: {
        url: 'https://media.graphassets.com/NcoILFZxTjlUfjdyuouQ',
        width: 3840,
        height: 2160,
      },
      featured: true,
      slug: 'finance-flow',
      tag: ['UI Design', 'Graphics Design'],
      tagline: 'Personal Finance, Budget & Expense Tracker',
      title: 'Finance Flow',
    },
    {
      coverImage: {
        url: 'https://media.graphassets.com/ZAjvFJR2RKWreBZ1xsxQ',
        width: 2250,
        height: 1500,
      },
      featured: true,
      slug: 'kanda-assistant',
      tag: ['UI Design', 'Graphics Design'],
      tagline: 'AI powered startup solutions',
      title: 'KANDA Assistant',
    },
  ],
  setProjects: (v: []) => set(() => ({ projects: v })),
})

const useStore = create(store)

export default useStore
