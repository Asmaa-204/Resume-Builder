//Styles
import styles from "../../Css/resume.module.css";


//Components
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";


function Certifactes(){
    return   <div className={styles.sec}>
                <h1 className={styles.Heading}>Certifications</h1>
                <AddBtn text={"Add Certification"}/>

                <div className={styles.Inputs}>
                    <div>
                        <label>Certification</label>
                        <input type="text" placeholder="Certification" />
                    </div>

                    <div>
                        <label>Provider</label>
                        <input type="text" placeholder="Provider" />
                    </div>

                    <div>
                        <label>Start Date</label>
                        <input type="text" placeholder="Start Date" />
                    </div>

                    <div>
                        <label>End Date</label>
                        <input type="text" placeholder="End Date" />
                    </div>
                </div>
                <SaveCancelBtn />
            </div>
}


export default Certifactes;