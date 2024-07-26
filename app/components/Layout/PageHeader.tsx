import { Menu, User } from 'lucide-react'
import Image from 'next/image'
import logo from '@/assets/logo.png'

export default function PageHeader() {
  return (
    <header className="flex items-center justify-between p-2 border-b mx-2">
      <div className="flex flex-row gap-4 items-center">
        <Menu className="m-2 " />
        <Image src={logo} alt={''} width={130} height={30} className="rounded " />
      </div>
      <User />
    </header>
  )
}
