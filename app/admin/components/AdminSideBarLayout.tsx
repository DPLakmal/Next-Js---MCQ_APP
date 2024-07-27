'use client'
import {
  Home,
  LayoutDashboard,
  LucideMessageCircleQuestion,
  MessageSquare,
  Sidebar,
  User,
  UserCircle2,
} from 'lucide-react'
import { flightRouterStateSchema } from 'next/dist/server/app-render/types'
import Link from 'next/link'
import { ElementType, useState } from 'react'

export default function SidebarLayout() {
  const [largeSider, setLargeSider] = useState(false)

  function handleSidebar() {
    largeSider ? setLargeSider(false) : setLargeSider(true)
  }
  return (
    <aside className="p-4 border-r h-screen  w-full  ">
      <button
        onClick={handleSidebar}
        className="bg-neutral-200 hover:bg-neutral-300 p-3 rounded-full transition-colors mx-5  "
      >
        <Sidebar />
      </button>
      <div className="transition-transform">
        {largeSider ? (
          <>
            <LargeSideBarItems Icon={LayoutDashboard} url={'/admin/dashboard'} title={'Dashboard'} />
            <LargeSideBarItems Icon={LucideMessageCircleQuestion} url={'/admin/mcq'} title={'MCQ'} />
            <LargeSideBarItems Icon={UserCircle2} url={'/admin/users'} title={'Users'} />
            <LargeSideBarItems Icon={MessageSquare} url={'/admin/notification'} title={'Notification'} />
          </>
        ) : (
          <>
            <SmallSideBarItems Icon={LayoutDashboard} url={'/admin/dashboard'} title={'Dashboard'} />
            <SmallSideBarItems Icon={LucideMessageCircleQuestion} url={'/admin/mcq'} title={'MCQ'} />
            <SmallSideBarItems Icon={UserCircle2} url={'/admin/users'} title={'Users'} />
            <SmallSideBarItems Icon={MessageSquare} url={'/admin/notification'} title={'Notification'} />
          </>
        )}
      </div>
    </aside>
  )
}

function LargeSideBarItems({ Icon, url, title }: { Icon: ElementType; url: string; title: string }) {
  return (
    <Link href={url}>
      <div className="flex items-center gap-3 my-3 bg-slate-200 p-4 rounded-xl">
        <Icon />
        <div className="">{title}</div>
      </div>
    </Link>
  )
}

function SmallSideBarItems({ Icon, url, title }: { Icon: ElementType; url: string; title: string }) {
  return (
    <Link href={url}>
      <div className="flex flex-col items-center gap-3 my-3 bg-slate-200 p-2.5 rounded-xl">
        <Icon className="mt-1" />
        <div className="text-sm">{title}</div>
      </div>
    </Link>
  )
}
