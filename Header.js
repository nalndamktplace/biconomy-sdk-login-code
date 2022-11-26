const loginHandler = async () => {
    if(!address)
        connect();
    else{
        setSelectedAccount(null);
        disconnect();
    }
}