import PropTypes from 'prop-types';

export default function Checkbox({ text, isChecked }) {

    let ResultCheckbox = ''

    if(isChecked) {
        ResultCheckbox = (
            <>{ text } is done</>
        )
    } else {
        ResultCheckbox = (
            <>{ text } is in progress</>
        )
    }

    return (
        <>
            <div>1: render before - { ResultCheckbox }</div>
            <div>2: render inline - { text } { isChecked ? 'is done': 'is in progress' }</div>
        </>
    )
}

Checkbox.propTypes = {
    text: PropTypes.string,
    isChecked: PropTypes.bool
}