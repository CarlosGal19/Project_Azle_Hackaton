const Alert = ({ data }) => {
    if (!data) return null;

    const { type, message } = data;

    return (
        <div className={`${type === 'alert' ? 'bg-red-600' : 'bg-indigo-600'} alert text-center block text-white font-bold text-2xl rounded-lg py-5`} role="alert">
            {message}
        </div>
    );
}

export default Alert;
