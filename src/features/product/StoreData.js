import withStorage from "../../shared/WithStorage"

const StoreData = ({save, remove, key, data}) => {
    let state = {
        userName:'',
        favouriteFood:''
    }
    

    // handleChange(event) {    this.setState({value: event.target.value});  }
    return(
        <div>
            <form>
                <input type='text' key='userName' placeholder="Username" value={data}></input>
                <input type='text' key='favouriteFood' placeholder="Favourite food" value={data}></input>
                <button onClick={save(key,data)}>Submit</button>
            </form>
            <button onClick={remove}>Clear</button>
        </div>
    )
}

export default withStorage(StoreData);