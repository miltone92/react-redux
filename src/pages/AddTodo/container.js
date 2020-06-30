import { connect } from "react-redux";
import AddTodo from "./index";
import { addTodo } from "../../actions";
import { bindActionCreators } from "redux";

const mapDispatchToProps = dispatch => ({
  actions: {
    addTodo: bindActionCreators(addTodo, dispatch)
  }
});

export default connect(null, mapDispatchToProps)(AddTodo);
