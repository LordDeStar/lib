import { useState } from "react";
import styles from './styles.module.scss';
export const Slide = ({index,children})=>{
    return <>{children}</>
}

export const Carousel = ({children})=>{
    const [activeSlide, setActiveSlide] = useState(1);
    const handleNextClick = () =>{
        if (activeSlide < children.length){
            setActiveSlide(activeSlide + 1);
        }
        else{
            setActiveSlide(1);
        }
    }
    const handleBackClick = () =>{
        if (activeSlide > 1){
            setActiveSlide(activeSlide - 1);
        }
        else{
            setActiveSlide(children.length);
        }
    }
    return (
        <div className="carousel">
            <button onClick={()=>handleNextClick()}>next</button>
            <button onClick={()=>handleBackClick()}>back</button>
            {children.map(slide=>(
                activeSlide === slide.props.index && <div key={slide.props.index}>{slide.props.children}</div>
            ))}
        </div>
    );
}