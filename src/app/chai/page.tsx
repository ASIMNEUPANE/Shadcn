import { Button } from "@/components/ui/button"

function chaiPage() {
  return (
    <main className="h-full flex justify-center items-center flex-col">

        <div>chaiPage</div>
        <button className="px-4 py-2 bg-blue-500 rounded-sm m-3 hover:bg-blue-700">Test button</button>
        <Button variant="chai" size='sm'>Shadcn button</Button>
    </main>
  )
}

export default chaiPage