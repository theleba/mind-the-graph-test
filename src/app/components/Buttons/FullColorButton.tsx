
type FullColorButtonProps = {
    text: string;
    onClick: () => void;
  }
  
  function FullColorButton({ text, onClick }: FullColorButtonProps ) { 
    return (
   
           <div className="bg-[#7833FF] text-white font-bold text-[16px] text-center p-3 rounded-full hover:bg-white" onClick={onClick} >
            {text}
            </div>
    )
  }
   
  export default FullColorButton