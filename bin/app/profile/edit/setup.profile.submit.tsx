import clsx from 'clsx'
const ProfileSubmit = ({ loading }: { loading: boolean }) => {
  return (
    <>
      <button
        className={clsx(
          'ml-auto rounded-md border border-black px-2 py-1 text-sm md:text-base dark:border-white',
          !loading ? 'Anim AnimOpacity-60' : 'opacity-20',
        )}
        type='submit'
        disabled={loading}
      >
        {!loading ? 'Save profile' : 'Saving . . .'}
      </button>
    </>
  )
}

export { ProfileSubmit }
