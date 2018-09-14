import { hideModal } from '../../actions/modal';
import Modal from './modal';

class ChartModal extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.hideModal();
  }

  render() {
    return (
      <Modal onClose={this.onClose}>
         <div className="login">
           <h1>Login</h1>
             
         </div>
      </Modal>
    );
  }
}
