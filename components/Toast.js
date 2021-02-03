const Toast = ({msg, handleShow, bgColor}) => {
    return(
        <div className={`toast show position-fixed text-light ${bgColor}`} role="alert"
         aria-live="assertive" aria-atomic="true"
         style={{
             top: '3.5rem', right: '3.5rem', 
             zIndex: 9, minWidth: '100px',
             boxShadow: `0 4px 8px 0 rgba(0.2, 0.2, 0.2, 0.2)`, 
             borderRadius: '2rem'}}

         >
            <div className={`toast-header ${bgColor} text-light`}>
                <strong className="mr-auto text-light">{msg.title}</strong>

                <button type="button" className="ml-2 mb-1 close  text-light" 
                data-dismiss="toast" 
                style={{outline: 'none', background: 'none' , border: 'none'}}
                onClick={handleShow}>
                  X
                </button>
        </div>
        <div className="toast-body">{msg.msg}      </div>
</div>
    )
}

export default Toast