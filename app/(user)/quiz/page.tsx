import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <Link href={'/quiz/mcq'}>
          <Card>
            <CardHeader>
              <CardTitle>MCQ </CardTitle>
              <CardDescription>mcq based questions</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Card>
          <CardHeader>
            <CardTitle>Structued Based </CardTitle>
            <CardDescription>mcq based questions</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Eassy</CardTitle>
            <CardDescription>mcq based questions</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Daily MCQ </CardTitle>
            <CardDescription>mcq based questions</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
