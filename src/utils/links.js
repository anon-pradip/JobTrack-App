import { XMarkIcon, ChartBarIcon, SparklesIcon, PlusCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid'

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/', icon: <ChartBarIcon className='h-8 w-8' />
  },
  {
    id: 2,
    text: ' all jobs',
    path: '/all-jobs', icon: <SparklesIcon className='h-8 w-8' />
  },
  {
    id: 3,
    text: 'add jobs',
    path: '/add-job', icon: <PlusCircleIcon className='h-8 w-8' />
  },
  {
    id: 4,
    text: 'profile',
    path: '/profile', icon: <UserCircleIcon className='h-8 w-8' />
  },
]

export default links