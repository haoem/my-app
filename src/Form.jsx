import {useState} from "react";
function Form() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    function Form( {submitHandler} ) {
        const [ textInput, setTextInput ] = useState('');

        useState('');
        function handleSubmit(event) {
            event.preventDefault();
            console.log(event.target);
            submitHandler(textInput);
        }

        function handleTextChange(event) {
            setTextInput(event.target.value);
        }

        return (
            <form onSubmit = { handleSubmit } >
                <input type="text" onChange={handleTextChange} value = {textInput}/>
                <button>Add</button>
            </form>
        )
    }
}