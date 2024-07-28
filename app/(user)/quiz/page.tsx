import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        <Link href={'/quiz/mcq'}>
          <Card>
            <CardHeader>
              <CardTitle>MCQ </CardTitle>
              <CardDescription>mcq based questions</CardDescription>
              <CardContent>
                <div className="grid grid-cols-2 gap-5">
                  <div className="">
                    <p className="m-3">Select Year</p>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="">2022</div>
                      <div className="">2022</div>
                      <div className="">2022</div>
                      <div className="">2022</div>
                      <div className="">2022</div>
                    </div>
                  </div>
                  <div className="">
                    <p className="m-3">Select Lesson</p>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="">Networking</div>
                      <div className="">Opereatin system</div>
                      <div className="">2022</div>
                      <div className="">2022</div>
                      <div className="">2022</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        </Link>
        <Card className="col-span-2">
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
