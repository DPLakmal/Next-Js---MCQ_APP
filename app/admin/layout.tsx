import PageHeader from '../components/Layout/PageHeader'
import SidebarLayout from '../components/Layout/SideBarLayout'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] gap-10 w-full">
        <div className="">
          <SidebarLayout />
        </div>
        <div className="my-6 mx-3">{children}</div>
      </div>
    </>
  )
}
