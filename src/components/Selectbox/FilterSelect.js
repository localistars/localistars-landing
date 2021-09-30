import React,{useState,useRef,useEffect} from 'react'
import Select from "./style"

export default function SelectBoxFilter({data,prompt,value,onChange,id,label}){

    const [open , setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const ref = useRef(null);

    useEffect(()=>{
        document.addEventListener("click",closeSelectDropdown);
            return ()=> document.removeEventListener("click",closeSelectDropdown)
    },[])
function closeSelectDropdown(e) {

    setOpen(e && e.target === ref.current)
}
function filter(options) {
    return options.filter((option) => option[label].toLowerCase().indexOf(query.toLocaleLowerCase()) > -1 );
}
    return(
        <Select>
            <div className="o-select-box--control" onClick={()=> setOpen((prev)=> !prev)}>
                <div className="o-selected-value" ref={ref}>
                        { value ? value[label] : prompt}
                </div>
                <i className={`select-icon ${open ? "open":null}`}/>
            </div>
            <ul className={`o-select-dropdown ${open ? "open":null}`}>
                {data.map((item)=>{
                    return(
                        <li className={`o-select-dropdown--item ${value === item ? "open":null}`}
                            onClick={()=> {
                                onChange(item); 
                                setOpen(false);}}
                            key={item[id]}
                        >{item[label]}</li>
                    )
                })}
            </ul>
        </Select>
    )
}