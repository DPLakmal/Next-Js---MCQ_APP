import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import image from '@/assets/logo.png'

const data = {
  question: 'What is the capital of France?',
  question_id: '01',
  question_text: 'What is the capital of France?',
  optionNumber: ['i', 'ii', 'iii', 'iv', 'v'],
  options: ['Berlin', 'Madrid', 'Paris', 'Rome', 'Rome'],
  correct_answer: 'Paris',
}

const optionNumber = [
  'i',
  'ii',
  'iii',
  'iv',
  'v',
  'iii',
  'iv',
  'v',
  'i',
  'ii',
  'iii',
  'iv',
  'v',
  'i',
  'ii',
  'iii',
  'iii',
  'iv',
  'v',
  'i',
  'ii',
  'iii',
  'iv',
  'v',
  'i',
  'ii',
  'iii',
  'i',
  'ii',
  'iii',
  'iv',
  'v',
  'i',
  'ii',
  'iii',
  'iii',
  'iv',
  'v',
  'i',
  'ii',
  'iii',
  'iv',
  'v',
  'i',
  'ii',
  'iii',
  'iv',
  'v',
  'i',
  'ii',
]

export default function Page() {
  return (
    <div className="flex flex-row gap-20">
      <div className="flex  flex-col">
        <div className="grid grid-cols-2  bg-yellow-100 m-3 h-20">sdfs</div>
        <Card>
          <CardHeader className="border-b">
            <div className="flex flex-row items-center justify-center gap-2 w-[1000px] ">
              <p className="m-3 bg-orange-100 p-3 rounded">{data.question_id}</p>
              <CardTitle className="text-xl">{data.question_text}</CardTitle>
            </div>
            <div className="rounded flex justify-center">
              {/* <Image src={image} alt={''} width={500} height={50} /> */}
            </div>
          </CardHeader>
          <CardContent className="my-6">
            {data.options.map((option, index) => (
              <div className="flex flex-row items-center bg-slate-200 rounded-md gap-2 m-4">
                <div className="rounded-full px-3 py-2 m-2 bg-slate-300">{index + 1}</div>
                <div className="m-2">{option}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="">
          <div className="mx-20 my-5 flex flex-row justify-between">
            <div className="bg-neutral-200 p-3 rounded-md">Previous</div>
            <div className="bg-neutral-200 p-3 rounded-md">Next</div>
          </div>
        </div>
      </div>

      <div className="aspect-square bg-neutral-50 p-6 rounded-xl h-fit items-center">
        <p className="text-xl m-5 text-center">question map</p>
        <div className="grid grid-cols-5 gap-5">
          {optionNumber.map((question, index) => (
            <div className="p-3  bg-slate-300 rounded-full flex items-center justify-center">{index + 1}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
