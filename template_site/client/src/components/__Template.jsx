import { connect } from 'react-redux'


function Template (props) {
    return (
        <div>
            Template
        </div> 
    );
}

//props
const mapStateToProps = (state) => {
    return {
        // foo: state.allInterface.foo,
        // bar: state.allData.bar,
    }
}

//reducers
const mapDispatchToProps = (dispatch) => {
    return {
        // setFoo: (foo) => dispatch(act_setFoo(foo)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Template); 