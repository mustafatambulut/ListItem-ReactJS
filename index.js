const Item = (props) => {
    return (<li style={{color: props.color}}>
        <span onDoubleClick={() => props.textUpdate(props.index)}>{props.color}</span>
        {" "}
        <button onClick={() => props.removeItem(props.index)} className="button small">X</button>
    </li>)
}

class Colors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: ["red", "blue"]
        }
    }

    addColor() {
        this.setState({
            colors: [...this.state.colors, this.colorInput.value]
        });

        this.colorInput.value="";
    }

    removeItem(index) {
        let cloned = this.state.colors.slice(0);
        cloned.splice(index, 1);

        this.setState({
            colors: cloned
        });
    }

    textUpdate(index){
        var txtUpdate = prompt("Please enter your new text", "blabla etc.");
        let cloned = this.state.colors.slice(0);
        cloned[index] = txtUpdate;

        this.setState({
            colors: cloned
        });
    }

    render() {
        const colors = this.state.colors.map((c, i) =>
            <Item removeItem={(index) => this.removeItem(index)} textUpdate={(index) => this.textUpdate(index)} index={i} key={c + i} color={c}/>);

        return (<div>
            <input  ref={e => this.colorInput = e} type="text"/>
            <button className="button" onClick={() => this.addColor()}>Ekle</button>
            <ul>
                {colors}
            </ul>
        </div>);
    }
}


var container = document.querySelectorAll(".placeholder");
ReactDOM.render(<Colors/>, container[0]);

