'use client'
import {
  BookMarked,
  Home,
  LayoutDashboard,
  LucideMessageCircleQuestion,
  MessageSquare,
  NotebookText,
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
            <LargeSideBarItems Icon={LayoutDashboard} url={'/'} title={'Dashboard'} />
            <LargeSideBarItems Icon={LucideMessageCircleQuestion} url={'/mcq'} title={'MCQ'} />
            <LargeSideBarItems Icon={UserCircle2} url={'/lessons'} title={'Lessons'} />
            <LargeSideBarItems Icon={UserCircle2} url={'/shortnotes'} title={'Short Notes'} />
            <LargeSideBarItems Icon={UserCircle2} url={'/pas-tpaper'} title={'Past Papers'} />
            <LargeSideBarItems Icon={MessageSquare} url={'/notification'} title={'Notification'} />
          </>
        ) : (
          <>
            <SmallSideBarItems Icon={Home} url={'/'} title={'Home'} />
            <SmallSideBarItems Icon={LucideMessageCircleQuestion} url={'/quiz'} title={'Quiz'} />
            <SmallSideBarItems Icon={UserCircle2} url={'/lessons'} title={'Lessons'} />
            <SmallSideBarItems Icon={NotebookText} url={'/shortnotes'} title={'Short Notes'} />
            <SmallSideBarItems Icon={BookMarked} url={'/past-paper'} title={'Past Papers'} />
            <SmallSideBarItems Icon={MessageSquare} url={'/notification'} title={'Notification'} />
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
      <div className="flex flex-col items-center my-4  bg-slate-200 p-2.5 rounded-xl">
        <Icon className="m-3" />
        <div className="text-sm">{title}</div>
      </div>
    </Link>
  )
}
