import {
  BiPaperPlane as ContactIcon,
  BiCategoryAlt as DashboardIcon,
  BiHomeSmile as HomeIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon,
} from 'react-icons/bi'
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs'
import { LuTrello, LuWorkflow } from 'react-icons/lu'

import { MenuItemProps } from '../types/menu'

const iconSize = 20

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home'
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects'
  },
  {
    title: 'Task Board',
    href: '/board',
    icon: <LuTrello size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Task Board'
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact'
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard'
  }
]

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Github',
    href: 'https://github.com/kriskurniawan',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    backgroundColor: 'bg-gray-800'
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/kriskurniawan/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
    backgroundColor: 'bg-blue-600'
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/kris7kurniawan',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
    backgroundColor: 'bg-pink-600'
  },
]
