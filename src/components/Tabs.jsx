import { Children } from "react";

export const Tabs = ({children})=>{

    return (
        <div className="tab tab_menu">
            {Children.map(children, child=>{
                if (child.props.className.includes('tab_header')){
                    return 
                }
            })}
        </div>
    );
}