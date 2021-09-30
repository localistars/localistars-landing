import React,{useState,useRef,useEffect} from 'react'
import Select from "./style"

export default function SelectBox({data,prompt,value,onChange,id,label,...rest}){

    const [open , setOpen] = useState(false);
    const ref = useRef("");

    useEffect(()=>{
        ["click","touchend"].forEach(e => {
            document.addEventListener(e,toggleSelectDropdown);
        })
            return ()=> ["click","touchend"].forEach(e => {
                document.removeEventListener("click",toggleSelectDropdown)
            })
    },[])
function toggleSelectDropdown(e) {

    setOpen(e && e.target === ref.current)
}
    return(
        <Select {...rest}>
            <div className={`o-select-box--control`} onClick={toggleSelectDropdown}  aria-hidden="true">
                <div className="o-selected-value" ref={ref}>
                        { value ? value[label] : prompt}
                </div>
                <i className={`select-icon ${open ? "open":""}`} />
            </div>
            <ul className={`o-select-dropdown ${open ? "open":""}`} >
                {data.map((item)=>{
                    return(
                        <li className={`o-select-dropdown--item${value === item ? " selected":""}`}
                            onClick={()=> {
                                onChange(item); 
                                setOpen(false);}}
                            key={item[id]}
                            aria-hidden="true"
                        >{item[label]}</li>
                    )
                })}
            </ul>
        </Select>
    )
}