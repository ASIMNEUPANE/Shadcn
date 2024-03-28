import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function AccorPage() {
  const faq=[
    {
      "question":"texxt",
      "answer":"new answer"
},
    {
      "question":"texxt",
      "answer":"new answer"
},
    {
      "question":"texxt",
      "answer":"new answer"
},
    {
      "question":"texxt",
      "answer":"new answer"
},
{
  "question":"texxt",
      "answer":"new answer" 
}
  ]
  return (
    <div className="flex justify-center items-center ">
      <main className="w-[500px] p-4 ">
        { faq && faq?.length>0  ? faq.map((fa,idx)=>(
          <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>{fa.question}</AccordionTrigger>
    <AccordionContent>
      {fa.answer}
    </AccordionContent>
  </AccordionItem>
</Accordion>
        )

        ):null
        }
      
      </main>
    </div>
   
  )
}

export default AccorPage