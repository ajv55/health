'use client';
import { FormEvent, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const commonHeights = [
  { label: '4\'0" (48 inches)', value: '48' },
  { label: '4\'1" (49 inches)', value: '49' },
  { label: '4\'2" (50 inches)', value: '50' },
  { label: '4\'3" (51 inches)', value: '51' },
  { label: '4\'4" (52 inches)', value: '52' },
  { label: '4\'5" (53 inches)', value: '53' },
  { label: '4\'6" (54 inches)', value: '54' },
  { label: '4\'7" (55 inches)', value: '55' },
  { label: '4\'8" (56 inches)', value: '56' },
  { label: '4\'9" (57 inches)', value: '57' },
  { label: '4\'10" (58 inches)', value: '58' },
  { label: '4\'11" (59 inches)', value: '59' },
  { label: '5\'0" (60 inches)', value: '60' },
  { label: '5\'1" (61 inches)', value: '61' },
  { label: '5\'2" (62 inches)', value: '62' },
  { label: '5\'3" (63 inches)', value: '63' },
  { label: '5\'4" (64 inches)', value: '64' },
  { label: '5\'5" (65 inches)', value: '65' },
  { label: '5\'6" (66 inches)', value: '66' },
  { label: '5\'7" (67 inches)', value: '67' },
  { label: '5\'8" (68 inches)', value: '68' },
  { label: '5\'9" (69 inches)', value: '69' },
  { label: '5\'10" (70 inches)', value: '70' },
  { label: '5\'11" (71 inches)', value: '71' },
  { label: '6\'0" (72 inches)', value: '72' },
  { label: '6\'1" (73 inches)', value: '73' },
  { label: '6\'2" (74 inches)', value: '74' },
  { label: '6\'3" (75 inches)', value: '75' },
  { label: '6\'4" (76 inches)', value: '76' },
  { label: '6\'5" (77 inches)', value: '77' },
  { label: '6\'6" (78 inches)', value: '78' },
  { label: '6\'7" (79 inches)', value: '79' },
  { label: '6\'8" (80 inches)', value: '80' },
  { label: '6\'9" (81 inches)', value: '81' },
  { label: '6\'10" (82 inches)', value: '82' },
  { label: '6\'11" (83 inches)', value: '83' }
];





export default function HeightInput({value, onChange}: { value: string, onChange: any}) {
    const [isTrue, setIsTrue] = useState<boolean>(false)
  return (
    <div className="flex lg:w-[25%] w-[43%] relative flex-col justify-start items-start gap-2">
        <label  className="flex justify-center items-center gap-2 lg:text-xl text-lg font-bold tracking-wider text-zinc-800" htmlFor="height">Height</label>
        {/* <input className="px-2.5 py-2 w-full border-b-2 border-r-2 drop-shadow-lg border-zinc-800 rounded-md placeholder:text-zinc-400 lg:placeholder:text-xl placeholder:text-lg text-xl  focus:outline-none outline-none" placeholder="Enter Height " type="text" value={value} onChange={onChange} name="" id="height" /> */}
        <select className="px-2.5 py-2 w-full border-b-2 border-r-2 drop-shadow-lg border-zinc-800 rounded-md placeholder:text-zinc-400 lg:placeholder:text-xl placeholder:text-lg text-xl  focus:outline-none outline-none"  value={value} onChange={onChange} name="" id="">
          <option disabled value="">Enter Height</option>
          {commonHeights.map((ch, i) => {
            console.log(ch)
           return <option key={i} value={ch.value} >{ch.label}</option>
          })}
        </select>
        {isTrue && <p onMouseLeave={() => setIsTrue(false)} className=" absolute z-20 top-0 -right-20 w-[80%] h-[6rem] flex justify-center items-center bg-slate-100 text-lg text-center rounded-2xl">Height must be in inches.</p>}
        
    </div>
  )
}
