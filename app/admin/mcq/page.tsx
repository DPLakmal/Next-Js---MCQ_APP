import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { FilePenLine } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="">
      <div className="flex flex-row gap-3 w-full">
        <Link href={'mcq/create'}>
          <Card>
            <CardHeader>
              <FilePenLine />
              <CardTitle>Create MCQ</CardTitle>
              <CardDescription>Make new mcq </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href={'mcq/addMcq-sloving'}>
          <Card>
            <CardHeader>
              <FilePenLine />
              <CardTitle>Create MCQ</CardTitle>
              <CardDescription>Make new mcq </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
      <div className="my-3"></div>
      <div className="grid grid-cols-2 gap-3 ">
        <Link href={'mcq/edit'}>
          <Card className="">
            <CardHeader>
              <FilePenLine />
              <CardTitle>Edit MCQ</CardTitle>
              <CardDescription>Update, Delete existing mcq </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  )
}
