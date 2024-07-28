import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

const data = {
  data: [
    {
      year: 2022,
      paperurl: 'ldfds',
    },
    {
      year: 2022,
    },
    {
      year: 2022,
    },
    {
      year: 2022,
    },
  ],
}

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {data.data.map((item) => (
          <Card>
            <CardHeader>
              <CardTitle>{item.year}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
