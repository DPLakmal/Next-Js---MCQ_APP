import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="">
      <Link href={'mcq/create'}>
        <Card>
          <CardHeader>
            <CardTitle>Create MCQ</CardTitle>
            <CardDescription>Make new mcq </CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <div className="my-3"></div>
      <div className="grid grid-cols-2 gap-3 ">
        <Link href={'mcq/edit'}>
          <Card className="">
            <CardHeader>
              <CardTitle>Edit MCQ</CardTitle>
              <CardDescription>Update, Delete existing mcq </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  )
}
