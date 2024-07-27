import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { CalendarPlus, Users } from 'lucide-react'

export default function Page() {
  return (
    <div className="m-4">
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <Users className="m-3" />
            <CardTitle>No User Register</CardTitle>
            <CardDescription>100</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>MCQ </CardTitle>
            <CardDescription>100</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>No User Register</CardTitle>
            <CardDescription>100</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
