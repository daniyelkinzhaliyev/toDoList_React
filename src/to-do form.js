import { useState } from 'react'

function To_do_form() {
    const [userInput, setUserInput] = useState('')

    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    const handleKeyPress = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            value={userInput}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Type in your tasks"
            />
            <button>

            </button>
        </form>
        
    )
};

export default To_do_form;
