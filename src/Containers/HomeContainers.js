import {connect} from 'react-redux'
import Home from "../Components/Home";
import {addToCart} from "../Services/Actions/Action"
const mapStateToProps=state=>({

    cardData:state
})

const mapDispatchToProps=dispatch=>({
    addToCartHandeler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);