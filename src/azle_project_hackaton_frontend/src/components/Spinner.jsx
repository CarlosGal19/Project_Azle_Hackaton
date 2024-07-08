const Spinner = ({color}) => {
  console.log('Spinner color:', color);
  return (
    <div className="flex justify-center mt-2">
        <div className={`loader border-t-4 border-${color}-800 rounded-full w-8 h-8 animate-spin`}></div>
    </div>
  )
}

export default Spinner
