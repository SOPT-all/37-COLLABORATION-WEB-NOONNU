import  type { FC } from "react";
import { GridviewIcon } from "@/shared/icons";
import { ListviewIcon } from "@/shared/icons";
import { WordviewIcon } from "@/shared/icons";
import * as styles from "./LayoutToggle.css";


export type LayoutType = "grid" | "list" | "word";

interface LayoutTypeToggleProps {
    value: LayoutType;
    onChange: (view: LayoutType) => void;
}

export const LayoutToggle: FC<LayoutTypeToggleProps> = ({
     value, 
     onChange 
    }) => {
        const handleClick = (view: LayoutType) => {
            if(value === view) return;
            onChange(view);
        }

        return(
                <>
                <div className={styles.ToggleContainer}>
                    <button
                        type="button"
                        className={`${styles.ToggleButton} ${value === "grid" ? styles.ToggleButtonSelected : ""}`}
                        onClick={() => handleClick("grid")} 
                    >
                        <GridviewIcon className={styles.icon}/>
                    </button>

                    <button
                        type="button"
                        className={`${styles.ToggleButton} ${value === "list" ? styles.ToggleButtonSelected : ""}`}
                        onClick={() => handleClick("list")}
                    >
                        <ListviewIcon className={styles.icon}/>
                    </button>

                    <button
                        type="button"
                        className={styles.ToggleButton}
                    >
                        <WordviewIcon className={styles.icon}/>
                    </button>
                </div>
            </>
        );

}
