import './SubmitButton.css'


const SubmitButton = ({isDisabled}) => {
  return (
    <button type="submit" className='submit-btn' disabled={isDisabled}>Submit</button>
  )
}

export default SubmitButton