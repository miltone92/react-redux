import { connect } from "react-redux";
import TodoList from "./index";

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
