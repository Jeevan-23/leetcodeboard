import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    
    <div className ="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 ">
      <div className ="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 border border-white-500">
    
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <Button className="bg-green-500 hover:bg-blue-400 pr-4 mr-7" variant="secondary">Hello</Button>
            <ModeToggle></ModeToggle>
          </span>

      </div>
  </div>
  );
}