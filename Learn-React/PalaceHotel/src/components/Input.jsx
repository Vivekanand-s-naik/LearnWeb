
function Input({
    type,
    disabled=false,
    content="",
    ...props
}) {
  return (
    <div>
        <input 
        type={type}
        disabled={disabled}
        value={content}
        className="w-full border-b-2 border-gray-300 px-2 py-2 outline-none transition-colors focus:border-blue-500 bg-amber-50"
        {...props}
        />
    </div>
  )
}

export default Input